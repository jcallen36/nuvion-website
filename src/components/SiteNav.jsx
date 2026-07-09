import { Link } from 'react-router-dom';

/* Shared light nav for service/tool/legal pages.
 * The PNG logo is white-on-black, so light pages use the typographic
 * wordmark lockup; the PNG stays on dark bands (footer, og-image). */
export default function SiteNav({ backTo = '/', backLabel = 'Back to Home' }) {
  return (
    <nav className="sp-nav">
      <Link to="/" className="wordmark" aria-label="Nuvion Solutions — home">
        <span className="wm-n">Nuvion</span>
        <span className="wm-s">Solutions</span>
      </Link>
      {backTo.startsWith('http')
        ? <a href={backTo} className="sp-back">← {backLabel}</a>
        : <Link to={backTo} className="sp-back">← {backLabel}</Link>}
    </nav>
  );
}
