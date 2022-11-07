import Dropdown from "../components/Dropdown";

export const Links = () => {

    return (
        <>
            <header className="bg-gray-100 mb-14">
                <div className="text-center py-8">
                    <h2 className="mb-6 text-uablue text-3xl">Užitečné odkazy</h2>
                    <ol className="inline-flex flex-wrap justify-center items-center space-x-1 md:space-x-3 ">
                        <li className="inline-flex items-center">
                            <a href="/" className="text-gray-700 inline-flex items-center font-medium hover:underline">
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                                Domovská stránka
                            </a>
                        </li>

                        <li>
                            <div className="flex items-center text-gray-700">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                <a href="#" className="ml-1  inline-flex items-center font-medium hover:underline">Užitečné odkazy</a>
                            </div>

                        </li>
                    </ol>
                </div>
            </header>
            <main className="container max-w-[1200px] mx-auto md:px-10 sm:px-8 px-6">
                <section className="mb-7">
                    <Dropdown
                        text="Otevřený textík"
                        link="https://aaa.cz/" />
                    <Dropdown
                        text="Otevřený textík"
                        link="https://aaa.cz/" />
                    <Dropdown
                        text="Otevřený textík"
                        link="https://aaa.cz/" />

                </section>
            </main>
        </>
    );
}
export default Links;