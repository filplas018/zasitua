import Header from "../components/Header";
import partnerLogo from "../img/partnerLogo.png"

import LimitedCardList from "./LimitedCardList";
export const MainPage = () => {
    return (
        <>
            <Header />
            <main className="max-w-[1200px] container mx-auto md:px-10 sm:px-8">
                <section className=" my-10 py-5">
                    <h2 className="text-center text-uablue mb-4 text-2xl font-semibold tracking-tight leading-none  md:text-3xl lg:text-4xl">Aktuality</h2>
                    <div className="flex overflow-x-hidden items-center justify-between py-5 mb-7 ">
                        <div className="max-w-[320px] my-5 bg-white rounded-lg shadow-md">
                            <a href="#">
                                <img className="rounded-t-lg" src="https://cdn.pixabay.com/photo/2022/07/16/15/34/kid-7325370_960_720.jpg" alt="" />
                                <span className="border rounded-lg uayellow py-2 px-4 ml-3 text-white">10.4.</span>
                            </a>
                            <div className="p-5">
                                <a href="#" className="flex justify-between items-center">
                                    <h5 className="mb-4 text-2xl font-bold tracking-tight text-uablue">Den Stromů</h5>
                                    
                                </a>
                                <p className="mb-3 font-normal text-gray-500">Barevný, magický podzim ve Smetance. Pro žáky 2. tříd opět pořádáme zážitkové dopoledne s ekologickou tématikou. Odpolední Den stromů pro</p>
                            </div>
                        </div>

                        <div className="max-w-[320px] bg-white rounded-lg shadow-md">
                            <a href="#">
                                <img className="rounded-t-lg" src="https://cdn.pixabay.com/photo/2022/07/16/15/34/kid-7325370_960_720.jpg" alt="" />
                                <span className="border rounded-lg uayellow py-2 px-4 ml-3 text-white">10.4.</span>
                            </a>
                            <div className="p-5">
                                <a href="#" className="flex justify-between items-center">
                                    <h5 className="mb-4 text-2xl font-bold tracking-tight text-uablue">Den Stromů</h5>
                                    
                                </a>
                                <p className="mb-3 font-normal text-gray-500">Barevný, magický podzim ve Smetance. Pro žáky 2. tříd opět pořádáme zážitkové dopoledne s ekologickou tématikou. Odpolední Den stromů pro</p>
                            </div>
                        </div><div className="max-w-[320px] bg-white rounded-lg shadow-md">
                            <a href="#">
                                <img className="rounded-t-lg" src="https://cdn.pixabay.com/photo/2022/07/16/15/34/kid-7325370_960_720.jpg" alt="" />
                                <span className="border rounded-lg uayellow py-2 px-4 ml-3 text-white">10.4.</span>
                            </a>
                            <div className="p-5">
                                <a href="#" className="flex justify-between items-center">
                                    <h5 className="mb-4 text-2xl font-bold tracking-tight text-uablue">Den Stromů</h5>
                                    
                                </a>
                                <p className="mb-3 font-normal text-gray-500">Barevný, magický podzim ve Smetance. Pro žáky 2. tříd opět pořádáme zážitkové dopoledne s ekologickou tématikou. Odpolední Den stromů pro</p>
                            </div>
                        </div>
                    </div>

                </section>
                <section>
                    <h2 className="text-center text-uablue mb-4 text-2xl font-semibold tracking-tight leading-none  md:text-3xl lg:text-4xl">Partneři</h2>
                    <div className="flex justify-center items-center flex-wrap mb-7 py-5">
                        <a href="#" className="mx-2 p-5"><img src={partnerLogo} alt="" /></a>
                        <a href="#" className="mx-2 p-5"><img src={partnerLogo} alt="" /></a>
                        <a href="#" className="mx-2 p-5"><img src={partnerLogo} alt="" /></a>
                        <a href="#" className="mx-2 p-5"><img src={partnerLogo} alt="" /></a>
                        <a href="#" className="mx-2 p-5"><img src={partnerLogo} alt="" /></a>
                        <a href="#" className="mx-2 p-5"><img src={partnerLogo} alt="" /></a>
                        <a href="#" className="mx-2 p-5"><img src={partnerLogo} alt="" /></a>
                    </div>
                </section>
            </main>
        </>
    );
}
export default MainPage;