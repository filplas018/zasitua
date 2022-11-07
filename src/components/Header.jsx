import ua_flag from "../img/ua_flag.png"
export const Header = () => {

    return (
        <header className="bg-gray-100">
            <div className="container max-w-[1200px] mx-auto md:px-10 sm:px-8 px-6 flex flex-wrap items-center justify-between">
                <div className="md:w-[60%]">
                    <img src={ua_flag} alt="ua heart flag" />
                </div>
                <div className="md:w-[40%] mb-8">
                    <h1 className="mb-12 text-4xl font-semibold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl">Pomoc pro potřebné lorem ipsum <span className="text-uayellow">sit dolor</span></h1>
                    <p className="mb-14 text-lg font-normal text-gray-500 lg:text-xl  dark:text-gray-500">
                        Pomáháme Ukrajině, lorem ipsum sitak dolorak ametak bramborak, tramtarara cimcimcim hej hejlorem ipsum sitak dolorak ametak bramborak, tramtarara cimcimcim hej hej 
                    </p>
                    
                        <a href="#" className="border rounded-lg p-5 uablue text-white hover:underline">
                            Dozvědet se více
                        </a>
                    

                </div>

            </div>
        </header>
    );
}
export default Header;