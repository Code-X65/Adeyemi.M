import { useState } from 'react';
import { Link } from 'react-router-dom';

interface ExperienceItem {
  id: string;
  category: 'rail' | 'structural' | 'qa-qc' | 'site';
  expCode: string;
  discipline: string;
  currentRole?: boolean;
  company: string;
  role: string;
  period: string;
  location: string;
  overview: string;
  responsibilities: string[];
  deliverables: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 'ccecc',
    category: 'rail',
    expCode: 'EXP 01',
    discipline: 'Civil Infrastructure & Rail Modernization',
    currentRole: true,
    company: 'China Civil Engineering Construction Corporation (CCECC)',
    role: 'Quality Assurance & Quality Control (QA/QC) Engineer',
    period: '2019 — Present',
    location: 'Lagos / Ogun State Corridor, Nigeria',
    overview: 'Serving as lead site QA/QC Engineer on major national infrastructure frameworks including standard-gauge railway systems, ancillary station edifices, overpass flyovers, and heavy drainage channels.',
    responsibilities: [
      'Formulating, auditing, and executing site Inspection & Test Plans (ITPs) across earthworks, pre-stressed concrete sleepers, sub-ballast layers, and structural concrete piers.',
      'Supervising on-site quality compliance for heavy reinforced concrete pours exceeding 250m³ per shift, verifying slump, temperature, and vibrating techniques.',
      'Conducting rigorous non-destructive and destructive batch testing on high-yield deformed steel rebar (BS 4449) and aggregate grading.',
      'Issuing Non-Conformance Reports (NCRs), tracking corrective action requests (CARs), and liaising with client resident consultant inspectors for joint sign-offs.'
    ],
    deliverables: [
      'Standard Gauge Rail Corridor Alignment',
      'Track-bed Compaction & CBR Verification',
      'Bridge Abutments & Precast Girder Placement',
      'Overpass Structural Load Testing Dossiers'
    ]
  },
  {
    id: 'structural-supervision',
    category: 'structural',
    expCode: 'EXP 02',
    discipline: 'Multistorey Commercial & Institutional Frameworks',
    currentRole: false,
    company: 'Integrated Engineering & Construction Services Ltd',
    role: 'Civil Site Engineer & Structural Supervisor',
    period: '2017 — 2019',
    location: 'Lagos Island & Victoria Island, Nigeria',
    overview: 'Directed site supervision and technical inspections for high-density reinforced concrete framed institutional complexes and multistorey commercial buildings.',
    responsibilities: [
      'Inspected reinforcement fixing against Bar Bending Schedules (BBS) to ensure exact concrete cover, lap lengths, anchorage, and shear links prior to concrete pouring approvals.',
      'Supervised formwork installation, propping stability, and striking times in compliance with BS 8110 safety criteria.',
      'Monitored deep foundation works including cast-in-situ bored piles, pile cap construction, and basement retaining wall waterproofing barriers.',
      'Chaired weekly technical coordination meetings with architectural, MEP, and structural engineering sub-contractors.'
    ],
    deliverables: [
      '7-Storey Reinforced Concrete Framed Edifice',
      'Bored Cast-in-Situ Foundation Inspections',
      'Substructure Retaining Membrane QA',
      'Structural As-Built Verification'
    ]
  },
  {
    id: 'materials-qa',
    category: 'qa-qc',
    expCode: 'EXP 03',
    discipline: 'Geotechnical & Construction Materials Laboratory',
    currentRole: false,
    company: 'Civil Materials Testing & Standards Facility',
    role: 'Materials Testing & Quality Compliance Engineer',
    period: '2016 — 2017',
    location: 'Oyo / Ogun State, Nigeria',
    overview: 'Managed independent laboratory testing of construction materials, soil mechanics, and structural concrete samples for major road and bridge contracts.',
    responsibilities: [
      'Conducted standardized compressive strength crushing tests on 150mm concrete cubes at 7, 14, and 28-day curing intervals.',
      'Executed soil mechanics tests: Atterberg limits, sieve analysis, Proctor compaction, California Bearing Ratio (CBR), and moisture-density relationships.',
      'Prepared formal Quality Control Certifications and calibrated on-site testing apparatus (Schmidt rebound hammer, slump cones, nuclear density gauges).',
      'Evaluated chemical admixture batching to optimize high-performance, low-permeability concrete mix designs.'
    ],
    deliverables: [
      '5,000+ Concrete Cube Compression Reports',
      'Soil Stabilization & CBR Profiles',
      'Aggregates Specific Gravity & Impact Value Tests',
      'ISO 9001 Testing Audit Compliance'
    ]
  },
  {
    id: 'road-civil',
    category: 'site',
    expCode: 'EXP 04',
    discipline: 'Municipal Highway Works & Hydraulic Drainage',
    currentRole: false,
    company: 'Urban Infrastructure & Highway Contractors',
    role: 'Site Engineer (Civil Resident Trainee)',
    period: '2015 — 2016',
    location: 'Southwestern Nigeria',
    overview: 'Supervised civil road construction, storm drainage networks, box culvert construction, and subgrade stabilization.',
    responsibilities: [
      'Set out alignments, levels, and road cross-sections using total stations and automatic optical levels.',
      'Monitored earthmoving operations: cut, fill, subgrade preparation, stone base spreading, and prime coat application.',
      'Supervised the construction of reinforced concrete box culverts and open trapezoidal storm water drainage canals.',
      'Logged daily site manpower records, weather conditions, equipment usage, and progress measurement for client valuations.'
    ],
    deliverables: [
      '12km Dual-Carriageway Arterial Road Works',
      'Double-Cell Reinforced Box Culvert Construction',
      'Cast-in-Situ Hydraulic Storm Drain Canals',
      'Field Survey Setting-Out Controls'
    ]
  }
];

