const Navbar = () => {
    return (
        <nav className="bg-primary">
            <div className="lg:container lg:mx-auto flex lg:flex-row lg:px-0 px-3 flex-col py-4">
                <div className="flex items-center justify-between lg:mb-0 mb-3">
                    <h1 className="lg:text-5xl text-2xl text-semiblack font-seaweeds">Fetur</h1>
                    <div className="flex flex-col justify-between bg-blue-500 h-4 lg:hidden">
                        <span className="w-7 h-1 bg-gray-800 rounded-lg"></span>
                        <span className="w-7 h-1 bg-gray-800 rounded-lg"></span>
                    </div>
                </div>
                
                <div className="flex lg:flex-row flex-col lg:items-center w-full lg:justify-between font-poppins">
                    <div className="flex lg:flex-row flex-col lg:justify-evenly justify-between bg-blue-600 lg:w-1/3 h-28 lg:h-auto lg:mb-0 mb-5">
                        <div><a href="#">Home</a></div>
                        <div><a href="#">Our Products</a></div>
                        <div><a href="#">Sale Zone</a></div>
                    </div>
                    <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 text-semiblack" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <div className="relative lg:ml-5">
                            <svg id="cart" xmlns="http://www.w3.org/2000/svg" className="h-8 text-semiblack" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <div className="bg-yellow-500 px-1 rounded-full absolute -top-4 -right-3">
                                20
                            </div>
                        </div>
                        <div className="flex items-center lg:ml-5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 text-semiblack" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="ml-2">My Account</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 text-semiblack ml-2"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>          
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
