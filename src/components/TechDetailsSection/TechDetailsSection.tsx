// src/components/TechDetailsSection/TechDetailsSection.tsx
import React from "react";
import type { TechDetail } from "../../data/techDetails";

export interface TechDetailsSectionProps {
    id: string;
    title: string;
    items: TechDetail[];
    colorTitle?: string;
}

export const TechDetailsSection: React.FC<TechDetailsSectionProps> = ({ id, title, items, colorTitle }) => {
    return (
        <section className="mb-10 pt-6" id={id}>
            {/* Section Header */}
            <div className="mb-8 flex items-center">
                <div className={`h-1 w-12 rounded-full mr-3 ${colorTitle || "bg-indigo-500"}`} />
                <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
            </div>

            {/* Details List */}
            <dl className="space-y-8">
                {items.map((item) => (
                    <div key={item.id} id={item.id} className="bg-white p-6 rounded-lg shadow-md">
                        {item.icon && (
                            <div className="flex mb-2 text-indigo-500 text-3xl">
                                {item.icon}
                            </div>
                        )}
                        <dt className="text-xl font-medium text-gray-800 mb-1">{item.title}</dt>
                        <dd className="text-gray-700 mb-2">{item.description}</dd>
                        {item.justification && (
                            <dd className="text-gray-600">{item.justification}</dd>
                        )}
                    </div>
                ))}
            </dl>
        </section>
    );
};
