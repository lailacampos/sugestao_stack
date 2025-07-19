import { 
    FaBalanceScale, 
    FaBolt, 
    FaBookOpen, 
    FaChartBar, 
    FaChartLine, 
    FaColumns, 
    FaCube, 
    FaDatabase, 
    FaExchangeAlt, 
    FaLayerGroup, 
    FaLock, 
    FaPlay, 
    FaPlug, 
    FaProjectDiagram, 
    FaPuzzlePiece, 
    FaRoute, 
    FaSyncAlt, 
    FaTachometerAlt 
} from 'react-icons/fa';

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
                    <li>
                        <strong>Domain</strong>: regras de negócio puras
                    </li>
                    <li>
                        <strong>Application</strong>: orquestração de casos de uso
                    </li>
                    <li>
                        <strong>Infrastructure</strong>: adapters concretos para frameworks e serviços
                    </li>
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
                        Controller → Model → View: lógica de fluxo, dados e UI misturados em camadas horizontais.
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

    // Domain-Driven Design & Bounded Contexts
    {
        id: 'ddd',
        title: (
            <>
                <FaBookOpen className="inline-block mr-1 text-indigo-500" />
                Domain-Driven Design & Bounded Contexts
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
                        Model →
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

    // Repository + Service Layer
    {
        id: 'repository-service-layer',
        title: (
            <>
                <FaDatabase className="inline-block mr-1 text-blue-500" />{' '}
                Repository + Service Layer
            </>
        ),
        shortDescription: (
            <>
                Separa persistência de dados e regras de negócio em{' '}
                <strong>Repositories</strong> e <strong>Services</strong>.
            </>
        ),
        fullDescription: (
            <div>
                O padrão Repository + Service Layer organiza o backend em duas camadas:
                <ul className="list-disc list-inside ml-4 mt-2">
                    <li>
                        <strong>Repository:</strong> encapsula consultas e operações contra MySQL,
                        Redis/Memcached via Eloquent, ioredis, node-redis etc.
                    </li>
                    <li>
                        <strong>Service Layer:</strong> contém regras transacionais e orquestra
                        workflows (ex.: atualizar buffer, enfileirar jobs, notificar usuários).
                    </li>
                </ul>

                <div className='mt-4'>
                    Aplicações práticas:
                    <ul className="list-disc list-inside ml-4 mt-2">
                        <li>
                            <strong>APIs REST:</strong> Controllers chamam Services que usam
                            Repositories para acessar dados.
                        </li>
                        <li>
                            <strong>SSR Server:</strong> Services preparam dados para renderização,
                            isolando lógica de acesso a dados.
                        </li>
                        <li>
                            <strong>Jobs:</strong> Services orquestram tarefas assíncronas, usando
                            Repositories para persistência.
                        </li>
                    </ul>
                </div>
            </div>
        ),
        comparisonRows: [
            {
                concept: (
                    <>
                        <FaLayerGroup className="inline-block mr-1 text-green-500" />
                        Persistência
                    </>
                ),
                mvc: 'Controller → Model (Eloquent) acessa dados diretamente',
                pattern:
                    'Controller → Service → Repository → Model: acesso a dados isolado em Repositories.',
            },
            {
                concept: (
                    <>
                        <FaProjectDiagram className="inline-block mr-1 text-green-500" />
                        Lógica transacional
                    </>
                ),
                mvc: 'Regras de negócio no Controller ou espalhadas no Model',
                pattern:
                    'Service Layer centraliza transações compostas (buffer, jobs, notificações).',
            },
            {
                concept: (
                    <>
                        <FaPuzzlePiece className="inline-block mr-1 text-green-500" />
                        Testabilidade
                    </>
                ),
                mvc: 'Testes de Controller/Model acessam DB real ou usam mocks complexos',
                pattern:
                    'Repositories e Services podem ser mockados, permitindo testes de unidade isolados.',
            },
            {
                concept: (
                    <>
                        <FaCube className="inline-block mr-1 text-green-500" />
                        Reuso
                    </>
                ),
                mvc: 'Código de persistência e lógica duplicado em múltiplos Controllers',
                pattern:
                    'Services e Repositories reutilizáveis em APIs, SSR server e jobs.',
            },
        ]
    },

    // Event-Driven / Domain Events
    {
        id: 'event-driven',
        title: (
            <>
                <FaBolt className="inline-block mr-1 text-blue-500" />{' '}
                Event-Driven / Domain Events
            </>
        ),
        shortDescription: (
            <>
                Dispara eventos de domínio <span className='inline sm:hidden'> (ex: TicketAberto, NotaAtualizada) </span> que acionam listeners para side-effects
                (jobs, notificações, cache, etc).
            </>
        ),
        fullDescription: (
            <div>
                Em um sistema orientado a eventos, ações disparadas no domínio geram{' '}
                <strong>Domain Events</strong>, que são consumidos por listeners independentes:
                <ul className="list-disc list-inside ml-4 mt-2">
                    <li>
                        <strong>Backend:</strong> ao criar um Ticket, emite <code>TicketOpened</code>,
                        que dispara jobs (OCR, notificações), atualiza o buffer (Redis) e{' '}
                        notifica frontend/SSR em tempo real via websockets ou filas.
                    </li>
                    <li>
                        <strong>SSR Server:</strong> pode assinar eventos via WebSocket para invalidar
                        cache local ou atualizar páginas em tempo real.
                    </li>
                </ul>
            </div>
        ),
        comparisonRows: [
            {
                concept: (
                    <>
                        <FaPlay className="inline-block mr-1 text-green-500" />
                        Fluxo de Trabalho
                    </>
                ),
                mvc: 'Sincrono: ação HTTP → resposta imediata',
                pattern:
                    'Ação HTTP dispara evento → listeners/jobs assíncronos, sem bloquear o request.',
            },
            {
                concept: (
                    <>
                        <FaChartLine className="inline-block mr-1 text-green-500" />
                        Escalabilidade
                    </>
                ),
                mvc: 'Tasks pesadas podem travar o request principal',
                pattern:
                    'Jobs enfileirados em Redis/RabbitMQ, processados por workers dedicados.',
            },
            {
                concept: (
                    <>
                        <FaPlug className="inline-block mr-1 text-green-500" />
                        Extensibilidade
                    </>
                ),
                mvc: 'Para adicionar lógica, altera-se o Controller/Model',
                pattern:
                    'Basta registrar um novo listener para o Domain Event, sem tocar no core.',
            },
        ],
    },

    // CQRS + Read Models
    {
        id: 'cqrs-read-models',
        title: (
            <>
                <FaColumns className="inline-block mr-1 text-blue-500" /> CQRS + Read Models
            </>
        ),
        shortDescription: (
            <>
                Separa comandos de escrita e consultas de leitura em{' '}
                <strong>Commands</strong> e <strong>Queries</strong>.
            </>
        ),
        fullDescription: (
            <div>
                O padrão CQRS divide as operações em dois caminhos:
                <ul className="list-disc list-inside ml-4 mt-2">
                    <li>
                        <strong>Commands</strong>: manipulam o estado e emitem eventos de domínio.
                    </li>
                    <li>
                        <strong>Read Models</strong>: projeções otimizadas (ElasticSearch / MeiliSearch)
                        para consultas de alto desempenho.
                    </li>
                </ul>

                <div className='mt-4'>
                    Aplicações práticas:
                    <ul className="list-disc list-inside ml-4 mt-2">
                        <li>
                            <strong>APIs REST:</strong> Commands para escrita (POST/PUT) e Queries
                            para leitura (GET), com endpoints distintos.
                        </li>
                        <li>
                            <strong>SSR Server:</strong> Queries otimizadas para renderizar páginas
                            rapidamente, sem sobrecarregar o banco de escrita.
                        </li>
                        <li>
                            <strong>Relatórios/Dashboards:</strong> Read Models em bancos otimizados
                            (ex.: ElasticSearch) para consultas complexas e rápidas.
                        </li>
                        <li>
                            <strong>Buffer:</strong> Mantém dados prontos para consultas de alto volume, liberando o banco
                            principal.
                        </li>
                    </ul>
                </div>
            </div>
        ),
        comparisonRows: [
            {
                concept: (
                    <>
                        <FaExchangeAlt className="inline-block mr-1 text-green-500" />
                        Fluxo
                    </>
                ),
                mvc: 'Mesma rota/endpoint faz leitura e escrita no mesmo model.',
                pattern:
                    'Endpoints distintos: Commands para escrita e Queries para leitura em Read Models.',
            },
            {
                concept: (
                    <>
                        <FaTachometerAlt className="inline-block mr-1 text-green-500" />
                        Performance
                    </>
                ),
                mvc: 'Consultas complexas sobrecarregam o banco de escrita.',
                pattern:
                    'Read Models em bancos otimizados isolam carga de leitura, liberando o principal.',
            },
            {
                concept: (
                    <>
                        <FaBalanceScale className="inline-block mr-1 text-green-500" />
                        Consistência
                    </>
                ),
                mvc:
                    'CRUD síncrono mantém consistência forte, mas impacta a responsividade.',
                pattern:
                    'Consistência eventual entre Write e Read Models, ideal para relatórios e dashboards.',
            },
        ],
    },

    // API Gateway / Facade Layer (Complementar para SSR e múltiplos clientes)
    {
        id: 'api-gateway',
        title: (
            <>
                <FaLock className="inline-block mr-1 text-blue-500" /> API Gateway / Facade Layer
            </>
        ),
        shortDescription: (
            <>
                Centraliza autenticação, roteamento e segurança para múltiplos clientes e SSR.
            </>
        ),
        fullDescription: (
            <div>
                A camada de API Gateway (ou Facade) atua como ponto único de entrada para:
                <ul className="list-disc list-inside ml-4 mt-2">
                    <li>
                        Autenticação e autorização centralizadas para frontend, SSR e mobile.
                    </li>
                    <li>
                        Roteamento, versionamento e composição de APIs de forma unificada.
                    </li>
                    <li>
                        Monitoramento, logging e cache compartilhado antes do backend principal.
                    </li>
                </ul>

                <div className='mt-4'>Simplifica controle de acesso, rate limit e centraliza monitoramento de tráfego.</div>

                <div className='mt-4'>
                    Aplicações práticas:
                    <ul className="list-disc list-inside ml-4 mt-2">
                        <li>
                            <strong>SSR Server:</strong> Gateway aplica autenticação e roteia
                            requests para o backend, simplificando a lógica de segurança.
                            Pode ser implementado no SSR server ou separado (Ex: Nginx, API Gateway gerenciado).
                        </li>
                        <li>
                            <strong>APIs REST:</strong> Gateway centraliza autenticação, rate-limiting
                            e CORS, delegando lógica de negócios aos microservices.
                        </li>
                        <li>
                            <strong>Mobile Apps:</strong> Gateway adapta payloads e headers para
                            diferentes clientes, isolando o backend dessas variações.
                        </li>
                    </ul>
                </div>
            </div>
        ),
        comparisonRows: [
            {
                concept: (
                    <>
                        <FaLock className="inline-block mr-1 text-green-500" />
                        Segurança
                    </>
                ),
                mvc: 'Controllers e middlewares espalhados em cada serviço, sem padrão central.',
                pattern:
                    'Gateway central aplica autenticação, rate‑limiting e CORS antes do SSR/API.',
            },
            {
                concept: (
                    <>
                        <FaRoute className="inline-block mr-1 text-green-500" />
                        Roteamento
                    </>
                ),
                mvc: 'Cada microservice define e expõe suas próprias rotas.',
                pattern:
                    'Gateway unifica todas as rotas, versionamento e delega requests conforme regras.',
            },
            {
                concept: (
                    <>
                        <FaChartBar className="inline-block mr-1 text-green-500" />
                        Monitoramento
                    </>
                ),
                mvc: 'Logs e métricas dispersos em serviços distintos.',
                pattern:
                    'Gateway consolida logs, métricas e tracing, simplificando dashboards e alertas.',
            },
            {
                concept: (
                    <>
                        <FaSyncAlt className="inline-block mr-1 text-green-500" />
                        Evolução de Clientes
                    </>
                ),
                mvc: 'Backends precisam adaptar payloads para cada tipo de cliente no código.',
                pattern:
                    'Gateway faz transformação de payloads e headers, isolando o backend dessas variações.',
            },
        ],
    },
];