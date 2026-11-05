import { useState } from 'react';

export function ContactPage() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    serviceCategory: 'QA/QC & Site Supervision',
    projectLocation: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submittedTicket, setSubmittedTicket] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('adeyemimodupeola02@yahoo.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText('NO 32, Okesanya Street, Papa-Ajao, Mushin, Lagos State, Nigeria');
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      const ticketNumber = `AIM-CE-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedTicket(ticketNumber);
      setSubmitting(false);
    }, 800);
  };

  const handleReset = () => {
    setSubmittedTicket(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      organization: '',
      serviceCategory: 'QA/QC & Site Supervision',
      projectLocation: '',
      message: ''
    });
  };

  return (
    <div className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]">
      <div className="flex flex-col w-full">
        
        {/* SECTION HEADER & STATUS ARCHITECTURE */}
        <section className="w-full bg-surface-container-low border-b border-surface-dim">
          <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin py-space-xl">
            {/* Metatags and Operational Indicators */}
            <div className="flex flex-wrap items-center justify-between gap-space-sm mb-space-md">
              <div className="flex items-center gap-space-xs">
                <span className="w-2.5 h-2.5 bg-primary-container inline-block"></span>
                <span className="font-label-technical text-label-technical uppercase text-secondary tracking-widest font-semibold">
                  CONTACT &amp; INQUIRIES // PROFESSIONAL CONSULTATION
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-space-xs">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-surface-container-lowest border border-surface-dim text-on-surface font-label-technical text-label-technical uppercase shadow-sm">
                  <span className="w-2 h-2 bg-primary-container rounded-full animate-pulse"></span>
                  Active Tendering &amp; Consultation Open
                </span>
                <span className="inline-flex items-center px-2.5 py-1 bg-surface-container-high text-on-surface font-label-technical text-label-technical uppercase">
                  COREN Registered // NSE Corporate Member
                </span>
                <span className="inline-flex items-center px-2.5 py-1 bg-on-tertiary-container text-surface-container-lowest font-label-technical text-label-technical uppercase">
                  Turnaround: 24–48 Business Hours
                </span>
              </div>
            </div>

            {/* Main Header Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-end">
              <div className="lg:col-span-8 flex flex-col gap-space-xs">
                <h1 className="font-headline-lg text-headline-lg md:text-display text-on-surface tracking-tight uppercase font-extrabold">
                  Initiate Engineering Consultation
                </h1>
                <p className="font-body-lg text-body-lg text-secondary max-w-3xl pt-space-xs leading-relaxed">
                  Available for civil engineering quality assurance, construction site supervision, structural inspection audits, materials verification, and technical project management consultations across Lagos State and southwestern Nigeria.
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col justify-end lg:items-end gap-space-xs pt-space-sm lg:pt-0">
                <div className="font-label-technical text-label-technical uppercase text-secondary font-semibold">
                  REGISTRATION DIRECTIVE: CE-AIM-INQ-2024
                </div>
                <div className="font-label-technical text-label-technical uppercase text-on-surface-variant">
                  COREN STATUTORY PRACTICE // NSE MEMBER
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TWO-COLUMN MAIN CONSULTATION DESK */}
        <section className="w-full bg-surface">
          <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin py-space-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
              
              {/* LEFT COLUMN: DIRECT INQUIRY CHANNELS & FIELD BASE */}
              <div className="lg:col-span-5 flex flex-col gap-space-lg">
                
                {/* Direct Channels Dossier */}
                <div className="bg-surface-container-lowest border border-surface-dim p-space-lg flex flex-col gap-space-md shadow-neo">
                  <div className="flex items-center justify-between border-b border-surface-dim pb-space-sm">
                    <span className="font-label-technical text-label-technical uppercase text-secondary tracking-widest font-semibold">
                      DIRECT INQUIRY CHANNELS
                    </span>
                    <span className="font-label-technical text-label-technical uppercase text-primary-container font-bold">
                      COMM-SEC-01
                    </span>
                  </div>

                  {/* Email Spec Block */}
                  <div className="flex flex-col gap-1">
                    <span className="font-label-technical text-label-technical uppercase text-secondary">
                      Primary Technical Mailbox
                    </span>
                    <div className="flex items-center justify-between gap-space-xs bg-surface-container-low p-space-sm border border-surface-dim">
                      <span className="font-body-md text-body-md font-semibold text-on-surface truncate">
                        adeyemimodupeola02@yahoo.com
                      </span>
                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          type="button"
                          onClick={handleCopyEmail}
                          className="px-2 py-1 bg-surface-container-lowest border border-surface-dim font-label-technical text-label-technical uppercase text-on-surface hover:bg-surface-container-high transition-colors"
                        >
                          {copiedEmail ? 'COPIED' : 'COPY'}
                        </button>
                        <a
                          aria-label="Direct Email"
                          href="mailto:adeyemimodupeola02@yahoo.com"
                          className="p-1 bg-on-tertiary-container text-surface-container-lowest hover:bg-primary-container transition-colors"
                        >
                          <span className="material-symbols-outlined text-[16px] block">arrow_outward</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Hotline Spec Block */}
                  <div className="flex flex-col gap-1">
                    <span className="font-label-technical text-label-technical uppercase text-secondary">
                      Dispatch Hotline &amp; WhatsApp Wire
                    </span>
                    <div className="flex items-center justify-between gap-space-xs bg-surface-container-low p-space-sm border border-surface-dim">
                      <div>
                        <div className="font-body-md text-body-md font-bold text-on-surface">
                          08162859086
                        </div>
                        <div className="font-label-technical text-label-technical text-secondary">
                          Primary Direct Dispatch &amp; WhatsApp
                        </div>
                      </div>
                      <a
                        href="https://wa.me/2348162859086"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1.5 bg-on-tertiary-container text-surface-container-lowest font-label-technical text-label-technical uppercase hover:bg-primary-container transition-colors flex items-center gap-1 shadow-sm"
                      >
                        <span className="material-symbols-outlined text-[14px]">chat</span>
                        WHATSAPP
                      </a>
                    </div>

                    <div className="flex items-center justify-between gap-space-xs bg-surface-container-low p-space-sm border border-surface-dim mt-1">
                      <div>
                        <div className="font-body-md text-body-md font-bold text-on-surface">
                          07084523965
                        </div>
                        <div className="font-label-technical text-label-technical text-secondary">
                          Secondary Operational Line
                        </div>
                      </div>
                      <a
                        href="tel:07084523965"
                        className="px-2.5 py-1.5 bg-surface-container-lowest text-on-surface font-label-technical text-label-technical uppercase border border-surface-dim hover:bg-surface-container-high transition-colors flex items-center gap-1"
                      >
                        <span className="material-symbols-outlined text-[14px]">call</span>
                        CALL
                      </a>
                    </div>
                  </div>

                  {/* Operating Coordinates */}
                  <div className="flex flex-col gap-1">
                    <span className="font-label-technical text-label-technical uppercase text-secondary">
                      Office &amp; Field Operational Perimeter
                    </span>
                    <div className="bg-surface-container-low p-space-sm border border-surface-dim flex flex-col gap-2">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="font-body-sm text-body-sm font-bold text-on-surface">
                            NO 32, Okesanya Street, Papa-Ajao, Mushin
                          </div>
                          <div className="font-body-sm text-body-sm text-secondary">
                            Lagos State, Nigeria // Operational Base
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={handleCopyAddress}
                          className="px-2 py-1 bg-surface-container-lowest border border-surface-dim font-label-technical text-label-technical uppercase text-on-surface hover:bg-surface-container-high transition-colors shrink-0"
                        >
                          {copiedAddress ? 'COPIED' : 'COPY'}
                        </button>
                      </div>
                      <div className="font-label-technical text-label-technical text-on-surface-variant border-t border-surface-dim/60 pt-1">
                        Active Coverage: Lagos Island, Victoria Island, Ikeja, Lekki, Mushin, Ogun, &amp; Ibadan Corridor
                      </div>
                    </div>
                  </div>
                </div>

                {/* Consultation Protocol Guidelines */}
                <div className="bg-surface-container-low border border-surface-dim p-space-md flex flex-col gap-space-sm">
                  <span className="font-label-technical text-label-technical uppercase text-secondary tracking-widest font-bold">
                    Submission Protocol
                  </span>
                  <ul className="flex flex-col gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary-container text-[16px] shrink-0 mt-0.5">check</span>
                      <span>For structural site audits, please mention structural drawing revisions and project location.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary-container text-[16px] shrink-0 mt-0.5">check</span>
                      <span>Materials testing requests should detail cube quantities and concrete grade specifications.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary-container text-[16px] shrink-0 mt-0.5">check</span>
                      <span>All technical inquiries are handled with strict NDA and professional engineering confidentiality.</span>
                    </li>
                  </ul>
                </div>

                {/* Download CV Card */}
                <div className="bg-surface-container-lowest border border-surface-dim p-space-md flex items-center justify-between shadow-neo-sm">
                  <div>
                    <span className="font-title text-title font-bold text-on-surface block">
                      Curriculum Vitae
                    </span>
                    <span className="font-body-sm text-body-sm text-secondary">
                      Comprehensive professional dossier (PDF)
                    </span>
                  </div>
                  <a
                    href="/Adeyemi_Modupeola_Civil_Engineer_CV.pdf"
                    download="Adeyemi_Modupeola_Civil_Engineer_CV.pdf"
                    className="inline-flex items-center gap-1 px-space-md py-space-sm bg-primary-container text-on-primary font-label-lg text-label-lg uppercase tracking-wider shadow-neo-sm hover:shadow-neo transition-all"
                  >
                    <span className="material-symbols-outlined text-[18px]">download</span>
                    <span>Download</span>
                  </a>
                </div>

              </div>

              {/* RIGHT COLUMN: INTERACTIVE FORM DESK */}
              <div className="lg:col-span-7">
                <div className="bg-surface-container-lowest border border-surface-dim p-space-lg md:p-space-xl shadow-neo">
                  
                  {submittedTicket ? (
                    /* Success Confirmation State */
                    <div className="py-space-lg flex flex-col items-start gap-space-md animate-fadeIn">
                      <div className="w-12 h-12 bg-primary-container text-on-primary flex items-center justify-center shadow-neo-sm">
                        <span className="material-symbols-outlined text-[28px]">check_circle</span>
                      </div>
                      <div>
                        <span className="font-label-technical text-label-technical uppercase text-primary font-bold tracking-widest block mb-1">
                          Transmission Successful // Inquiry Registered
                        </span>
                        <h2 className="font-headline-md text-headline-md font-bold text-on-surface">
                          Consultation Request Logged
                        </h2>
                      </div>

                      <div className="w-full bg-surface-container-low p-space-md border border-surface-dim space-y-2">
                        <div className="flex items-center justify-between border-b border-surface-dim pb-1">
                          <span className="font-label-technical text-label-technical uppercase text-secondary">
                            Reference Tracking ID
                          </span>
                          <span className="font-label-technical text-label-technical font-bold text-on-surface select-all">
                            {submittedTicket}
                          </span>
                        </div>
                        <div className="flex items-center justify-between border-b border-surface-dim pb-1">
                          <span className="font-label-technical text-label-technical uppercase text-secondary">
                            Client / Organization
                          </span>
                          <span className="font-body-sm text-body-sm font-semibold text-on-surface">
                            {formData.name} ({formData.organization || 'Independent Development'})
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-label-technical text-label-technical uppercase text-secondary">
                            Service Area
                          </span>
                          <span className="font-body-sm text-body-sm font-semibold text-primary">
                            {formData.serviceCategory}
                          </span>
                        </div>
                      </div>

                      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                        Thank you for reaching out. Your technical consultation inquiry has been routed to Engr. Adeyemi Idowu Modupeola&apos;s direct desk. A formal engineering appraisal and dispatch response will be transmitted to <strong>{formData.email}</strong> within 24–48 business hours.
                      </p>

                      <button
                        type="button"
                        onClick={handleReset}
                        className="mt-space-sm px-space-lg py-space-sm bg-on-tertiary-container text-surface-container-lowest font-label-lg text-label-lg uppercase tracking-wider border border-on-tertiary-container shadow-neo-sm hover:bg-primary-container hover:text-on-primary transition-all"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  ) : (
                    /* Active Consultation Form */
                    <form onSubmit={handleSubmit} className="flex flex-col gap-space-md">
                      <div className="border-b border-surface-dim pb-space-sm flex items-center justify-between">
                        <div>
                          <span className="font-label-technical text-label-technical uppercase tracking-widest text-secondary block">
                            FORM REF: FORM-CIVIL-2024
                          </span>
                          <h2 className="font-title text-title font-bold text-on-surface uppercase">
                            Formal Inquiry Dossier
                          </h2>
                        </div>
                        <span className="font-label-technical text-label-technical uppercase text-primary font-bold bg-surface-container px-2 py-1 border border-surface-dim">
                          Standard Protocol
                        </span>
                      </div>

                      {/* Name & Email Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                        <div className="flex flex-col gap-1">
                          <label htmlFor="name" className="font-label-technical text-label-technical uppercase text-secondary font-semibold">
                            Full Name / Lead Engineer *
                          </label>
                          <input
                            id="name"
                            type="text"
                            required
                            placeholder="e.g. Engr. Babatunde Williams"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-space-sm py-2 bg-surface-container-low border border-surface-dim text-on-surface font-body-md text-body-md focus:outline-none focus:border-primary-container focus:bg-surface-container-lowest transition-colors"
                          />
                        </div>

                        <div className="flex flex-col gap-1">
                          <label htmlFor="email" className="font-label-technical text-label-technical uppercase text-secondary font-semibold">
                            Official Email Address *
                          </label>
                          <input
                            id="email"
                            type="email"
                            required
                            placeholder="e.g. bwilliams@construction.ng"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-space-sm py-2 bg-surface-container-low border border-surface-dim text-on-surface font-body-md text-body-md focus:outline-none focus:border-primary-container focus:bg-surface-container-lowest transition-colors"
                          />
                        </div>
                      </div>

                      {/* Phone & Organization Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                        <div className="flex flex-col gap-1">
                          <label htmlFor="phone" className="font-label-technical text-label-technical uppercase text-secondary font-semibold">
                            Phone / WhatsApp Contact
                          </label>
                          <input
                            id="phone"
                            type="tel"
                            placeholder="+234 ..."
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-space-sm py-2 bg-surface-container-low border border-surface-dim text-on-surface font-body-md text-body-md focus:outline-none focus:border-primary-container focus:bg-surface-container-lowest transition-colors"
                          />
                        </div>

                        <div className="flex flex-col gap-1">
                          <label htmlFor="org" className="font-label-technical text-label-technical uppercase text-secondary font-semibold">
                            Organization / Client Firm
                          </label>
                          <input
                            id="org"
                            type="text"
                            placeholder="e.g. Apex Civil Consortium"
                            value={formData.organization}
                            onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                            className="w-full px-space-sm py-2 bg-surface-container-low border border-surface-dim text-on-surface font-body-md text-body-md focus:outline-none focus:border-primary-container focus:bg-surface-container-lowest transition-colors"
                          />
                        </div>
                      </div>

                      {/* Service Category & Location Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                        <div className="flex flex-col gap-1">
                          <label htmlFor="service" className="font-label-technical text-label-technical uppercase text-secondary font-semibold">
                            Engineering Discipline Required *
                          </label>
                          <select
                            id="service"
                            value={formData.serviceCategory}
                            onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                            className="w-full px-space-sm py-2 bg-surface-container-low border border-surface-dim text-on-surface font-body-md text-body-md focus:outline-none focus:border-primary-container focus:bg-surface-container-lowest transition-colors"
                          >
                            <option value="QA/QC & Site Supervision">QA/QC &amp; Site Supervision</option>
                            <option value="Concrete & Materials Laboratory Testing">Concrete &amp; Materials Testing</option>
                            <option value="Structural Integrity Inspection Audit">Structural Inspection Audit</option>
                            <option value="Highway & Civil Infrastructure Supervision">Highway &amp; Civil Supervision</option>
                            <option value="Tendering & Project Management Consultation">Tendering &amp; Project Management</option>
                          </select>
                        </div>

                        <div className="flex flex-col gap-1">
                          <label htmlFor="loc" className="font-label-technical text-label-technical uppercase text-secondary font-semibold">
                            Project Site Location
                          </label>
                          <input
                            id="loc"
                            type="text"
                            placeholder="e.g. Lekki Phase 1, Lagos"
                            value={formData.projectLocation}
                            onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                            className="w-full px-space-sm py-2 bg-surface-container-low border border-surface-dim text-on-surface font-body-md text-body-md focus:outline-none focus:border-primary-container focus:bg-surface-container-lowest transition-colors"
                          />
                        </div>
                      </div>

                      {/* Message / Scope */}
                      <div className="flex flex-col gap-1">
                        <label htmlFor="message" className="font-label-technical text-label-technical uppercase text-secondary font-semibold">
                          Scope of Consultation / Structural Inquiry *
                        </label>
                        <textarea
                          id="message"
                          required
                          rows={4}
                          placeholder="Please provide details regarding project scale, expected commencement date, and specific QA/QC deliverables needed..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-space-sm py-2 bg-surface-container-low border border-surface-dim text-on-surface font-body-md text-body-md focus:outline-none focus:border-primary-container focus:bg-surface-container-lowest transition-colors resize-y"
                        ></textarea>
                      </div>

                      {/* Form Actions */}
                      <div className="pt-space-sm border-t border-surface-dim flex flex-col sm:flex-row items-center justify-between gap-space-sm">
                        <span className="font-label-technical text-label-technical text-secondary uppercase text-center sm:text-left">
                          * DIRECT SUBMISSION TO REGISTERED ENGINEER
                        </span>
                        <button
                          type="submit"
                          disabled={submitting}
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-xl py-space-sm bg-primary-container text-on-primary font-label-lg text-label-lg uppercase tracking-wider border border-on-tertiary-container shadow-neo hover:bg-on-tertiary-container hover:shadow-neo-orange active:translate-x-[2px] active:translate-y-[2px] transition-all disabled:opacity-60"
                        >
                          {submitting ? (
                            <>
                              <span className="w-4 h-4 border-2 border-on-primary border-t-transparent rounded-full animate-spin"></span>
                              <span>Registering...</span>
                            </>
                          ) : (
                            <>
                              <span>Transmit Consultation Request</span>
                              <span className="material-symbols-outlined text-[18px]">send</span>
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  )}

                </div>
              </div>

            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
