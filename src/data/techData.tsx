// src/data/techData.tsx
import { GoPlus } from "react-icons/go";
import * as logos from '../assets/logos/logos';

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
    // Base
    {
        category: (
            <div className='flex space-x-2 ml-0 md:ml-5'>
                Base
            </div>
        ),
        tech: (
            <div className="flex flex-col space-y-2 md:flex-row md:justify-center md:items-center md:space-x-3 md:space-y-0 md:w-full w-min">
                {/* React */}
                <div className='flex items-center whitespace-nowrap mr-0'>
                    <a href="https://reactjs.org/"
                        className='flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200 mr-0'
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={logos.reactLogo} alt="React Logo" width="24" height="24" className='inline-block' />
                        <span className='ml-1'>React</span>
                    </a>
                    <GoPlus className='inline-block md:visible invisible' />
                </div>

                {/* TypeScript */}
                <div className='flex items-center whitespace-nowrap m-0'>
                    <a href="https://www.typescriptlang.org/"
                        className='flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200'
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={logos.typescriptLogo} alt="TypeScript Logo" width="24" height="24" className='inline-block' />
                        <span className='ml-1'>TypeScript</span>
                    </a>
                    <GoPlus className='inline-block md:visible invisible' />
                </div>

                {/* Next.js */}
                <div className='flex items-center whitespace-nowrap hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200 m-0'>
                    <a href="https://nextjs.org/" className='flex items-center' target="_blank" rel="noopener noreferrer">
                        <img src={logos.nextjsLogo} alt="Next.js Logo" width="24" height="24" className='inline-block' />
                        <span className='ml-1'>Next.js</span>
                    </a>
                </div>
            </div>
        )
    },

    // Estado & Dados
    {
        category: (
            <div className='flex space-x-2 ml-0 md:ml-5'>
                Estado & Dados
            </div>
        ),
        tech: (
            <div className="flex flex-col space-y-2 md:flex-row md:justify-center md:items-center md:space-x-3 md:space-y-0 md:w-full w-min">
                {/* Redux Toolkit */}
                <div className='flex items-center whitespace-nowrap mr-0'>
                    <a href="https://redux-toolkit.js.org/"
                        className='flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200'
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={logos.reduxLogo} alt="Redux Logo" width="24" height="24" className='inline-block' />
                        <span className='ml-1'>Redux Toolkit</span>
                    </a>
                    <GoPlus className='inline-block md:visible invisible' />
                </div>

                {/* RTK Query */}
                <div className='flex items-center whitespace-nowrap'>
                    <a href="https://redux-toolkit.js.org/rtk-query/overview"
                        className='flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200'
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span>RTK Query</span>
                    </a>
                </div>
            </div>
        )
    },

    // UI & CSS
    {
        category: (
            <div className='flex space-x-2 ml-0 md:ml-5'>
                UI & CSS
            </div>
        ),
        tech: (
            <div className="flex flex-col space-y-2 md:flex-row md:justify-center md:items-center md:space-x-3 md:space-y-0 md:w-full w-min">
                {/* Tailwind CSS */}
                <div className="flex items-center whitespace-nowrap mr-0">
                    <a
                        href="https://tailwindcss.com/"
                        className="flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={logos.tailwindLogo}
                            alt="Tailwind CSS"
                            width={24}
                            height={24}
                        />
                        <span className="ml-1">Tailwind CSS</span>
                    </a>
                    <GoPlus className="inline-block md:visible invisible" />
                </div>

                {/* daisyUI */}
                <div className="flex items-center whitespace-nowrap mr-0">
                    <a
                        href="https://daisyui.com/"
                        className="flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={logos.daisyuiLogo}
                            alt="daisyUI"
                            width={24}
                            height={24}
                        />
                        <span className="ml-1">daisyUI</span>
                    </a>
                    <GoPlus className="inline-block md:visible invisible" />
                </div>

                {/* Headless UI */}
                <div className="flex items-center whitespace-nowrap mr-0">
                    <a
                        href="https://headlessui.com/"
                        className="flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={logos.headlessuiLogo}
                            alt="Headless UI"
                            width={24}
                            height={24}
                            className="fill-blue-300"
                        />
                        <span className="ml-1">Headless UI</span>
                    </a>
                </div>
            </div>
        )
    },

    // Animações & Ícones
    {
        category: (
            <div className='flex space-x-2 ml-0 md:ml-5'>
                Animações & Ícones
            </div>
        ),
        tech: (
            <div className="flex flex-col space-y-2 md:flex-row md:justify-center md:items-center md:space-x-3 md:space-y-0 md:w-full w-min">
                {/* Framer Motion */}
                <div className="flex items-center whitespace-nowrap mr-0">
                    <a
                        href="https://www.framer.com/motion/"
                        className="flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200 mr-0"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="ml-1">Framer Motion</span>
                    </a>
                    <GoPlus className="inline-block md:visible invisible" />
                </div>

                {/* React Icons */}
                <div className="flex items-center whitespace-nowrap mr-0">
                    <a
                        href="https://react-icons.github.io/react-icons/"
                        className="flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200 mr-0"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={logos.reactIconsLogo} alt="React Icons Logo" width={24} height={24} />
                        <span className="ml-1">React Icons</span>
                    </a>
                </div>
            </div>
        )
    },

    // Listas & Tabelas Grandes
    {
        category: <div className="flex space-x-2 ml-0 md:ml-5">Listas & Tabelas Grandes</div>,
        tech: (
            <div className="flex flex-col space-y-2 md:flex-row md:justify-center md:items-center md:space-x-3 md:space-y-0 md:w-full w-min">

                {/* TanStack Virtual */}
                <div className="flex items-center whitespace-nowrap mr-0">
                    <a
                        href="https://tanstack.com/virtual"
                        className="flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span>TanStack Virtual</span>
                    </a>
                    <GoPlus className="inline-block md:visible invisible" />
                </div>

                {/* TanStack Table */}
                <div className="flex items-center whitespace-nowrap mr-0">
                    <a
                        href="https://tanstack.com/table"
                        className="flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span>TanStack Table</span>
                    </a>
                </div>
            </div>
        ),
    },

    // Cache Offline & IndexedDB
    {
        category: <div className="flex space-x-2 ml-0 md:ml-5">Cache Offline & IndexedDB</div>,
        tech: (
            <div className="flex flex-col space-y-2 md:flex-row md:justify-center md:items-center md:space-x-3 md:space-y-0 md:w-full w-min">
                <div className="flex items-center whitespace-nowrap mr-0">
                    <a
                        href="https://dexie.org/"
                        className="flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={logos.dexieLogo} alt="Dexie.js Logo" width={24} height={24} />
                        <span className="ml-1">Dexie.js</span>
                    </a>
                </div>
            </div>
        ),
    },

    // Formulários & Validação
    {
        category: (
            <div className='flex space-x-2 ml-0 md:ml-5'>
                Forms & Validação
            </div>
        ),
        tech: (
            <div className="flex flex-col space-y-2 md:flex-row md:justify-center md:items-center md:space-x-3 md:space-y-0 md:w-full w-min">
                {/* Formik */}
                <div className="flex items-center whitespace-nowrap mr-0">
                    <a
                        href="https://formik.org/"
                        className="flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="ml-1">Formik</span>
                    </a>
                    <GoPlus className="inline-block md:visible invisible" />
                </div>

                {/* Yup */}
                <div className="flex items-center whitespace-nowrap mr-0">
                    <a
                        href="https://github.com/jquense/yup"
                        className="flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="ml-1">Yup</span>
                    </a>
                </div>
            </div>
        )
    },

    // Select/Autocomplete Avançado
    {
        category: <div className="flex space-x-2 ml-0 md:ml-5">Select/Autocomplete Avançado</div>,
        tech: (
            <div className="flex flex-col space-y-2 md:flex-row md:justify-center md:items-center md:space-x-3 md:space-y-0 md:w-full w-min">

                {/* React-Select */}
                <div className="flex items-center whitespace-nowrap mr-0">
                    <a
                        href="https://react-select.com/"
                        className="flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="ml-1">React-Select</span>
                    </a>
                    <GoPlus className="inline-block md:visible invisible" />
                </div>

                {/* Headless UI Combobox */}
                <div className="flex items-center whitespace-nowrap mr-0">
                    <a
                        href="https://headlessui.com/"
                        className="flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="ml-1">Headless UI Combobox</span>
                    </a>
                </div>
            </div>
        ),
    },

    // SSR/SEO
    {
        category: (
            <div className="flex space-x-2 ml-0 md:ml-5">SSR/SEO</div>
        ),
        tech: (
            <div className="flex flex-col space-y-2 md:flex-row md:justify-center md:items-center md:space-x-3 md:space-y-0 md:w-full w-min">
                {/* next-seo */}
                <div className="flex items-center whitespace-nowrap mr-0">
                    <a
                        href="https://github.com/garmeeh/next-seo"
                        className="flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span>next-seo</span>
                    </a>
                    <GoPlus className="inline-block md:visible invisible" />
                </div>
                {/* next-optimized-images */}
                <div className="flex items-center whitespace-nowrap mr-0">
                    <a
                        href="https://github.com/cyrilwanner/next-optimized-images"
                        className="flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span>next-optimized-images</span>
                    </a>
                    <GoPlus className="inline-block md:visible invisible" />
                </div>
                {/* next-pwa */}
                <div className="flex items-center whitespace-nowrap mr-0">
                    <a
                        href="https://github.com/shadowwalker/next-pwa"
                        className="flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span>next-pwa</span>
                    </a>
                    <GoPlus className="inline-block md:visible invisible" />
                </div>
                {/* next-auth */}
                <div className="flex items-center whitespace-nowrap mr-0">
                    <a
                        href="https://next-auth.js.org/"
                        className="flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span>next-auth</span>
                    </a>
                </div>
            </div>
        ),
    },

    // HTTP & Auth
    {
        category: (
            <div className="flex space-x-2 ml-0 md:ml-5">HTTP & Auth</div>
        ),
        tech: (
            <div className="flex flex-col space-y-2 md:flex-row md:justify-center md:items-center md:space-x-3 md:space-y-0 md:w-full w-min">

                {/* Axios */}
                <div className='flex items-center whitespace-nowrap mr-0'>
                    <a
                        href="https://axios-http.com/"
                        className="flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={logos.axiosLogo} alt="Axios Logo" width={24} height={24} />
                        <span className="ml-1">Axios</span>
                    </a>
                    <GoPlus className='inline-block md:visible invisible' />
                </div>

                {/* Axios Interceptors */}
                <div className='flex items-center whitespace-nowrap'>
                    <span className="hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200">
                        Interceptors
                    </span>
                </div>
            </div>
        ),
    },

    // Observabilidade & Monitoramento
    {
        category: (
            <div className="flex space-x-2 ml-0 md:ml-5">
                Observabilidade & Monitoramento
            </div>
        ),
        tech: (
            <div className="flex flex-col space-y-2 md:flex-row md:justify-center md:items-center md:space-x-3 md:space-y-0 md:w-full w-min">
                {/* Sentry */}
                <div className="flex items-center whitespace-nowrap mr-0">
                    <a
                        href="https://sentry.io/"
                        className="flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span>Sentry</span>
                    </a>
                    <GoPlus className="inline-block md:visible invisible" />
                </div>
                {/* LogRocket */}
                <div className="flex items-center whitespace-nowrap mr-0">
                    <a
                        href="https://logrocket.com/"
                        className="flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span>LogRocket</span>
                    </a>
                    <GoPlus className="inline-block md:visible invisible" />
                </div>
                {/* Datadog RUM */}
                <div className="flex items-center whitespace-nowrap mr-0">
                    <a
                        href="https://docs.datadoghq.com/real_user_monitoring/"
                        className="flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span>Datadog RUM</span>
                    </a>
                </div>
            </div>
        ),
    },

    // Lint & Formatting
    {
        category: (
            <div className="flex space-x-2 ml-0 md:ml-5">Lint & Formatting</div>
        ),
        tech: (
            <div className="flex flex-col space-y-2 md:flex-row md:justify-center md:items-center md:space-x-3 md:space-y-0 md:w-full w-min">
                {/* ESLint */}
                <div className="flex items-center whitespace-nowrap mr-0">
                    <a
                        href="https://eslint.org/"
                        className="flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/e/e3/ESLint_logo.svg"
                            alt="ESLint"
                            width={24}
                            height={24}
                        />
                        <span>ESLint</span>
                    </a>
                    <GoPlus className="inline-block md:visible invisible" />
                </div>
                {/* Prettier */}
                <div className="flex items-center whitespace-nowrap mr-0">
                    <a
                        href="https://prettier.io/"
                        className="flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="https://prettier.io/icon.png"
                            alt="ESLint"
                            width={24}
                            height={24}
                        />
                        <span>Prettier</span>
                    </a>
                </div>
            </div>
        ),
    },

    // Git Hooks
    {
        category: (
            <div className="flex space-x-2 ml-0 md:ml-5">Git Hooks</div>
        ),
        tech: (
            <div className="flex flex-col space-y-2 md:flex-row md:justify-center md:items-center md:space-x-3 md:space-y-0 md:w-full w-min">

                {/* Husky */}
                <div className="flex items-center whitespace-nowrap mr-0">
                    <a
                        href="https://typicode.github.io/husky/#/"
                        className="flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="ml-1">Husky</span>
                    </a>
                    <GoPlus className="inline-block md:visible invisible" />
                </div>

                {/* lint‑staged */}
                <div className="flex items-center whitespace-nowrap mr-0">
                    <a
                        href="https://github.com/okonet/lint-staged"
                        className="flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="ml-1">lint‑staged</span>
                    </a>
                </div>
            </div>
        ),
    },

    // Testes
    {
        category: (
            <div className="flex space-x-2 ml-0 md:ml-5">Testes</div>
        ),
        tech: (
            <div className="flex flex-col space-y-2 md:flex-row md:justify-center md:items-center md:space-x-3 md:space-y-0 md:w-full w-min">

                {/* Vitest */}
                <div className="flex items-center whitespace-nowrap mr-0">
                    <a
                        href="https://vitest.dev/"
                        className="flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={logos.vitestLogo} alt="Vitest Logo" width={24} height={24} />
                        <span className="ml-1">Vitest</span>
                    </a>
                    <GoPlus className="inline-block md:visible invisible" />
                </div>

                {/* React Testing Library */}
                <div className="flex items-center whitespace-nowrap mr-0">
                    <a
                        href="https://testing-library.com/docs/react-testing-library/intro/"
                        className="flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={logos.reactTestingLibraryLogo} alt="React Testing Library Logo" width={24} height={24} />
                        <span className="ml-1">React Testing Library</span>
                    </a>
                </div>
            </div>
        ),
    },

    // Component Docs
    {
        category: (
            <div className="flex space-x-2 ml-0 md:ml-5">Component Docs</div>
        ),
        tech: (
            <div className="flex flex-col space-y-2 md:flex-row md:justify-center md:items-center md:space-x-3 md:space-y-0 md:w-full w-min">
                <div className="flex items-center whitespace-nowrap mr-0">
                    <a
                        href="https://storybook.js.org/"
                        className="flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={logos.storybookLogo} alt="Storybook Logo" width={24} height={24} />
                        <span className="ml-1">Storybook</span>
                    </a>
                </div>
            </div>
        ),
    },

    // Extras
    {
        category: (
            <div className='flex space-x-2 ml-0 md:ml-5'>
                Extras
            </div>
        ),
        tech: (
            <div className="flex flex-col space-y-2 md:flex-row md:justify-center md:items-center md:space-x-3 md:space-y-0 md:w-full w-min">
                <div className="flex items-center whitespace-nowrap mr-0">
                    <span className="ml-1">...</span>
                </div>
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