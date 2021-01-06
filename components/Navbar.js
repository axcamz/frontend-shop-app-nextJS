import { useState } from "react"

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="bg-primary text-semiblack z-50">
            <div className="lg:container lg:mx-auto flex lg:flex-row lg:px-0 px-3 flex-col py-4">
                <div className="flex items-center justify-between lg:mb-0">
                    <h1 className="lg:text-5xl text-2xl text-semiblack font-seaweeds">Fetur</h1>
                    <div className="flex items-center lg:hidden">
                        <div className="flex items-center">
                            <div className="flex group items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 text-semiblack" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                <input className="ml-3 h-10 w-0 group-hover:w-48 group-hover:px-3 font-poppins outline-none rounded focus:ring-2 ring-yellow-500 focus:w-48 focus:px-3 transition-all" type="text"/>
                            </div>
                            <div className="relative ml-3">
                                <svg id="cart" xmlns="http://www.w3.org/2000/svg" className="h-6 text-semiblack" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <div className="bg-yellow-500 px-1 rounded-full absolute -top-2 -right-2 text-sm">
                                    20
                                </div>
                            </div>
                        </div>
                        <div className={`flex flex-col transition-all ml-10 h-5 ${toggle ? 'justify-between':'justify-evenly'}`} onClick={() => setToggle(!toggle)}>
                            <span className={`w-7 h-bar bg-gray-800 rounded-lg origin-left transition-transform transform ${toggle ? 'rotate-bar':null}`}></span>
                            <span className={`w-7 h-bar bg-gray-800 rounded-lg origin-left transition-transform transform ${toggle ? '-rotate-bar':null}`}></span>
                        </div>
                    </div>
                </div>
                
                <div className={`lg:flex-row lg:flex flex-col lg:items-center w-full lg:justify-between font-poppins lg:mt-0 mt-3 ${toggle ? 'flex':'hidden'}`}>
                    <div className="flex lg:flex-row flex-col lg:justify-evenly justify-between lg:w-1/3 h-28 lg:h-auto lg:mb-0 mb-5">
                        <div><a href="#">Home</a></div>
                        <div className="flex group items-center justify-between relative cursor-default">
                            <span className="">Our Products</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 text-semiblack ml-2 transform group-hover:rotate-180 transition-transform"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>    
                            <div className="z-50 bg-white shadow p-3 absolute top-1 rounded invisible group-hover:visible flex transform translate-y-0 opacity-0 group-hover:opacity-100 group-hover:translate-y-6 transition-all flex-col lg:w-80 w-full">
                                <a className="py-1 px-2 rounded hover:bg-primary" href="#">Profile</a>
                                <a className="py-1 px-2 rounded hover:bg-primary" href="#">Settings</a>
                                <a className="py-1 px-2 rounded hover:bg-primary" href="#">Settings</a>
                                <a className="py-1 px-2 rounded hover:bg-primary" href="#">Settings</a>
                                <a className="py-1 px-2 rounded hover:bg-primary" href="#">Settings</a>
                                
                            </div>
                        </div>
                        <div><a href="#">Sale Zone</a></div>
                    </div>
                    <div className="flex justify-between">
                        <div className="hidden lg:flex items-center">
                            <div className="flex group items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 text-semiblack" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                <input className="ml-3 h-10 w-0 group-hover:w-64 group-hover:px-3 font-poppins outline-none rounded focus:ring-2 ring-yellow-500 focus:w-64 focus:px-3 transition-all" type="text"/>
                            </div>
                            <div className="relative lg:ml-5">
                                <svg id="cart" xmlns="http://www.w3.org/2000/svg" className="h-7 text-semiblack" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <div className="bg-yellow-500 px-1 rounded-full absolute -top-4 -right-3">
                                    20
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center lg:ml-5 group relative cursor-default z-40">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 text-semiblack" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="ml-2">My Account</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 text-semiblack ml-2 transform group-hover:rotate-180 transition-transform"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                            <div className="bg-white shadow-sm p-3 absolute top-4 rounded flex invisible group-hover:visible transform translate-y-0 opacity-0 group-hover:opacity-100 group-hover:translate-y-6 delay-75 transition-all flex-col w-full">
                                <a className="py-1 px-2 rounded hover:bg-primary" href="#">Profile</a>
                                <a className="py-1 px-2 rounded hover:bg-primary" href="#">Settings</a>
                                <hr className="my-2"/>
                                <a className="py-1 px-2 rounded hover:bg-gray-300" href="#">Logout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
