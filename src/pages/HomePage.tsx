
// src/pages/HomePage.tsx
import { frontendColumns, backendColumns, ssrColumns, getPatternColumns } from "../config/tableColumns";
import { TechTable } from "../components/Table/TechTable";
import { frontendTech, backendTech, ssrTech } from "../data/techData";
import { patterns } from "../data/patterns";
import { GoArrowDown } from "react-icons/go";
import softwareEngineeringIcon from "../assets/software_engineering.svg";

const HomePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex justify-center px-4 py-8">
            <div className="w-full md:max-w-4xl max-w-3xl">
                {/* Header */}
                <header className="mb-10 text-center lg:text-left">
                    <div className="flex flex-col lg:flex-row items-center mb-4">
                        <img
                            src={softwareEngineeringIcon}
                            alt="Software Engineering Icon"
                            className="lg:mx-0 w-16 h-16"
                        />
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 ml-4">
                            Tech Stack
                        </h1>
                    </div>
                    <p className="mt-2 text-gray-600 max-w-2xl mx-auto lg:mx-0">
                        Sugestões de tecnologias e padronizações
                        para o desenvolvimento de sistema intermediário e avançado
                        utilizando React, Next.js, SSR, Laravel e mais.
                    </p>
                </header>

                {/* Document Presentation */}
                <section id="resumo" className="bg-white shadow-md rounded-lg p-6 mb-10">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Resumo da Arquitetura Proposta
                    </h2>
                    <p className="text-gray-700 mb-4">
                        O frontend oferece interfaces ricas, o SSR entrega páginas prontas e
                        otimizadas, o buffer garante respostas rápidas usando dados em
                        memória, e o backend cuida da lógica, persistência e processamento
                        assíncrono.
                    </p>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        Fluxo principal
                    </h3>
                    <pre className="bg-gray-100 p-4 rounded mb-4 text-gray-700 overflow-x-auto">
                        <code className="font-mono">
                            <span className="text-blue-500 text-wrap">Frontend (React/Next.js)</span>
                            <br />
                            <GoArrowDown className="inline-block mx-2 text-gray-500" />
                            <br />
                            <span className="text-green-500 text-wrap">Server SSR (Next.js/Node.js)</span>
                            <br />
                            <GoArrowDown className="inline-block mx-2 text-gray-500" />
                            <br />
                            <span className="text-yellow-500 text-wrap">Buffer (Redis/Memcached)</span>
                            <br />
                            <GoArrowDown className="inline-block mx-2 text-gray-500" />
                            <br />
                            <span className="text-orange-500 text-wrap">Backend (Laravel, MySQL, Workers, etc)</span>
                        </code>
                    </pre>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        Descrição do Fluxo
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>
                            <strong>Frontend:</strong> Utiliza React com Next.js e TypeScript;
                            consome páginas e dados já otimizados, prontos para renderização e
                            navegação rápida.
                        </li>
                        <li>
                            <strong>Server SSR:</strong> Servidor de SSR renderiza as páginas no
                            servidor com dados reais antes de enviá-las ao navegador;
                            proporciona carregamento inicial mais rápido e SEO aprimorado;
                            aplica lógicas de autenticação, pré-busca, cache e PWA.
                        </li>
                        <li>
                            <strong>Buffer:</strong> Utiliza Redis ou Memcached como camada de
                            cache em memória, armazenando dados semi-estáticos ou altamente
                            requisitados para respostas rápidas.
                        </li>
                        <li>
                            <strong>Backend:</strong> Responsável por regras de negócio,
                            persistência definitiva, processamento assíncrono (jobs, IA,
                            relatórios) e atualização do buffer, desacoplando-se da renderização.
                        </li>
                    </ul>
                </section>

                {/* Links para seções detalhadas */}
                <nav className="mb-10 flex flex-col space-y-2">
                    <a href="#detalhes-frontend" className="text-blue-500 hover:underline">
                        Detalhes das Tecnologias Frontend
                    </a>
                    <a href="#detalhes-backend" className="text-blue-500 hover:underline">
                        Detalhes das Tecnologias Backend
                    </a>
                    <a href="#detalhes-ssr" className="text-blue-500 hover:underline">
                        Detalhes das Tecnologias SSR
                    </a>
                    <a href="#secao-padroes" className="text-blue-500 hover:underline">
                        Padrões de Projeto e Arquitetura
                    </a>
                </nav>

                {/* Tech Sections */}
                <div className="flex flex-col space-y-10">
                    {/* Frontend Section */}
                    <section id="secao-frontend" className="flex-1">
                        <div className="mb-4 flex justify-center lg:justify-start items-center">
                            <div className="h-1 w-12 bg-blue-500 rounded-full mr-3"></div>
                            <h2 className="text-2xl font-semibold text-gray-800">
                                Tecnologias Frontend
                            </h2>
                        </div>
                        <p className="mb-6 text-gray-700 text-center lg:text-left">
                            Sugestões de stack para o frontend
                        </p>
                        <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 overflow-x-auto">
                            <TechTable columns={frontendColumns} items={frontendTech} />
                        </div>
                    </section>

                    {/* Backend Section */}
                    <section id="secao-backend" className="flex-1">
                        <div className="mb-4 flex justify-center lg:justify-start items-center">
                            <div className="h-1 w-12 bg-green-500 rounded-full mr-3"></div>
                            <h2 className="text-2xl font-semibold text-gray-800">
                                Tecnologias Backend
                            </h2>
                        </div>
                        <p className="mb-6 text-gray-700 text-center lg:text-left">
                            Sugestões de stack para o backend
                        </p>
                        <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 overflow-x-auto">
                            <TechTable columns={backendColumns} items={backendTech} />
                        </div>
                    </section>

                    {/* SSR Section */}
                    <section id="secao-ssr" className="flex-1">
                        <div className="mb-4 flex justify-center lg:justify-start items-center">
                            <div className="h-1 w-12 bg-purple-500 rounded-full mr-3"></div>
                            <h2 className="text-2xl font-semibold text-gray-800">
                                Tecnologias SSR
                            </h2>
                        </div>
                        <p className="mb-6 text-gray-700 text-center lg:text-left">
                            Sugestões de stack para Server-Side Rendering
                        </p>
                        <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 overflow-x-auto">
                            <TechTable columns={ssrColumns} items={ssrTech} />
                        </div>
                    </section>

                    {/* Patterns Section */}
                    <section id="secao-padroes" className="flex-1">
                        <div className="mb-6 flex justify-center lg:justify-start items-center">
                            <div className="h-1 w-12 bg-yellow-500 rounded-full mr-3"></div>
                            <h2 className="text-2xl font-semibold text-gray-800">
                                Padrões de Projeto & Arquitetura
                            </h2>
                        </div>

                        {/* Overview Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                            {patterns.map((pat) => (
                                <a
                                    key={pat.id}
                                    href={`#detalhe-${pat.id}`}
                                    className="block p-4 bg-white rounded-lg shadow hover:shadow-lg transition"
                                >
                                    <h3 className="text-lg font-medium text-gray-800">{pat.title}</h3>
                                    <p className="mt-2 text-gray-600 text-sm line-clamp-3">
                                        {pat.shortDescription}
                                    </p>
                                </a>
                            ))}
                        </div>
                        {/* Detailed Sections */}
                        {patterns.map((pat) => (
                            <div key={pat.id} id={`detalhe-${pat.id}`} className="mb-12">
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                    {pat.title}
                                </h3>
                                <p className="text-gray-700 mb-6">
                                    {pat.fullDescription}
                                </p>
                                <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 overflow-x-auto">
                                    <TechTable
                                        columns={getPatternColumns(
                                            typeof pat.title === 'string' ? pat.title : String(pat.title)
                                        )}
                                        items={pat.comparisonRows}
                                    />
                                </div>
                            </div>
                        ))}
                    </section>

                </div>
            </div>
        </div>
    );
};

export default HomePage;