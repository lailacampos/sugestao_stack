// src/components/Table/TechTable.tsx
export interface ColumnConfig<T> {
    header: string;
    key?: keyof T;
    render?: (item: T) => React.ReactNode;
}

export interface TechTableProps<T> {
    columns: ColumnConfig<T>[];
    items: T[];
}

export const TechTable = <T,>({ columns, items }: TechTableProps<T>) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-white">
                    <tr>
                        {columns.map((col, colIndex) => (
                            <th
                                key={col.header}
                                scope="col"
                                className={
                                    [
                                        'px-6 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider',
                                        colIndex === 0 ? 'md:w-auto w-0.5' : 'w-min',
                                    ].join(' ')
                                }
                            >
                                {col.header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {items.map((item, rowIndex) => (
                        <tr
                            key={rowIndex}
                            className={rowIndex % 2 === 0 ? undefined : 'bg-gray-50'}
                        >
                            {columns.map((col) => (
                                <td 
                                    key={col.header} 
                                    className={
                                        [
                                            'px-6 py-4 text-gray-800',
                                            // rowIndex === 0 ? 'lg:w-auto w-1/5' : 'w-auto',
                                        ].join(' ')
                                    }>
                                    {col.render
                                        ? col.render(item)
                                        : // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                        ((item[col.key!] as any) ?? '')}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TechTable;