import { titleFont } from '@/config/font'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <div className='flex w-full justify-center text-xs mb-10 '>

            <Link
                href={'/'}>
                <span className={`${titleFont.className} antialiased font-bold `}>Teslo</span>
                <span>| Shop </span>
                <span>&copy; {new Date().getFullYear()}</span>
            </Link>

            <Link
                href={'/'}
                className='mx-3'
                >
               Condiciones y Privacidad
            </Link>

            <Link
                href={'/'}
                className='mx-3'
                >
                Contacto
            </Link>







        </div>
    )
}
