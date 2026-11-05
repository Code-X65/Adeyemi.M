import { Link } from 'react-router-dom';

export function EducationPage() {
  return (
    <div className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]">
      <div className="flex flex-col w-full">
        
        {/* Top Category Bar & Structural Header */}
        <section className="w-full bg-surface-container-low border-b border-surface-dim">
          <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin py-space-xl">
            {/* Technical Ledger Tracker */}
            <div className="flex flex-wrap items-center justify-between gap-space-sm pb-space-md border-b border-surface-dim">
              <div className="flex items-center gap-space-sm">
                <div className="w-2.5 h-2.5 bg-primary-container"></div>
                <span className="font-label-technical text-label-technical uppercase tracking-widest text-on-surface-variant font-bold">
                  SECTION 04 // ACADEMIC &amp; STATUTORY CREDENTIALS
                </span>
              </div>
              <div className="flex items-center gap-space-md text-secondary font-label-technical text-label-technical uppercase">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                  COREN REGISTERED
                </span>
                <span className="hidden sm:inline text-surface-dim">|</span>
                <span className="hidden sm:inline">DISCIPLINE: CIVIL &amp; STRUCTURAL</span>
                <span className="hidden sm:inline text-surface-dim">|</span>
                <span className="text-on-surface font-semibold">VERIFIED COMPLIANCE</span>
              </div>
            </div>

            {/* Main Headline Block */}
            <div className="mt-space-lg grid grid-cols-1 lg:grid-cols-12 gap-gutter items-end">
              <div className="lg:col-span-8 space-y-space-sm">
                <span className="font-label-technical text-label-technical uppercase tracking-widest text-primary font-bold block">
                  FORMAL ACCREDITATION &amp; TECHNICAL QUALIFICATIONS
                </span>
                <h1 className="font-display text-headline-lg md:text-display font-extrabold text-on-surface tracking-tight uppercase">
                  Education &amp; Certifications
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                  Formal academic foundations in civil engineering alongside ongoing postgraduate studies, statutory engineering affiliations, and internationally aligned QA/QC compliance frameworks.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col justify-end">
                <div className="bg-surface-container-lowest p-space-md border border-surface-dim shadow-neo">
                  <div className="flex items-center justify-between pb-space-xs border-b border-surface-dim mb-space-xs">
                    <span className="font-label-technical text-label-technical uppercase text-secondary font-semibold">
                      Regulatory Standard
                    </span>
                    <span className="font-label-technical text-label-technical text-primary font-bold">
                      ACTIVE LICENSURE
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface leading-normal">
                    Operating under strict adherence to statutory engineering ethics, BS 8110 / Eurocode 2 standards, and continuous QA/QC field verification protocols.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 01. Academic Qualifications */}
        <section className="w-full max-w-[1320px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin py-space-xl">
          <div className="flex flex-col gap-space-xl">
            
            <div className="flex items-center justify-between border-b border-surface-dim pb-space-sm">
              <div className="flex items-center gap-space-sm">
                <span className="font-title text-title uppercase font-bold text-on-surface">
                  01. Academic Qualifications
                </span>
                <span className="font-label-technical text-label-technical px-2 py-0.5 bg-surface-container-high text-secondary uppercase font-semibold">
                  Degree Programs
                </span>
              </div>
              <span className="font-label-technical text-label-technical text-secondary uppercase hidden sm:block">
                TERTIARY EDUCATION DOSSIER
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-stretch">
              {/* Left Column: Academic Degrees */}
              <div className="lg:col-span-7 flex flex-col gap-gutter">
                
                {/* Degree 1: Undergraduate */}
                <div className="bg-surface-container-lowest p-space-lg border border-surface-dim shadow-neo hover:border-inverse-surface transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-space-sm border-b border-surface-dim mb-space-md">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary"></span>
                      <span className="font-label-technical text-label-technical uppercase text-secondary font-semibold">
                        Undergraduate Program
                      </span>
                    </div>
                    <span className="font-label-technical text-label-technical uppercase font-bold text-on-surface bg-surface-container-low px-2 py-0.5 border border-surface-dim">
                      B.Tech (Honours) Completed
                    </span>
                  </div>

                  <div className="mb-space-md">
                    <h2 className="font-headline-md text-headline-md text-on-surface font-bold uppercase tracking-tight">
                      Bachelor of Technology (B.Tech) in Civil Engineering
                    </h2>
                    <div className="flex items-start gap-2 mt-2 text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary text-xl mt-0.5">apartment</span>
                      <div>
                        <span className="font-title text-title text-on-surface font-semibold block">
                          Ladoke Akintola University of Technology (LAUTECH)
                        </span>
                        <span className="font-body-sm text-body-sm text-secondary">
                          Ogbomoso, Oyo State, Nigeria — Department of Civil Engineering
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="font-body-md text-body-md text-on-surface-variant mb-space-md leading-relaxed">
                    Rigorous mathematical modeling, laboratory material testing, and field survey practicals. Deep focus on structural reliability, reinforced framework performance under sustained live loads, and foundation stability analysis.
                  </p>

                  <div className="border-t border-surface-dim pt-space-sm">
                    <span className="font-label-technical text-label-technical uppercase text-secondary block mb-space-xs font-semibold">
                      Core Academic Pillars
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {['Structural Analysis & Detailing', 'Reinforced Concrete Design', 'Geotechnical Engineering', 'Hydraulics & Drainage', 'Surveying & Setting-Out'].map((pill, i) => (
                        <span key={i} className="text-[12px] px-2 py-1 bg-surface-container text-on-surface font-medium border border-surface-dim">
                          {pill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Degree 2: Postgraduate */}
                <div className="bg-surface-container-lowest p-space-lg border border-surface-dim shadow-neo hover:border-inverse-surface transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-space-sm border-b border-surface-dim mb-space-md">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary-container"></span>
                      <span className="font-label-technical text-label-technical uppercase text-secondary font-semibold">
                        Postgraduate Study
                      </span>
                    </div>
                    <span className="font-label-technical text-label-technical uppercase font-bold text-on-primary-container bg-primary-fixed px-2 py-0.5 border border-primary-container/20">
                      Status: In Progress
                    </span>
                  </div>

                  <div className="mb-space-md">
                    <h2 className="font-headline-md text-headline-md text-on-surface font-bold uppercase tracking-tight">
                      Master of Science (M.Sc) in Project Management
                    </h2>
                    <div className="flex items-start gap-2 mt-2 text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary text-xl mt-0.5">school</span>
                      <div>
                        <span className="font-title text-title text-on-surface font-semibold block">
                          Advanced Engineering Lifecycle Studies
                        </span>
                        <span className="font-body-sm text-body-sm text-secondary">
                          Focus on Complex Infrastructure Scheduling, Risk Mitigation &amp; Procurement
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="font-body-md text-body-md text-on-surface-variant mb-space-md leading-relaxed">
                    Expanding engineering leadership with advanced research in quantitative risk management, earned value analysis (EVA), contract administration under FIDIC terms, and lean construction logistics.
                  </p>

                  <div className="border-t border-surface-dim pt-space-sm">
                    <span className="font-label-technical text-label-technical uppercase text-secondary block mb-space-xs font-semibold">
                      Research &amp; Advanced Focus
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {['Earned Value Project Controls', 'FIDIC Contract Administration', 'Construction Risk Auditing', 'Sustainable Material Supply Chains'].map((pill, i) => (
                        <span key={i} className="text-[12px] px-2 py-1 bg-surface-container text-on-surface font-medium border border-surface-dim">
                          {pill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Column: Site Engineering Vignette Frame */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div className="bg-surface-container-lowest border border-surface-dim p-space-sm h-full flex flex-col justify-between shadow-neo-light">
                  <div className="relative overflow-hidden w-full h-[360px] lg:h-full bg-surface-container">
                    <img
                      alt="Civil engineer with structural blueprints on site"
                      className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-300"
                      src="/assets/engineer-with-blueprints.png"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = '/assets/about-me.png';
                      }}
                    />
                    <div className="absolute top-space-sm right-space-sm bg-surface-container-lowest/95 px-space-sm py-1 border border-surface-dim">
                      <span className="font-label-technical text-label-technical text-on-surface uppercase font-bold">
                        Engineering Dossier
                      </span>
                    </div>
                  </div>
                  <div className="pt-space-sm px-space-xs border-t border-surface-dim mt-space-xs">
                    <span className="font-label-technical text-label-technical text-secondary uppercase block mb-1">
                      Academic &amp; Field Synthesis
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface">
                      Connecting rigorous structural theories with day-to-day site supervision and materials testing standards.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* 02. Statutory Licensing & Professional Memberships */}
            <div className="pt-space-md border-t border-surface-dim">
              <div className="flex items-center justify-between mb-space-lg">
                <div>
                  <span className="font-label-technical text-label-technical uppercase tracking-widest text-secondary block mb-1">
                    Statutory Affiliations
                  </span>
                  <h2 className="font-headline-md text-headline-md text-on-tertiary-container">
                    02. Professional Licensure &amp; Certifications
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
                
                {/* Cert 1: COREN */}
                <div className="bg-surface-container-lowest border border-surface-dim p-space-lg flex flex-col justify-between shadow-neo-light hover:shadow-neo transition-all group">
                  <div>
                    <div className="flex items-center justify-between pb-space-xs border-b border-surface-dim mb-space-sm">
                      <span className="font-label-technical text-label-technical uppercase text-secondary">
                        Statutory Regulatory License
                      </span>
                      <span className="material-symbols-outlined text-primary-container text-[22px]">badge</span>
                    </div>
                    <h3 className="font-title text-title font-bold text-on-surface mb-1">
                      COREN Registered Engineer (R.Eng)
                    </h3>
                    <p className="font-body-sm text-body-sm text-secondary mb-space-sm font-semibold">
                      Council for the Regulation of Engineering in Nigeria
                    </p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Legally chartered to practice, endorse, and supervise civil &amp; structural engineering undertakings across the Federal Republic of Nigeria.
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-xs border-t border-surface-dim flex items-center justify-between">
                    <span className="font-label-technical text-label-technical text-secondary uppercase">Status</span>
                    <span className="font-label-technical text-label-technical font-bold text-primary uppercase">Active / Good Standing</span>
                  </div>
                </div>

                {/* Cert 2: NSE */}
                <div className="bg-surface-container-lowest border border-surface-dim p-space-lg flex flex-col justify-between shadow-neo-light hover:shadow-neo transition-all group">
                  <div>
                    <div className="flex items-center justify-between pb-space-xs border-b border-surface-dim mb-space-sm">
                      <span className="font-label-technical text-label-technical uppercase text-secondary">
                        Professional Society
                      </span>
                      <span className="material-symbols-outlined text-primary-container text-[22px]">domain</span>
                    </div>
                    <h3 className="font-title text-title font-bold text-on-surface mb-1">
                      Corporate Member (MNSE)
                    </h3>
                    <p className="font-body-sm text-body-sm text-secondary mb-space-sm font-semibold">
                      Nigerian Society of Engineers
                    </p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Active membership in the Civil Engineering division, participating in statutory code revisions and structural engineering symposiums.
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-xs border-t border-surface-dim flex items-center justify-between">
                    <span className="font-label-technical text-label-technical text-secondary uppercase">Affiliation</span>
                    <span className="font-label-technical text-label-technical font-bold text-primary uppercase">Corporate Member</span>
                  </div>
                </div>

                {/* Cert 3: QA/QC & ITP */}
                <div className="bg-surface-container-lowest border border-surface-dim p-space-lg flex flex-col justify-between shadow-neo-light hover:shadow-neo transition-all group">
                  <div>
                    <div className="flex items-center justify-between pb-space-xs border-b border-surface-dim mb-space-sm">
                      <span className="font-label-technical text-label-technical uppercase text-secondary">
                        Field Competence
                      </span>
                      <span className="material-symbols-outlined text-primary-container text-[22px]">verified</span>
                    </div>
                    <h3 className="font-title text-title font-bold text-on-surface mb-1">
                      Construction QA/QC &amp; ITP Specialist
                    </h3>
                    <p className="font-body-sm text-body-sm text-secondary mb-space-sm font-semibold">
                      Quality Management in Civil Engineering
                    </p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Specialized training in creating Inspection and Test Plans (ITPs), Non-Conformance resolution, and ISO 9001 quality audits.
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-xs border-t border-surface-dim flex items-center justify-between">
                    <span className="font-label-technical text-label-technical text-secondary uppercase">Field Discipline</span>
                    <span className="font-label-technical text-label-technical font-bold text-primary uppercase">Audited Standard</span>
                  </div>
                </div>

                {/* Cert 4: HSE / Site Safety */}
                <div className="bg-surface-container-lowest border border-surface-dim p-space-lg flex flex-col justify-between shadow-neo-light hover:shadow-neo transition-all group">
                  <div>
                    <div className="flex items-center justify-between pb-space-xs border-b border-surface-dim mb-space-sm">
                      <span className="font-label-technical text-label-technical uppercase text-secondary">
                        Safety Directive
                      </span>
                      <span className="material-symbols-outlined text-primary-container text-[22px]">health_and_safety</span>
                    </div>
                    <h3 className="font-title text-title font-bold text-on-surface mb-1">
                      Occupational Health &amp; Site Safety (HSE)
                    </h3>
                    <p className="font-body-sm text-body-sm text-secondary mb-space-sm font-semibold">
                      Construction Safety Protocols (Level 3)
                    </p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Certified oversight for excavations, deep shoring, crane operations, working at heights, and site emergency hazard drills.
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-xs border-t border-surface-dim flex items-center justify-between">
                    <span className="font-label-technical text-label-technical text-secondary uppercase">Compliance</span>
                    <span className="font-label-technical text-label-technical font-bold text-primary uppercase">HSE Certified</span>
                  </div>
                </div>

                {/* Cert 5: Structural Concrete & Materials Testing */}
                <div className="bg-surface-container-lowest border border-surface-dim p-space-lg flex flex-col justify-between shadow-neo-light hover:shadow-neo transition-all group">
                  <div>
                    <div className="flex items-center justify-between pb-space-xs border-b border-surface-dim mb-space-sm">
                      <span className="font-label-technical text-label-technical uppercase text-secondary">
                        Laboratory Certification
                      </span>
                      <span className="material-symbols-outlined text-primary-container text-[22px]">science</span>
                    </div>
                    <h3 className="font-title text-title font-bold text-on-surface mb-1">
                      Concrete Technology &amp; Soil Mechanics
                    </h3>
                    <p className="font-body-sm text-body-sm text-secondary mb-space-sm font-semibold">
                      ASTM &amp; BS Laboratory Testing Protocols
                    </p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Mastery of compressive batching verification, slump test calibration, CBR soil stabilization tests, and aggregate impact analysis.
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-xs border-t border-surface-dim flex items-center justify-between">
                    <span className="font-label-technical text-label-technical text-secondary uppercase">Standard</span>
                    <span className="font-label-technical text-label-technical font-bold text-primary uppercase">BS / ASTM Standard</span>
                  </div>
                </div>

                {/* Cert 6: CAD & BIM Detailing */}
                <div className="bg-surface-container-lowest border border-surface-dim p-space-lg flex flex-col justify-between shadow-neo-light hover:shadow-neo transition-all group">
                  <div>
                    <div className="flex items-center justify-between pb-space-xs border-b border-surface-dim mb-space-sm">
                      <span className="font-label-technical text-label-technical uppercase text-secondary">
                        Software &amp; Digital Modeling
                      </span>
                      <span className="material-symbols-outlined text-primary-container text-[22px]">computer</span>
                    </div>
                    <h3 className="font-title text-title font-bold text-on-surface mb-1">
                      Structural CAD &amp; Detailing Systems
                    </h3>
                    <p className="font-body-sm text-body-sm text-secondary mb-space-sm font-semibold">
                      AutoCAD Civil &amp; Structural Suites
                    </p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Proficiency in reading, modeling, and validating Bar Bending Schedules (BBS), reinforcement cross-sections, and elevation details.
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-xs border-t border-surface-dim flex items-center justify-between">
                    <span className="font-label-technical text-label-technical text-secondary uppercase">Proficiency</span>
                    <span className="font-label-technical text-label-technical font-bold text-primary uppercase">Expert Practitioner</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom Call to Action */}
            <div className="p-space-lg bg-surface-container-low border border-surface-dim flex flex-col sm:flex-row items-center justify-between gap-space-md">
              <div>
                <h3 className="font-title text-title font-bold text-on-surface">
                  Request Authenticated Educational Transcripts or COREN Certificates
                </h3>
                <p className="font-body-sm text-body-sm text-secondary">
                  Official certified copies can be provided directly to institutional employers and tendering bodies.
                </p>
              </div>
              <div className="flex items-center gap-space-sm shrink-0">
                <Link
                  to="/contact"
                  className="px-space-lg py-space-sm bg-primary-container text-on-primary font-label-lg text-label-lg uppercase tracking-wider border border-on-tertiary-container shadow-neo-sm hover:shadow-neo transition-all"
                >
                  Initiate Request
                </Link>
                <a
                  href="/Adeyemi_Modupeola_Civil_Engineer_CV.pdf"
                  download="Adeyemi_Modupeola_Civil_Engineer_CV.pdf"
                  className="px-space-md py-space-sm bg-surface-container-lowest text-on-surface font-label-lg text-label-lg uppercase tracking-wider border border-surface-dim shadow-neo-sm hover:bg-surface-container-high transition-all"
                >
                  Download CV
                </a>
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}
