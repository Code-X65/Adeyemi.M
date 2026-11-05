import { useState } from 'react';
import { Link } from 'react-router-dom';
import { galleryItems } from '../data/galleryData';
import { GalleryLightbox } from '../components/gallery/GalleryLightbox';

export function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <div className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]">
      <div className="flex flex-col w-full">
        {/* GALLERY BOOK HEADER */}
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
                Gallery Book
              </h1>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl leading-relaxed">
                Visual lookbook of on-site structural works, quality assurance inspections, and civil engineering field operations.
              </p>
            </div>

            <div className="flex items-center gap-space-sm font-label-technical text-label-technical text-secondary uppercase pb-1 flex-shrink-0">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-primary-container animate-pulse"></span>
              <span>{galleryItems.length} PHOTOGRAPHS</span>
            </div>
          </div>
        </section>

        {/* GALLERY BOOK GRID */}
        <section className="w-full bg-surface py-space-lg sm:py-space-xl border-b border-surface-dim">
          <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {galleryItems.map((item, index) => {
                const isWide = item.aspect === 'wide';

                return (
                  <div
                    key={item.id}
                    onClick={() => setSelectedIndex(index)}
                    className={`group cursor-pointer relative bg-surface-container-low border border-surface-dim overflow-hidden shadow-neo-light hover:border-on-surface hover:shadow-neo transition-all active:scale-[0.99] ${
                      isWide ? 'sm:col-span-2' : ''
                    }`}
                  >
                    <div
                      className={`relative w-full overflow-hidden bg-surface-container ${
                        isWide
                          ? 'aspect-[16/10] sm:aspect-[21/10]'
                          : 'aspect-[4/3] sm:aspect-[16/11]'
                      }`}
                    >
                      <img
                        src={item.thumb}
                        alt={`Gallery book photograph ${item.number}`}
                        loading={index < 4 ? 'eager' : 'lazy'}
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />

                      {/* Fullscreen Zoom Indicator on Hover */}
                      <div className="absolute top-3 right-3 opacity-80 sm:opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 text-white rounded p-1.5 backdrop-blur-sm">
                        <span className="material-symbols-outlined text-[18px]">fullscreen</span>
                      </div>
                    </div>
                  </div>
                );
              })}
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
      {selectedIndex !== null && (
        <GalleryLightbox
          items={galleryItems}
          currentIndex={selectedIndex}
          isOpen={true}
          onClose={() => setSelectedIndex(null)}
          onSelectIndex={(newIdx) => setSelectedIndex(newIdx)}
        />
      )}
    </div>
  );
}
