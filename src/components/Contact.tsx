import { contactLinks as defaultContactLinks, type ContactLinks } from '../data/contact';

interface ContactProps {
  contactLinks?: ContactLinks;
}

function getSocialLabel(url: string, fallback: string) {
  try {
    const parsed = new URL(url);
    return parsed.pathname.replace(/^\/+/, '') || fallback;
  } catch {
    return fallback;
  }
}

export default function Contact({
  contactLinks = defaultContactLinks,
}: ContactProps) {
  return (
    <section
      className="section-pad contact-section"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="contact-panel">
        <div>
          <h2 className="section-title" id="contact-title">
            CONTACT
          </h2>
          <p className="contact-message">영상 제작이나 협업이 필요하다면 연락해주세요.</p>
        </div>

        <address className="contact-links">
          <a href={`mailto:${contactLinks.email}`}>
            <span>Email</span>
            {contactLinks.email}
          </a>
          <a href={contactLinks.instagram} target="_blank" rel="noreferrer">
            <span>Instagram</span>
            {getSocialLabel(contactLinks.instagram, '@your-id')}
          </a>
          <a href={contactLinks.youtube} target="_blank" rel="noreferrer">
            <span>YouTube</span>
            {getSocialLabel(contactLinks.youtube, '@your-channel')}
          </a>
          <a href={contactLinks.vimeo} target="_blank" rel="noreferrer">
            <span>Vimeo</span>
            {getSocialLabel(contactLinks.vimeo, 'vimeo.com/your-id')}
          </a>
        </address>
      </div>
    </section>
  );
}
