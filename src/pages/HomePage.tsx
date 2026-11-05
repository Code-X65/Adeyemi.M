import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <div className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]">
      <div className="flex flex-col w-full">
        <div className="max-w-[1320px] mx-auto w-full px-margin-mobile md:px-margin-tablet lg:px-margin py-space-xl flex flex-col gap-space-xl">

          {/* Hero Section: Balanced Two-Column Layout */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-stretch">
            {/* Left Column: Primary Typography & Call to Action */}
            <div className="lg:col-span-6 flex flex-col justify-between py-space-md">
              <div>


                {/* Main Headline */}
                <h1 className="font-display text-display text-on-surface tracking-tight mb-space-lg leading-tight">
                  Building with precision. Delivering with quality.
                </h1>

                {/* Supporting Introduction & Career Objective */}
                <div className="space-y-space-md mb-space-xl max-w-xl">
                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                    I am <strong className="text-on-surface font-semibold">Adeyemi Idowu Modupeola</strong>, a dedicated and hardworking Civil Engineer seeking to leverage hands-on site experience, structural engineering analysis, and a strong work ethic to deliver high-quality construction projects.
                  </p>
                  <p className="font-body-md text-body-md text-secondary leading-relaxed border-l-2 border-primary-container pl-3 py-1 bg-surface-container-low/60">
                    &ldquo;Eager to learn and grow within the construction industry while providing valuable support to the engineering team in achieving project goals, quality benchmarks, and strict completion deadlines.&rdquo;
                  </p>
                </div>
              </div>

              {/* Call-to-Action Group */}
              <div className="flex flex-wrap items-center gap-space-md pt-space-md">
                <Link
                  to="/experience"
                  className="inline-flex items-center justify-center bg-primary-container text-on-primary font-label-lg text-label-lg uppercase tracking-wider px-space-lg py-space-md border border-on-tertiary-container shadow-neo hover:bg-on-tertiary-container hover:shadow-neo-orange active:translate-x-[2px] active:translate-y-[2px] active:shadow-neo-sm transition-all"
                >
                  <span>Explore My Experience</span>
                  <span className="material-symbols-outlined ml-space-xs text-[18px]">arrow_forward</span>
                </Link>

                <a
                  href="/Adeyemi_idowu_modupeola_Resume.pdf"
                  download="Adeyemi_idowu_modupeola_Resume.pdf"
                  className="inline-flex items-center justify-center bg-surface-container-lowest text-on-surface font-label-lg text-label-lg uppercase tracking-wider px-space-lg py-space-md border border-surface-dim hover:border-inverse-surface shadow-neo-sm hover:shadow-neo active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
                >
                  <span className="material-symbols-outlined mr-space-xs text-[18px] text-secondary">download</span>
                  <span>Download CV / Resume</span>
                </a>
              </div>
            </div>

            {/* Right Column: Authentic Professional Site Engineer Frame */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div className="bg-surface-container-lowest border border-surface-dim p-space-sm h-full flex flex-col justify-between shadow-neo-light hover:shadow-neo transition-all">
                <div className="relative overflow-hidden w-full aspect-[4/3] lg:aspect-auto lg:h-[520px] bg-surface-container">
                  <img
                    className="w-full h-full object-cover object-top hover:scale-[1.02] transition-all duration-300"
                    alt="Engr. Adeyemi Idowu Modupeola — Civil Engineer on construction site"
                    src="/assets/adeyemi-site-hero.jpg"
                  />
                  {/* <div className="absolute top-space-sm right-space-sm bg-surface-container-lowest/95 px-space-sm py-1 border border-surface-dim shadow-sm">
                    <span className="font-label-technical text-label-technical text-on-surface uppercase font-bold text-primary">
                      COREN // NSE REGISTERED
                    </span>
                  </div> */}
                  <div className="absolute bottom-space-sm left-space-sm bg-surface-container-lowest/95 px-space-sm py-1 border border-surface-dim shadow-sm flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-primary-container rounded-full animate-pulse"></span>
                    <span className="font-label-technical text-label-technical text-on-surface uppercase font-bold text-xs">
                      Engr. Adeyemi Idowu Modupeola // Site Operations
                    </span>
                  </div>
                </div>

                <div className="pt-space-sm pb-space-xs px-space-xs flex items-center justify-between border-t border-surface-dim mt-space-xs">
                  <span className="font-label-technical text-label-technical text-secondary uppercase font-semibold">
                    Construction Quality Assurance &amp; Site Supervision // Lagos State
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-primary-container text-[16px]">verified</span>
                    <span className="font-label-technical text-label-technical text-on-surface font-bold">VERIFIED</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Metric Indicators Banner */}
          <section className="bg-surface-container-low border border-surface-dim p-space-lg md:p-space-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
              <div className="flex flex-col border-r border-surface-dim/60 pr-space-md">
                <span className="font-label-technical text-label-technical uppercase text-secondary">Field Experience</span>
                <span className="font-headline-lg text-headline-lg font-extrabold text-on-surface mt-1">9+ Years</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">Continuous Site Practice</span>
              </div>
              <div className="flex flex-col border-r border-surface-dim/60 pr-space-md">
                <span className="font-label-technical text-label-technical uppercase text-secondary">Core Specialization</span>
                <span className="font-headline-lg text-headline-lg font-extrabold text-primary-container mt-1">QA / QC</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">Quality Control &amp; Inspections</span>
              </div>
              <div className="flex flex-col border-r border-surface-dim/60 pr-space-md">
                <span className="font-label-technical text-label-technical uppercase text-secondary">Jurisdiction</span>
                <span className="font-headline-lg text-headline-lg font-extrabold text-on-surface mt-1">Lagos / Ogun</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">Civil &amp; Rail Infrastructure</span>
              </div>
              <div className="flex flex-col">
                <span className="font-label-technical text-label-technical uppercase text-secondary">Licensure</span>
                <span className="font-headline-lg text-headline-lg font-extrabold text-on-surface mt-1">COREN / NSE</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">Certified Engineering Practice</span>
              </div>
            </div>
          </section>

          {/* Core Technical Disciplines */}
          <section className="flex flex-col gap-space-lg">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-space-sm border-b border-surface-dim pb-space-md">
              <div>
                <span className="font-label-technical text-label-technical uppercase tracking-widest text-secondary block mb-1">
                  Scope of Competence
                </span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface">
                  Engineering Capabilities
                </h2>
              </div>
              <Link to="/about" className="inline-flex items-center gap-1 font-label-lg text-label-lg uppercase tracking-wider text-primary hover:text-on-surface transition-colors">
                <span>View Full Profile</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
              {/* Capability 1 */}
              <div className="bg-surface-container-lowest border border-surface-dim p-space-lg flex flex-col justify-between hover:border-inverse-surface hover:shadow-neo transition-all group">
                <div>
                  <div className="w-8 h-1 bg-surface-container-highest group-hover:bg-primary-container transition-colors mb-space-md"></div>
                  <h3 className="font-title text-title text-on-surface font-bold mb-space-xs">
                    Quality Assurance &amp; Quality Control
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Formulating inspection and test plans (ITPs), auditing work against BS/ASTM specifications, and ensuring zero non-conformity.
                  </p>
                </div>
                <div className="mt-space-md pt-space-sm border-t border-surface-container flex items-center justify-between">
                  <span className="font-label-technical text-label-technical text-secondary uppercase">Field Discipline</span>
                  <span className="material-symbols-outlined text-[20px] text-secondary group-hover:text-primary-container transition-colors">fact_check</span>
                </div>
              </div>

              {/* Capability 2 */}
              <div className="bg-surface-container-lowest border border-surface-dim p-space-lg flex flex-col justify-between hover:border-inverse-surface hover:shadow-neo transition-all group">
                <div>
                  <div className="w-8 h-1 bg-surface-container-highest group-hover:bg-primary-container transition-colors mb-space-md"></div>
                  <h3 className="font-title text-title text-on-surface font-bold mb-space-xs">
                    Construction Site Supervision
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Supervising daily structural pours, formwork stability, reinforcement fixing, and safety compliance across project operations.
                  </p>
                </div>
                <div className="mt-space-md pt-space-sm border-t border-surface-container flex items-center justify-between">
                  <span className="font-label-technical text-label-technical text-secondary uppercase">Site Operations</span>
                  <span className="material-symbols-outlined text-[20px] text-secondary group-hover:text-primary-container transition-colors">visibility</span>
                </div>
              </div>

              {/* Capability 3 */}
              <div className="bg-surface-container-lowest border border-surface-dim p-space-lg flex flex-col justify-between hover:border-inverse-surface hover:shadow-neo transition-all group">
                <div>
                  <div className="w-8 h-1 bg-surface-container-highest group-hover:bg-primary-container transition-colors mb-space-md"></div>
                  <h3 className="font-title text-title text-on-surface font-bold mb-space-xs">
                    Materials Testing &amp; Verification
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Managing compressive concrete crushing tests, steel rebar tensile yield verification, slump checks, and soil compaction tests.
                  </p>
                </div>
                <div className="mt-space-md pt-space-sm border-t border-surface-container flex items-center justify-between">
                  <span className="font-label-technical text-label-technical text-secondary uppercase">Laboratory &amp; Field</span>
                  <span className="material-symbols-outlined text-[20px] text-secondary group-hover:text-primary-container transition-colors">science</span>
                </div>
              </div>

              {/* Capability 4 */}
              <div className="bg-surface-container-lowest border border-surface-dim p-space-lg flex flex-col justify-between hover:border-inverse-surface hover:shadow-neo transition-all group">
                <div>
                  <div className="w-8 h-1 bg-surface-container-highest group-hover:bg-primary-container transition-colors mb-space-md"></div>
                  <h3 className="font-title text-title text-on-surface font-bold mb-space-xs">
                    Structural Analysis &amp; Detailing
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Interpreting structural engineering drawings, bar bending schedules (BBS), and resolving on-site discrepancies with design teams.
                  </p>
                </div>
                <div className="mt-space-md pt-space-sm border-t border-surface-container flex items-center justify-between">
                  <span className="font-label-technical text-label-technical text-secondary uppercase">Design Verification</span>
                  <span className="material-symbols-outlined text-[20px] text-secondary group-hover:text-primary-container transition-colors">architecture</span>
                </div>
              </div>

              {/* Capability 5 */}
              <div className="bg-surface-container-lowest border border-surface-dim p-space-lg flex flex-col justify-between hover:border-inverse-surface hover:shadow-neo transition-all group">
                <div>
                  <div className="w-8 h-1 bg-surface-container-highest group-hover:bg-primary-container transition-colors mb-space-md"></div>
                  <h3 className="font-title text-title text-on-surface font-bold mb-space-xs">
                    Multidisciplinary Coordination
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Collaborating with resident consultants, MEP teams, civil contractors, and municipal inspectors to maintain timeline milestones.
                  </p>
                </div>
                <div className="mt-space-md pt-space-sm border-t border-surface-container flex items-center justify-between">
                  <span className="font-label-technical text-label-technical text-secondary uppercase">Project Management</span>
                  <span className="material-symbols-outlined text-[20px] text-secondary group-hover:text-primary-container transition-colors">hub</span>
                </div>
              </div>

              {/* Capability 6 */}
              <div className="bg-surface-container-lowest border border-surface-dim p-space-lg flex flex-col justify-between hover:border-inverse-surface hover:shadow-neo transition-all group">
                <div>
                  <div className="w-8 h-1 bg-surface-container-highest group-hover:bg-primary-container transition-colors mb-space-md"></div>
                  <h3 className="font-title text-title text-on-surface font-bold mb-space-xs">
                    Technical Compliance &amp; Reporting
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Compiling daily site logs, non-conformance reports (NCRs), material mill test certificates, and comprehensive closeout dossiers.
                  </p>
                </div>
                <div className="mt-space-md pt-space-sm border-t border-surface-container flex items-center justify-between">
                  <span className="font-label-technical text-label-technical text-secondary uppercase">Documentation</span>
                  <span className="material-symbols-outlined text-[20px] text-secondary group-hover:text-primary-container transition-colors">description</span>
                </div>
              </div>
            </div>
          </section>

          {/* Core Technical Skills Summary Banner */}
          <section className="bg-surface-container-low border border-surface-dim p-space-lg">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md pb-space-sm border-b border-surface-dim mb-space-md">
              <div>
                <span className="font-label-technical text-label-technical uppercase tracking-widest text-secondary block">
                  Core Skills &amp; Digital Tooling
                </span>
                <h3 className="font-title text-title font-bold text-on-surface uppercase">
                  Technical Proficiency &amp; Software Stack
                </h3>
              </div>
              <Link to="/about" className="inline-flex items-center gap-1 font-label-technical text-label-technical uppercase font-bold text-primary hover:text-on-surface">
                <span>View Full Skills Matrix</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-space-sm">
              <div className="bg-surface-container-lowest p-space-sm border border-surface-dim">
                <span className="font-label-technical text-label-technical uppercase text-secondary block text-[10px]">Digital Design</span>
                <span className="font-body-sm text-body-sm font-bold text-on-surface">AutoCAD Skills</span>
              </div>
              <div className="bg-surface-container-lowest p-space-sm border border-surface-dim">
                <span className="font-label-technical text-label-technical uppercase text-secondary block text-[10px]">Office &amp; Data</span>
                <span className="font-body-sm text-body-sm font-bold text-on-surface">MS Word &amp; Excel</span>
              </div>
              <div className="bg-surface-container-lowest p-space-sm border border-surface-dim">
                <span className="font-label-technical text-label-technical uppercase text-secondary block text-[10px]">Engineering Core</span>
                <span className="font-body-sm text-body-sm font-bold text-on-surface">Structural Design &amp; Analysis</span>
              </div>
              <div className="bg-surface-container-lowest p-space-sm border border-surface-dim">
                <span className="font-label-technical text-label-technical uppercase text-secondary block text-[10px]">Infrastructure</span>
                <span className="font-body-sm text-body-sm font-bold text-on-surface">Site Development</span>
              </div>
              <div className="bg-surface-container-lowest p-space-sm border border-surface-dim">
                <span className="font-label-technical text-label-technical uppercase text-secondary block text-[10px]">Compliance</span>
                <span className="font-body-sm text-body-sm font-bold text-on-surface">COREN &amp; NSE Standards</span>
              </div>
            </div>
          </section>

          {/* Field Project & Inspection Gallery Preview */}
          <section className="bg-surface-container-low border border-surface-dim p-space-lg space-y-space-md">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md pb-space-sm border-b border-surface-dim">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 bg-primary-container inline-block"></span>
                  <span className="font-label-technical text-label-technical uppercase tracking-widest text-secondary">
                    PHOTOGRAPHIC ARCHIVE
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface uppercase tracking-tight">
                  Gallery Book
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xl mt-1">
                  Photographic lookbook of on-site structural framework, quality assurance inspections, and civil field operations.
                </p>
              </div>

              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 bg-on-tertiary-container text-on-tertiary font-label-technical text-xs uppercase tracking-wider px-space-md py-2.5 border border-on-tertiary-container shadow-neo-sm hover:bg-primary-container hover:shadow-neo transition-all"
              >
                <span>Open Gallery Book</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
              {/* Preview Card 1 */}
              <Link
                to="/gallery"
                className="group relative bg-surface-container-lowest border border-surface-dim overflow-hidden shadow-neo-light hover:shadow-neo transition-all"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-surface-container">
                  <img
                    src="/assets/gallery/thumbs/project-site-01.webp"
                    alt="Gallery book preview 01"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </Link>

              {/* Preview Card 2 */}
              <Link
                to="/gallery"
                className="group relative bg-surface-container-lowest border border-surface-dim overflow-hidden shadow-neo-light hover:shadow-neo transition-all"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-surface-container">
                  <img
                    src="/assets/gallery/thumbs/project-site-08.webp"
                    alt="Gallery book preview 02"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </Link>

              {/* Preview Card 3 */}
              <Link
                to="/gallery"
                className="group relative bg-surface-container-lowest border border-surface-dim overflow-hidden shadow-neo-light hover:shadow-neo transition-all sm:col-span-2 lg:col-span-1"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-surface-container">
                  <img
                    src="/assets/gallery/thumbs/project-site-12.webp"
                    alt="Gallery book preview 03"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </Link>
            </div>
          </section>

          {/* Call to Action Banner */}
          <section className="bg-on-tertiary-container text-on-primary p-space-lg md:p-space-xl border border-on-tertiary-container relative overflow-hidden shadow-neo">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-primary-container"></div>
            <div className="max-w-3xl flex flex-col items-start space-y-space-md relative z-10">
              <div className="flex items-center gap-space-xs">
                <span className="w-2 h-2 bg-primary-container"></span>
                <span className="font-label-technical text-label-technical uppercase tracking-widest text-tertiary-fixed font-semibold">
                  Consultation &amp; Field Deployment
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg font-bold text-on-primary tracking-tight">
                Let&apos;s build with verified quality and structural confidence.
              </h2>
              <p className="font-body-lg text-body-lg text-secondary-container leading-relaxed max-w-2xl">
                Explore my full career history, reviewed infrastructure projects, or schedule a technical consultation for your upcoming development.
              </p>
              <div className="flex flex-wrap items-center gap-space-md pt-space-sm">
                <Link
                  to="/experience"
                  className="inline-flex items-center gap-space-xs bg-primary-container text-on-primary font-label-lg text-label-lg uppercase tracking-wider px-space-lg py-space-sm border border-primary-container hover:bg-primary hover:shadow-neo-white transition-all shadow-neo-sm"
                >
                  <span>View Project Experience</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-space-xs bg-transparent text-on-primary font-label-lg text-label-lg uppercase tracking-wider px-space-lg py-space-sm border border-surface-dim hover:border-on-primary hover:bg-surface-container-lowest/10 transition-all"
                >
                  <span>Initiate Consultation</span>
                  <span className="material-symbols-outlined text-[18px]">mail</span>
                </Link>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
