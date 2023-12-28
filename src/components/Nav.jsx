import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';
import { useState } from 'react';

const Nav = () => {

let [showMenu, setOpen] = useState(false);

  return (
    <header className='padding-x py-8 absolute z-20 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <a href="/">
                <img 
                src={headerLogo} 
                alt="Logo"
                width={130}
                height={29}
                />
            </a>

            <ul className={`flex-1 md:flex justify-center items-center md:gap-16 absolute md:static top-20 max-md:w-full max-md:bg-white transition-all duration-500 ease-in ${showMenu ? 'top-20 opacity-100' : 'top-[-490px] opacity-0'}`}>
                {navLinks.map((item) => (
                    <li className='max-md:my-8' key={item.label}>
                        <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray hover:text-black duration-500'>{item.label}</a>
                    </li>
                ))}
            </ul>
            <div className='hidden max-md:block cursor-pointer' onClick={() => setOpen(!showMenu)}>
                <img 
                src={hamburger} 
                alt="Hamburger" 
                width={25}
                height={25}
                />
            </div>
        </nav>
    </header>
  )
}

export default Nav