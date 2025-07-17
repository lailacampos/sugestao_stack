
import { frontendColumns, backendColumns } from "../config/tableColumns";
import { TechTable } from "../components/Table/TechTable";
import { frontendTech, backendTech } from "../data/techData";

const HomePage: React.FC = () => {
    console.log(frontendColumns, backendColumns);
    return (
        <div className="bg-gray-50 p-8 flex flex-col items-center h-full w-full">
            <header className="mb-12">
                <h1 className="text-4xl font-extrabold text-gray-800">Tech Stack Overview</h1>
                <p className="mt-2 text-gray-600">
                    Overview of frontend and backend technologies used in this project.
                </p>
            </header>

            <section className="mb-10 w-2/5">
                <div className="mb-4 flex items-center">
                    <div className="h-1 w-12 bg-blue-500 rounded-full mr-3"></div>
                    <h2 className="text-2xl font-semibold text-gray-800">Frontend Technologies</h2>
                </div>
                <p className="mb-6 text-gray-700">
                    The frontend stack uses modern tools for fast, reliable, and
                    maintainable UI development.
                </p>
                <div className="bg-white shadow-sm rounded-lg p-6 w-full">
                    <TechTable columns={frontendColumns} items={frontendTech} />
                </div>
            </section>

            <section className="w-2/5">
                <div className="mb-4 flex items-center">
                    <div className="h-1 w-12 bg-green-500 rounded-full mr-3"></div>
                    <h2 className="text-2xl font-semibold text-gray-800">Backend Technologies</h2>
                </div>
                <p className="mb-6 text-gray-700">
                    The backend stack provides a robust API foundation and powerful
                    services.
                </p>
                <div className="bg-white shadow-sm rounded-lg p-6">
                    <TechTable columns={backendColumns} items={backendTech} />
                </div>
            </section>
        </div>
    );
}

export default HomePage;