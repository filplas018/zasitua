import profilepic from "../img/profilovka.png";
import {

    useParams
} from "react-router-dom";
export const UserArticles = () => {
    const {name} = useParams();
    //useEffect
    return (
        <>
            <header className="bg-gray-100 mb-14">
                <div className="text-center py-8">
                    <h2 className="mb-6 text-uablue text-3xl">Autor</h2>
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
                                <a href="#" className="ml-1  inline-flex items-center font-medium hover:underline">Aktuality</a>
                            </div>

                        </li>

                        <li>
                            <div className="flex items-center text-gray-700">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                <a href="#" className="ml-1  inline-flex items-center font-medium">Autor Autorsky</a>
                            </div>

                        </li>
                    </ol>
                </div>
            </header>
            <main className="container max-w-[1200px] mx-auto md:px-10 sm:px-8 px-6">
                <section className="mb-10">
                    <div className=" max-w-[860px] mx-auto my-7 bg-white border-bottom md:flex-row md:max-w-xl shadow">
                        <div className="p-4">
                            <img className="w-48 rounded-full mx-auto" src={profilepic} alt="Bonnie image" />
                            <h3 className="mb-2 text-2xl font-bold tracking-tight text-uablue text-center">Pan Autor</h3>
                            <p className="text-sm text-gray-500 text-center">Visual Designer</p>
                            <p className="text-center">
                                Lorem ipsum sit dolor amet. Amet dolor sit. Lorem ipsum sit dolor amet. Amet dolor sit. Lorem ipsum sit dolor amet. Amet dolor sit.
                            </p>
                            <ul className="text-gray-700 mb-2 mt-4 mx-auto max-w-[180px]">
                                <li className="hover:text-uablue flex mb-2"><svg className="w-6 h-6 text-uayellow mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg><a href="tel:666666666"> +420 735 489 521</a></li>
                                <li className="hover:text-uablue flex mb-2"><svg className="w-6 h-6 text-uayellow mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h4.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg><a href="tel:666666666"> +420 735 489 521</a></li>
                                <li className="hover:text-uablue flex mb-2"><svg className="w-6 h-6 text-uayellow mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg><a href="mailto:aaa@aaa.cz">zasitua@zasitua.cz</a></li>
                            </ul>
                        </div>

                    </div>
                </section>
                <section className="">
                <h3 className="text-center text-uablue mb-7 text-2xl tracking-tight leading-none  md:text-3xl lg:text-4xl">Články vybraného autora</h3>
                    <ul className="max-w-[860px]">
                        <li>
                            <a href="#" className="flex flex-col items-center my-7 bg-white border-bottom md:flex-row md:max-w-xl">
                                <img className="object-cover w-full h-96 md:h-auto md:w-48" src="https://cdn.pixabay.com/photo/2022/07/16/15/34/kid-7325370_960_720.jpg" alt="" />
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h3 className="mb-2 text-2xl font-bold tracking-tight text-uablue">Nadpis článku</h3>
                                    <div className="flex justify-between">
                                        <a href="#" className="flex text-gray-500"><svg className="w-6 h-6 text-uayellow mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path></svg>Tag</a>
                                        <span className="flex text-gray-500"><svg className="w-6 h-6 text-uayellow mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>10.4.1998</span>
                                        <a href="#" className="flex text-gray-500"><svg className="w-6 h-6 text-uayellow mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>František Filipovský</a>
                                    </div>

                                    <p className="mb-3 font-normal text-gray-700">Loremák ipsemák mák. Podnadpisák dlouhej jeden ušatej.</p>
                                    <a className="text-uayellow font-semibold text-xl">Číst více</a>
                                </div>
                            </a>
                            <hr className="my-8 h-px bg-gray-200 border-0"></hr>
                        </li>
                        <li>
                            <a href="#" className="flex flex-col items-center my-7 bg-white border-bottom md:flex-row md:max-w-xl">
                                <img className="object-cover w-full h-96 md:h-auto md:w-48" src="https://cdn.pixabay.com/photo/2022/07/16/15/34/kid-7325370_960_720.jpg" alt="" />
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h3 className="mb-2 text-2xl font-bold tracking-tight text-uablue">Nadpis článku</h3>
                                    <div className="">
                                        <a href="#" className="flex text-gray-500"><svg className="w-6 h-6 text-uayellow mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path></svg>Tag</a>
                                        <span className="flex text-gray-500"><svg className="w-6 h-6 text-uayellow mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>10.4.1998</span>
                                        <a href="#" className="flex text-gray-500"><svg className="w-6 h-6 text-uayellow mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>František Filipovský</a>
                                    </div>

                                    <p className="mb-3 font-normal text-gray-700">Loremák ipsemák mák. Podnadpisák dlouhej jeden ušatej.</p>
                                    <a className="text-uayellow font-semibold text-xl">Číst více</a>
                                </div>
                            </a>
                            <hr className="my-8 h-px bg-gray-200 border-0"></hr>
                        </li>

                        <li>
                            <a href="#" className="flex flex-col items-center my-7 bg-white border-bottom md:flex-row md:max-w-xl">
                                <img className="object-cover w-full h-96 md:h-auto md:w-48" src="https://cdn.pixabay.com/photo/2022/07/16/15/34/kid-7325370_960_720.jpg" alt="" />
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h3 className="mb-2 text-2xl font-bold tracking-tight text-uablue">Nadpis článku</h3>
                                    <div className="flex justify">
                                        <a href="#" className="flex text-gray-500 mr-5"><svg className="w-6 h-6 text-uayellow mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path></svg>Tag</a>
                                        <span className="flex text-gray-500"><svg className="w-6 h-6 text-uayellow mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>10.4.1998</span>

                                    </div>

                                    <p className="mb-3 font-normal text-gray-700">Loremák ipsemák mák. Podnadpisák dlouhej jeden ušatej.</p>
                                    <a className="text-uayellow font-semibold text-xl">Číst více</a>
                                </div>
                            </a>
                            <hr className="my-8 h-px bg-gray-200 border-0"></hr>
                        </li>

                        <li>
                            <a href="#" className="flex flex-col items-center my-7 bg-white border-bottom md:flex-row md:max-w-xl">
                                <img className="object-cover w-full h-96 md:h-auto md:w-48" src="https://cdn.pixabay.com/photo/2022/07/16/15/34/kid-7325370_960_720.jpg" alt="" />
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h3 className="mb-2 text-2xl font-bold tracking-tight text-uablue">Nadpis článku</h3>
                                    <p className="mb-3 font-normal text-gray-700">Loremák ipsemák mák. Podnadpisák dlouhej jeden ušatej.</p>
                                    <a className="text-uayellow font-semibold text-xl">Číst více</a>
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