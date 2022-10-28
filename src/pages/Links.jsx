export const Links = () => {
    return (
        <>
            <header className="bg-gray-100 mb-14">
                <div className="text-center py-8">
                    <h2 className="mb-6 text-blue text-3xl">Užitečné odkazy</h2>
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
                                <a href="#" className="ml-1  inline-flex items-center font-medium">Užitečné odkazy</a>
                            </div>

                        </li>
                    </ol>
                </div>
            </header>
            <main className="max-w-[1200px] mx-auto">
                <section className="max-w-[860px] mb-7">
                    <div>
                            <div className="p-4 leading-normal">
                                <h3 className="mb-2 text-2xl font-bold tracking-tight text-blue flex items-center"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>Zajímavý odkaz</h3>
                                <div className="px-6">
                                    <p>
                                        Otevřenej <a href="" className="text-yellow">odkaz</a> s popiskem.
                                    </p>
                                </div>
                            </div>
                            <div className="p-4 leading-normal">
                                <h3 className="mb-2 text-2xl font-bold tracking-tight text-blue flex items-center"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>Zajímavý zavřený odkaz</h3>
                            </div>
                    </div>
                </section>
            </main>
        </>
    );
}
export default Links;