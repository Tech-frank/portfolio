import portfolio from '../assets/portfolio.png'
import lancelot from '../assets/lancelot.png'
import profis from '../assets/profis.png'
import novoi from '../assets/novoi.png'
export default function Projects(){
    return (
        <>
            <div className="mx-auto mt-[15%] p-[3%]">
                <h1 className="text-3xl font-bold text-center">My <span className="text-yellow-400">Projects</span></h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-4">
                    {/* Project 1 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src={portfolio} alt="Project 1" className="w-full h-48 object-cover"/>
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">My Porfolio</h2>
                            <p className="text-gray-600 mb-4">This the Portfolio Website I Built For Myself.</p>
                            <a href="#" className="text-blue-500 hover:underline">View Project</a>
                        </div>
                    </div>
                    {/* Project 2 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src={lancelot} alt="Project 2" className="w-full h-48 object-cover"/>
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">Lancelot</h2>
                            <p className="text-gray-600 mb-4">A saas Application for managing tasks and projects.</p>
                            <a href="https://my-expo-app-six.vercel.app/" className="text-blue-500 hover:underline">View Project</a>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src={profis} alt="Project 3" className="w-full h-48 object-cover"/>
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">PROFIS</h2>
                            <p className="text-gray-600 mb-4">A tool for the project team of a company - Atlantic Fluids and Integrated Services Limited - to help them manage their workflows efficiently.</p>
                            <a href="https://profis-fleet-forge.vercel.app/" className="text-blue-500 hover:underline">View Project</a>
                        </div>
                    </div>

                     <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src={novoi} alt="Project 4" className="w-full h-48 object-cover"/>
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">Novoi Auto Detailing</h2>
                            <p className="text-gray-600 mb-4">A website i built for Novoi, an Auto Detailing business to help showcase their business and allow customers book their services</p>
                            <a href="https://novoi-site.vercel.app/" className="text-blue-500 hover:underline">View Project</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}