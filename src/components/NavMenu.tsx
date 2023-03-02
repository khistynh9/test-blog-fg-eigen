import React from 'react'
import { Link } from 'react-router-dom'

export default function NavMenu() {
    return (
        <>
            {/* navbar */}
            <nav className="py-2 px-6 mx-auto bg-[#EC407A]">
                <div className="flex justify-between items-center">
                    <div className="w-full">
                        <Link to="/">
                            <img
                                src="/logo.png"
                                alt="logo fg"
                                className="h-20 rounded-full"
                            />
                        </Link>
                    </div>
                    <div className="text-xl font-semibold">
                        <ul className="flex list-none item-nav text-white">
                            <li className="px-4 py-2 flex items-center text-xl">
                                <Link to="/">Beranda</Link>
                            </li>
                            <li className="px-4 py-2 flex items-center text-xl">
                                <Link to="/blog">Blog</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
