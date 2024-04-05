"use client"
import { Button } from "@/components/ui/button";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerTrigger,
  } from "@/components/ui/drawer"


import { usePathname, useRouter } from "next/navigation"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { useState } from "react";
import { MenuIcon } from "lucide-react";

interface Menu {
    id : number,
    group : string[],
    label : string,
    href : string
}

interface NavbarToggleProps {
    className ?: React.HtmlHTMLAttributes<HTMLElement>,
    menu : Menu[]

}

const NavbarToggle : React.FC<NavbarToggleProps>= ({
    className,
    menu
}) => {

    const pathname = usePathname()
    const router = useRouter()
    const [open,setOpen] = useState(false)
    return ( 
        <Drawer direction="left">
            <DrawerTrigger asChild>
                <Button variant="outline" size="icon">
                    <MenuIcon /> 
                </Button>
            </DrawerTrigger>
            <DrawerContent className="rounded-tr-lg rounded-br-lg">
                <nav 
                className={cn("mt-10 px-5 flex flex-col gap-2", className)}
                    >
                        {
                            menu.map(({id,label,href})=>(
                                <Link 
                                onClick={()=>router.refresh()}
                                key={id}
                                    href={href}
                                    className={cn(
                                        "dark:text-stone-500 dark:hover:text-stone-200 text-stone-500 transition-all",
                                        pathname === href && "dark:text-white text-black font-bold" 
                                    )}
                                >
                                    <DrawerClose>
                                    {label}
                                    </DrawerClose>
                                </Link>
                            ))
                        }
                </nav>
            </DrawerContent>
            </Drawer>
     );
}
 
export default NavbarToggle;