export function ExperiencePage() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'rail' | 'structural' | 'qa-qc' | 'site'>('all');

  const filteredExperiences = experiences.filter((exp) => {
    if (activeFilter === 'all') return true;
    return exp.category === activeFilter;
  });

  return (
    <div className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]">
      <div className="flex flex-col w-full">
        
        {/* Page Header & Overview Section */}
        <section className="w-full bg-surface-container-low border-b border-surface-dim">
          <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin py-space-xl">
            <div className="flex flex-col gap-space-sm max-w-4xl">
              <div className="inline-flex items-center gap-space-xs self-start bg-surface-container-lowest px-space-sm py-1 border border-surface-dim shadow-sm">
                <span className="w-2 h-2 bg-primary-container inline-block"></span>
                <span className="font-label-technical text-label-technical tracking-wider uppercase text-on-surface font-bold">
                  Career History &amp; Field Practice
                </span>
              </div>
              <h1 className="font-display text-headline-lg md:text-display tracking-tight text-on-surface uppercase font-extrabold mt-space-xs">
                Professional Experience
              </h1>
              <p className="font-headline-sm text-headline-sm text-primary-container font-semibold mt-1">
                Practical engineering experience across construction, quality assurance, and site operations.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mt-space-xs leading-relaxed">
                My professional journey has involved leading QA/QC teams, supervising critical structural pours, enforcing international engineering specifications, and coordinating multifaceted operations across arterial highways, rail modernization, and commercial complexes.
              </p>

              {/* Metric Indicators */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-gutter mt-space-lg pt-space-md border-t border-surface-dim">
                <div className="flex flex-col">
                  <span className="font-label-technical text-label-technical uppercase text-secondary">Career Timeline</span>
                  <span className="font-headline-md text-headline-md font-bold text-on-surface">9+ Years</span>
                  <span className="font-body-sm text-body-sm text-secondary">Continuous Site Practice</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-technical text-label-technical uppercase text-secondary">Core Discipline</span>
                  <span className="font-headline-md text-headline-md font-bold text-primary-container">QA / QC</span>
                  <span className="font-body-sm text-body-sm text-secondary">Quality &amp; Standards</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-technical text-label-technical uppercase text-secondary">Jurisdiction</span>
                  <span className="font-headline-md text-headline-md font-bold text-on-surface">Lagos / Ogun</span>
                  <span className="font-body-sm text-body-sm text-secondary">Major Civil Works</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-technical text-label-technical uppercase text-secondary">Compliance</span>
                  <span className="font-headline-md text-headline-md font-bold text-on-surface">COREN</span>
                  <span className="font-body-sm text-body-sm text-secondary">Certified Engineering Practice</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chronological Stream with Category Filter */}
        <section className="w-full bg-surface py-space-xl">
          <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
            
            {/* Filter Bar & Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md border-b border-surface-dim pb-space-md mb-space-xl">
              <div>
                <span className="font-label-technical text-label-technical uppercase tracking-widest text-secondary block">
                  Chronological Record // 2015 — Present
                </span>
                <span className="font-title text-title font-bold text-on-surface">
                  Operational Appointments ({filteredExperiences.length})
                </span>
              </div>

              {/* Interactive Filter Pills */}
              <div className="flex flex-wrap items-center gap-space-xs">
                <button
                  type="button"
                  onClick={() => setActiveFilter('all')}
                  className={`px-space-md py-1.5 font-label-technical text-label-technical uppercase tracking-wider border transition-all ${
                    activeFilter === 'all'
                      ? 'bg-on-tertiary-container text-surface-container-lowest border-on-tertiary-container shadow-neo-sm font-bold'
                      : 'bg-surface-container-lowest text-on-surface-variant border-surface-dim hover:bg-surface-container-high'
                  }`}
                >
                  All Sectors
                </button>
                <button
                  type="button"
                  onClick={() => setActiveFilter('rail')}
                  className={`px-space-md py-1.5 font-label-technical text-label-technical uppercase tracking-wider border transition-all ${
                    activeFilter === 'rail'
                      ? 'bg-primary-container text-on-primary border-on-tertiary-container shadow-neo-sm font-bold'
                      : 'bg-surface-container-lowest text-on-surface-variant border-surface-dim hover:bg-surface-container-high'
                  }`}
                >
                  Rail &amp; Infrastructure
                </button>
                <button
                  type="button"
                  onClick={() => setActiveFilter('structural')}
                  className={`px-space-md py-1.5 font-label-technical text-label-technical uppercase tracking-wider border transition-all ${
                    activeFilter === 'structural'
                      ? 'bg-primary-container text-on-primary border-on-tertiary-container shadow-neo-sm font-bold'
                      : 'bg-surface-container-lowest text-on-surface-variant border-surface-dim hover:bg-surface-container-high'
                  }`}
                >
                  Structural Buildings
                </button>
                <button
                  type="button"
                  onClick={() => setActiveFilter('qa-qc')}
                  className={`px-space-md py-1.5 font-label-technical text-label-technical uppercase tracking-wider border transition-all ${
                    activeFilter === 'qa-qc'
                      ? 'bg-primary-container text-on-primary border-on-tertiary-container shadow-neo-sm font-bold'
                      : 'bg-surface-container-lowest text-on-surface-variant border-surface-dim hover:bg-surface-container-high'
                  }`}
                >
                  Materials QA/QC
                </button>
              </div>
            </div>

            {/* Experience Cards */}
            <div className="flex flex-col gap-space-xl">
              {filteredExperiences.map((exp) => (
                <article
                  key={exp.id}
                  className="bg-surface-container-lowest border border-surface-dim hover:border-inverse-surface shadow-neo-light hover:shadow-neo transition-all"
                >
                  {/* Spec Header Bar */}
                  <div className="bg-surface-container-low px-space-md py-space-sm border-b border-surface-dim flex flex-wrap items-center justify-between gap-space-sm">
                    <div className="flex items-center gap-space-sm">
                      <span className="font-label-technical text-label-technical font-bold text-secondary uppercase tracking-widest">
                        {exp.expCode}
                      </span>
                      <span className="w-1.5 h-1.5 bg-surface-dim rounded-full"></span>
                      <span className="font-label-technical text-label-technical uppercase text-on-surface-variant font-semibold">
                        {exp.discipline}
                      </span>
                    </div>

                    {exp.currentRole && (
                      <div className="inline-flex items-center gap-space-xs bg-primary-fixed px-space-xs py-0.5 border border-primary-container/20">
                        <span className="w-2 h-2 bg-primary-container"></span>
                        <span className="font-label-technical text-label-technical font-bold uppercase text-on-primary-container tracking-wider">
                          Current Role
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Main Content Body */}
                  <div className="p-space-lg md:p-space-xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
                      {/* Left Column: Role Details & Meta */}
                      <div className="lg:col-span-5 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-surface-dim pb-space-md lg:pb-0 lg:pr-gutter">
                        <div>
                          <h2 className="font-headline-md text-headline-md font-bold text-on-surface leading-tight">
                            {exp.company}
                          </h2>
                          <p className="font-title text-title text-primary-container font-semibold mt-space-xs">
                            {exp.role}
                          </p>

                          <div className="flex flex-col gap-2 mt-space-md">
                            <div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
                              <span className="material-symbols-outlined text-[18px] text-secondary">calendar_today</span>
                              <span className="font-semibold text-on-surface">{exp.period}</span>
                            </div>
                            <div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
                              <span className="material-symbols-outlined text-[18px] text-secondary">location_on</span>
                              <span>{exp.location}</span>
                            </div>
                          </div>

                          <p className="font-body-md text-body-md text-on-surface-variant mt-space-md leading-relaxed">
                            {exp.overview}
                          </p>
                        </div>

                        {/* Deliverables Tags */}
                        <div className="mt-space-lg pt-space-md border-t border-surface-dim">
                          <span className="font-label-technical text-label-technical uppercase text-secondary block mb-space-xs">
                            Verified Project Deliverables
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {exp.deliverables.map((deliv, idx) => (
                              <span
                                key={idx}
                                className="inline-flex items-center px-2 py-0.5 bg-surface-container text-on-surface font-label-technical text-label-technical border border-surface-dim"
                              >
                                {deliv}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right Column: Detailed Field Responsibilities */}
                      <div className="lg:col-span-7 flex flex-col justify-between pt-space-sm lg:pt-0">
                        <div>
                          <span className="font-label-technical text-label-technical uppercase tracking-widest text-secondary block mb-space-md">
                            Core Engineering Responsibilities &amp; QA Scope
                          </span>
                          <ul className="flex flex-col gap-space-md">
                            {exp.responsibilities.map((resp, idx) => (
                              <li key={idx} className="flex items-start gap-space-sm">
                                <span className="material-symbols-outlined text-primary-container text-[20px] shrink-0 mt-0.5">
                                  check_circle
                                </span>
                                <span className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                                  {resp}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mt-space-lg pt-space-sm border-t border-surface-dim flex items-center justify-between">
                          <span className="font-label-technical text-label-technical text-secondary uppercase">
                            Operational Status
                          </span>
                          <span className="font-label-technical text-label-technical font-semibold text-primary uppercase">
                            Audited &amp; Handover Documented
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Bottom Navigation CTA */}
            <div className="mt-space-xl p-space-lg bg-surface-container-low border border-surface-dim flex flex-col sm:flex-row items-center justify-between gap-space-md">
              <div>
                <h3 className="font-title text-title font-bold text-on-surface">
                  Need a full technical dossier or verified site reference letters?
                </h3>
                <p className="font-body-sm text-body-sm text-secondary">
                  Complete documentation packages and engineering references are provided upon request.
                </p>
              </div>
              <div className="flex items-center gap-space-sm shrink-0">
                <Link
                  to="/contact"
                  className="px-space-lg py-space-sm bg-primary-container text-on-primary font-label-lg text-label-lg uppercase tracking-wider border border-on-tertiary-container shadow-neo-sm hover:shadow-neo transition-all"
                >
                  Contact Desk
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
