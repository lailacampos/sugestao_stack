// src/data/techTableData.tsx
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

                {/* Dexie.js */}
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
            <div className="flex flex-col space-y-2 md:flex-col md:justify-center md:items-center md:space-x-3 md:space-y-0 md:w-full w-min">

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
                    {/* <GoPlus className="inline-block md:visible invisible" /> */}
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
                    {/* <GoPlus className="inline-block md:visible invisible" /> */}
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
                    {/* <GoPlus className="inline-block md:visible invisible" /> */}
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
                        <img
                            src={logos.sentryLogo}
                            alt="Sentry Logo"
                            width={24}
                            height={24}
                            className="inline-block"
                        />
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
                        <img
                            src="https://cdn.brandfetch.io/idbqwJEFOO/w/180/h/180/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX&t=1752074006185"
                            alt="LogRocket Logo"
                            width={24}
                            height={24}
                            className="inline-block"
                        />
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
                        <span>Datadog RUM</span>
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
                            className="mr-1"
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
                            alt="Prettier Logo"
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

                {/* lint-staged */}
                <div className="flex items-center whitespace-nowrap mr-0">
                    <a
                        href="https://github.com/okonet/lint-staged"
                        className="flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="ml-1">lint-staged</span>
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

                {/* Storybook */}
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
    // Core / API
    {
        layer: (
            <div className="flex items-center whitespace-nowrap mr-0">
                Core / API
            </div>
        ),
        tech: (
            <div className="flex flex-col space-y-2 md:flex-row md:space-x-3 md:justify-center md:items-center md:w-full w-min">

                {/* Laravel */}
                <div className="flex items-center whitespace-nowrap mr-0">
                    <a
                        href="https://laravel.com/"
                        className="flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={logos.laravelLogo}
                            alt="Laravel Logo"
                            width={24}
                            height={24}
                            className="inline-block"
                        />
                        <span className="ml-1">Laravel 10+</span>
                    </a>
                </div>
            </div>
        ),
        justification: (
            <span className="text-gray-700">
                Framework MVC maduro, com suporte a jobs, events, queues e ecossistema consolidado.
            </span>
        ),
    },

    // Autenticação
    {
        layer: (
            <div className="flex items-center whitespace-nowrap mr-0">
                Autenticação
            </div>
        ),
        tech: (
            <div className="flex flex-col space-y-2 md:flex-row md:justify-center md:items-center md:space-x-3 md:space-y-0 md:w-full w-min">

                {/* Sanctum */}
                <div className="flex items-center whitespace-nowrap mr-0">
                    <a
                        href="https://laravel.com/docs/sanctum"
                        className="flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="ml-1">Sanctum (Token API)</span>
                    </a>
                    <GoPlus className="inline-block md:visible invisible" />
                </div>
            </div>
        ),
        justification: (
            <span className="text-gray-700">
                SPA/SSR-friendly, tokens revogáveis e fácil integração entre frontend, SSR e micro-serviços.
            </span>
        ),
    },

    // Autorização
    {
        layer: (
            <div className="flex items-center whitespace-nowrap mr-0">
                Autorização
            </div>
        ),
        tech: (
            <div className="flex flex-col space-y-2 md:flex-row md:justify-center md:items-center md:space-x-3 md:space-y-0 md:w-full w-min">

                {/* Spatie laravel-permission */}
                <div className="flex items-center whitespace-nowrap mr-0">
                    <a
                        href="https://spatie.be/docs/laravel-permission"
                        className="flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="ml-1">Spatie laravel-permission</span>
                    </a>
                </div>
            </div>
        ),
        justification: (
            <span className="text-gray-700">
                Garante gestão de papéis e permissões via Policies, com integração declarativa
                ao Laravel e suporte a contextos múltiplos de autorização.
            </span>
        ),
    },

    // DB & Cache
    {
        layer: (
            <div className="flex items-center whitespace-nowrap mr-0">
                DB & Cache
            </div>
        ),
        tech: (
            <div className="flex flex-col space-y-2 md:flex-row md:justify-center md:items-center md:space-x-3 md:space-y-0 md:w-full w-min">

                {/* MySQL */}
                <div className="flex items-center whitespace-nowrap mr-0">
                    <a
                        href="https://www.mysql.com/"
                        className="flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={logos.mysqlLogo} alt="MySQL Logo" width={24} height={24} />
                        <span className="ml-1">MySQL</span>
                    </a>
                    <GoPlus className="inline-block md:visible invisible" />
                </div>

                {/* Redis */}
                <div className="flex items-center whitespace-nowrap mr-0">
                    <a
                        href="https://redis.io/"
                        className="flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={logos.redisLogo} alt="Redis Logo" width={24} height={24} />
                        <span className="ml-1">Redis/Memcached</span>
                    </a>
                </div>
            </div>
        ),
        justification: (
            <span className="text-gray-700">
                MySQL para consistência e transações seguras; Redis/Memcached como
                buffer/cache de leitura, acelerando SSR e diminuindo carga no banco.
            </span>
        ),
    },

    // Queues/Workers
    {
        layer: (
            <div className="flex items-center whitespace-nowrap mr-0">
                Queues/Workers
            </div>
        ),
        tech: (
            <div className="flex flex-col space-y-2 md:flex-row md:justify-center md:items-center md:space-x-3 md:space-y-0 md:w-full w-min">

                {/* Redis */}
                <div className='flex items-center whitespace-nowrap mr-0'>
                    <a
                        href="https://redis.io/"
                        className="flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={logos.redisLogo} alt="Redis Logo" width={24} height={24} />
                        <span className="ml-1">Redis/RabbitMQ</span>
                    </a>
                    <GoPlus className="inline-block md:visible invisible" />
                </div>

                {/* Horizon */}
                <div className='flex items-center whitespace-nowrap mr-0'>
                    <a
                        href="https://laravel.com/docs/horizon"
                        className="flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="ml-1">Horizon</span>
                    </a>
                </div>
            </div>
        ),
        justification: (
            <span className="text-gray-700">
                Processamento paralelo de jobs pesados (OCR, notificações, relatórios),
                com monitoramento via Horizon.
            </span>
        ),
    },

    // Real-Time
    {
        layer: (
            <div className="flex items-center whitespace-nowrap mr-0">
                Real-Time
            </div>
        ),
        tech: (
            <div className="flex flex-col space-y-2 md:flex-row md:justify-center md:items-center md:space-x-3 md:space-y-0 md:w-full w-min">

                {/* Laravel Echo */}
                <div className="flex items-center whitespace-nowrap m-0">
                    <a
                        href="https://laravel.com/docs/echo"
                        className="flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="ml-1">Laravel Echo</span>
                    </a>
                    <GoPlus className="inline-block md:visible invisible" />
                </div>

                {/* Pusher / socket.io */}
                <div className="flex items-center whitespace-nowrap mr-0">
                    <a
                        href="https://pusher.com/"
                        className="flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={logos.pusherLogo}
                            alt="Pusher Logo"
                            width={24}
                            height={24}
                            className="inline-block"
                        />
                        <span className="ml-1">Pusher/socket.io</span>
                    </a>
                </div>
            </div>
        ),
        justification: (
            <span className="text-gray-700">
                Atualizações em tempo real para dashboards, notificações e métricas ao vivo,
                usando Echo para abstração de canais e Pusher/socket.io como driver.
            </span>
        ),
    },

    // OCR & IA
    {
        layer: (
            <div className="flex items-center whitespace-nowrap mr-0">
                OCR & IA
            </div>
        ),
        tech: (
            <div className="flex flex-col space-y-2 md:justify-center md:items-center md:space-x-3 md:space-y-0 md:w-full w-min">

                {/* Micro-serviço Python */}
                <div className="flex items-center whitespace-nowrap mr-0">
                    <a
                        href="https://fastapi.tiangolo.com/"
                        className="flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={logos.fastapiLogo}
                            alt="FastAPI Logo"
                            width={24}
                            height={24}
                            className="inline-block"
                        />
                        <span className="ml-1">FastAPI</span>
                    </a>
                </div>

                {/* PyTorch/TensorFlow */}
                <div className="flex items-center whitespace-nowrap mr-0">
                    <a
                        href="https://pytorch.org/"
                        className="flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={logos.pytorchLogo}
                            alt="PyTorch Logo"
                            width={24}
                            height={24}
                            className="inline-block"
                        />
                        <span className="ml-1">PyTorch/TensorFlow</span>
                    </a>
                </div>

                {/* AWS Rekognition */}
                <div className="flex items-center whitespace-nowrap mr-0">
                    <a
                        href="https://aws.amazon.com/rekognition/"
                        className="flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={logos.awsLogo}
                            alt="AWS Rekognition Logo"
                            width={24}
                            height={24}
                            className="inline-block"
                        />
                        <span className="ml-1">AWS Rekognition</span>
                    </a>
                </div>
            </div>
        ),
        justification: (
            <span className="text-gray-700">
                Reconhecimento de texto e imagens via serviço Python dedicado (FastAPI + ML)
                ou alternativa gerenciada com AWS Rekognition, mantendo o backend desacoplado.
            </span>
        ),
    },

    // Busca & BI
    {
        layer: (
            <div className="flex items-center whitespace-nowrap mr-0">
                Busca & BI
            </div>
        ),
        tech: (
            <div className="flex flex-col space-y-2 md:justify-center md:items-center md:space-x-3 md:space-y-0 md:w-full w-min">

                {/* ElasticSearch */}
                <div className="flex items-center whitespace-nowrap mr-0">
                    <a
                        href="https://www.elastic.co/elasticsearch/"
                        className="flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="ElasticSearch"
                    >
                        <img
                            src={logos.elasticLogo}
                            alt="ElasticSearch Logo"
                            width={80}
                            height={80}
                            className="inline-block"
                        />
                        {/* <span className="ml-1">ElasticSearch</span> */}
                    </a>
                </div>

                {/* Kibana */}
                <div className="flex items-center whitespace-nowrap mr-0">
                    <a
                        href="https://grafana.com/"
                        className="flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={logos.kibanaLogo}
                            alt="Kibana Logo"
                            width={24}
                            height={24}
                            className="inline-block"
                        />
                        <span className="ml-1">Kibana</span>
                    </a>
                </div>

                {/* Grafana */}
                <div className="flex items-center whitespace-nowrap mr-0">
                    <a
                        href="https://grafana.com/"
                        className="flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={logos.grafanaLogo}
                            alt="Grafana Logo"
                            width={24}
                            height={24}
                            className="inline-block"
                        />
                        <span className="ml-1">Grafana</span>
                    </a>
                </div>
            </div>
        ),
        justification: (
            <span className="text-gray-700">
                Indexação e buscas avançadas com ElasticSearch ou MeiliSearch, e dashboards BI
                em Kibana/Grafana via API para análise de métricas e relatórios.
            </span>
        ),
    },

    // Documentação
    {
        layer: (
            <div className="flex items-center whitespace-nowrap mr-0">
                Documentação
            </div>
        ),
        tech: (
            <div className="flex flex-col space-y-2 md:flex-row md:space-x-3 md:justify-center md:items-center md:w-full w-min">

                {/* Scribe */}
                <div className="flex items-center whitespace-nowrap m-0">
                    <a
                        href="https://scribe.rip/"
                        className="flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="ml-1">Scribe</span>
                    </a>
                    <GoPlus className="inline-block md:visible invisible" />
                </div>

                {/* Laravel OpenAPI */}
                <div className="flex items-center whitespace-nowrap mr-0">
                    <a
                        href="https://github.com/darkaonline/l5-swagger"
                        className="flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="ml-1">Laravel OpenAPI</span>
                    </a>
                </div>

            </div>
        ),
        justification: (
            <span className="text-gray-700">
                Geração de documentação automática via Scribe e suporte OpenAPI/Swagger
                com L5-Swagger, facilitando testes e geração de SDKs.
            </span>
        ),
    },

    // Logging & Perf
    {
        layer: (
            <div className="flex items-center whitespace-nowrap m-0">
                Logging & Perf
            </div>
        ),
        tech: (
            <div className="flex flex-col space-y-2 md:space-x-3 md:justify-center md:items-center md:w-full w-min">

                {/* Laravel Telescope */}
                <div className="flex items-center whitespace-nowrap m-0">
                    <a
                        href="https://laravel.com/docs/telescope"
                        className="flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="ml-1">Telescope</span>
                    </a>
                </div>

                {/* Sentry */}
                <div className="flex items-center whitespace-nowrap m-0">
                    <a
                        href="https://sentry.io/"
                        className="flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={logos.sentryLogo}
                            alt="Sentry Logo"
                            width={24}
                            height={24}
                            className="inline-block"
                        />
                        <span className="ml-1">Sentry</span>
                    </a>
                </div>

                {/* NewRelic */}
                <div className="flex items-center whitespace-nowrap m-0">
                    <a
                        href="https://newrelic.com/"
                        className="flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={logos.newrelicLogo}
                            alt="NewRelic Logo"
                            width={90}
                            height={90}
                            className="inline-block"
                        />
                        {/* <span className="ml-1">NewRelic</span> */}
                    </a>
                </div>
            </div>
        ),
        justification: (
            <span className="text-gray-700">
                Telescope para inspeção interna de requests e jobs; Sentry/NewRelic para
                monitoramento de performance e erros em produção.
            </span>
        ),
    },

    // Teste
    {
        layer: (
            <div className="flex items-center whitespace-nowrap m-0">
                Teste
            </div>
        ),
        tech: (
            <div className="flex flex-col space-y-2 md:flex-row md:space-x-3 md:justify-center md:items-center md:w-full w-min">

                {/* PHPUnit */}
                <div className="flex md:items-center whitespace-nowrap m-0">
                    <a
                        href="https://phpunit.de/"
                        className="flex md:items-center hover:bg-green-100 rounded-lg transition-colors duration-200 md:w-auto w-18"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={logos.phpunitLogo}
                            alt="PHPUnit Logo"
                            width={80}
                            height={80}
                            className="inline-block"
                        />
                        {/* <span className="ml-1">PHPUnit</span> */}
                    </a>
                    <GoPlus className="inline-block md:visible invisible" />
                </div>

                {/* Pest */}
                <div className="flex items-center whitespace-nowrap m-0">
                    <a
                        href="https://pestphp.com/"
                        className="flex items-center hover:bg-green-100 rounded-lg px-4 py-3 transition-colors duration-200 md:w-auto w-18"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={logos.pestLogo}
                            alt="Pest Logo"
                            width={52}
                            height={52}
                            className="inline-block"
                        />
                        {/* <span className="ml-1">Pest</span> */}
                    </a>
                </div>
            </div>
        ),
        justification: (
            <span className="text-gray-700">
                PHPUnit como padrão do ecossistema PHP; Pest para sintaxe fluida e BDD-style.
            </span>
        ),
    },

    // CI/CD
    {
        layer: (
            <div className="flex items-center whitespace-nowrap m-0">
                CI/CD
            </div>
        ),
        tech: (
            <div className="flex flex-col space-y-2 md:flex-row md:space-x-3 md:justify-center md:items-center md:w-full w-min">

                {/* GitHub Actions / GitLab CI */}
                <div className="flex items-center whitespace-nowrap m-0">
                    <a
                        href="https://github.com/features/actions"
                        className="flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="ml-1">GitHub Actions / GitLab CI</span>
                    </a>
                </div>
            </div>
        ),
        justification: (
            <span className="text-gray-700">
                Pipelines de build, teste e deploy automáticas com GitHub Actions ou
                GitLab CI, acelerando entregas e garantindo qualidade.
            </span>
        ),
    },
];

