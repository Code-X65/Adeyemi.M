import { useState, useRef, useEffect, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import gsap from 'gsap';

interface NavItem {
  num: string;
  label: string;
  path: string;
  desc: string;
}

const navItems: NavItem[] = [
  { num: '01', label: 'Home', path: '/', desc: 'Overview, credentials & core metrics' },
  { num: '02', label: 'About', path: '/about', desc: 'Engineering profile, philosophy & capabilities' },
  { num: '03', label: 'Experience', path: '/experience', desc: 'CCECC, Hi-Tech & infrastructure track record' },
  { num: '04', label: 'Education', path: '/education', desc: 'LAUTECH degree, M.Sc & COREN/NSE licensing' },
  { num: '05', label: 'Contact', path: '/contact', desc: 'Initiate formal consultation & site dispatch' },
];

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isRendered, setIsRendered] = useState(false);

  const overlayRef = useRef<HTMLDivElement>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const topBarRef = useRef<HTMLDivElement>(null);
  const bottomBarRef = useRef<HTMLDivElement>(null);
  const isAnimatingRef = useRef(false);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  // Close menu with GSAP stagger out animation
  const handleClose = useCallback((onCompleteCallback?: () => void) => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setIsRendered(false);
          setIsOpen(false);
          isAnimatingRef.current = false;
          document.body.style.overflow = '';
          if (onCompleteCallback) onCompleteCallback();
        },
      });

      // Animate nav items out with reverse stagger
      const validItems = itemsRef.current.filter(Boolean);
      if (validItems.length > 0) {
        tl.to(validItems, {
          y: -20,
          opacity: 0,
          stagger: 0.04,
          duration: 0.25,
          ease: 'power2.in',
        });
      }

      // Animate top and bottom elements out
      if (topBarRef.current && bottomBarRef.current) {
        tl.to(
          [topBarRef.current, bottomBarRef.current],
          {
            opacity: 0,
            y: -15,
            duration: 0.2,
            ease: 'power2.in',
          },
          '-=0.15'
        );
      }

      // Animate overlay backdrop out
      if (overlayRef.current) {
        tl.to(
          overlayRef.current,
          {
            opacity: 0,
            duration: 0.25,
            ease: 'power2.inOut',
          },
          '-=0.1'
        );
      }
    });

    return () => ctx.revert();
  }, []);

  // Open menu with GSAP stagger in animation
  const handleOpen = () => {
    if (isAnimatingRef.current) return;
    setIsRendered(true);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  // Trigger enter animation when isRendered becomes true
  useEffect(() => {
    if (!isRendered) return;

    isAnimatingRef.current = true;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          isAnimatingRef.current = false;
        },
      });

      // Reset initial styles
      if (overlayRef.current) {
        gsap.set(overlayRef.current, { opacity: 0 });
      }
      if (topBarRef.current) {
        gsap.set(topBarRef.current, { y: -25, opacity: 0 });
      }
      if (bottomBarRef.current) {
        gsap.set(bottomBarRef.current, { y: 25, opacity: 0 });
      }

      const validItems = itemsRef.current.filter(Boolean);
      if (validItems.length > 0) {
        gsap.set(validItems, { y: 35, opacity: 0 });
      }

      // 1. Overlay fades in with backdrop blur
      if (overlayRef.current) {
        tl.to(overlayRef.current, {
          opacity: 1,
          duration: 0.35,
          ease: 'power2.out',
        });
      }

      // 2. Top Bar drops in
      if (topBarRef.current) {
        tl.to(
          topBarRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.35,
            ease: 'power3.out',
          },
          '-=0.15'
        );
      }

      // 3. Stagger in Navigation Items
      if (validItems.length > 0) {
        tl.to(
          validItems,
          {
            y: 0,
            opacity: 1,
            stagger: 0.07,
            duration: 0.45,
            ease: 'power3.out',
          },
          '-=0.2'
        );
      }

      // 4. Bottom action footer slides in
      if (bottomBarRef.current) {
        tl.to(
          bottomBarRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.35,
            ease: 'power2.out',
          },
          '-=0.25'
        );
      }
    });

    return () => ctx.revert();
  }, [isRendered]);

  // Clean up body overflow on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-surface/95 backdrop-blur-md border-b border-surface-dim">
        <div className="h-20 max-w-[1320px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin flex items-center justify-between gap-gutter">
          {/* Brand Name / Title */}
          <div className="flex items-center gap-space-md">

            <Link
              to="/"
              className="flex items-center gap-3 group text-left"
              onClick={() => {
                if (isOpen) handleClose();
              }}
            >
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-on-surface bg-surface-container-low shadow-[2px_2px_0px_0px_#202c31] flex items-center justify-center group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:shadow-none transition-all flex-shrink-0">
                <img src="/favicon-32x32.png" alt="Engr. Adeyemi M." className="w-full h-full object-cover" />
                <span className="absolute top-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border border-white animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="font-title text-title tracking-tight text-on-surface uppercase font-bold group-hover:text-primary transition-colors">
                  Adeyemi Idowu Modupeola
                </span>
                <span className="font-label-technical text-label-technical uppercase tracking-wider text-secondary">
                  Civil Engineer
                </span>
              </div>
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
                  className={`h-full inline-flex items-center transition-colors uppercase tracking-wider text-label-lg font-label-lg ${active
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
              href="/Adeyemi_idowu_modupeola_Resume.pdf"
              download="Adeyemi_idowu_modupeola_Resume.pdf"
              className="hidden sm:inline-flex items-center justify-center bg-surface-container-lowest text-on-surface font-label-lg text-label-lg uppercase tracking-wider px-space-md py-space-sm border border-surface-dim hover:border-inverse-surface shadow-neo-sm hover:shadow-neo active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
            >
              <span className="material-symbols-outlined text-[18px] mr-1 text-secondary">download</span>
              <span>Download CV</span>
            </a>



            {/* Mobile Menu Open Button */}
            <button
              type="button"
              className="lg:hidden p-2 text-on-surface hover:bg-surface-container-high border border-surface-dim shadow-neo-sm active:translate-x-[1px] active:translate-y-[1px] transition-all"
              onClick={handleOpen}
              aria-label="Open full screen navigation menu"
            >
              <span className="material-symbols-outlined text-[26px] block">menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* FULL SCREEN MOBILE OVERLAY WITH GSAP STAGGER ANIMATION */}
      {isRendered && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-50 w-screen h-screen bg-[#fbf9f3]/95 backdrop-blur-2xl flex flex-col justify-between overflow-y-auto px-margin-mobile py-space-md"
          style={{ willChange: 'opacity' }}
        >
          {/* Top Bar inside Overlay */}
          <div
            ref={topBarRef}
            className="flex items-center justify-between pb-space-md border-b border-surface-dim"
          >
            <div className="flex items-center gap-space-sm">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-container shrink-0 shadow-sm">
                <img
                  src="/assets/adeyemi-portrait.jpg"
                  alt="Engr. Adeyemi"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-title text-title text-on-surface uppercase font-bold text-sm tracking-tight">
                  Adeyemi Idowu Modupeola
                </span>
                <span className="font-label-technical text-label-technical text-secondary uppercase text-[10px]">
                  COREN // NSE REGISTERED CIVIL ENGINEER
                </span>
              </div>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={() => handleClose()}
              className="w-10 h-10 flex items-center justify-center bg-surface-container-lowest text-on-surface border border-surface-dim shadow-neo-sm hover:shadow-neo active:translate-x-[2px] active:translate-y-[2px] transition-all"
              aria-label="Close menu"
            >
              <span className="material-symbols-outlined text-[24px]">close</span>
            </button>
          </div>

          {/* Staggered Navigation Items List */}
          <div ref={navContainerRef} className="my-auto py-space-lg flex flex-col gap-space-sm">
            {navItems.map((item, index) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  ref={(el) => {
                    itemsRef.current[index] = el;
                  }}
                  to={item.path}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClose(() => {
                      navigate(item.path);
                    });
                  }}
                  className={`group relative flex items-center justify-between p-space-md border transition-all ${active
                    ? 'bg-primary-container text-on-primary border-on-tertiary-container shadow-neo font-bold'
                    : 'bg-surface-container-lowest/80 text-on-surface border-surface-dim hover:border-inverse-surface hover:shadow-neo-sm hover:bg-surface-container-lowest'
                    }`}
                >
                  <div className="flex items-baseline gap-space-md">
                    <span
                      className={`font-label-technical text-label-technical text-sm font-extrabold ${active ? 'text-on-primary/80' : 'text-primary'
                        }`}
                    >
                      {item.num}
                    </span>
                    <div className="flex flex-col">
                      <span className="font-headline-sm text-headline-sm uppercase tracking-tight font-extrabold">
                        {item.label}
                      </span>
                      <span
                        className={`font-body-sm text-body-sm text-xs mt-0.5 line-clamp-1 ${active ? 'text-on-primary/90' : 'text-secondary'
                          }`}
                      >
                        {item.desc}
                      </span>
                    </div>
                  </div>

                  <span
                    className={`material-symbols-outlined text-[22px] transition-transform group-hover:translate-x-1 ${active ? 'text-on-primary' : 'text-secondary'
                      }`}
                  >
                    arrow_forward
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Bottom Dossier & Contact Wire inside Overlay */}
          <div
            ref={bottomBarRef}
            className="pt-space-md border-t border-surface-dim flex flex-col gap-space-sm"
          >
            <div className="grid grid-cols-2 gap-space-xs">
              <a
                href="/Adeyemi_idowu_modupeola_Resume.pdf"
                download="Adeyemi_idowu_modupeola_Resume.pdf"
                className="flex items-center justify-center gap-1 bg-on-tertiary-container text-surface-container-lowest py-2.5 px-space-xs font-label-technical text-label-technical uppercase tracking-wider border border-on-tertiary-container shadow-neo-sm text-center"
              >
                <span className="material-symbols-outlined text-[16px]">download</span>
                <span>Download CV</span>
              </a>

              <a
                href="https://wa.me/2348162859086"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1 bg-surface-container-lowest text-on-surface py-2.5 px-space-xs font-label-technical text-label-technical uppercase tracking-wider border border-surface-dim shadow-neo-sm hover:bg-surface-container-high text-center"
              >
                <span className="material-symbols-outlined text-[16px] text-primary">chat</span>
                <span>WhatsApp</span>
              </a>
            </div>

            <div className="flex items-center justify-between text-secondary font-label-technical text-label-technical text-[10px] uppercase pt-1">
              <span>TEL: 08162859086 // 07084523965</span>
              <span>LAGOS STATE, NIGERIA</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
