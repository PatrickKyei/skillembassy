import React, { useState } from "react";

import { MdClose } from "react-icons/md";

  

const Banner = () => {

const [isVisible, setIsVisible] = useState(true);

  

const handleDismiss = () => {

setIsVisible(false);

};

  

return isVisible ? (

<div className="relative z-50 w-full bg-gradient-to-r from-violet-600 via-fuchsia-600 to-rose-500 text-white">

<div className="flex w-full items-center justify-between gap-4 px-2 py-2">

<p className="text-sm font-semibold tracking-tight">

The #1 Digital Community. Join Zero To Hero Challenge! 🚀

<a href="#pricing-section" className="ml-2 underline decoration-white/70 underline-offset-4">

Start Today

</a>

</p>

<button

className="rounded-full bg-white/10 px-2.5 py-1.5 text-white hover:bg-white/20 transition"

onClick={handleDismiss}

aria-label="Close announcement"

>

<MdClose size={18} />

</button>

</div>

</div>

) : null;

};

  

export default Banner;