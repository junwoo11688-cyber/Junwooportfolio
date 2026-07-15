import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navItems = [
  { label: 'WORK', id: 'work' },
  { label: 'ABOUT', id: 'about' },
  { label: 'CONTACT', id: 'contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 760px)');
    const syncViewport = () => {
      setIsMobile(mediaQuery.matches);
      if (!mediaQuery.matches) {
        setIsOpen(false);
      }
    };

    syncViewport();
    mediaQuery.addEventListener('change', syncViewport);
    return () => mediaQuery.removeEventListener('change', syncViewport);
  }, []);

  const moveToSection = (id: string) => {
    setIsOpen(false);

    if (location.pathname !== '/') {
      navigate(`/#${id}`);
      return;
    }

    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    window.history.pushState(null, '', `#${id}`);
  };

  return (
    <header className={`site-header${isScrolled ? ' is-scrolled' : ''}`}>
      <nav className="site-nav" aria-label="Primary navigation">
        <Link className="brand" to="/" onClick={() => setIsOpen(false)}>
          <span className="brand-name">HYEON JUNWOO</span>
          <span className="brand-role">VIDEO DIRECTOR &amp; PD</span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label={isOpen ? '메뉴 닫기' : '메뉴 열기'}
          aria-controls="primary-menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>

        <div
          id="primary-menu"
          className={`nav-links${isOpen ? ' is-open' : ''}`}
          aria-hidden={isMobile && !isOpen}
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`/#${item.id}`}
              tabIndex={isMobile && !isOpen ? -1 : undefined}
              onClick={(event) => {
                event.preventDefault();
                moveToSection(item.id);
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
