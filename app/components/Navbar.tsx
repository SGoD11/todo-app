'use client';
import React, {useState} from 'react';
import { IoMdAddCircle } from "react-icons/io";
import styles from "./styles.module.css";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname();
    const [isHovered, setIsHovered] = useState(false);
    return (
        <nav className='flex items-center justify-center gap-7 h-max w-100 p-7  '>
            <div className={`px-4 py-4 ${pathname === '/AddList' && ( ' underline underline-offset-4 ')} `}>
                <h1 className='text-3xl font-serif '>
                    <Link href="/">TODO APP</Link>
                </h1>
            </div>
            <div className={`relative px-4 py-4 ${pathname === '/AddList' ? ' hidden ' : ''}`} 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            >
                {/* Add Button */}
                <Link href="/AddList">
                    <IoMdAddCircle className={`${styles.icon} text-4xl text-white`} />
                </Link>

                {/* Hover Text */}
                {isHovered && (
                    <span
                        className="absolute px-2 py-1  text-white text-nowrap text-xs font-light rounded shadow-lg"
                    >
                        Add Items
                    </span>
                )}
            </div>

        </nav>
    );
};

export default Navbar;