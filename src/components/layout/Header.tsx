import React, { useState, useRef } from 'react';
import { menuItems } from "../../config/menuItems";
import type { MenuItem } from '../../config/menuItems';
import { GoX, GoChevronDown } from 'react-icons/go';
import { MdOutlineMenu } from "react-icons/md";

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openPath, setOpenPath] = useState<string[]>([]);
    const closeTimeout = useRef<number | null>(null);

    // Função para delay ao sair do menu
    const handleMenuLeave = (level: number) => {
        closeTimeout.current = setTimeout(() => {
            setOpenPath(openPath.slice(0, level));
        }, 160); // Delay de 160ms
    };

    const handleMenuEnter = (path: string[]) => {
        if (closeTimeout.current) clearTimeout(closeTimeout.current);
        setOpenPath(path);
    };

    return (
        <header className="navbar fixed top-0 left-0 z-50 shadow-lg bg-gray-50 text-gray-800 w-full backdrop-blur-md justify-start">
            <div className="container mx-auto px-4 flex justify-between items-center h-16">

                

                {/* Desktop Menu */}
                <nav className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuItems.map((item: MenuItem) => (
                            <li
                                key={item.id}
                                className="relative group"
                                onMouseEnter={() => handleMenuEnter([item.id])}
                                onMouseLeave={() => handleMenuLeave(0)}
                            >
                                <a href={item.href} className="flex items-center space-x-1">
                                    <span>{item.title}</span>
                                    {item.children && <GoChevronDown className="text-lg" />}
                                </a>
                                {item.children && (
                                    <ul className={
                                        `absolute top-full left-0 mt-0 p-2 shadow-lg bg-gray-50 text-gray-800 rounded z-50 min-w-[220px]
                                        ${openPath[0] === item.id ? 'opacity-100 visible' : 'opacity-0 invisible'}`
                                    }>
                                        {item.children.map((sub: MenuItem) => (
                                            <li
                                                key={sub.id}
                                                className="relative group"
                                                onMouseEnter={() => handleMenuEnter([item.id, sub.id])}
                                                onMouseLeave={() => handleMenuLeave(1)}
                                            >
                                                <a href={sub.href} className="block px-4 py-2 whitespace-nowrap hover:bg-gray-100 flex items-center">
                                                    {sub.title}
                                                    {sub.children && <GoChevronDown className="ml-2 text-xs align-middle" />}
                                                </a>
                                                {sub.children && (
                                                    <ul className={
                                                        `absolute bg-gray-50 text-gray-800 top-0 left-full ml-1 p-2 shadow-lg rounded z-50 min-w-[220px]
                                                        ${(openPath[0] === item.id && openPath[1] === sub.id) ? 'opacity-100 visible' : 'opacity-0 invisible'}`
                                                    }>
                                                        {sub.children.map((subSub: MenuItem) => (
                                                            <li key={subSub.id}>
                                                                <a
                                                                    href={subSub.href}
                                                                    className="block px-4 py-2 whitespace-nowrap hover:bg-gray-100"
                                                                >
                                                                    {subSub.title}
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile Toggle Button */}
                <button
                    className="lg:hidden p-2"
                    onClick={() => setIsMenuOpen((o) => !o)}
                    aria-title="Toggle menu"
                >
                    {isMenuOpen ? <GoX size={24} /> : <MdOutlineMenu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden`}>
                <ul className="menu menu-compact px-4 py-2">
                    {menuItems.map((item: MenuItem) => (
                        <React.Fragment key={item.id}>
                            <li>
                                <a href={item.href} onClick={() => setIsMenuOpen(false)}>
                                    {item.title}
                                </a>
                            </li>
                            {item.children &&
                                item.children.map((sub: MenuItem) => (
                                    <li key={sub.id} className="pl-4">
                                        <a href={sub.href} onClick={() => setIsMenuOpen(false)}>
                                            {sub.title}
                                        </a>
                                    </li>
                                ))}
                        </React.Fragment>
                    ))}
                </ul>
            </div>
            {/* Logo / Home Link */}
                <a href="#top" className="btn btn-ghost normal-case text-xl">
                    Tech Stack
                </a>
        </header>
    );
};

export default Header;
