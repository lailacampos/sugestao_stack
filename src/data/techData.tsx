import reactLogo from '../assets/react.svg';
import { GoPlus } from "react-icons/go";

export interface FrontendTechItem {
    category: React.ReactNode;
    tech: React.ReactNode;
}

export interface BackendTechItem {
    layer: React.ReactNode;
    tech: React.ReactNode;
    justification: React.ReactNode;
}

export const frontendTech: FrontendTechItem[] = [
    {
        category: (
            <div className='flex justify-center items-center space-x-2'>
                Base
            </div>
        ),
        tech: (
            <div className="flex items-center space-x-1 justify-center">
                <img src={reactLogo} alt="React Logo" width="24" height="24" className='inline-block' />
                <span>React</span> <GoPlus className='inline-block mx-3' />
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="TypeScript Logo" width="24" height="24" className='inline-block' />
                <span>TypeScript</span> <GoPlus className='inline-block mx-3' />
                <img src="/vite.svg" alt="Vite Logo" width="24" height="24" className='inline-block' />
                <span>Vite</span>
            </div>
        )
    },
];

export const backendTech: BackendTechItem[] = [
    {
        layer: 'Core / API',
        tech: (
            <div className="flex items-center space-x-1">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg" alt="Laravel Logo" width="24" height="24" />
                <span>Laravel 10+</span>
            </div>
        ),
        justification:
            'Framework MVC maduro, com suporte a jobs, events, queues e ecossistema consolidado.',
    },
];