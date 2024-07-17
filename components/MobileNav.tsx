'use client'
import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from 'next/image'
import Link from 'next/link'
import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
  
const MobileNav = ({user}:MobileNavProps) => {
    const pathname=usePathname();
  return (
    <section className=' w-full max-w-[264] ' >
        <Sheet>
    <SheetTrigger>
        <Image src='/icons/hamburger.svg' width={30} height={30} alt='menu' className=' cursor-pointer '/>
    </SheetTrigger>
    <SheetContent side={'right'} className=' bg-slate-100 border-none' >
    <Link href='/' className=' flex cursor-pointer items-center gap-1 px-4 '>
            <Image src='/icons/logo.svg'
            width={34}
            height={34}
            alt='Azurefin logo' 
            
            />
            <h1 className=' text-26 font-ibm-plex-serif  font-bold text-green-800 '>Azurefin</h1>
            </Link>
            <div className='mobilenamv-sheet'>
                <SheetClose asChild>
                    <nav className='flex flex-col gap-6 pt-16 text-white'>
                    {sidebarLinks.map((items)=>{
                const isActive= pathname===items.route||pathname.startsWith(`${items.route}/`)
                return(
                <SheetClose asChild key={items.route}>
                    <Link className={cn('mobilenav-sheet_close w-full', {' bg-green-600 shadow-creditCard':isActive } )} href={items.route} key={items.label}>              
                <Image src={items.imgURL}
                alt={items.label}
                width={25}
                height={20}
                className={cn({'brightness-[3] invert-0':isActive})}
                />
                <p className={cn(' text-16 font-semibold font-inter text-black-2 ',{
                    'text-white':isActive
                })}>
                    {items.label}
                </p>
                
                </Link>
                </SheetClose>
                )
            })}
            USER
                    </nav>
                </SheetClose>
            FOOTER
            </div>
    
    </SheetContent>
  </Sheet>
  </section>
  
  )
}

export default MobileNav