import type { ColumnConfig } from '../components/Table/TechTable';
import type { FrontendTechItem, BackendTechItem } from '../data/techData';

export const frontendColumns: ColumnConfig<FrontendTechItem>[] = [
  { header: 'Categoria', key: 'category' },
  { header: 'Tech / Plugin', key: 'tech' },
];

export const backendColumns: ColumnConfig<BackendTechItem>[] = [
  { header: 'Camada', key: 'layer' },
  { header: 'Tech', key: 'tech' },
  { header: 'Justificativa', key: 'justification' },
];
