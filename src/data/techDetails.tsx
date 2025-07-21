// src/data/techDetails.tsx
import * as logos from '../assets/logos/logos';

export interface TechDetail {
    id: string;
    name: string;
    title: React.ReactNode;
    description: React.ReactNode;
    justification?: React.ReactNode;
    icon?: React.ReactNode;
}

export const frontendDetails: TechDetail[] = [

    // Base: React + TypeScript + Next.js
    {
        id: "base",
        name: "react-typescript-nextjs",
        title: "React + TypeScript + Next.js",
        description: (
            <div>
                <p>
                    <strong>React:</strong> Biblioteca para criação de interfaces modernas, componíveis e reativas.
                </p>
                <p>
                    <strong>TypeScript:</strong> Superset de JavaScript com tipagem estática.
                </p>
                <p>
                    <strong>Next.js:</strong> Framework React para renderização server-side (SSR), static site generation (SSG), roteamento automático, e otimizações avançadas para produção.
                </p>
            </div>
        ),
        justification: (
            <ul className="list-disc list-inside ml-4 mt-2">
                <li>Next.js permite renderizar o React no servidor, entregando HTML já preenchido com dados (SSR), otimizando a performance do primeiro carregamento e o SEO.</li>
                <li>Unifica frontend em React com recursos avançados de roteamento, code splitting, pré-busca de dados, imagens otimizadas e API routes.</li>
                <li>Facilita manutenção, componentização e escalabilidade do projeto.</li>
                <li>TypeScript reduz bugs e facilita refatorações.</li>
                <li>Padrão de mercado para aplicações web modernas, especialmente em sistemas com grandes buffers de dados e necessidade de SSR.</li>
            </ul>
        ),
        icon: (
            <div className="flex space-x-2">
                <img src={logos.reactLogo} alt="React Logo" className="h-6 w-6" />
                <img src={logos.typescriptLogo} alt="TypeScript Logo" className="h-6 w-6" />
                <img src={logos.nextjsLogo} alt="Next.js Logo" className="h-6 w-6" />
            </div>
        )
    },

    // Estado & Dados: Redux Toolkit + React Query
    {
        id: "state-data",
        name: "redux-toolkit-react-query",
        title: "Redux Toolkit + React Query",
        description: (
            <></>
        ),
        justification: (
            <></>
        ),
        icon: (
            <></>
        )
    },

    // UI & CSS:  Tailwind CSS + daisyUI + Headless UI
    {
        id: "ui-css",
        name: "tailwindcss-daisyui-headlessui",
        title: "Tailwind CSS + daisyUI + Headless UI",
        description: (
            <></>
        ),
        justification: (
            <></>
        ),
        icon: (
            <></>
        )
    },

    // Animações & Ícones: Framer Motion + React Icons
    {
        id: "animations-icons",
        name: "framer-motion-react-icons",
        title: "Framer Motion + React Icons",
        description: (
            <></>
        ),
        justification: (
            <></>
        ),
        icon: (
            <></>
        )
    },

    // Listas & Tabelas Grandes: TanStack Virtual + TanStack Table
    // id: "lists-tables",
    {
        id: "lists-tables",
        name: "tanstack-virtual-tanstack-table",
        title: "TanStack Virtual + TanStack Table",
        description: (
            <></>
        ),
        justification: (
            <></>
        ),
        icon: (
            <></>
        )
    },

    // Cache Offline & IndexedDB: Dexie.js
    // id: "cache-offline-indexeddb",
    {
        id: "cache-offline-indexeddb",
        name: "dexiejs",
        title: "Dexie.js",
        description: (
            <></>
        ),
        justification: (
            <></>
        ),
        icon: (
            <></>
        )
    },

    // Formulários & Validação: Formik + Yup
    // id: "forms-validation",
    {
        id: "forms-validation",
        name: "formik-yup",
        title: "Formik + Yup",
        description: (
            <></>
        ),
        justification: (
            <></>
        ),
        icon: (
            <></>
        )
    },

    // Select/Autocomplete Avançado: React Select + Headless UI Combobox
    // id: "select-autocomplete",
    {
        id: "select-autocomplete",
        name: "react-select-headlessui-combobox",
        title: "React Select + Headless UI Combobox",
        description: (
            <></>
        ),
        justification: (
            <></>
        ),
        icon: (
            <></>
        )
    },

    // SSR/SEO: next-seo + next-optimized-images
    // id: "ssr-seo"
    {
        id: "ssr-seo",
        name: "next-seo-next-optimized-images",
        title: "Next SEO + Next Optimized Images",
        description: (
            <></>
        ),
        justification: (
            <></>
        ),
        icon: (
            <></>
        )
    },

    // HTTP & Auth: Axios + interceptors
    // id: "http-auth"
    {
        id: "http-auth",
        name: "axios-interceptors",
        title: "Axios + Interceptors",
        description: (
            <></>
        ),
        justification: (
            <></>
        ),
        icon: (
            <></>
        )
    },

    // Observabilidade & Monitoramento: Sentry + LogRocket
    // id: "observability-monitoring"
    {
        id: "observability-monitoring",
        name: "sentry-logrocket",
        title: "Sentry + LogRocket",
        description: (
            <></>
        ),
        justification: (
            <></>
        ),
        icon: (
            <></>
        )
    },

    // Lint & Formatting: ESLint + Prettier
    // id: "lint-formatting-frontend"
    {
        id: "lint-formatting-frontend",
        name: "eslint-prettier-frontend",
        title: "ESLint + Prettier",
        description: (
            <></>
        ),
        justification: (
            <></>
        ),
        icon: (
            <></>
        )
    },

    // Git Hooks: Husky + lint-staged
    // id: "git-hooks"
    {
        id: "git-hooks",
        name: "husky-lint-staged",
        title: "Husky + lint-staged",
        description: (
            <></>
        ),
        justification: (
            <></>
        ),
        icon: (
            <></>
        )
    },

    // Testes: Vitest + React Testing Library
    // id: "testing-frontend"
    {
        id: "testing-frontend",
        name: "vitest-react-testing-library",
        title: "Vitest + React Testing Library",
        description: (
            <></>
        ),
        justification: (
            <></>
        ),
        icon: (
            <></>
        )
    },

    // Component Docs: Storybook
    // id: "component-docs"
    {
        id: "component-docs",
        name: "storybook",
        title: "Storybook",
        description: (
            <></>
        ),
        justification: (
            <></>
        ),
        icon: (
            <></>
        )
    },

    // Extras: ...
    // id: "extras-frontend"
    {
        id: "extras-frontend",
        name: "extras-frontend",
        title: "Extras",
        description: (
            <></>
        ),
        justification: (
            <></>
        ),
        icon: (
            <></>
        )
    }
];

