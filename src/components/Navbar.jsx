import React, { useState } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';

const navLinks = [
  { label: 'Home', href: '#creator-central' },
  { label: 'How it works', href: '#guarantee-section' },
  { label: "What's inside", href: '#inside-section' },
  { label: "Who's it for", href: '#who-section' },
  { label: 'Community funded', href: '#funded-section' },
  { label: 'Join', href: '#pricing-section' },
];

const Navbar = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const handleToggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  return (
    <div className="sticky top-0 left-0 right-0 z-40 bg-black/95 border-b border-white/10 backdrop-blur-lg text-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-xl font-bold">SK</div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Skillembassy</p>
            <p className="text-xs text-slate-400">Community · Execution · Launch</p>
          </div>
        </div>

        <div className="md:hidden">
          <button onClick={handleToggleNav} className="text-white focus:outline-none">
            {isNavOpen ? <MdClose size={28} /> : <MdMenu size={28} />}
          </button>
        </div>

        <nav className={`w-full md:w-auto ${isNavOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col gap-4 text-center md:flex-row md:items-center md:gap-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-sm text-slate-100 hover:text-white transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

       
      </div>
    </div>
  );
};

export default Navbar;
