
import { frontendColumns, backendColumns } from "../config/tableColumns";
import { TechTable } from "../components/Table/TechTable";
import { frontendTech, backendTech } from "../data/techData";

const HomePage: React.FC = () => {
    console.log(frontendColumns, backendColumns);
    return (
        <div className="min-h-screen bg-gray-50 flex justify-center px-4 py-8">
            <div className="w-full md:max-w-4xl max-w-3xl">
                <header className="mb-10 text-center lg:text-left">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800">
                        Tech Stack Overview
                    </h1>
                    <p className="mt-2 text-gray-600 max-w-2xl mx-auto lg:mx-0">
                        Overview of frontend and backend technologies used in this project.
                    </p>
                </header>

                <div className="flex flex-col space-y-10">
                    {/* Frontend Section */}
                    <section className="flex-1">
                        <div className="mb-4 flex justify-center lg:justify-start items-center">
                            <div className="h-1 w-12 bg-blue-500 rounded-full mr-3"></div>
                            <h2 className="text-2xl font-semibold text-gray-800">
                                Frontend Technologies
                            </h2>
                        </div>
                        <p className="mb-6 text-gray-700 text-center lg:text-left">
                            The frontend stack uses modern tools for fast, reliable, and
                            maintainable UI development.
                        </p>
                        <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 overflow-x-auto">
                            <TechTable columns={frontendColumns} items={frontendTech} />
                        </div>
                    </section>

                    {/* Backend Section */}
                    <section className="flex-1">
                        <div className="mb-4 flex justify-center lg:justify-start items-center">
                            <div className="h-1 w-12 bg-green-500 rounded-full mr-3"></div>
                            <h2 className="text-2xl font-semibold text-gray-800">
                                Backend Technologies
                            </h2>
                        </div>
                        <p className="mb-6 text-gray-700 text-center lg:text-left">
                            The backend stack provides a robust API foundation and powerful
                            services.
                        </p>
                        <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 overflow-x-auto">
                            <TechTable columns={backendColumns} items={backendTech} />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default HomePage;