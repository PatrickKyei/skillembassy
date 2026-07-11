import React from 'react';

const footerSections = [
  {
    title: 'Explore',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Community', href: '#community' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'FAQ', href: '#faq-section' },
      { label: 'Pricing', href: '#pricing-section' },
      { label: 'Contact', href: 'mailto:hello@skillembassy.com' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.12),_transparent_35%),linear-gradient(135deg,_rgba(2,6,23,0.98),_rgba(3,7,18,1))] px-6 py-16 text-sm text-slate-400">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.6fr_0.6fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10 text-lg font-semibold text-cyan-300">
                S
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Skillembassy</p>
                <p className="text-xs text-slate-500">Community · Strategy · Growth</p>
              </div>
            </div>

            <p className="mt-6 max-w-lg text-base leading-7 text-slate-300">
              The community for creators who want to build with purpose, sharpen their craft, and turn their ideas into sustainable income.
            </p>

          
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white">{section.title}</h3>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-slate-300 transition hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Skillembassy. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <a href="https://web.facebook.com/groups/formasterminds" className="transition hover:text-white">Facebook</a>
            <a href="https://www.linkedin.com/groups/9875151/" className="transition hover:text-white">LinkedIn</a>
            </div>
        </div>
      </div>
    </footer>
  );
}
