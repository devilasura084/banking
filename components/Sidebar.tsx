'use client'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Sidebar = ({user}:SiderbarProps) => {
    const pathname=usePathname();
  return (
    <section className='sidebar'>
        <nav className='flex flex-col gap-4'>
            <Link href='/' className=' flex mb-12 cursor-pointer items-center gap-2 '>
            <Image src='/icons/logo.svg'
            width={34}
            height={34}
            alt='Azurefin logo' 
            className=' size-24px max-xl:size-14 '
            />
            <h1 className=' sidebar-logo '>Azurefin</h1>
            </Link>
            {sidebarLinks.map((items)=>{
                const isActive= pathname===items.route||pathname.startsWith(`${items.route}/`)
                return(<Link className={cn('sidebar-link', {' bg-bankGradient shadow-creditCard':isActive } )} href={items.route} key={items.label}>
                <div className=' relative size-8
                '>
                <Image src={items.imgURL}
                alt={items.label}
                fill
                className={cn({'brightness-[3] invert-0':isActive})}
                />
                </div>
                <p className={cn('sidebar-label',{
                    '!text-white':isActive
                })}>
                    {items.label}
                </p>
                </Link>)
            })}
            USER
        </nav>
        FOOTER
    </section>
  )
}

export default Sidebar