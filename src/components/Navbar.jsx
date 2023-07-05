import React, {useState} from 'react'
import { MdViewHeadline, MdClose, MdExpandMore} from "react-icons/md";

const Navbar = () => {
    const [nav, setNav] = useState(true)
    const handleNav = () => {
      setNav(!nav)
    }
  
    return (
    <div className='w-full flex justify-center'>
        <div className='w-full flex justify-between items-center'>
            <div>
                <a href='#home' className='font-bold text-3xl'>Skill Embassy</a>
            </div>
            <div>
                <ul className='hidden w-full flex-row justify-center gap-5 md:flex'>
                <li><a href="#home">Courses</a></li>
                <li><a href="#discover">For Business</a></li>
                <li><a href="#post">Our Story</a></li>
                <li><a href="#contact">Blog</a></li>
                </ul>
            </div>
            <div>
                <button
                    type='button'
                    className='hidden font-bold bg-white text-base border-[2px] py-[5px] px-[20px] rounded-md hover:drop-shadow-xl md:flex'
                >
                    Join Us
                </button>
            </div>
        </div>
        <div onClick={handleNav} className='flex items-center cursor-pointer md:hidden'>
            {!nav ? <MdClose className='text-black' size={30}/> : <MdViewHeadline className='text-black' size={30}/>}
        </div>

        <div className={!nav ? 'fixed flex flex-col items-center p-4 top-16 top-16 w-[100%] border-b-2 bg-wblue h-[200px] ease-in-out duration-300 z-10 md:hidden': 'fixed bottom-[-100%]'}>
            <div className='text-center bg-black bg-opacity-10 rounded w-[40%] shadow-black px-2 py-2.5'>
                <a href='#mycv'>Join Us</a>
            </div>
            <ul className='w-full flex flex-col py-6 px-4'>
                <li><a href="#home">Courses</a></li>
                <li><a href="#discover">For Business</a></li>
                <li><a href="#post">Our Story</a></li>
                <li><a href="#contact">Blog</a></li>
            </ul>
        </div>

    </div>
  )
}



export default Navbar