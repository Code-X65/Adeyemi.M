import type { GalleryItem } from '../../data/galleryData';

interface LatestProjectsSectionProps {
  items: GalleryItem[];
  onOpenItem: (item: GalleryItem) => void;
}

export function LatestProjectsSection({ items, onOpenItem }: LatestProjectsSectionProps) {
  return (
    <section className="w-full bg-surface-container-low border-b border-surface-dim py-space-xl">
      <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin space-y-space-lg">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md border-b border-surface-dim pb-space-md">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-surface-container border border-surface-dim">
              <span className="w-2.5 h-2.5 bg-primary-container rounded-full animate-pulse"></span>
              <span className="font-label-technical text-label-technical uppercase tracking-widest text-on-surface font-bold">
                LATEST PROJECT DEPLOYMENT // CCECC &amp; LAMATA
              </span>
            </div>

            <h2 className="font-headline-lg text-headline-md sm:text-headline-lg uppercase tracking-tight text-on-surface">
              Lagos Light Rail Blue Line (Phase V) &amp; Road-Bridge Cluster
            </h2>

            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Official civil engineering billboards, alignment schematic maps, station portfolio aerials, and environmental compliance charters from the CCECC project site headquarters.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 flex-shrink-0">
            <div className="bg-surface p-2.5 sm:p-3 border border-surface-dim text-center">
              <span className="font-headline-sm text-sm sm:text-base font-bold text-primary block">
                14.52 KM
              </span>
              <span className="font-label-technical text-[10px] text-secondary uppercase block">
                Dual-Track Alignment
              </span>
            </div>

            <div className="bg-surface p-2.5 sm:p-3 border border-surface-dim text-center">
              <span className="font-headline-sm text-sm sm:text-base font-bold text-on-surface block">
                799.5 M
              </span>
              <span className="font-label-technical text-[10px] text-secondary uppercase block">
                Elevated Viaduct
              </span>
            </div>

            <div className="bg-surface p-2.5 sm:p-3 border border-surface-dim text-center">
              <span className="font-headline-sm text-sm sm:text-base font-bold text-on-surface block">
                6 STATIONS
              </span>
              <span className="font-label-technical text-[10px] text-secondary uppercase block">
                Passenger Nodes
              </span>
            </div>

            <div className="bg-surface p-2.5 sm:p-3 border border-surface-dim text-center">
              <span className="font-headline-sm text-sm sm:text-base font-bold text-on-surface block">
                DK3 – DK13
              </span>
              <span className="font-label-technical text-[10px] text-secondary uppercase block">
                Mazamaza Chainage
              </span>
            </div>
          </div>
        </div>

        {/* Latest Project Image Grid: 1-col mobile, 2-col tablet, 3-col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {items.map((item, index) => (
            <div
              key={item.id}
              onClick={() => onOpenItem(item)}
              className="group cursor-pointer bg-surface-container-lowest border border-surface-dim overflow-hidden shadow-neo-light hover:border-on-surface hover:shadow-neo transition-all active:scale-[0.99] flex flex-col justify-between"
            >
              {/* Media Container */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-surface-container">
                <img
                  src={item.thumb}
                  alt={item.title}
                  loading={index < 2 ? 'eager' : 'lazy'}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Badge Header */}
                <div className="absolute top-2.5 left-2.5 bg-on-tertiary-container/90 backdrop-blur-sm text-on-tertiary px-2.5 py-1 font-label-technical text-xs uppercase tracking-wider border border-on-tertiary-container">
                  {item.number} // {item.categoryLabel}
                </div>

                {/* Fullscreen Touch Icon */}
                <div className="absolute top-2.5 right-2.5 opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 text-white rounded p-1.5 backdrop-blur-sm">
                  <span className="material-symbols-outlined text-[18px]">zoom_in</span>
                </div>

                {/* Overlay Tag */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-3 text-white">
                  <span className="font-label-technical text-[11px] text-primary-fixed uppercase tracking-wider font-semibold block truncate">
                    {item.specs}
                  </span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between gap-2 border-t border-surface-dim">
                <div>
                  <h3 className="font-title text-sm sm:text-base font-bold text-on-surface uppercase tracking-tight group-hover:text-primary transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="font-label-technical text-[11px] text-secondary uppercase mt-0.5">
                    {item.location}
                  </p>
                  <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant line-clamp-2 mt-1.5 leading-relaxed">
                    {item.caption}
                  </p>
                </div>

                <div className="pt-2 border-t border-surface-container flex items-center justify-between text-xs font-label-technical uppercase tracking-wider text-primary">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">map</span>
                    <span>Inspection Record</span>
                  </span>
                  <span className="inline-flex items-center gap-1 group-hover:underline">
                    <span>Inspect</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
