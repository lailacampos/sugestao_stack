// src/data/techStackSectionsData.tsx
import type { ColumnConfig } from "../components/Table/TechTable";
import { backendColumns, frontendColumns, ssrColumns } from "../config/tableColumns";
import { backendDetails, frontendDetails, ssrDetails, type TechDetail } from "./techDetails";
import { backendTech, frontendTech, ssrTech, type BackendTechItem, type FrontendTechItem, type SSRTechItem } from "./techTableData";

export interface TechStackSectionProps<T> {
    id: string;
    title: string;
    tableColumns: ColumnConfig<T>[];
    tableTechs: T[];
    techDetails: TechDetail[];
    description?: string;
    colorClass?: string;
}

export const techStackSectionsData: (
    | TechStackSectionProps<FrontendTechItem>
    | TechStackSectionProps<BackendTechItem>
    | TechStackSectionProps<SSRTechItem>
)[] = [
        {
            id: "frontend",
            title: "Tecnologias Frontend",
            tableColumns: frontendColumns,
            tableTechs: frontendTech,
            techDetails: frontendDetails,
            description: "Sugestões de stack para o frontend",
            colorClass: "bg-blue-500",
        },
        {
            id: "backend",
            title: "Tecnologias Backend",
            tableColumns: backendColumns,
            tableTechs: backendTech,
            techDetails: backendDetails,
            description: "Sugestões de stack para o backend",
            colorClass: "bg-green-500",
        },
        {
            id: "ssr",
            title: "Tecnologias SSR",
            tableColumns: ssrColumns,
            tableTechs: ssrTech,
            techDetails: ssrDetails,
            description: "Sugestões de stack para o SSR",
            colorClass: "bg-purple-500",
        }
    ];