export const backendDetails: TechDetail[] = [

    // Core / API: Laravel
    // id: "core-api",
    {
        id: "core-api",
        name: "laravel",
        title: "Laravel",
        description: (
            <></>
        ),
        justification: (
            <></>
        ),
        icon: (
            <></>
        )
    },

    // Autenticação: Sanctum
    // id: "auth",
    {
        id: "auth",
        name: "sanctum",
        title: "Sanctum",
        description: (
            <></>
        ),
        justification: (
            <></>
        ),
        icon: (
            <></>
        )
    },

    // Autorização: Spatie laravel-permission
    // id: "autorization"
    {
        id: "autorization",
        name: "spatie-laravel-permission",
        title: "Spatie Laravel Permission",
        description: (
            <></>
        ),
        justification: (
            <></>
        ),
        icon: (
            <></>
        )
    },

    // DB & Cache: Mysql + Redis/Memcached
    // id: "db-cache"
    {
        id: "db-cache",
        name: "mysql-redis",
        title: "MySQL + Redis/Memcached",
        description: (
            <></>
        ),
        justification: (
            <></>
        ),
        icon: (
            <></>
        )
    },

    // Queues/Workers: Redis/RabbitMQ + Laravel Horizon
    // id: "queues-workers"
    {
        id: "queues-workers",
        name: "redis-rabbitmq",
        title: "Redis/RabbitMQ + Laravel Horizon",
        description: (
            <></>
        ),
        justification: (
            <></>
        ),
        icon: (
            <></>
        )
    },

    // Real-Time: Laravel Echo + Pusher
    // id: "real-time"
    {
        id: "real-time",
        name: "laravel-echo-pusher",
        title: "Laravel Echo + Pusher",
        description: (
            <></>
        ),
        justification: (
            <></>
        ),
        icon: (
            <></>
        )
    },

    // OCR & IA: FastAPI + PyTorch/TensorFlow + AWS Rekognition
    // id: "ocr-ia"
    {
        id: "ocr-ia",
        name: "fastapi-pytorch-tensorflow-aws-rekognition",
        title: "FastAPI + PyTorch/TensorFlow + AWS Rekognition",
        description: (
            <></>
        ),
        justification: (
            <></>
        ),
        icon: (
            <></>
        )
    },

    // Busca & BI: Elasticsearch + Kibana/Grafana
    // id: "search-bi"
    {
        id: "search-bi",
        name: "elasticsearch-kibana-grafana",
        title: "Elasticsearch + Kibana/Grafana",
        description: (
            <></>
        ),
        justification: (
            <></>
        ),
        icon: (
            <></>
        )
    },

    // Documentação: Scribe + Laravel OpenAPI
    // id: "documentation"
    {
        id: "documentation",
        name: "scribe-laravel-openapi",
        title: "Scribe + Laravel OpenAPI",
        description: (
            <></>
        ),
        justification: (
            <></>
        ),
        icon: (
            <></>
        )
    },

    // Logging & Perf: Telescope + Sentry
    // id: "logging-performance"
    {
        id: "logging-performance",
        name: "telescope-sentry",
        title: "Telescope + Sentry",
        description: (
            <></>
        ),
        justification: (
            <></>
        ),
        icon: (
            <></>
        )
    },

    // Teste: PHPUnit + Pest
    // id: "testing-backend"
    {
        id: "testing-backend",
        name: "phpunit-pest",
        title: "PHPUnit + Pest",
        description: (
            <></>
        ),
        justification: (
            <></>
        ),
        icon: (
            <></>
        )
    },

    // CI/CD: GitHub Actions + GitLab CI
    // id: "ci-cd-backend"
    {
        id: "ci-cd-backend",
        name: "github-actions-gitlab-ci",
        title: "GitHub Actions + GitLab CI",
        description: (
            <></>
        ),
        justification: (
            <></>
        ),
        icon: (
            <></>
        )
    }
];

