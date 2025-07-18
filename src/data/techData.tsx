// src/data/techData.tsx
import reactLogo from '../assets/react.svg';
import reduxLogo from '../assets/redux.svg';
import reactIconsLogo from '../assets/react-icons.svg';
import reactRouterLogo from '../assets/react-router.svg';
import reactTestingLibraryLogo from '../assets/react-testing-library.svg';
import storybookLogo from '../assets/storybook.svg';
import { GoPlus } from "react-icons/go";
import type React from 'react';

export interface FrontendTechItem {
    category: React.ReactNode;
    tech: React.ReactNode;
}

export interface BackendTechItem {
    layer: React.ReactNode;
    tech: React.ReactNode;
    justification: React.ReactNode;
}

export interface SSRTechItem {
    layer: React.ReactNode;
    tech: React.ReactNode;
    justification: React.ReactNode;
}

export const frontendTech: FrontendTechItem[] = [
    {
        category: (
            <div className='flex space-x-2 ml-0 md:ml-5'>
                Base
            </div>
        ),
        tech: (
            <div className="flex flex-col space-y-2 md:flex-row md:justify-center md:items-center md:space-x-3 md:space-y-0 md:w-full w-min">
                <div className='flex items-center whitespace-nowrap hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200 mr-0'>
                    <a href="https://reactjs.org/" className='flex items-center' target="_blank" rel="noopener noreferrer">
                        <img src={reactLogo} alt="React Logo" width="24" height="24" className='inline-block' />
                        <span className='ml-1'>React</span>
                        <GoPlus className='inline-block ml-3 md:visible invisible' />
                    </a>
                </div>
                <div className='flex items-center whitespace-nowrap hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200 m-0'>
                    <a href="https://www.typescriptlang.org/" className='flex items-center' target="_blank" rel="noopener noreferrer">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="TypeScript Logo" width="24" height="24" className='inline-block' />
                        <span className='ml-1'>TypeScript</span>
                        <GoPlus className='inline-block ml-3 md:visible invisible' />
                    </a>
                </div>
                <div className='flex items-center whitespace-nowrap hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200 m-0'>
                    <a href="https://vitejs.dev/" className='flex items-center' target="_blank" rel="noopener noreferrer">
                        <img src="/vite.svg" alt="Vite Logo" width="24" height="24" className='inline-block' />
                        <span className='ml-1'>Vite</span>
                    </a>
                </div>
            </div>
        )
    },
    {
        category: (
            <div className='flex space-x-2 ml-0 md:ml-5'>
                Estado & Dados
            </div>
        ),
        tech: (
            <div className="flex flex-col space-y-2 md:flex-row md:justify-center md:items-center md:space-x-3 md:space-y-0 md:w-full w-min">
                <div className='flex items-center whitespace-nowrap hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200 mr-0'>
                    <a href="https://redux-toolkit.js.org/" className='flex items-center' target="_blank" rel="noopener noreferrer">
                        <img src={reduxLogo} alt="Redux Logo" width="24" height="24" className='inline-block' />
                        <span className='ml-1'>Redux Toolkit</span>
                        <GoPlus className='inline-block ml-3 md:visible invisible' />
                    </a>
                </div>
                {/* RTK Query */}
                <div className='flex items-center whitespace-nowrap hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200 mr-0'>
                    <a href="https://redux-toolkit.js.org/rtk-query/overview" className='flex items-center' target="_blank" rel="noopener noreferrer">
                        <span>RTK Query</span>
                    </a>
                </div>
            </div>
        )
    },
    {
        category: (
            <div className='flex space-x-2 ml-0 md:ml-5'>
                UI & CSS
            </div>
        ),
        tech: (
            <div className="flex flex-col space-y-2 md:flex-row md:justify-center md:items-center md:space-x-3 md:space-y-0 md:w-full w-min">
                {/* Tailwind CSS + daisyUI + Headless UI */}
                <div className='flex items-center whitespace-nowrap hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200 mr-0'>
                    <a href="https://tailwindcss.com/" className='flex items-center' target="_blank" rel="noopener noreferrer">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind CSS Logo" width="24" height="24" className='inline-block' />
                        <span className='ml-1'>Tailwind CSS</span>
                        <GoPlus className='inline-block ml-3 md:visible invisible' />
                    </a>
                </div>
                <div className='flex items-center whitespace-nowrap hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200 mr-0'>
                    <a href="https://daisyui.com/" className='flex items-center' target="_blank" rel="noopener noreferrer">
                        <img src="https://img.daisyui.com/images/daisyui/mark-static.svg" alt="daisyUI Logo" width="24" height="24" className='inline-block' />
                        <span className='ml-1'>daisyUI</span>
                        <GoPlus className='inline-block ml-3 md:visible invisible' />
                    </a>
                </div>
                <div className='flex items-center whitespace-nowrap hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200 mr-0'>
                    <a href="https://headlessui.com/" className='flex items-center' target="_blank" rel="noopener noreferrer">
                        <span>Headless UI</span>
                    </a>
                </div>
            </div>
        )
    },
    {
        category: (
            <div className='flex space-x-2 ml-0 md:ml-5'>
                Animações & Ícones
            </div>
        ),
        tech: (
            <div className="flex flex-col space-y-2 md:flex-row md:justify-center md:items-center md:space-x-3 md:space-y-0 md:w-full w-min">
                {/* Framer Motion + React Icons */}
                <div className='flex items-center whitespace-nowrap hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200 mr-0'>
                    <a href="https://www.framer.com/motion/" className='flex items-center' target="_blank" rel="noopener noreferrer">
                        <span>Framer Motion</span>
                    </a>
                    <GoPlus className='inline-block ml-3 md:visible invisible' />
                </div>
                <div className='flex items-center whitespace-nowrap hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200 mr-0'>
                    <a href="https://react-icons.github.io/react-icons/" className='flex items-center' target="_blank" rel="noopener noreferrer">
                        <img src={reactIconsLogo} alt="React Icons Logo" width="24" height="24" className='inline-block' />
                        <span>React Icons</span>
                    </a>
                </div>
            </div>
        )
    },
    {
        category: (
            <div className='flex space-x-2 ml-0 md:ml-5'>
                Forms & Validação
            </div>
        ),
        tech: (
            <div className="flex flex-col space-y-2 md:flex-row md:justify-center md:items-center md:space-x-3 md:space-y-0 md:w-full w-min">
                {/* Formik + Yup */}
                <div className='flex items-center whitespace-nowrap hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200 mr-0'>
                    <a href="https://formik.org/" className='flex items-center' target="_blank" rel="noopener noreferrer">
                        <span>Formik</span>
                    </a>
                    <GoPlus className='inline-block ml-3 md:visible invisible' />
                </div>
                <div className='flex items-center whitespace-nowrap hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200 mr-0'>
                    <a href="https://github.com/jquense/yup" className='flex items-center' target="_blank" rel="noopener noreferrer">
                        <span>Yup</span>
                    </a>
                </div>
            </div>
        )
    },
    {
        category: (
            <div className='flex space-x-2 ml-0 md:ml-5'>
                Rotas
            </div>
        ),
        tech: (
            <div className="flex flex-col space-y-2 md:flex-row md:justify-center md:items-center md:space-x-3 md:space-y-0 md:w-full w-min">
                {/* React Router */}
                <div className='flex items-center whitespace-nowrap hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200 mr-0'>
                    <a href="https://reactrouter.com/" className='flex items-center' target="_blank" rel="noopener noreferrer">
                        <img src={reactRouterLogo} alt="React Router Logo" width="24" height="24" className='inline-block mr-1' />
                        <span>React Router</span>
                    </a>
                </div>
            </div>
        )
    },
    {
        category: (
            <div className='flex space-x-2 ml-0 md:ml-5'>
                HTTP & Auth
            </div>
        ),
        tech: (
            <div className="flex flex-col space-y-2 md:flex-row md:justify-center md:items-center md:space-x-3 md:space-y-0 md:w-full w-min">
                {/* Axios + Interceptors */}
                <div className='flex items-center whitespace-nowrap hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200 mr-0'>
                    <a href="https://axios-http.com/" className='flex items-center' target="_blank" rel="noopener noreferrer">
                        <img src="https://axios-http.com/assets/logo.svg" alt="Axios Logo" width="24" height="24" className='inline-block mr-1' />
                        <span>Axios</span>
                    </a>
                    <GoPlus className='inline-block ml-3 md:visible invisible' />
                </div>
                <div className='flex items-center whitespace-nowrap hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200 mr-0'>
                    <a href="https://axios-http.com/docs/interceptors" className='flex items-center' target="_blank" rel="noopener noreferrer">
                        <span>Interceptors</span>
                    </a>
                </div>
            </div>
        )
    },
    {
        category: (
            <div className='flex space-x-2 ml-0 md:ml-5'>
                Lint & Formatting
            </div>
        ),
        tech: (
            <div className="flex flex-col space-y-2 md:flex-row md:justify-center md:items-center md:space-x-3 md:space-y-0 md:w-full w-min">
                {/* ESLint + Prettier + vite-plugin-eslint */}
                <div className='flex items-center whitespace-nowrap hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200 mr-0'>
                    <a href="https://eslint.org/" className='flex items-center' target="_blank" rel="noopener noreferrer">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/e/e3/ESLint_logo.svg" alt="ESLint Logo" width="24" height="24" className='inline-block' />
                        <span className='ml-1'>ESLint</span>
                        <GoPlus className='inline-block ml-3 md:visible invisible' />
                    </a>
                </div>
                <div className='flex items-center whitespace-nowrap hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200 mr-0'>
                    <a href="https://prettier.io/" className='flex items-center' target="_blank" rel="noopener noreferrer">
                        <img src="https://prettier.io/icon.png" alt="Prettier Logo" width="24" height="24" className='inline-block' />
                        <span className='ml-1'>Prettier</span>
                    </a>
                </div>
            </div>
        )
    },
    {
        category: (
            <div className='flex space-x-2 ml-0 md:ml-5'>
                Testes
            </div>
        ),
        tech: (
            <div className="flex flex-col space-y-2 md:flex-row md:justify-center md:items-center md:space-x-3 md:space-y-0 md:w-full w-min">
                {/* Vitest + React Testing Library */}
                <div className='flex items-center whitespace-nowrap hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200 mr-0'>
                    <a href="https://vitest.dev/" className='flex items-center' target="_blank" rel="noopener noreferrer">
                        <img src="https://raw.githubusercontent.com/vitest-dev/vitest/3cb2c857057815274ed3b2d06fae8ad925c033f0/docs/public/logo.svg" alt="Vitest Logo" width="24" height="24" className='inline-block mr-1' />
                        <span>Vitest</span>
                    </a>
                    <GoPlus className='inline-block ml-3 md:visible invisible' />
                </div>
                <div className='flex items-center whitespace-nowrap hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200 mr-0'>
                    <a href="https://testing-library.com/docs/react-testing-library/intro/" className='flex items-center' target="_blank" rel="noopener noreferrer">
                        <img src={reactTestingLibraryLogo} alt="React Testing Library Logo" width="24" height="24" className='inline-block mr-1' />
                        <span>React Testing Library</span>
                    </a>
                </div>
            </div>
        )
    },
    {
        category: (
            <div className='flex space-x-2 ml-0 md:ml-5'>
                Component Docs
            </div>
        ),
        tech: (
            <div className="flex flex-col space-y-2 md:flex-row md:justify-center md:items-center md:space-x-3 md:space-y-0 md:w-full w-min">
                {/* Storybook */}
                <div className='flex items-center whitespace-nowrap hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200 mr-0'>
                    <a href="https://storybook.js.org/" className='flex items-center' target="_blank" rel="noopener noreferrer">
                        <img src={storybookLogo} alt="Storybook Logo" width="24" height="24" className='inline-block' />
                        <span>Storybook</span>
                    </a>
                </div>
            </div>
        )
    },
    {
        category: (
            <div className='flex space-x-2 ml-0 md:ml-5'>
                Extras
            </div>
        ),
        tech: (
            <div className="flex flex-col space-y-2 md:flex-row md:justify-center md:items-center md:space-x-3 md:space-y-0 md:w-full w-min">
                ...
            </div>
        )
    },
];

export const backendTech: BackendTechItem[] = [
    {
        layer: 'Core / API',
        tech: (
            <div className="flex items-center space-x-1 hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200">
                <a href="https://laravel.com/" className='flex items-center' target="_blank" rel="noopener noreferrer">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg" alt="Laravel Logo" width="24" height="24" />
                    <span>Laravel 10+</span>
                </a>
            </div>
        ),
        justification:
            'Framework MVC maduro, com suporte a jobs, events, queues e ecossistema consolidado.',
    },
];

export const ssrTech: SSRTechItem[] = [
    {
        layer: 'Server SSR',
        tech: (
            <div className="flex items-center space-x-1 hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200">
                <a href="https://nextjs.org/" className='flex items-center' target="_blank" rel="noopener noreferrer">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" alt="Next.js Logo" width="24" height="24" />
                    <span>Next.js</span>
                </a>
            </div>
        ),
        justification:
            'Framework React com suporte a SSR, SSG e API routes, ideal para renderização de páginas dinâmicas.',
    },
];