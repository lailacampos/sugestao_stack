import { FaBookOpen, FaCube, FaLayerGroup, FaProjectDiagram, FaPuzzlePiece } from 'react-icons/fa';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export interface PatternRow {
    concept: React.ReactNode;
    mvc: React.ReactNode;
    pattern: React.ReactNode;
};

export interface PatternItem {
    id: string;
    title: React.ReactNode;
    shortDescription: React.ReactNode;
    fullDescription: React.ReactNode;
    comparisonRows: PatternRow[];
};

export const patterns: PatternItem[] = [
    // Hexagonal Architecture
    {
        id: 'hexagonal',
        title: (
            <>
                <FaCube className="inline-block mr-1 text-blue-500" />{" "}
                Camadas Limpas / Hexagonal
            </>
        ),
        shortDescription: (
            <>
                Isola o core de negócio de detalhes de infra via{" "}
                <strong>Ports & Adapters</strong>.
            </>
        ),
        fullDescription: (
            <div>
                A Arquitetura Hexagonal organiza o aplicativo em três camadas principais:
                <ul className="list-disc list-inside ml-4 mt-2">
                    <li>Domain (regras de negócio puras)</li>
                    <li>Application (orquestração de casos de uso)</li>
                    <li>Infrastructure (adapters concretos para frameworks e serviços)</li>
                </ul>
            </div>
        ),
        comparisonRows: [
            {
                concept: (
                    <>
                        <FaLayerGroup className="inline-block mr-1 text-green-500" />
                        Organização de Código
                    </>
                ),
                mvc: (
                    <>
                        Controller <HiOutlineArrowNarrowRight className='inline-block' /> Model <HiOutlineArrowNarrowRight className='inline-block' /> View: lógica de fluxo, dados e UI misturados em camadas horizontais.
                    </>
                ),
                pattern: 'Domain, Application e Infrastructure: separação clara entre regras, orquestração e detalhes técnicos.',
            },
            {
                concept: (
                    <>
                        <FaProjectDiagram className="inline-block mr-1 text-green-500" />
                        Dependências
                    </>
                ),
                mvc: 'Controllers e Models dependem diretamente do ORM e de helpers do framework.',
                pattern: 'Domain é totalmente independente de frameworks; infra adapta-se via interfaces (ports).',
            },
            {
                concept: (
                    <>
                        <FaPuzzlePiece className="inline-block mr-1 text-green-500" />
                        Testabilidade
                    </>
                ),
                mvc: 'Testes de controllers/models frequentemente precisam de DB ou mocks de framework.',
                pattern: 'UseCases e Entities podem ser testados isoladamente passando fakes de repositório.',
            },
            {
                concept: (
                    <>
                        <FaCube className="inline-block mr-1 text-green-500" />
                        Evolução & Substituição
                    </>
                ),
                mvc: 'Alterar ORM ou serviço externo exige tocar models/controllers diretamente.',
                pattern: 'Troque a implementação do adapter sem impactar o domínio, apenas registrando nova implementação da interface.',
            },
            // mais linhas
        ]
    },
    // Domain‑Driven Design & Bounded Contexts
    {
        id: 'ddd',
        title: (
            <>
                <FaBookOpen className="inline-block mr-1 text-indigo-500" />
                Domain‑Driven Design & Bounded Contexts
            </>
        ),
        shortDescription: (
            <>
                Modela o sistema segundo o domínio do negócio e isola subdomínios como{" "}
                <strong>Contextos Limitados</strong>.
            </>
        ),
        fullDescription: (
            <div>
                O DDD organiza o software em camadas como:
                <ul className="list-disc list-inside ml-4 mt-2">
                    <li>
                        <strong>Domain</strong>: modelo rico com entidades, objetos de valor e
                        lógica de negócio.
                    </li>
                    <li>
                        <strong>Application</strong>: orquestra casos de uso sem regras de
                        negócio.
                    </li>
                    <li>
                        <strong>Infrastructure</strong>: adaptações para persistência, UI e
                        integrações externas.
                    </li>
                </ul>
                E define <em>Bounded Contexts</em> para que termos do negócio tenham
                significado claro em cada subdomínio.
            </div>
        ),
        comparisonRows: [
            {
                concept: (
                    <>
                        <FaLayerGroup className="inline-block mr-1 text-green-500" />
                        Modelagem
                    </>
                ),
                mvc: (
                    <>
                        Model <HiOutlineArrowNarrowRight className="inline-block mx-1" />
                        atributos anêmicos sem regras de negócio explícitas.
                    </>
                ),
                pattern: (
                    <>
                        Entidades e Value Objects encapsulam regras no <strong>Domain Model</strong>.
                    </>
                ),
            },
            {
                concept: (
                    <>
                        <FaProjectDiagram className="inline-block mr-1 text-green-500" />
                        Contextualização
                    </>
                ),
                mvc: 'Um único conjunto de models/views serve todas as áreas da aplicação.',
                pattern: (
                    <>
                        Cada Bounded Context tem seu próprio modelo e linguagem ubíqua,
                        evitando ambiguidade.
                    </>
                ),
            },
            {
                concept: (
                    <>
                        <FaPuzzlePiece className="inline-block mr-1 text-green-500" />
                        Responsabilidade
                    </>
                ),
                mvc: 'Controllers e models acumulam lógica de vários fluxos de negócio.',
                pattern: (
                    <>
                        Serviços de domínio e Aggregate Roots concentram lógica de cada
                        contexto isoladamente.
                    </>
                ),
            },
            {
                concept: (
                    <>
                        <FaCube className="inline-block mr-1 text-green-500" />
                        Evolução Incremental
                    </>
                ),
                mvc: 'Mudanças em um model afetam toda a aplicação.',
                pattern: (
                    <>
                        Bounded Contexts permitem evoluir partes isoladas sem impacto global.
                    </>
                ),
            },
        ],
    },
    // outros padrões
];