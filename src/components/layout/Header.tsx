import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Experience', path: '/experience' },
  { label: 'Education', path: '/education' },
  { label: 'Contact', path: '/contact' },
];

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-md border-b border-surface-dim">
      <div className="h-20 max-w-[1320px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin flex items-center justify-between gap-gutter">
        {/* Brand Name / Title */}
        <div className="flex items-center gap-space-md">
          <div className="w-2.5 h-2.5 bg-primary-container shrink-0"></div>
          <Link
            to="/"
            className="flex flex-col group text-left"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="font-title text-title tracking-tight text-on-surface uppercase font-bold group-hover:text-primary transition-colors">
              Adeyemi Idowu Modupeola
            </span>
            <span className="font-label-technical text-label-technical uppercase tracking-wider text-secondary">
              Civil &amp; Structural Engineer // Portfolio Dossier
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-gutter h-full">
          {navItems.map((item) => {
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`h-full inline-flex items-center transition-colors uppercase tracking-wider text-label-lg font-label-lg ${
                  active
                    ? 'text-on-surface font-semibold border-b-2 border-primary-container'
                    : 'text-on-surface-variant hover:text-on-surface border-b-2 border-transparent'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Header Actions */}
        <div className="flex items-center gap-space-md">
          <a
            href="/Adeyemi_Modupeola_Civil_Engineer_CV.pdf"
            download="Adeyemi_Modupeola_Civil_Engineer_CV.pdf"
            className="hidden sm:inline-flex items-center justify-center bg-surface-container-lowest text-on-surface font-label-lg text-label-lg uppercase tracking-wider px-space-md py-space-sm border border-surface-dim hover:border-inverse-surface shadow-neo-sm hover:shadow-neo active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
          >
            <span className="material-symbols-outlined text-[18px] mr-1 text-secondary">download</span>
            <span>Download CV</span>
          </a>

          <div className="hidden sm:flex w-8 h-8 rounded-full bg-primary items-center justify-center shrink-0" title="COREN Certified Professional">
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 text-on-surface hover:bg-surface-container-high border border-surface-dim transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-[24px] block">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface border-b border-surface-dim px-margin-mobile py-space-lg shadow-neo-lg transition-all animate-fadeIn">
          <nav className="flex flex-col gap-space-sm mb-space-md">
            {navItems.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-space-md py-space-sm uppercase font-label-lg text-label-lg tracking-wider border ${
                    active
                      ? 'bg-primary-container text-on-primary border-on-tertiary-container shadow-neo-sm font-bold'
                      : 'bg-surface-container-lowest text-on-surface-variant border-surface-dim hover:bg-surface-container-high'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="pt-space-sm border-t border-surface-dim flex flex-col gap-space-sm">
            <a
              href="/Adeyemi_Modupeola_Civil_Engineer_CV.pdf"
              download="Adeyemi_Modupeola_Civil_Engineer_CV.pdf"
              className="w-full inline-flex items-center justify-center gap-1 bg-surface-container-lowest text-on-surface font-label-lg text-label-lg uppercase tracking-wider py-space-sm border border-surface-dim shadow-neo-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="material-symbols-outlined text-[18px]">download</span>
              <span>Download Full CV Dossier</span>
            </a>
            <div className="text-center font-label-technical text-label-technical text-secondary uppercase py-1">
              COREN CERTIFIED // CE-NG-78401
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
