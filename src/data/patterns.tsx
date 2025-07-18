import { FaCube, FaLayerGroup, FaProjectDiagram, FaPuzzlePiece } from 'react-icons/fa';
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
    // outros padrões
];