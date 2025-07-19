// src/config/tableColumns.ts
import type { ColumnConfig } from '../components/Table/TechTable';
import type { FrontendTechItem, BackendTechItem, SSRTechItem } from '../data/techTableData';
import type { PatternRow } from '../data/patterns';

export const frontendColumns: ColumnConfig<FrontendTechItem>[] = [
  { header: 'Categoria', key: 'category' },
  { header: 'Tech / Plugin', key: 'tech' },
];

export const backendColumns: ColumnConfig<BackendTechItem>[] = [
  { header: 'Camada', key: 'layer' },
  { header: 'Tech', key: 'tech' },
  { header: 'Justificativa', key: 'justification' },
];

export const ssrColumns: ColumnConfig<SSRTechItem>[] = [
  { header: 'Camada', key: 'layer' },
  { header: 'Tech', key: 'tech' },
  { header: 'Justificativa', key: 'justification' },
];

export function getPatternColumns(patternTitle: string): ColumnConfig<PatternRow>[] {
  return [
    { header: 'Conceito', key: 'concept' },
    { header: 'MVC', key: 'mvc' },
    { header: patternTitle, key: 'pattern' },
  ];
}
