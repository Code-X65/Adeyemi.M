import { Link } from 'react-router-dom';

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="w-full bg-surface-container-low border-t border-surface-dim mt-auto">
      <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin py-space-xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter mb-space-xl">
          {/* Identity & Accreditation */}
          <div className="md:col-span-2 flex flex-col justify-between border-b md:border-b-0 md:border-r border-surface-dim pb-space-lg md:pb-0 md:pr-gutter">
            <div>
              <div className="flex items-center gap-space-sm mb-space-xs">
                <div className="w-2.5 h-2.5 bg-primary-container"></div>
                <span className="font-title text-title uppercase font-bold text-on-surface">
                  Adeyemi Idowu Modupeola
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md mt-space-xs leading-relaxed">
                Licensed Civil Engineering Consultant. Specializing in heavy infrastructure analysis,
                reinforced concrete frameworks, construction QA/QC, and precision project supervision across institutional and municipal domains.
              </p>
            </div>

          </div>

          {/* Index Directory */}
          <div className="flex flex-col border-b md:border-b-0 md:border-r border-surface-dim pb-space-lg md:pb-0 md:pr-gutter">
            <span className="font-label-technical text-label-technical uppercase tracking-widest text-secondary mb-space-md">
              Portfolio Directory
            </span>
            <ul className="flex flex-col gap-space-sm">
              <li className="list-none">
                <Link to="/" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary uppercase tracking-wider transition-colors">
                  01. Overview &amp; Home
                </Link>
              </li>
              <li className="list-none">
                <Link to="/about" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary uppercase tracking-wider transition-colors">
                  02. Engineering Profile
                </Link>
              </li>
              <li className="list-none">
                <Link to="/experience" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary uppercase tracking-wider transition-colors">
                  03. Field Experience &amp; Projects
                </Link>
              </li>
              <li className="list-none">
                <Link to="/education" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary uppercase tracking-wider transition-colors">
                  04. Education &amp; Credentials
                </Link>
              </li>
              <li className="list-none">
                <Link to="/contact" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary uppercase tracking-wider transition-colors">
                  05. Formal Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Inquiry & Coordinates */}
          <div className="flex flex-col">
            <span className="font-label-technical text-label-technical uppercase tracking-widest text-secondary mb-space-md">
              Direct Comm &amp; Field Perimeter
            </span>
            <div className="space-y-space-sm">
              <div className="bg-surface-container-lowest p-space-sm border border-surface-dim">
                <span className="font-label-technical text-label-technical uppercase text-secondary block">Direct Email</span>
                <a href="mailto:adeyemimodupeola02@yahoo.com" className="font-body-sm text-body-sm font-semibold text-on-surface hover:text-primary select-all truncate block">
                  adeyemimodupeola02@yahoo.com
                </a>
              </div>
              <div className="bg-surface-container-lowest p-space-sm border border-surface-dim">
                <span className="font-label-technical text-label-technical uppercase text-secondary block">Direct Lines</span>
                <div className="font-body-sm text-body-sm font-semibold text-on-surface flex flex-wrap gap-x-2">
                  <a href="tel:08162859086" className="hover:text-primary">08162859086</a>
                  <span className="text-secondary">/</span>
                  <a href="tel:07084523965" className="hover:text-primary">07084523965</a>
                </div>
              </div>
              <div className="bg-surface-container-lowest p-space-sm border border-surface-dim">
                <span className="font-label-technical text-label-technical uppercase text-secondary block">Office / Address</span>
                <span className="font-body-sm text-body-sm text-on-surface">No 32, Okesanya Street, Papa-Ajao, Mushin, Lagos State</span>
              </div>
              <div className="bg-surface-container-lowest p-space-sm border border-surface-dim flex items-center justify-between">
                <span className="font-label-technical text-label-technical uppercase text-secondary">Status</span>
                <span className="font-label-technical text-label-technical uppercase font-bold text-on-primary-container bg-primary-fixed px-space-xs py-0.5 border border-primary-container/20">
                  Active Tendering
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Standards Sub-footer */}
        <div className="border-t border-surface-dim pt-space-md flex flex-col md:flex-row items-center justify-between gap-space-sm">
          <p className="font-label-technical text-label-technical text-secondary uppercase text-center md:text-left">
            &copy; {CURRENT_YEAR} ADEYEMI IDOWU MODUPEOLA. ALL RIGHTS RESERVED. CIVIL ENGINEERING DOSSIER.
          </p>

        </div>
      </div>
    </footer>
  );
}