export const ssrTech: SSRTechItem[] = [
    // Framework SSR
    {
        layer: (
            <div className="flex items-center whitespace-nowrap mr-0">
                Framework SSR
            </div>
        ),
        tech: (
            <div className="flex flex-col space-y-2 md:flex-row md:space-x-3 md:justify-center md:items-center md:w-full w-min">

                {/* Next.js */}
                <div className="flex items-center whitespace-nowrap m-0">
                    <a
                        href="https://nextjs.org/"
                        className="flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={logos.nextjsLogo}
                            alt="Next.js Logo"
                            width={24}
                            height={24}
                            className="inline-block"
                        />
                        <span className="ml-1">Next.js (Node.js)</span>
                    </a>
                </div>
            </div>
        ),
        justification: (
            <span className="text-gray-700">
                Padrão do mercado para SSR/SSG com React.
                Next.js entrega SSR nativo em Node, integrando roteamento e data-fetching
                de forma unificada para SEO (Search Engine Optimization) e performance.
            </span>
        ),
    },

    // Linguagem e Execução
    {
        layer: (
            <div className="flex items-center whitespace-nowrap mr-0">
                Linguagem e Execução
            </div>
        ),
        tech: (
            <div className="flex flex-col space-y-2 md:flex-row md:space-x-3 md:justify-center md:items-center md:w-full w-min">

                {/* Node.js */}
                <div className="flex items-center whitespace-nowrap m-0">
                    <a
                        href="https://nodejs.org/"
                        className="flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={logos.nodejsLogo}
                            alt="Node.js Logo"
                            width={24}
                            height={24}
                            className="inline-block"
                        />
                        <span className="ml-1">Node.js</span>
                    </a>
                </div>
            </div>
        ),
        justification: (
            <span className="text-gray-700">
                Plataforma madura e performática para executar o SSR, com vasto ecossistema
                de módulos e integração com Next.js.
            </span>
        ),
    },

    // Fetching/HTTP Client
    {
        layer: (
            <div className="flex items-center whitespace-nowrap mr-0">
                Fetching/HTTP Client
            </div>
        ),
        tech: (
            <div className="flex flex-col space-y-2 md:space-x-3 md:justify-center md:items-center md:w-full w-min">

                {/* Axios */}
                <div className="flex items-center whitespace-nowrap m-0">
                    <a
                        href="https://axios-http.com/"
                        className="flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={logos.axiosLogo}
                            alt="Axios Logo"
                            width={28}
                            height={28}
                            className="inline-block"
                        />
                        <span className="ml-1">Axios</span>
                    </a>
                </div>

                {/* Fetch API */}
                <div className="flex items-center whitespace-nowrap m-0">
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"
                        className="flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="ml-1">Fetch API</span>
                    </a>
                </div>
            </div>
        ),
        justification: (
            <span className="text-gray-700">
                Uso de Axios para request avançados e polyfill fetch nativo para chamadas
                simplicadas, garantindo consistência entre client e server.
            </span>
        ),
    },

    // Buffer/Cache Client
    {
        layer: (
            <div className="flex items-center whitespace-nowrap mr-0">
                Buffer/Cache Client
            </div>
        ),
        tech: (
            <div className="flex flex-col space-y-2 md:flex-row md:space-x-3 md:justify-center md:items-center md:w-max w-min">

                {/* ioredis */}
                <div className="flex items-center whitespace-nowrap m-0">
                    <a
                        href="https://github.com/luin/ioredis"
                        className="flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={logos.redisLogo}
                            alt="ioredis Logo"
                            width={24}
                            height={24}
                            className="inline-block"
                        />
                        <span className="ml-1">ioredis</span>
                    </a>
                    <GoPlus className="inline-block md:visible invisible md-ml-4 m-0" />
                </div>

                {/* node-redis */}
                <div className="flex items-center whitespace-nowrap m-0">
                    <a
                        href="https://github.com/redis/node-redis"
                        className="flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="ml-1">node-redis</span>
                    </a>
                </div>
            </div>
        ),
        justification: (
            <span className="text-gray-700">
                Clientes de Redis otimizados para cache em memória, usados pelo SSR
                para reduzir latência e carga no banco primário.
            </span>
        ),
    },

    // Auth/Session
    {
        layer: (
            <div className="flex items-center whitespace-nowrap mr-0">
                Auth/Session
            </div>
        ),
        tech: (
            <div className="flex flex-col space-y-2 md:flex-row md:space-x-3 md:justify-center md:items-center md:w-full w-min">

                {/* next-auth */}
                <div className="flex items-center whitespace-nowrap m-0">
                    <a
                        href="https://next-auth.js.org/"
                        className="flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={logos.nextAuthLogo}
                            alt="next-auth Logo"
                            width={24}
                            height={24}
                            className="inline-block"
                        />
                        <span className="ml-1">next-auth</span>
                    </a>
                </div>
            </div>
        ),
        justification: (
            <span className="text-gray-700">
                Gerencia sessões e provedores de login em SSR, com callbacks no servidor
                e suporte a JWT ou cookies, integrando perfeitamente com Next.js.
            </span>
        ),
    },

    // SEO (Search Engine Optimization)
    {
        layer: (
            <div className="flex items-center mr-0">
                SEO (Search Engine Optimization)
            </div>
        ),
        tech: (
            <div className="flex flex-col space-y-2 md:flex-row md:space-x-3 md:justify-center md:items-center md:w-full w-min">

                {/* next-seo */}
                <div className="flex items-center whitespace-nowrap m-0">
                    <a
                        href="https://github.com/garmeeh/next-seo"
                        className="flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="ml-1">next-seo</span>
                    </a>
                </div>
            </div>
        ),
        justification: (
            <span className="text-gray-700">
                SEO avançado para SSR. Simplifica meta tags, Open Graph e sitemaps em Next.js, melhorando
                visibilidade e compartilhamento.
            </span>
        ),
    },

    // Otimização de Imagens
    {
        layer: (
            <div className="flex items-center mr-0">
                Otimização de Imagens
            </div>
        ),
        tech: (
            <div className="flex flex-col space-y-2 md:flex-col md:space-x-3 md:justify-center md:items-center md:w-full w-min">

                {/* next-optimized-images */}
                <div className="flex items-center whitespace-nowrap m-0">
                    <a
                        href="https://github.com/cyrilwanner/next-optimized-images"
                        className="flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="ml-1">next-optimized-images</span>
                    </a>
                </div>

                {/* sharp */}
                <div className="flex items-center whitespace-nowrap m-0">
                    <a
                        href="https://sharp.pixelplumbing.com/"
                        className="flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={logos.sharpLogo}
                            alt="sharp Logo"
                            width={24}
                            height={24}
                            className="inline-block"
                        />
                        <span className="ml-1">sharp</span>
                    </a>
                </div>
            </div>
        ),
        justification: (
            <span className="text-gray-700">
                Compressão e dimensionamento de imagens no build/SSR, reduzindo bundle e
                acelerando carregamento.
            </span>
        ),
    },

    // PWA (Progressive Web App)
    {
        layer: (
            <div className="flex items-center mr-0">
                PWA (Aplicativo Web Progressivo)
            </div>
        ),
        tech: (
            <div className="flex flex-col space-y-2 md:flex-row md:space-x-3 md:justify-center md:items-center md:w-full w-min">

                {/* next-pwa */}
                <div className="flex items-center whitespace-nowrap m-0">
                    <a
                        href="https://github.com/shadowwalker/next-pwa"
                        className="flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="ml-1">next-pwa</span>
                    </a>
                </div>
            </div>
        ),
        justification: (
            <span className="text-gray-700">
                Habilita instalação como app, service workers e cache offline em Next.js, com cache offline e push notifications, melhorando UX e performance.
            </span>
        ),
    },

    // Observabilidade/Erros
    {
        layer: (
            <div className="flex items-center whitespace-nowrap mr-0">
                Observabilidade/Erros
            </div>
        ),
        tech: (
            <div className="flex flex-col space-y-2 md:flex-row md:space-x-3 md:justify-center md:items-center md:w-full w-min">

                {/* Sentry */}
                <div className="flex items-center whitespace-nowrap m-0">
                    <a
                        href="https://sentry.io/"
                        className="flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={logos.sentryLogo}
                            alt="Sentry Logo"
                            width={24}
                            height={24}
                            className="inline-block"
                        />
                        <span className="ml-1">Sentry</span>
                    </a>
                    <GoPlus className="inline-block md:visible invisible" />
                </div>

                {/* LogRocket */}
                <div className="flex items-center whitespace-nowrap m-0">
                    <a
                        href="https://logrocket.com/"
                        className="flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="https://cdn.brandfetch.io/idbqwJEFOO/w/180/h/180/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX&t=1752074006185"
                            alt="LogRocket Logo"
                            width={24}
                            height={24}
                            className="inline-block"
                        />
                        <span className="ml-1">LogRocket</span>
                    </a>
                </div>
            </div>
        ),
        justification: (
            <span className="text-gray-700">
                Captura e correlação de erros em tempo real com Sentry e reprodução de sessão
                do usuário com LogRocket, garantindo diagnóstico rápido em SSR.
            </span>
        ),
    },

    // Monitoramento & Logs
    {
        layer: (
            <div className="flex items-center whitespace-nowrap mr-0">
                Monitoramento & Logs
            </div>
        ),
        tech: (
            <div className="flex flex-col space-y-2 md:flex-row md:space-x-3 md:justify-center md:items-center md:w-full w-min">

                {/* Winston */}
                <div className="flex items-center whitespace-nowrap m-0">
                    <a
                        href="https://github.com/winstonjs/winston"
                        className="flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="ml-1">Winston</span>
                    </a>
                    <GoPlus className="inline-block md:visible invisible" />
                </div>

                {/* pino */}
                <div className="flex items-center whitespace-nowrap m-0">
                    <a
                        href="https://getpino.io/"
                        className="flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={logos.pinoLogo}
                            alt="Pino Logo"
                            width={24}
                            height={24}
                            className="inline-block"
                        />
                        <span className="ml-1">pino</span>
                    </a>
                </div>
            </div>
        ),
        justification: (
            <span className="text-gray-700">
                Winston para logs estruturados em desenvolvimento e pino para alta performance
                em produção, mantendo rastreabilidade durante SSR.
            </span>
        ),
    },

    // Lint & Formatting
    {
        layer: (
            <div className="flex items-center whitespace-nowrap mr-0">
                Lint & Formatting
            </div>
        ),
        tech: (
            <div className="flex flex-col space-y-2 md:flex-row md:space-x-3 md:justify-center md:items-center md:w-full w-min">

                {/* ESLint */}
                <div className="flex items-center whitespace-nowrap m-0">
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
                        <span className="ml-1">ESLint</span>
                    </a>
                    <GoPlus className="inline-block md:visible invisible" />
                </div>

                {/* Prettier */}
                <div className="flex items-center whitespace-nowrap m-0">
                    <a
                        href="https://prettier.io/"
                        className="flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="https://prettier.io/icon.png"
                            alt="Prettier Logo"
                            width={24}
                            height={24}
                        />
                        <span className="ml-1">Prettier</span>
                    </a>
                </div>
            </div>
        ),
        justification: (
            <span className="text-gray-700">
                Garantia de código consistente com ESLint e formatação automática com Prettier,
                integrados ao pipeline SSR.
            </span>
        ),
    },

    // Testes
    {
        layer: (
            <div className="flex items-center whitespace-nowrap mr-0">
                Testes
            </div>
        ),
        tech: (
            <div className="flex flex-col space-y-2 md:flex-col md:space-x-3 md:justify-center md:items-center md:w-full w-min">

                {/* Vitest/Jest */}
                <div className="flex items-center whitespace-nowrap m-0">
                    <a
                        href="https://vitest.dev/"
                        className="flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={logos.vitestLogo}
                            alt="Vitest Logo"
                            width={24}
                            height={24}
                            className="inline-block"
                        />
                        <span className="ml-1">Vitest / Jest</span>
                    </a>
                </div>

                {/* Testing Library */}
                <div className="flex items-center whitespace-nowrap m-0">
                    <a
                        href="https://testing-library.com/docs/react-testing-library/intro/"
                        className="flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={logos.reactTestingLibraryLogo}
                            alt="React Testing Library Logo"
                            width={24}
                            height={24}
                            className="inline-block"
                        />
                        <span className="ml-1">Testing Library</span>
                    </a>
                </div>
            </div>
        ),
        justification: (
            <span className="text-gray-700">
                Testes isolados de componentes e lógica SSR com Vitest/Jest e
                simulações de DOM via Testing Library, garantindo estabilidade.
            </span>
        ),
    },

    // Deploy & Infra
    {
        layer: (
            <div className="flex items-center whitespace-nowrap mr-0">
                Deploy & Infra
            </div>
        ),
        tech: (
            <div className="flex flex-col space-y-2 md:flex-col md:space-x-3 md:justify-center md:items-center md:w-full w-min">

                {/* PM2 */}
                <div className="flex items-center whitespace-nowrap m-0">
                    <a
                        href="https://pm2.keymetrics.io/"
                        className="flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={logos.pm2Logo}
                            alt="PM2 Logo"
                            width={24}
                            height={24}
                            className="inline-block"
                        />
                        <span className="ml-1">PM2</span>
                    </a>
                </div>

                {/* Docker */}
                <div className="flex items-center whitespace-nowrap m-0">
                    <a
                        href="https://www.docker.com/"
                        className="flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={logos.dockerLogo}
                            alt="Docker Logo"
                            width={24}
                            height={24}
                            className="inline-block"
                        />
                        <span className="ml-1">Docker</span>
                    </a>
                </div>

                {/* Kubernetes */}
                <div className="flex items-center whitespace-nowrap m-0">
                    <a
                        href="https://kubernetes.io/"
                        className="flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={logos.kubernetesLogo}
                            alt="Kubernetes Logo"
                            width={24}
                            height={24}
                            className="inline-block"
                        />
                        <span className="ml-1">Kubernetes</span>
                    </a>
                </div>

                {/* Nginx */}
                <div className="flex items-center whitespace-nowrap m-0">
                    <a
                        href="https://nginx.org/"
                        className="flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={logos.nginxLogo}
                            alt="Nginx Logo"
                            width={24}
                            height={24}
                            className="inline-block"
                        />
                        <span className="ml-1">Nginx</span>
                    </a>
                </div>
            </div>
        ),
        justification: (
            <span className="text-gray-700">
                Processo de deploy robusto com PM2, monitoramento de processos Node/SSR, containerização via Docker, orquestração
                em Kubernetes e proxy reverso com Nginx para alta disponibilidade.
            </span>
        ),
    },

    // CI/CD
    {
        layer: (
            <div className="flex items-center whitespace-nowrap mr-0">
                CI/CD
            </div>
        ),
        tech: (
            <div className="flex flex-col space-y-2 md:flex-row md:space-x-3 md:justify-center md:items-center md:w-full w-min">
                {/* GitHub Actions / GitLab CI */}
                <div className="flex items-center whitespace-nowrap m-0">
                    <a
                        href="https://github.com/features/actions"
                        className="flex items-center hover:bg-green-100 rounded-lg px-2 py-1 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="ml-1">GitHub Actions / GitLab CI</span>
                    </a>
                </div>
            </div>
        ),
        justification: (
            <span className="text-gray-700">
                Pipelines de build, teste e deploy automáticas com GitHub Actions ou
                GitLab CI, acelerando entregas e garantindo qualidade.
            </span>
        ),
    },
];