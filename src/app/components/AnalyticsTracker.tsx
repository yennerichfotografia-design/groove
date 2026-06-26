import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * GA4 page_view tracking for a client-side SPA.
 *
 * gtag.js is loaded in index.html with `send_page_view: false`, so the initial
 * load does NOT auto-report. This component fires a page_view on first render and
 * on every route change — accurate counts, no double-counting.
 */
export function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
    if (typeof gtag !== 'function') return;

    const path = location.pathname + location.search;
    gtag('event', 'page_view', {
      page_path: path,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [location.pathname, location.search]);

  return null;
}
