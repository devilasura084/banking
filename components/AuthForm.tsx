'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { authformSchema } from '@/lib/utils'
import CustomInput from './CustomInput'

const AuthForm = ({type}:{type:String}) => {
    const [user,setUser]=useState(null);
    
    const form = useForm<z.infer<typeof authformSchema>>({
        resolver: zodResolver(authformSchema),
        defaultValues: {
          email: "",
          password:"",
        },
      })
     
      // 2. Define a submit handler.
      const onSubmit=async (values: z.infer<typeof authformSchema>)=> {
        console.log(values);
      }
  return (
    <section className='auth-form'>
        <header className='flex flex-col gap-5 md:gap-8'>
        <Link href='/' className=' flex cursor-pointer items-center gap-1 '>
            <Image src='/icons/logo.svg'
            width={34}
            height={34}
            alt='Azurefin logo' 
            
            />
            <h1 className=' text-26 font-ibm-plex-serif  font-bold text-green-800 '>Azurefin</h1>
            </Link>
            <div className=' flex flex-1 gap-1 md:gap-3 flex-col'>
                <h1 className='text-24  lg:text-36 font-semibold text-gray-900'>
                    {user
                    ?'Link Account'
                :type==='sign-in'
                ?'Sign-in':'Sign-Up'}
                </h1>
                <p className='text-16 font-normal text-gray-600'>
                    {user?'Link your Account to get started':'Please enter your details'}
                </p>
            </div>
        </header>
        {user?(<div className=' flex flex-col gap-4'>
            {/*PLainLInk*/}
        </div>):(
             <Form {...form}>
             <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
               <CustomInput
               control={form.control}
               name={'email'}
               label={'Email'}
               placeholder='Enter your email'
               />
               <CustomInput
               control={form.control}
               name={'password'}
               label={'Password'}
               placeholder='Enter your password'
               />
               
               <Button className=' border-none button-submit bg-green-600  text-white' type="submit">Submit</Button>
             </form>
           </Form>
        )}
    </section>
  )
}

export default AuthForm