import { useEffect, useState, useRef, useCallback } from 'react';
import type { GalleryItem } from '../../data/galleryData';

interface GalleryLightboxProps {
  items: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}

export function GalleryLightbox({
  items,
  currentIndex,
  isOpen,
  onClose,
  onSelectIndex,
}: GalleryLightboxProps) {
  const currentItem = items[currentIndex];
  const [scale, setScale] = useState(1);
  const [showSpecs, setShowSpecs] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [prevIndex, setPrevIndex] = useState(currentIndex);

  // Reset zoom and load state synchronously when currentIndex changes
  if (prevIndex !== currentIndex) {
    setPrevIndex(currentIndex);
    setScale(1);
    setIsLoaded(false);
  }

  // Touch handling refs
  const touchStartXRef = useRef<number>(0);
  const touchStartYRef = useRef<number>(0);
  const touchEndXRef = useRef<number>(0);
  const touchEndYRef = useRef<number>(0);
  const lastTapTimeRef = useRef<number>(0);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      onSelectIndex(currentIndex - 1);
    } else {
      onSelectIndex(items.length - 1);
    }
  }, [currentIndex, items.length, onSelectIndex]);

  const handleNext = useCallback(() => {
    if (currentIndex < items.length - 1) {
      onSelectIndex(currentIndex + 1);
    } else {
      onSelectIndex(0);
    }
  }, [currentIndex, items.length, onSelectIndex]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  // Touch Swipe Handlers for mobile & tablet
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.touches[0].clientX;
    touchEndYRef.current = e.touches[0].clientY;
  };

  const handleTouchEnd = () => {
    // If zoomed in, avoid swipe navigation to allow panning
    if (scale > 1) return;

    const deltaX = touchEndXRef.current - touchStartXRef.current;
    const deltaY = touchEndYRef.current - touchStartYRef.current;
    const minSwipeDistance = 50;

    // Detect horizontal swipe if deltaX is dominant
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipeDistance) {
      if (deltaX < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    // Detect vertical swipe down to dismiss on mobile
    else if (deltaY > 100 && Math.abs(deltaX) < 60) {
      onClose();
    }
  };

  // Double tap to zoom on touch devices
  const handleDoubleTap = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
    const now = Date.now();
    if (now - lastTapTimeRef.current < 300) {
      setScale((prev) => (prev > 1 ? 1 : 2.2));
    }
    lastTapTimeRef.current = now;
  };

  if (!isOpen || !currentItem) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={currentItem.title}
      className="fixed inset-0 z-50 flex flex-col justify-between bg-on-tertiary-container/95 backdrop-blur-md text-on-tertiary select-none transition-all duration-300"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Bar: Title, Count & Close */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-black/40 border-b border-surface-dim/20 z-10">
        <div className="flex items-center gap-3 min-w-0">
          <span className="bg-primary-container text-on-primary font-label-technical text-xs font-bold px-2 py-0.5 tracking-wider uppercase flex-shrink-0">
            {currentItem.number} // {currentItem.categoryLabel}
          </span>
          <span className="font-label-technical text-xs text-secondary-fixed hidden sm:inline-block truncate">
            {currentItem.location}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="font-label-technical text-xs tracking-widest text-secondary-fixed">
            {currentIndex + 1} / {items.length}
          </span>

          <button
            type="button"
            onClick={() => setScale((prev) => (prev > 1 ? 1 : 1.8))}
            className="p-1.5 text-secondary-fixed hover:text-white rounded hover:bg-white/10 transition-colors"
            title={scale > 1 ? 'Zoom Out' : 'Zoom In'}
            aria-label="Zoom photo"
          >
            <span className="material-symbols-outlined text-[20px]">
              {scale > 1 ? 'zoom_out' : 'zoom_in'}
            </span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-secondary-fixed hover:text-white rounded hover:bg-white/10 transition-colors"
            title="Close Lightbox (Esc)"
            aria-label="Close"
          >
            <span className="material-symbols-outlined text-[24px]">close</span>
          </button>
        </div>
      </div>

      {/* Main Image Stage */}
      <div
        className="relative flex-1 flex items-center justify-center p-2 sm:p-6 overflow-hidden cursor-zoom-in"
        onClick={handleDoubleTap}
      >
        {/* Navigation Arrows (Visible on tablet & desktop, hidden on small phones where swipe is natural) */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          className="absolute left-2 sm:left-4 z-20 p-2.5 rounded-full bg-black/60 text-white hover:bg-primary-container hover:text-on-primary border border-white/10 transition-all shadow-lg active:scale-95"
          aria-label="Previous photo"
        >
          <span className="material-symbols-outlined text-[26px]">chevron_left</span>
        </button>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          className="absolute right-2 sm:right-4 z-20 p-2.5 rounded-full bg-black/60 text-white hover:bg-primary-container hover:text-on-primary border border-white/10 transition-all shadow-lg active:scale-95"
          aria-label="Next photo"
        >
          <span className="material-symbols-outlined text-[26px]">chevron_right</span>
        </button>

        {/* Loading Spinner */}
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-10 border-2 border-primary-container border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {/* High Resolution Image with Zoom & Pan */}
        <div
          className="relative max-w-full max-h-full flex items-center justify-center transition-transform duration-300 ease-out"
          style={{ transform: `scale(${scale})` }}
        >
          <img
            key={currentItem.id}
            src={currentItem.full}
            alt={currentItem.title}
            onLoad={() => setIsLoaded(true)}
            className={`max-w-[95vw] sm:max-w-[85vw] max-h-[65vh] sm:max-h-[72vh] object-contain shadow-2xl rounded border border-white/10 transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>
      </div>

      {/* Bottom Technical Spec Drawer */}
      <div className="bg-black/60 backdrop-blur-md border-t border-surface-dim/20 px-4 sm:px-8 py-3.5 z-10">
        <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <h3 className="font-title text-base sm:text-lg font-bold text-white tracking-tight uppercase">
                {currentItem.title}
              </h3>
              <button
                type="button"
                onClick={() => setShowSpecs((prev) => !prev)}
                className="md:hidden text-xs text-primary-fixed uppercase tracking-wider flex items-center gap-1"
              >
                <span>{showSpecs ? 'Hide Specs' : 'View Specs'}</span>
                <span className="material-symbols-outlined text-[16px]">
                  {showSpecs ? 'expand_less' : 'expand_more'}
                </span>
              </button>
            </div>

            {showSpecs && (
              <p className="font-body-sm text-xs sm:text-sm text-secondary-fixed max-w-2xl leading-relaxed">
                {currentItem.caption}
              </p>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2 flex-shrink-0">
            <div className="px-2.5 py-1 bg-white/5 border border-white/10 rounded text-[11px] font-label-technical uppercase tracking-wider text-primary-fixed">
              {currentItem.specs}
            </div>
            <a
              href={currentItem.full}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-flex items-center gap-1 px-3 py-1 bg-primary-container text-on-primary font-label-technical text-xs uppercase tracking-wider rounded hover:bg-primary transition-colors shadow"
              title="Download full resolution photo"
            >
              <span className="material-symbols-outlined text-[16px]">download</span>
              <span>Full Res</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
