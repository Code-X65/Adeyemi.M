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
    discipline: 'Civil Infrastructure & Heavy Engineering',
    currentRole: true,
    company: 'China Civil Engineering Construction Co (CCECC)',
    role: 'Quality Assurance and Quality Control (QA/QC) Engineer',
    period: 'June 2017 — Present',
    location: 'Lagos, Nigeria',
    overview: 'Directing quality assurance and quality control operations on major infrastructure and standard-gauge civil projects. Managing project timelines, subcontracts, and multi-disciplinary site compliance.',
    responsibilities: [
      'Participate in project planning meetings to understand project requirements, timelines, and critical deliverables.',
      'Coordinate with project managers, architects, engineers, and subcontractors to develop construction plans and schedules.',
      'Oversee day-to-day construction activities at the project site, ensuring strict compliance with safety protocols, quality standards, and project specifications.',
      'Monitor progress, identify potential risks or delays, and implement corrective actions to keep projects on track.',
      'Conduct regular site inspections to ensure workmanship, safety, and strict adherence to construction plans.',
      'Ensure that construction materials and execution methods meet quality standards and regulatory requirements.',
      'Perform inspections and tests on construction materials and structures to verify compliance with specifications and regulations.',
      'Address quality issues promptly and work with subcontractors to implement corrective measures.',
      'Supervise subcontractors and construction crews, providing guidance, direction, and support as needed.',
      'Identify opportunities for cost savings or efficiency improvements and implement measures to optimize project costs.'
    ],
    deliverables: [
      'Project Planning & Scheduling Plans',
      'Material Testing & Inspection Regimes',
      'Non-Conformance Resolution Dossiers',
      'Subcontractor Execution Schedules',
      'Cost Optimization & Efficiency Measures'
    ]
  },
  {
    id: 'hi-tech',
    category: 'qa-qc',
    expCode: 'EXP 02',
    discipline: 'Heavy Civil & Highway Infrastructure',
    currentRole: false,
    company: 'Hi-Tech Construction Company',
    role: 'Quality Assurance and Quality Control (QA/QC) Engineer',
    period: 'January 2017 — June 2017',
    location: 'Lagos, Nigeria',
    overview: 'Spearheaded QA/QC procedure development, site inspections, testing and sampling, supplier compliance, and quality risk assessments across high-profile civil frameworks.',
    responsibilities: [
      'Developed and formalized site-wide QA/QC procedures and quality planning protocols.',
      'Conducted rigorous quality inspections across active concrete pours and pavement layers.',
      'Managed material testing and sampling regimes for aggregates, asphalt, and concrete batches.',
      'Administered non-conformance management, root-cause investigations, and corrective action implementations.',
      'Oversaw comprehensive document control, test certificates, and daily compliance records.',
      'Delivered training and education on quality benchmarks for site crews and subcontractors.',
      'Managed supplier and subcontractor quality evaluations to ensure certified material procurement.',
      'Led quality risk assessments and continuous improvement initiatives across site divisions.'
    ],
    deliverables: [
      'QA/QC Procedure & Inspection Manuals',
      'Testing & Sampling Verification Reports',
      'Supplier & Subcontractor Compliance Audits',
      'Quality Risk Assessment Frameworks'
    ]
  },
  {
    id: 'ogroma',
    category: 'site',
    expCode: 'EXP 03',
    discipline: 'State Highway Maintenance & Civil Drainage',
    currentRole: false,
    company: 'Ogun State Road Management Agency (OGROMA)',
    role: 'Site Engineer (NYSC)',
    period: '2013 — 2014',
    location: 'Ogun State, Nigeria',
    overview: 'Supported public infrastructure road construction, safety compliance, materials management, and quality control on behalf of the state road authority.',
    responsibilities: [
      'Assisted resident engineers with project planning, cross-sections, and alignment setting-out.',
      'Provided active construction site support across road rehabilitation, drainage clearing, and pavement resurfacing.',
      'Enforced site safety protocols and environmental compliance regulations.',
      'Conducted quality assurance and quality control checks on base materials and asphalt placement.',
      'Managed materials inventory, plant equipment allocations, and on-site testing logs.',
      'Maintained daily technical communication, team coordination, and client / community relations.'
    ],
    deliverables: [
      'Road Rehabilitation Site Support',
      'Drainage & Culvert Construction QA',
      'Materials Inventory Management',
      'Public Sector Infrastructure Reporting'
    ]
  },
  {
    id: 'ministry-of-works',
    category: 'structural',
    expCode: 'EXP 04',
    discipline: 'Public Works & Civil Infrastructure Governance',
    currentRole: false,
    company: 'Ministry of Works and Infrastructures',
    role: 'Industrial Trainee Site Engineer',
    period: '2013 — 2014',
    location: 'Alausa, Ikeja, Lagos State, Nigeria',
    overview: 'Conducted site surveys, soil investigations, and supported municipal engineering project supervision under senior resident civil engineers.',
    responsibilities: [
      'Assisted in project planning, drawing reviews, and engineering team coordination.',
      'Conducted field site surveys, level taking, and soil / sand geotechnical investigations.',
      'Assisted in daily construction activities and monitoring structural contractors on site.',
      'Enforced Health, Safety, and Environmental (HSE) compliance across working zones.',
      'Maintained meticulous daily site documentation, inspection logs, and technical reports.',
      'Engaged in continuous professional engineering mentorship and civil development.'
    ],
    deliverables: [
      'Site Survey & Soil Investigation Reports',
      'HSE Site Compliance Audits',
      'Daily Engineering Progress Logs',
      'Municipal Infrastructure Reviews'
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
                  className={`px-space-md py-1.5 font-label-technical text-label-technical uppercase tracking-wider border transition-all ${activeFilter === 'all'
                    ? 'bg-on-tertiary-container text-surface-container-lowest border-on-tertiary-container shadow-neo-sm font-bold'
                    : 'bg-surface-container-lowest text-on-surface-variant border-surface-dim hover:bg-surface-container-high'
                    }`}
                >
                  All Sectors
                </button>
                <button
                  type="button"
                  onClick={() => setActiveFilter('rail')}
                  className={`px-space-md py-1.5 font-label-technical text-label-technical uppercase tracking-wider border transition-all ${activeFilter === 'rail'
                    ? 'bg-primary-container text-on-primary border-on-tertiary-container shadow-neo-sm font-bold'
                    : 'bg-surface-container-lowest text-on-surface-variant border-surface-dim hover:bg-surface-container-high'
                    }`}
                >
                  Rail &amp; Infrastructure
                </button>
                <button
                  type="button"
                  onClick={() => setActiveFilter('structural')}
                  className={`px-space-md py-1.5 font-label-technical text-label-technical uppercase tracking-wider border transition-all ${activeFilter === 'structural'
                    ? 'bg-primary-container text-on-primary border-on-tertiary-container shadow-neo-sm font-bold'
                    : 'bg-surface-container-lowest text-on-surface-variant border-surface-dim hover:bg-surface-container-high'
                    }`}
                >
                  Structural Buildings
                </button>
                <button
                  type="button"
                  onClick={() => setActiveFilter('qa-qc')}
                  className={`px-space-md py-1.5 font-label-technical text-label-technical uppercase tracking-wider border transition-all ${activeFilter === 'qa-qc'
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
                  href="/Adeyemi_idowu_modupeola_Resume.pdf"
                  download="Adeyemi_idowu_modupeola_Resume.pdf"
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
