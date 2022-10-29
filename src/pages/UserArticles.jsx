export const UserArticles = () => {
    return (
        <>
            <header className="bg-gray-100 mb-14">
                <div className="text-center py-8">
                    <h2 className="mb-6 text-blue text-3xl">Autor</h2>
                    <ol className="inline-flex items-center space-x-1 md:space-x-3 ">
                        <li className="inline-flex items-center">
                            <a href="/" className="text-gray-700 inline-flex items-center font-medium ">
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                                Domovská stránka
                            </a>
                        </li>

                        <li>
                            <div className="flex items-center text-gray-700">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                                <a href="#" className="ml-1  inline-flex items-center font-medium">Aktuality</a>
                            </div>

                        </li>

                        <li>
                            <div className="flex items-center text-gray-700">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                                <a href="#" className="ml-1  inline-flex items-center font-medium">Autor Autorsky</a>
                            </div>

                        </li>
                    </ol>
                </div>
            </header>
            <main className="container max-w-[1200px] mx-auto md:px-10 sm:px-8 px-6">
                <section className="max-w-[860px]">
                    <ul>
                        <li>
                            <a href="#" className="flex flex-col items-center my-7 bg-white border-bottom md:flex-row md:max-w-xl">
                                <img className="object-cover w-full h-96 md:h-auto md:w-48" src="https://cdn.pixabay.com/photo/2022/07/16/15/34/kid-7325370_960_720.jpg" alt="" />
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h3 className="mb-2 text-2xl font-bold tracking-tight text-blue">Nadpis článku</h3>
                                    <div className="flex justify-between">
                                        <a href="#" className="flex text-gray-500"><svg className="w-6 h-6 text-yellow mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path></svg>Tag</a>
                                        <span className="flex text-gray-500"><svg className="w-6 h-6 text-yellow mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>10.4.1998</span>
                                        <a href="#" className="flex text-gray-500"><svg className="w-6 h-6 text-yellow mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>František Filipovský</a>
                                    </div>

                                    <p className="mb-3 font-normal text-gray-700">Loremák ipsemák mák. Podnadpisák dlouhej jeden ušatej.</p>
                                    <a className="text-yellow font-semibold text-xl">Číst více</a>
                                </div>
                            </a>
                            <hr className="my-8 h-px bg-gray-200 border-0"></hr>
                        </li>
                        <li>
                            <a href="#" className="flex flex-col items-center my-7 bg-white border-bottom md:flex-row md:max-w-xl">
                                <img className="object-cover w-full h-96 md:h-auto md:w-48" src="https://cdn.pixabay.com/photo/2022/07/16/15/34/kid-7325370_960_720.jpg" alt="" />
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h3 className="mb-2 text-2xl font-bold tracking-tight text-blue">Nadpis článku</h3>
                                    <div className="">
                                        <a href="#" className="flex text-gray-500"><svg className="w-6 h-6 text-yellow mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path></svg>Tag</a>
                                        <span className="flex text-gray-500"><svg className="w-6 h-6 text-yellow mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>10.4.1998</span>
                                        <a href="#" className="flex text-gray-500"><svg className="w-6 h-6 text-yellow mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>František Filipovský</a>
                                    </div>

                                    <p className="mb-3 font-normal text-gray-700">Loremák ipsemák mák. Podnadpisák dlouhej jeden ušatej.</p>
                                    <a className="text-yellow font-semibold text-xl">Číst více</a>
                                </div>
                            </a>
                            <hr className="my-8 h-px bg-gray-200 border-0"></hr>
                        </li>

                        <li>
                            <a href="#" className="flex flex-col items-center my-7 bg-white border-bottom md:flex-row md:max-w-xl">
                                <img className="object-cover w-full h-96 md:h-auto md:w-48" src="https://cdn.pixabay.com/photo/2022/07/16/15/34/kid-7325370_960_720.jpg" alt="" />
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h3 className="mb-2 text-2xl font-bold tracking-tight text-blue">Nadpis článku</h3>
                                    <div className="flex justify">
                                        <a href="#" className="flex text-gray-500 mr-5"><svg className="w-6 h-6 text-yellow mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path></svg>Tag</a>
                                        <span className="flex text-gray-500"><svg className="w-6 h-6 text-yellow mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>10.4.1998</span>

                                    </div>

                                    <p className="mb-3 font-normal text-gray-700">Loremák ipsemák mák. Podnadpisák dlouhej jeden ušatej.</p>
                                    <a className="text-yellow font-semibold text-xl">Číst více</a>
                                </div>
                            </a>
                            <hr className="my-8 h-px bg-gray-200 border-0"></hr>
                        </li>

                        <li>
                            <a href="#" className="flex flex-col items-center my-7 bg-white border-bottom md:flex-row md:max-w-xl">
                                <img className="object-cover w-full h-96 md:h-auto md:w-48" src="https://cdn.pixabay.com/photo/2022/07/16/15/34/kid-7325370_960_720.jpg" alt="" />
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h3 className="mb-2 text-2xl font-bold tracking-tight text-blue">Nadpis článku</h3>
                                    <p className="mb-3 font-normal text-gray-700">Loremák ipsemák mák. Podnadpisák dlouhej jeden ušatej.</p>
                                    <a className="text-yellow font-semibold text-xl">Číst více</a>
                                </div>
                            </a>
                            <hr className="my-8 h-px bg-gray-200 border-0"></hr>
                        </li>
                    </ul>
                </section>
            </main>
        </>
    );
}
export default UserArticles;