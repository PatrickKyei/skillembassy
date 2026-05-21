import React, { useState } from 'react';

import { MdMenu, MdClose } from 'react-icons/md';

  

const navLinks = [

{ label: 'Programmes', href: '#programmes' },

{ label: 'Lectures', href: '#lectures' },

{ label: 'Blog', href: '#blog' },

{ label: 'Instructors', href: '#instructors' },

{ label: 'Community', href: '#community' },

{ label: 'FAQ', href: '#faq' },

{ label: 'Telegram', href: '#telegram' },

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

<div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-xl font-bold">

SA

</div>

<div>

<p className="text-sm uppercase tracking-[0.3em] text-slate-300">Skillembassy Aca.</p>

<p className="text-xs text-slate-400">by Trout</p>

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

  

<div className="hidden md:block">

<a

href="https://paystack.com/pay/skillembassy-membership"

target="_blank"

rel="noopener noreferrer"

className="inline-flex items-center rounded-full bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition hover:bg-violet-500"

>

Talent Network

</a>

</div>

</div>

</div>

);

};

  

export default Navbar;