import Header from "../components/Header";
import Slider from "../components/Slider";
import partnerLogo from "../img/partnerLogo.png"


export const MainPage = () => {
    return (
        <>
            <Header />
            <main className="max-w-[1200px] container mx-auto md:px-10 sm:px-8">
                <section className=" my-10 py-5">
                    <h2 className="text-center text-uablue mb-4 text-2xl font-semibold tracking-tight leading-none  md:text-3xl lg:text-4xl">Aktuality</h2>

                    <div className="flex overflow-x-hidden items-center justify-between py-5 mb-7 ">
                        <Slider>

                        </Slider>
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