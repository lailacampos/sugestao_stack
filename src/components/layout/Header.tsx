// src/components/layout/Header.tsx
import React, { useState } from 'react';
import { menuItems } from "../../config/menuItems";
import type { MenuItem } from '../../config/menuItems';
import { GoX, GoChevronDown } from 'react-icons/go';
import { MdOutlineMenu } from "react-icons/md";

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

    console.log('Menu Items:', menuItems);
    console.log('Is Menu Open:', isMenuOpen);
    console.log('Open Submenu:', openSubmenu);
    console.log("Map menuItems:", menuItems.map(item => ({
        id: item.id,
        title: item.title,
        href: item.href,
        icon: item.icon,
        children: item.children ? item.children.map(child => ({
            id: child.id,
            title: child.title,
            href: child.href,
            icon: child.icon,
            children: child.children ? child.children.map(subChild => ({
                id: subChild.id,
                title: subChild.title,
                href: subChild.href,
                icon: subChild.icon
            })) : []
        })) : []
    })));

    const handleOpenSubmenu = (id: string) => {
        setOpenSubmenu(prev => (prev === id ? null : id));
    };

    return (
        <header className="navbar fixed top-0 left-0 z-50 shadow-lg bg-gray-50 w-full backdrop-blur-md justify-start">
            <div className="container mx-auto px-4 flex justify-between items-center h-16">

                {/* Desktop Menu */}
                <nav className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuItems.map((item: MenuItem) => (
                            <li key={item.id} className="relative group">
                                <a href={item.href} className="flex items-center space-x-1">
                                    <span>{item.title}</span>
                                    {item.children && <GoChevronDown className="text-lg" />}
                                </a>
                                {item.children && (
                                    <ul className="absolute top-full left-0 mt-0 p-2 shadow-lg bg-gray-50 rounded transition-opacity duration-200 focus-within:visible opacity-100 group-hover:opacity-100 focus-within:opacity-100 group-hover:visible invisible z-100">
                                        {item.children.map((sub: MenuItem) => (
                                            <li key={sub.id} className="relative group">
                                                <a href={sub.href} className="block px-4 py-2 whitespace-nowrap hover:bg-gray-100">
                                                    {sub.title}
                                                </a>
                                                {sub.children && (
                                                    <ul className="absolute bg-gray-50 top-0 left-full ml-1 p-2 shadow-lg rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200 focus-within:opacity-100 focus-within:visible">
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
