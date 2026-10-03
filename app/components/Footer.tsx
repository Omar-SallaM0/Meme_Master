import Link from 'next/link';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/70 dark:border-slate-800 dark:bg-slate-950/60">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-[1fr_1.5fr_1fr] md:items-center">
        <Link href="/" className="flex w-fit items-center gap-3" aria-label="Meme Maker home">
          <span className="flex size-15 items-center justify-center rounded-lg bg-brand-primary font-bold text-white">
            Meme
          </span>
          <span className="text-lg font-bold">Meme Maker</span>
        </Link>

        <div className="space-y-2 text-sm md:text-center">
          <strong className="text-base">Technical Support</strong>
          <p className="text-slate-600 dark:text-slate-400">
            For inquiries or assistance, contact us on WhatsApp.
          </p>
          <small className="text-slate-500 dark:text-slate-500">
            All rights reserved &copy; {currentYear}
          </small>
        </div>

        <div className="flex flex-col gap-4 md:items-end">
          <nav aria-label="Contact and social links" className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
            <a href="https://wa.me/201010910720" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary">
              WhatsApp
            </a>
            <a href="https://github.com/Omar-SallaM0" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/omar-sallam-9aa483259" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary">
              LinkedIn
            </a>
          </nav>
          <a
            className="text-sm text-slate-600 underline decoration-slate-300 underline-offset-4 hover:text-brand-primary dark:text-slate-400"
            target="_blank"
            rel="noopener noreferrer"
            href="https://omar-sallam-portfolio.vercel.app/"
          >
            Eng. Omar Sallam
          </a>
        </div>
      </div>
    </footer>
  );
}