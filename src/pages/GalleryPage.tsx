import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  galleryItems,
  latestProjectItems,
  galleryCategories,
  type GalleryCategory,
  type GalleryItem,
} from '../data/galleryData';
import { GalleryLightbox } from '../components/gallery/GalleryLightbox';
import { LatestProjectsSection } from '../components/gallery/LatestProjectsSection';

export function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all');
  const [lightboxData, setLightboxData] = useState<{
    items: GalleryItem[];
    index: number;
  } | null>(null);

  // Filter items by active category
  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return galleryItems;
    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const handleOpenMain = (itemId: string) => {
    const idx = filteredItems.findIndex((item) => item.id === itemId);
    if (idx !== -1) {
      setLightboxData({ items: filteredItems, index: idx });
    }
  };

  const handleOpenLatest = (item: GalleryItem) => {
    const idx = latestProjectItems.findIndex((i) => i.id === item.id);
    if (idx !== -1) {
      setLightboxData({ items: latestProjectItems, index: idx });
    }
  };

  const totalRecords = galleryItems.length + latestProjectItems.length;

  return (
    <div className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]">
      <div className="flex flex-col w-full">
        {/* ARCHIVE HERO HEADER */}
        <section className="w-full bg-surface py-space-lg sm:py-space-xl border-b border-surface-dim">
          <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-container inline-block"></span>
                <span className="font-label-technical text-label-technical uppercase tracking-widest text-secondary">
                  FIELD OPERATIONS ARCHIVE
                </span>
              </div>
              <h1 className="font-headline-lg text-headline-lg sm:text-display text-on-surface uppercase tracking-tight">
                Project &amp; Inspection Gallery
              </h1>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl leading-relaxed">
                Documentary photographic archive of on-site structural works, quality assurance inspections, and civil field operations in Lagos, Nigeria.
              </p>
            </div>

            <div className="flex items-center gap-space-sm font-label-technical text-label-technical text-secondary uppercase pb-1 flex-shrink-0">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-primary-container animate-pulse"></span>
              <span>{totalRecords} PHOTOGRAPHIC RECORDS</span>
            </div>
          </div>
        </section>

        {/* LATEST PROJECTS SECTION */}
        <LatestProjectsSection items={latestProjectItems} onOpenItem={handleOpenLatest} />

        {/* STICKY CATEGORY FILTER TOOLBAR */}
        <section className="sticky top-20 z-30 w-full bg-surface/95 backdrop-blur-md border-b border-surface-dim py-3 sm:py-4 shadow-sm">
          <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin flex items-center justify-between overflow-x-auto scrollbar-none gap-2">
            <div className="flex items-center gap-1.5 sm:gap-2">
              {galleryCategories.map((cat) => {
                const count =
                  cat.key === 'all'
                    ? galleryItems.length
                    : galleryItems.filter((i) => i.category === cat.key).length;
                const isActive = activeCategory === cat.key;

                return (
                  <button
                    key={cat.key}
                    type="button"
                    onClick={() => setActiveCategory(cat.key)}
                    className={`px-3 sm:px-4 py-2 font-label-technical text-xs sm:text-label-technical uppercase tracking-wider transition-all whitespace-nowrap border ${
                      isActive
                        ? 'bg-on-tertiary-container text-on-tertiary border-on-tertiary-container shadow-[2px_2px_0px_#994703]'
                        : 'bg-surface text-on-surface-variant border-surface-dim hover:border-on-surface hover:text-on-surface active:bg-surface-container'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span className="ml-1.5 opacity-75 font-normal">({count})</span>
                  </button>
                );
              })}
            </div>

            <div className="hidden lg:flex items-center gap-2 font-label-technical text-[11px] text-secondary uppercase">
              <span className="material-symbols-outlined text-[16px]">touch_app</span>
              <span>Tap photo to zoom &amp; swipe</span>
            </div>
          </div>
        </section>

        {/* GALLERY GRID */}
        <section className="w-full bg-surface py-space-lg sm:py-space-xl border-b border-surface-dim">
          <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
            {/* Grid layout: 1 col mobile, 2 col tablet, 2 col desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-gutter">
              {filteredItems.map((item, index) => {
                // Feature card 12 or first card to span 2 cols on wide screens
                const isWide = item.aspect === 'wide' || index === 0;

                return (
                  <div
                    key={item.id}
                    onClick={() => handleOpenMain(item.id)}
                    className={`group cursor-pointer relative bg-surface-container-low border border-surface-dim overflow-hidden shadow-neo-light hover:border-on-surface hover:shadow-neo transition-all active:scale-[0.99] ${
                      isWide ? 'md:col-span-2' : ''
                    }`}
                  >
                    {/* Image Container with smooth aspect ratio and lazy load */}
                    <div
                      className={`relative w-full overflow-hidden bg-surface-container ${
                        isWide
                          ? 'aspect-[16/10] sm:aspect-[21/9] max-h-[480px]'
                          : 'aspect-[4/3] sm:aspect-[16/11] max-h-[420px]'
                      }`}
                    >
                      <img
                        src={item.thumb}
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />

                      {/* Number & Category Pill */}
                      <div className="absolute top-3 left-3 bg-on-tertiary-container/90 backdrop-blur-sm text-on-tertiary px-2.5 py-1 font-label-technical text-xs uppercase tracking-wider border border-on-tertiary-container">
                        {item.number} // {item.categoryLabel}
                      </div>

                      {/* Inspect Indicator Badge on Hover */}
                      <div className="absolute top-3 right-3 opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 text-white rounded p-1.5 backdrop-blur-sm">
                        <span className="material-symbols-outlined text-[18px]">fullscreen</span>
                      </div>

                      {/* Bottom Info Overlay */}
                      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 sm:p-4 text-white">
                        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-1.5">
                          <div>
                            <h2 className="font-title text-sm sm:text-base font-bold uppercase tracking-tight text-white drop-shadow">
                              {item.title}
                            </h2>
                            <p className="font-body-sm text-xs text-secondary-fixed">
                              {item.location}
                            </p>
                          </div>
                          <span className="font-label-technical text-[11px] text-primary-fixed uppercase tracking-wider font-semibold whitespace-nowrap self-start sm:self-auto">
                            {item.specs}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Concise Caption Bar below photo */}
                    <div className="p-3 sm:p-4 bg-surface-container-lowest border-t border-surface-dim flex items-center justify-between gap-3">
                      <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant line-clamp-2 leading-relaxed">
                        {item.caption}
                      </p>
                      <button
                        type="button"
                        aria-label={`View full inspection details for ${item.title}`}
                        className="flex-shrink-0 inline-flex items-center gap-1 text-xs font-label-technical uppercase tracking-wider text-primary group-hover:underline"
                      >
                        <span className="hidden sm:inline">Inspect</span>
                        <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* TECHNICAL QA/QC PROTOCOLS STRIP */}
        <section className="w-full bg-surface-container-low py-space-lg border-b border-surface-dim">
          <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-space-md bg-surface border border-surface-dim space-y-1">
              <span className="font-label-technical text-label-technical text-primary uppercase block">
                Standard 01
              </span>
              <h3 className="font-title text-sm font-bold uppercase text-on-surface">
                Eurocode 2 (BS EN 1992)
              </h3>
              <p className="font-body-sm text-xs text-on-surface-variant">
                Design and site execution compliance for reinforced &amp; prestressed concrete structures.
              </p>
            </div>

            <div className="p-space-md bg-surface border border-surface-dim space-y-1">
              <span className="font-label-technical text-label-technical text-primary uppercase block">
                Standard 02
              </span>
              <h3 className="font-title text-sm font-bold uppercase text-on-surface">
                BS 812 &amp; Concrete QA
              </h3>
              <p className="font-body-sm text-xs text-on-surface-variant">
                Aggregate sieve grading, moisture content, slump cone tests, and 28-day cube compression crushing.
              </p>
            </div>

            <div className="p-space-md bg-surface border border-surface-dim space-y-1">
              <span className="font-label-technical text-label-technical text-primary uppercase block">
                Standard 03
              </span>
              <h3 className="font-title text-sm font-bold uppercase text-on-surface">
                BS 4449 Reinforcement
              </h3>
              <p className="font-body-sm text-xs text-on-surface-variant">
                High-yield steel rebar verification, lap length checks, cover spacer verification, and rebar schedules.
              </p>
            </div>

            <div className="p-space-md bg-surface border border-surface-dim space-y-1">
              <span className="font-label-technical text-label-technical text-primary uppercase block">
                Standard 04
              </span>
              <h3 className="font-title text-sm font-bold uppercase text-on-surface">
                COREN Field Supervision
              </h3>
              <p className="font-body-sm text-xs text-on-surface-variant">
                Rigorous daily field logs, contractor RFI resolution, survey chainage audits, and HSE compliance.
              </p>
            </div>
          </div>
        </section>

        {/* COLLABORATION & DOSSIER CTA */}
        <section className="w-full bg-on-tertiary-container text-on-tertiary py-space-xl">
          <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
              <div className="lg:col-span-8 space-y-space-sm">
                <div className="inline-flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-primary-container inline-block"></span>
                  <span className="font-label-technical text-label-technical uppercase tracking-widest text-secondary-fixed">
                    AUTHORITATIVE FIELD SUPERVISION
                  </span>
                </div>
                <h2 className="font-headline-lg text-headline-lg uppercase tracking-tight text-on-tertiary">
                  Need Verified Field Documentation for Tenders or Oversight?
                </h2>
                <p className="font-body-lg text-body-lg text-secondary-fixed max-w-2xl pt-space-xs leading-relaxed">
                  Download the complete site inspection records, materials testing logs, and verified professional CV credentials.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
                <a
                  href="/Adeyemi_idowu_modupeola_Resume.pdf"
                  download="Adeyemi_idowu_modupeola_Resume.pdf"
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-primary-container text-on-primary font-label-lg text-label-lg px-space-lg py-3.5 uppercase tracking-wider hover:bg-primary transition-all shadow-neo active:translate-x-0.5 active:translate-y-0.5"
                >
                  <span className="material-symbols-outlined text-[20px] mr-2">download</span>
                  <span>DOWNLOAD CV / RESUME (PDF)</span>
                </a>
                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-surface-container-lowest text-on-surface font-label-lg text-label-lg px-space-lg py-3.5 uppercase tracking-wider border border-surface-dim hover:bg-surface hover:text-primary transition-all shadow-neo active:translate-x-0.5 active:translate-y-0.5"
                >
                  <span className="material-symbols-outlined text-[20px] mr-2">assignment_turned_in</span>
                  <span>REQUEST SITE CONSULTATION</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Lightbox Modal */}
      {lightboxData !== null && (
        <GalleryLightbox
          items={lightboxData.items}
          currentIndex={lightboxData.index}
          isOpen={true}
          onClose={() => setLightboxData(null)}
          onSelectIndex={(newIdx) =>
            setLightboxData({ items: lightboxData.items, index: newIdx })
          }
        />
      )}
    </div>
  );
}