export const ssrDetails: TechDetail[] = [

    // Framework SSR: Next.js
    // id: "framework-ssr"
    {
        id: "framework-ssr",
        name: "nextjs",
        title: "Next.js",
        description: (
            <></>
        ),
        justification: (
            <></>
        ),
        icon: (
            <></>
        )
    },

    // Linguagem e Execução: Node.js
    // id: "language-runtime"
    {
        id: "language-runtime",
        name: "nodejs",
        title: "Node.js",
        description: (
            <></>
        ),
        justification: (
            <></>
        ),
        icon: (
            <></>
        )
    },

    // Fetching/HTTP Client: Axios + Fetch API
    // id: "fetching-http-client"
    {
        id: "fetching-http-client",
        name: "axios-fetch-api",
        title: "Axios + Fetch API",
        description: (
            <></>
        ),
        justification: (
            <></>
        ),
        icon: (
            <></>
        )
    },

    // Buffer/Cache Client: ioredis + node-redis
    // id: "buffer-cache-client"
    {
    id: "buffer-cache-client",
        name: "ioredis-node-redis",
        title: "ioredis + node-redis",
        description: (
            <></>
        ),
        justification: (
            <></>
        ),
        icon: (
            <></>
        )
    },

    // Auth/Session: next-auth
    // id: "auth-session"
    {
        id: "auth-session",
        name: "next-auth",
        title: "Next Auth",
        description: (
            <></>
        ),
        justification: (
            <></>
        ),
        icon: (
            <></>
        )
    },

    // SEO (Search Engine Optimization): next-seo
    // id: "seo"
    {
        id: "seo",
        name: "next-seo",
        title: "Next SEO",
        description: (
            <></>
        ),
        justification: (
            <></>
        ),
        icon: (
            <></>
        )
    },

    // Otimização de Imagens: next-optimized-images + sharp
    // id: "image-optimization"
    {
        id: "image-optimization",
        name: "next-optimized-images-sharp",
        title: "Next Optimized Images + Sharp",
        description: (
            <></>
        ),
        justification: (
            <></>
        ),
        icon: (
            <></>
        )
    },

    // PWA (Progressive Web App): next-pwa
    // id: "pwa"
    {
    id: "pwa",
        name: "next-pwa",
        title: "Next PWA",
        description: (
            <></>
        ),
        justification: (
            <></>
        ),
        icon: (
            <></>
        )
    },

    // Observabilidade/Erros: Sentry + LogRocket
    // id: "observability-errors"
    {
    id: "observability-errors",
        name: "sentry-logrocket",
        title: "Sentry + LogRocket",
        description: (
            <></>
        ),
        justification: (
            <></>
        ),
        icon: (
            <></>
        )
    },

    // Monitoramento & Logs: Winston + Pino
    // id: "monitoring-logs"
    {
        id: "monitoring-logs",
        name: "winston-pino",
        title: "Winston + Pino",
        description: (
            <></>
        ),
        justification: (
            <></>
        ),
        icon: (
            <></>
        )
    },

    // Lint & Formatting: ESLint + Prettier
    // id: "lint-formatting-ssr"
    {
    id: "lint-formatting-ssr",
        name: "eslint-prettier-ssr",
        title: "ESLint + Prettier",
        description: (
            <></>
        ),
        justification: (
            <></>
        ),
        icon: (
            <></>
        )
    },

    // Testes: Vitest/Jest + Testing Library
    // id: "testing-ssr"
    {
    id: "testing-ssr",
        name: "vitest-jest-testing-library",
        title: "Vitest/Jest + Testing Library",
        description: (
            <></>
        ),
        justification: (
            <></>
        ),
        icon: (
            <></>
        )
    },

    // Deploy & Infra: PM2 + Docker + Kubernetes + Nginx
    // id: "deploy-infra"
    {
        id: "deploy-infra",
        name: "pm2-docker-kubernetes-nginx",
        title: "PM2 + Docker + Kubernetes + Nginx",
        description: (
            <></>
        ),
        justification: (
            <></>
        ),
        icon: (
            <></>
        )
    },

    // CI/CD: GitHub Actions + GitLab CI
    // id: "ci-cd-ssr"
    {
        id: "ci-cd-ssr",
        name: "github-actions-gitlab-ci-ssr",
        title: "GitHub Actions + GitLab CI",
        description: (
            <></>
        ),
        justification: (
            <></>
        ),
        icon: (
            <></>
        )
    }
];