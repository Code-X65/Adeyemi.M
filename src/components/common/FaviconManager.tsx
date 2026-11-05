import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ROUTE_TITLES: Record<string, string> = {
  '/': '👷 Adeyemi Idowu Modupeola — Civil & Structural Engineer // Portfolio Dossier',
  '/about': '📐 Profile & Philosophy — Engr. Adeyemi Idowu Modupeola',
  '/experience': '🏗️ Infrastructure & Site Experience — Engr. Adeyemi Idowu Modupeola',
  '/education': '📜 B.Tech & COREN Certification — Engr. Adeyemi Idowu Modupeola',
  '/contact': '📡 Direct Inquiries & Site Consultation — Engr. Adeyemi Idowu Modupeola',
};

// Generates dynamic SVG data URI with active attention badge
function createAttentionFaviconSvg(isPulsing: boolean) {
  return `data:image/svg+xml,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <!-- Brutalist Shadow -->
  <rect x="7" y="7" width="52" height="52" rx="14" fill="#0a0f12" />
  <!-- Main Badge -->
  <rect x="4" y="4" width="52" height="52" rx="14" fill="#d97736" stroke="#202c31" stroke-width="2.5" />
  <!-- Hardhat Shell -->
  <path d="M17 28 C17 18 23 13 32 13 C41 13 47 18 47 28 Z" fill="#ffffff" stroke="#202c31" stroke-width="2" />
  <path d="M13 28 C13 26.5 15 26.5 16 26.5 L48 26.5 C49 26.5 51 26.5 51 28 C51 30.5 48 31 32 31 C16 31 13 30.5 13 28 Z" fill="#202c31" />
  <!-- I-Beam Base -->
  <rect x="10" y="38" width="44" height="6" rx="1.5" fill="#202c31" />
  <rect x="29" y="44" width="6" height="6" fill="#202c31" />
  <rect x="8" y="50" width="48" height="5" rx="1.5" fill="#202c31" />
  <!-- Dynamic Attention Beacon -->
  <circle cx="32" cy="11" r="${isPulsing ? 5 : 3.5}" fill="${isPulsing ? '#ff3b30' : '#34c759'}" stroke="#ffffff" stroke-width="1.5" />
</svg>
`)}`;
}

export function FaviconManager() {
  const location = useLocation();
  const alertIntervalRef = useRef<number | null>(null);
  const flashTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const currentPath = location.pathname;
    const baseTitle = ROUTE_TITLES[currentPath] || ROUTE_TITLES['/'];
    document.title = baseTitle;

    const faviconLink = document.querySelector<HTMLLinkElement>("link[rel~='icon']");

    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Tab is inactive / blurred: alternate attention-grabbing messages
        let toggle = false;
        if (alertIntervalRef.current) clearInterval(alertIntervalRef.current);

        alertIntervalRef.current = window.setInterval(() => {
          toggle = !toggle;
          document.title = toggle
            ? '🏗️ Project Inquiries Open | Engr. Adeyemi.M'
            : '👷 Come back to review Civil Engineering Dossier';

          if (faviconLink) {
            faviconLink.href = createAttentionFaviconSvg(toggle);
          }
        }, 2200);
      } else {
        // Tab gained focus: welcome back flash then restore
        if (alertIntervalRef.current) {
          clearInterval(alertIntervalRef.current);
          alertIntervalRef.current = null;
        }

        if (faviconLink) {
          faviconLink.href = '/favicon.svg';
        }

        document.title = `⚡ Dossier Restored | ${baseTitle.split('—')[0].trim()}`;
        if (flashTimeoutRef.current) clearTimeout(flashTimeoutRef.current);
        flashTimeoutRef.current = window.setTimeout(() => {
          document.title = baseTitle;
        }, 1400);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (alertIntervalRef.current) clearInterval(alertIntervalRef.current);
      if (flashTimeoutRef.current) clearTimeout(flashTimeoutRef.current);
    };
  }, [location.pathname]);

  return null;
}
