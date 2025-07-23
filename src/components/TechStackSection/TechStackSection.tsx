// src/components/TechStackSection/TechStackSection.tsx
import type { TechStackSectionProps } from "../../data/techStackSectionsData";
import TechTable from "../Table/TechTable";
import { TechDetailsSection } from "../TechDetailsSection/TechDetailsSection";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TechStackSection = <T extends Record<string, any>>({ id, title, tableColumns, tableTechs, techDetails, description = "", colorClass = "bg-blue-500" }: TechStackSectionProps<T>) => {
    return (
        <section id={`${id}-section`} className="flex-1 pt-2 mb-0 scroll-mt-16" >
            <div className="mb-4 flex justify-center lg:justify-start items-center pt-4">
                <div className={`h-1 w-12 rounded-full mr-3 ${colorClass}`} />
                <h2 className="text-2xl font-semibold text-gray-800">
                    {title}
                </h2>
            </div>
            {description && (
                <p className="text-gray-700 text-center lg:text-left">
                    {description}
                </p>
            )}

            {/* Tech Table */}
            <div id={`${id}-table`} className="pt-4">
                <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 overflow-x-auto mb-4">
                    <TechTable columns={tableColumns} items={tableTechs} />
                </div>
            </div>

            {/* Tech Details */}
            <div id={`detail-${id}`} className="pt-4 scroll-mt-16">
                <TechDetailsSection
                    colorTitle={colorClass}
                    title={`Detalhes das Tecnologias ${title}`}
                    items={techDetails}
                />
            </div>
        </section>
    )
}

export default TechStackSection;