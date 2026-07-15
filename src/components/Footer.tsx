import { Link } from 'react-router-dom';

export default function Footer() {
  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.pushState(null, '', window.location.pathname);
  };

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p>© 2026 HYEON JUNWOO. ALL RIGHTS RESERVED.</p>
        <div className="footer-actions">
          <button className="text-button" type="button" onClick={backToTop}>
            BACK TO TOP
          </button>
          <Link className="admin-entry" to="/admin" aria-label="관리자 페이지">
            Admin
          </Link>
        </div>
      </div>
    </footer>
  );
}
