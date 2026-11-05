import { Link } from 'react-router-dom';

export function AboutPage() {
  return (
    <div className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]">
      <div className="flex flex-col w-full">
        <div className="max-w-[1320px] mx-auto w-full px-margin-mobile md:px-margin-tablet lg:px-margin py-space-xl space-y-space-xl">

          {/* 1. ABOUT INTRODUCTION */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
            {/* Left Column: Narrative Content */}
            <div className="lg:col-span-7 flex flex-col justify-center">

              <h1 className="font-headline-lg text-headline-lg md:text-display text-on-tertiary-container tracking-tight">
                About Me
              </h1>
              <div className="border-l-2 border-primary-container pl-space-md my-space-md bg-surface-container-low/60 py-space-xs">
                <p className="font-title text-title font-medium text-on-tertiary-container leading-relaxed">
                  Building quality through engineering knowledge and practical experience.
                </p>
              </div>
              <div className="space-y-space-md text-on-surface-variant font-body-md text-body-md leading-relaxed">
                <p>
                  I am a Civil Engineer with hands-on experience in construction quality assurance and quality control (QA/QC), site inspections, materials testing, and construction coordination.
                </p>
                <p>
                  My professional responsibilities include supporting construction operations, monitoring compliance with engineering specifications, identifying quality issues, and collaborating with project managers, structural consultants, and subcontractors to maintain high construction standards.
                </p>
                <p>
                  I value precision, teamwork, accountability, and continuous improvement throughout the lifecycle of every civil infrastructure project.
                </p>
              </div>

              {/* Meta Grid */}
              <div className="mt-space-lg pt-space-md border-t border-surface-dim grid grid-cols-2 sm:grid-cols-3 gap-space-md">
                <div>
                  <span className="font-label-technical text-label-technical text-secondary uppercase block mb-1">
                    Discipline
                  </span>
                  <span className="font-body-md text-body-md font-semibold text-on-surface">
                    Civil &amp; Structural
                  </span>
                </div>
                <div>
                  <span className="font-label-technical text-label-technical text-secondary uppercase block mb-1">
                    Focus Areas
                  </span>
                  <span className="font-body-md text-body-md font-semibold text-on-surface">
                    QA/QC &amp; Supervision
                  </span>
                </div>
                <div>
                  <span className="font-label-technical text-label-technical text-secondary uppercase block mb-1">
                    Location Practice
                  </span>
                  <span className="font-body-md text-body-md font-semibold text-on-surface">
                    Nigeria (Lagos / Ogun)
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Authentic Engineering Workstation Asset */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="bg-surface-container-lowest border border-surface-dim p-space-xs shadow-neo-light hover:shadow-neo transition-all duration-200">
                <div className="relative overflow-hidden bg-surface-container-high aspect-[4/3] w-full">
                  <img
                    alt="Engr. Adeyemi Idowu Modupeola reviewing structural engineering blueprints and CAD models"
                    className="w-full h-full object-cover object-center hover:scale-[1.02] transition-all duration-300"
                    src="/assets/adeyemi-about-desk.jpg"
                  />
                  <div className="absolute top-space-xs left-space-xs bg-surface-container-lowest/95 px-space-xs py-0.5 border border-surface-dim">
                    <span className="font-label-technical text-label-technical uppercase text-on-surface font-semibold">
                      Design &amp; Quality Review Desk
                    </span>
                  </div>
                  <div className="absolute bottom-space-xs right-space-xs bg-surface-container-lowest/95 px-space-xs py-0.5 border border-surface-dim">
                    <span className="font-label-technical text-label-technical uppercase text-primary font-bold">
                      COREN / NSE CERTIFIED
                    </span>
                  </div>
                </div>
                <div className="pt-space-sm pb-space-xs px-space-xs flex items-center justify-between border-t border-surface-dim mt-space-xs">
                  <span className="font-label-technical text-label-technical text-on-surface-variant font-medium">
                    Structural Checks • Blueprint Review • QA/QC Documentation
                  </span>
                  <span className="material-symbols-outlined text-[18px] text-primary-container shrink-0">verified</span>
                </div>
              </div>
            </div>
          </section>

          {/* 2. EDUCATION & ACADEMIC CREDENTIALS */}
          <section className="pt-space-md border-t border-surface-dim">
            <div className="flex items-center justify-between mb-space-lg">
              <div>
                <span className="font-label-technical text-label-technical uppercase tracking-widest text-secondary block mb-1">
                  Academic Credentials
                </span>
                <h2 className="font-headline-md text-headline-md text-on-tertiary-container">
                  Education &amp; Studies
                </h2>
              </div>
              <Link to="/education" className="inline-flex items-center gap-1 font-label-lg text-label-lg uppercase tracking-wider text-primary hover:text-on-surface transition-colors">
                <span>View All Certifications</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              {/* Degree 1 */}
              <div className="bg-surface-container-lowest border border-surface-dim p-space-lg hover:border-on-tertiary-container hover:shadow-neo transition-all">
                <div className="flex items-start justify-between mb-space-sm">
                  <span className="font-label-technical text-label-technical uppercase tracking-wider text-secondary">
                    Undergraduate Degree
                  </span>
                  <span className="material-symbols-outlined text-secondary text-[20px]">school</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">
                  Bachelor of Technology (B.Tech)
                </h3>
                <p className="font-body-lg text-body-lg text-primary font-medium mb-space-md">
                  Civil Engineering
                </p>
                <div className="pt-space-sm border-t border-surface-container-high flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-[18px] text-secondary">apartment</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Ladoke Akintola University of Technology (LAUTECH), Oyo State.
                  </span>
                </div>
              </div>

              {/* Degree 2 */}
              <div className="bg-surface-container-lowest border border-surface-dim p-space-lg hover:border-on-tertiary-container hover:shadow-neo transition-all relative">
                <div className="flex items-start justify-between mb-space-sm">
                  <span className="font-label-technical text-label-technical uppercase tracking-wider text-secondary">
                    Postgraduate Study
                  </span>
                  <span className="inline-flex items-center gap-1 bg-primary-fixed text-on-primary-fixed-variant px-space-xs py-0.5 font-label-technical text-label-technical font-semibold border border-primary-container/20">
                    <span className="w-1.5 h-1.5 bg-primary-container"></span>
                    Status: In Progress
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">
                  Master of Science (M.Sc)
                </h3>
                <p className="font-body-lg text-body-lg text-primary font-medium mb-space-md">
                  Project Management
                </p>
                <div className="pt-space-sm border-t border-surface-container-high flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-[18px] text-secondary">history_edu</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Advanced studies in construction lifecycle delivery, risk analysis, and procurement.
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* 3. CORE EXPERTISE & CAPABILITIES */}
          <section className="pt-space-md border-t border-surface-dim">
            <div className="mb-space-lg">
              <span className="font-label-technical text-label-technical uppercase tracking-widest text-secondary block mb-1">
                Technical Scope
              </span>
              <h2 className="font-headline-md text-headline-md text-on-tertiary-container">
                Professional Capabilities
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
              <div className="bg-surface-container-lowest border border-surface-dim p-space-lg flex flex-col justify-between hover:border-on-tertiary-container hover:shadow-neo transition-all group">
                <div>
                  <div className="w-8 h-1 bg-surface-container-highest group-hover:bg-primary-container transition-colors mb-space-md"></div>
                  <h3 className="font-title text-title text-on-surface font-bold mb-space-xs">
                    Quality Assurance &amp; Quality Control
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Construction quality planning, site inspections, checklists, and compliance audits against engineering benchmarks.
                  </p>
                </div>
                <div className="mt-space-md pt-space-sm border-t border-surface-container flex items-center justify-between">
                  <span className="font-label-technical text-label-technical text-secondary uppercase">Field Discipline</span>
                  <span className="material-symbols-outlined text-[18px] text-secondary group-hover:text-primary-container transition-colors">fact_check</span>
                </div>
              </div>

              <div className="bg-surface-container-lowest border border-surface-dim p-space-lg flex flex-col justify-between hover:border-on-tertiary-container hover:shadow-neo transition-all group">
                <div>
                  <div className="w-8 h-1 bg-surface-container-highest group-hover:bg-primary-container transition-colors mb-space-md"></div>
                  <h3 className="font-title text-title text-on-surface font-bold mb-space-xs">
                    Construction Site Supervision
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Monitoring daily site operations, checking rebar placements, managing formwork alignments, and safety enforcement.
                  </p>
                </div>
                <div className="mt-space-md pt-space-sm border-t border-surface-container flex items-center justify-between">
                  <span className="font-label-technical text-label-technical text-secondary uppercase">Site Operations</span>
                  <span className="material-symbols-outlined text-[18px] text-secondary group-hover:text-primary-container transition-colors">visibility</span>
                </div>
              </div>

              <div className="bg-surface-container-lowest border border-surface-dim p-space-lg flex flex-col justify-between hover:border-on-tertiary-container hover:shadow-neo transition-all group">
                <div>
                  <div className="w-8 h-1 bg-surface-container-highest group-hover:bg-primary-container transition-colors mb-space-md"></div>
                  <h3 className="font-title text-title text-on-surface font-bold mb-space-xs">
                    Materials Testing &amp; Inspection
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Inspecting and testing aggregates, concrete cubes, reinforcement tensile properties, and asphalt batches.
                  </p>
                </div>
                <div className="mt-space-md pt-space-sm border-t border-surface-container flex items-center justify-between">
                  <span className="font-label-technical text-label-technical text-secondary uppercase">Material Verification</span>
                  <span className="material-symbols-outlined text-[18px] text-secondary group-hover:text-primary-container transition-colors">science</span>
                </div>
              </div>

              <div className="bg-surface-container-lowest border border-surface-dim p-space-lg flex flex-col justify-between hover:border-on-tertiary-container hover:shadow-neo transition-all group">
                <div>
                  <div className="w-8 h-1 bg-surface-container-highest group-hover:bg-primary-container transition-colors mb-space-md"></div>
                  <h3 className="font-title text-title text-on-surface font-bold mb-space-xs">
                    Structural Design &amp; Detailing
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Engineering analysis, CAD structural detailing, load calculations, and reviewing as-built drawings.
                  </p>
                </div>
                <div className="mt-space-md pt-space-sm border-t border-surface-container flex items-center justify-between">
                  <span className="font-label-technical text-label-technical text-secondary uppercase">Calculations &amp; Detailing</span>
                  <span className="material-symbols-outlined text-[18px] text-secondary group-hover:text-primary-container transition-colors">architecture</span>
                </div>
              </div>

              <div className="bg-surface-container-lowest border border-surface-dim p-space-lg flex flex-col justify-between hover:border-on-tertiary-container hover:shadow-neo transition-all group">
                <div>
                  <div className="w-8 h-1 bg-surface-container-highest group-hover:bg-primary-container transition-colors mb-space-md"></div>
                  <h3 className="font-title text-title text-on-surface font-bold mb-space-xs">
                    Project Coordination
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Synchronizing tasks between resident engineers, architects, project managers, and trade subcontractors.
                  </p>
                </div>
                <div className="mt-space-md pt-space-sm border-t border-surface-container flex items-center justify-between">
                  <span className="font-label-technical text-label-technical text-secondary uppercase">Interdisciplinary</span>
                  <span className="material-symbols-outlined text-[18px] text-secondary group-hover:text-primary-container transition-colors">hub</span>
                </div>
              </div>

              <div className="bg-surface-container-lowest border border-surface-dim p-space-lg flex flex-col justify-between hover:border-on-tertiary-container hover:shadow-neo transition-all group">
                <div>
                  <div className="w-8 h-1 bg-surface-container-highest group-hover:bg-primary-container transition-colors mb-space-md"></div>
                  <h3 className="font-title text-title text-on-surface font-bold mb-space-xs">
                    Technical Documentation
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Preparing daily progress logs, QA non-conformance records, variance approvals, and final handover portfolios.
                  </p>
                </div>
                <div className="mt-space-md pt-space-sm border-t border-surface-container flex items-center justify-between">
                  <span className="font-label-technical text-label-technical text-secondary uppercase">Records &amp; Handover</span>
                  <span className="material-symbols-outlined text-[18px] text-secondary group-hover:text-primary-container transition-colors">description</span>
                </div>
              </div>
            </div>
          </section>

          {/* 3B. CATEGORIZED TECHNICAL SKILLS MATRIX */}
          <section className="pt-space-md border-t border-surface-dim">
            <div className="mb-space-lg">
              <span className="font-label-technical text-label-technical uppercase tracking-widest text-secondary block mb-1">
                Verified Skillsets // Competency Matrix
              </span>
              <h2 className="font-headline-md text-headline-md text-on-tertiary-container">
                Skills &amp; Technical Proficiency
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {/* Category 1: Software & Digital Tools */}
              <div className="bg-surface-container-lowest border border-surface-dim p-space-lg flex flex-col justify-between shadow-neo-sm hover:shadow-neo transition-all">
                <div>
                  <div className="flex items-center justify-between pb-space-xs border-b border-surface-dim mb-space-md">
                    <span className="font-label-technical text-label-technical uppercase font-bold text-primary">
                      Software &amp; Digital Tools
                    </span>
                    <span className="material-symbols-outlined text-primary text-[20px]">computer</span>
                  </div>
                  <ul className="flex flex-col gap-space-sm">
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary-container text-[18px] shrink-0 mt-0.5">check_box</span>
                      <div>
                        <span className="font-title text-title text-on-surface font-bold text-sm block">AutoCAD Skills</span>
                        <span className="font-body-sm text-body-sm text-secondary">Civil &amp; structural 2D drafting, structural member detailing, elevation sections.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary-container text-[18px] shrink-0 mt-0.5">check_box</span>
                      <div>
                        <span className="font-title text-title text-on-surface font-bold text-sm block">MS Word &amp; Excel Skills</span>
                        <span className="font-body-sm text-body-sm text-secondary">Bar bending schedules, quantity takeoffs, technical reports, material audits.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary-container text-[18px] shrink-0 mt-0.5">check_box</span>
                      <div>
                        <span className="font-title text-title text-on-surface font-bold text-sm block">Technical Proficiency</span>
                        <span className="font-body-sm text-body-sm text-secondary">High proficiency across technical drawing interpretation, engineering specs, and digital tooling.</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="mt-space-md pt-space-xs border-t border-surface-dim">
                  <span className="font-label-technical text-label-technical text-secondary uppercase text-[11px]">Daily Production Stack</span>
                </div>
              </div>

              {/* Category 2: Engineering & Structural Core */}
              <div className="bg-surface-container-lowest border border-surface-dim p-space-lg flex flex-col justify-between shadow-neo-sm hover:shadow-neo transition-all">
                <div>
                  <div className="flex items-center justify-between pb-space-xs border-b border-surface-dim mb-space-md">
                    <span className="font-label-technical text-label-technical uppercase font-bold text-primary">
                      Core Engineering &amp; Site
                    </span>
                    <span className="material-symbols-outlined text-primary text-[20px]">architecture</span>
                  </div>
                  <ul className="flex flex-col gap-space-sm">
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary-container text-[18px] shrink-0 mt-0.5">check_box</span>
                      <div>
                        <span className="font-title text-title text-on-surface font-bold text-sm block">Structural Design &amp; Analysis</span>
                        <span className="font-body-sm text-body-sm text-secondary">Load paths, reinforced concrete design, foundation stability, structural integrity verification.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary-container text-[18px] shrink-0 mt-0.5">check_box</span>
                      <div>
                        <span className="font-title text-title text-on-surface font-bold text-sm block">Site Development</span>
                        <span className="font-body-sm text-body-sm text-secondary">Site clearing, earthworks grading, stormwater drainage layouts, and infrastructure alignment.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary-container text-[18px] shrink-0 mt-0.5">check_box</span>
                      <div>
                        <span className="font-title text-title text-on-surface font-bold text-sm block">Regulatory Compliance</span>
                        <span className="font-body-sm text-body-sm text-secondary">COREN statutory compliance, Nigerian Society of Engineers standards, and Lagos State building codes.</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="mt-space-md pt-space-xs border-t border-surface-dim">
                  <span className="font-label-technical text-label-technical text-secondary uppercase text-[11px]">Engineering Governance</span>
                </div>
              </div>

              {/* Category 3: Professional & Field Execution */}
              <div className="bg-surface-container-lowest border border-surface-dim p-space-lg flex flex-col justify-between shadow-neo-sm hover:shadow-neo transition-all">
                <div>
                  <div className="flex items-center justify-between pb-space-xs border-b border-surface-dim mb-space-md">
                    <span className="font-label-technical text-label-technical uppercase font-bold text-primary">
                      Field Execution &amp; Collaboration
                    </span>
                    <span className="material-symbols-outlined text-primary text-[20px]">group_work</span>
                  </div>
                  <ul className="flex flex-col gap-space-sm">
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary-container text-[18px] shrink-0 mt-0.5">check_box</span>
                      <div>
                        <span className="font-title text-title text-on-surface font-bold text-sm block">Attention to Detail</span>
                        <span className="font-body-sm text-body-sm text-secondary">Millimetric bar placements, concrete cover spacing, testing cubes, and quality checklist audits.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary-container text-[18px] shrink-0 mt-0.5">check_box</span>
                      <div>
                        <span className="font-title text-title text-on-surface font-bold text-sm block">Problem Solving Skills</span>
                        <span className="font-body-sm text-body-sm text-secondary">Fast on-site resolution of structural conflicts, unexpected ground conditions, and subcontractor queries.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary-container text-[18px] shrink-0 mt-0.5">check_box</span>
                      <div>
                        <span className="font-title text-title text-on-surface font-bold text-sm block">Teamwork &amp; Collaboration</span>
                        <span className="font-body-sm text-body-sm text-secondary">Effective synchronization with architects, resident engineers, foremen, and trade specialists.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary-container text-[18px] shrink-0 mt-0.5">check_box</span>
                      <div>
                        <span className="font-title text-title text-on-surface font-bold text-sm block">Effective Communication Skills</span>
                        <span className="font-body-sm text-body-sm text-secondary">Clear site briefings, precise technical memorandums, daily progress logging, and client presentations.</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="mt-space-md pt-space-xs border-t border-surface-dim">
                  <span className="font-label-technical text-label-technical text-secondary uppercase text-[11px]">Field Leadership</span>
                </div>
              </div>
            </div>
          </section>
          <section className="pt-space-md border-t border-surface-dim">
            <div className="mb-space-lg">
              <span className="font-label-technical text-label-technical uppercase tracking-widest text-secondary block mb-1">
                Operational Philosophy
              </span>
              <h2 className="font-headline-md text-headline-md text-on-tertiary-container">
                How I Approach Engineering
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
              <div className="bg-surface-container-lowest border border-surface-dim p-space-md flex flex-col justify-between hover:border-on-tertiary-container hover:shadow-neo transition-all">
                <div>
                  <div className="flex items-center gap-space-xs mb-space-sm text-primary">
                    <span className="material-symbols-outlined text-[20px]">straighten</span>
                  </div>
                  <h3 className="font-title text-title text-on-surface font-bold mb-space-xs">Precision</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Uncompromising adherence to millimetric tolerances, material testing ratios, and structural safety standards.
                  </p>
                </div>
                <div className="mt-space-md pt-space-xs border-t border-surface-dim text-right">
                  <span className="font-label-technical text-label-technical text-secondary uppercase">Core Standard</span>
                </div>
              </div>

              <div className="bg-surface-container-lowest border border-surface-dim p-space-md flex flex-col justify-between hover:border-on-tertiary-container hover:shadow-neo transition-all">
                <div>
                  <div className="flex items-center gap-space-xs mb-space-sm text-primary">
                    <span className="material-symbols-outlined text-[20px]">verified</span>
                  </div>
                  <h3 className="font-title text-title text-on-surface font-bold mb-space-xs">Quality</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Maintaining zero defect tolerance through structured quality assurance audits before, during, and after casting.
                  </p>
                </div>
                <div className="mt-space-md pt-space-xs border-t border-surface-dim text-right">
                  <span className="font-label-technical text-label-technical text-secondary uppercase">Core Standard</span>
                </div>
              </div>

              <div className="bg-surface-container-lowest border border-surface-dim p-space-md flex flex-col justify-between hover:border-on-tertiary-container hover:shadow-neo transition-all">
                <div>
                  <div className="flex items-center gap-space-xs mb-space-sm text-primary">
                    <span className="material-symbols-outlined text-[20px]">group_work</span>
                  </div>
                  <h3 className="font-title text-title text-on-surface font-bold mb-space-xs">Collaboration</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Clear technical communication and coordination across multidisciplinary teams to eliminate costly delays.
                  </p>
                </div>
                <div className="mt-space-md pt-space-xs border-t border-surface-dim text-right">
                  <span className="font-label-technical text-label-technical text-secondary uppercase">Core Standard</span>
                </div>
              </div>

              <div className="bg-surface-container-lowest border border-surface-dim p-space-md flex flex-col justify-between hover:border-on-tertiary-container hover:shadow-neo transition-all">
                <div>
                  <div className="flex items-center gap-space-xs mb-space-sm text-primary">
                    <span className="material-symbols-outlined text-[20px]">sync</span>
                  </div>
                  <h3 className="font-title text-title text-on-surface font-bold mb-space-xs">Continuous Improvement</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Adopting modern testing technologies, lean construction workflows, and proactive hazard prevention protocols.
                  </p>
                </div>
                <div className="mt-space-md pt-space-xs border-t border-surface-dim text-right">
                  <span className="font-label-technical text-label-technical text-secondary uppercase">Core Standard</span>
                </div>
              </div>
            </div>
          </section>

          {/* 5. PROFESSIONAL AFFILIATIONS */}
          <section className="pt-space-md border-t border-surface-dim">
            <div className="mb-space-lg">
              <span className="font-label-technical text-label-technical uppercase tracking-widest text-secondary block mb-1">
                Institutional Engagement
              </span>
              <h2 className="font-headline-md text-headline-md text-on-tertiary-container">
                Professional Affiliations &amp; Bodies
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              <div className="bg-surface-container-lowest border border-surface-dim p-space-md flex items-center justify-between hover:border-on-tertiary-container hover:shadow-neo transition-all">
                <div className="flex items-center gap-space-md">
                  <div className="w-10 h-10 bg-surface-container flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-on-surface text-[22px]">domain</span>
                  </div>
                  <div>
                    <span className="font-label-technical text-label-technical text-secondary uppercase block">
                      Institutional Membership
                    </span>
                    <h3 className="font-title text-title text-on-surface font-bold">
                      Nigerian Society of Engineers (NSE)
                    </h3>
                  </div>
                </div>
                <span className="material-symbols-outlined text-secondary text-[20px]">badge</span>
              </div>

              <div className="bg-surface-container-lowest border border-surface-dim p-space-md flex items-center justify-between hover:border-on-tertiary-container hover:shadow-neo transition-all">
                <div className="flex items-center gap-space-md">
                  <div className="w-10 h-10 bg-surface-container flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-on-surface text-[22px]">corporate_fare</span>
                  </div>
                  <div>
                    <span className="font-label-technical text-label-technical text-secondary uppercase block">
                      Statutory Regulatory Body
                    </span>
                    <h3 className="font-title text-title text-on-surface font-bold">
                      Council for the Regulation of Engineering in Nigeria (COREN)
                    </h3>
                  </div>
                </div>
                <span className="material-symbols-outlined text-secondary text-[20px]">badge</span>
              </div>
            </div>
          </section>

          {/* 6. CLOSING CALL-TO-ACTION */}
          <section className="bg-on-tertiary-container text-on-primary p-space-lg md:p-space-xl border border-on-tertiary-container relative overflow-hidden shadow-neo">
            <div className="absolute top-0 left-0 right-0 h-1 bg-primary-container"></div>
            <div className="max-w-3xl flex flex-col items-start space-y-space-md relative z-10">
              <div className="flex items-center gap-space-xs">
                <span className="w-2 h-2 bg-primary-container"></span>
                <span className="font-label-technical text-label-technical uppercase tracking-widest text-tertiary-fixed font-semibold">
                  Collaboration &amp; Engagement
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg font-bold text-on-primary tracking-tight">
                Let&apos;s build with quality and confidence.
              </h2>
              <p className="font-body-lg text-body-lg text-secondary-container leading-relaxed max-w-2xl">
                Explore my career milestones across heavy rail and institutional developments, or reach out to discuss project consultation.
              </p>
              <div className="flex flex-wrap items-center gap-space-md pt-space-sm">
                <Link
                  to="/experience"
                  className="inline-flex items-center gap-space-xs bg-primary-container text-on-primary font-label-lg text-label-lg uppercase tracking-wider px-space-lg py-space-sm border border-primary-container hover:bg-primary hover:shadow-neo-white transition-all shadow-neo-sm"
                >
                  <span>View Experience</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
                <a
                  href="/Adeyemi_idowu_modupeola_Resume.pdf"
                  download="Adeyemi_idowu_modupeola_Resume.pdf"
                  className="inline-flex items-center gap-space-xs bg-transparent text-on-primary font-label-lg text-label-lg uppercase tracking-wider px-space-lg py-space-sm border border-surface-dim hover:border-on-primary hover:bg-surface-container-lowest/10 transition-all"
                >
                  <span>Download CV</span>
                  <span className="material-symbols-outlined text-[18px]">download</span>
                </a>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
