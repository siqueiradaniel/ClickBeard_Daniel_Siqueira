'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { UserCircle } from 'lucide-react'

const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    return (
        <div className="w-full border-b border-neutral-800 bg-neutral-900 text-white">
            <div className="flex items-center justify-between max-w-5xl mx-auto px-4 py-3">
                <div className="text-xl font-bold">
                    <Link href="/">
                        <img
                            src="logo.png"
                            width={120}
                            alt="Logo do site"
                            className="cursor-pointer"
                        />
                    </Link>
                </div>

                <div className="relative">
                    <button onClick={toggleModal}>
                        <UserCircle className="w-8 h-8 text-white hover:text-neutral-300 transition" />
                    </button>

                    {isModalOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg z-10">
                            <button className="block w-full px-4 py-2 text-left hover:bg-neutral-100" onClick={() => alert('Meus agendamentos')}>
                                Meus Agendamentos
                            </button>
                            <button className="block w-full px-4 py-2 text-left hover:bg-neutral-100" onClick={() => alert('Logout')}>
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar
