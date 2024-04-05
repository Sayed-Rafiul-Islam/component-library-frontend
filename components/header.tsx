"use client"

import Link from 'next/link';
import './header.css'
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import NavbarToggle from './navbar-toogle';

const Header = () => {
    const pathname = usePathname()



    const menu = [
        {
            id : 1,
            group : [],
            label : "Installations",
            href : "/"
        },
        {
            id : 2,
            group : [],
            label : "Gallery",
            href : "/gallery"
        },
        {
            id : 3,
            group : [],
            label : "Card",
            href : "/card"
        },
        {
            id : 4,
            group : [],
            label : "Slider",
            href : "/slider"
        },
    ]

    return ( 
        <div>
            <div className='fixed md:hidden top-4 left-4'>
                <NavbarToggle menu={menu} />
            </div>
            <div className="header hidden md:flex border-r dark:border-stone-800">
                <div className="nav-bar ">
                    <div className='nav-bar-inner'>
                        <div className="nav-links mt-10 px-5 flex flex-col gap-2">
                        {
                            menu.map(({id,group,label,href})=>
                                <div key={id}>
                                    <Link
                                        className={
                                        `
                                            ${pathname === href && 'dark:text-white text-black font-bold'}
                                        dark:text-stone-500 dark:hover:text-stone-200 
                                            text-stone-500
                                            
                                            transition-all
                                        `}
                                        href={href}
                                    >
                                        {label}
                                    </Link>
                                </div>
                            )
                        }
                        </div>
                    </div>
                </div>  
            </div>
            <div className="header-psudo"/>
               
        </div>
     );
}
 
export default Header;