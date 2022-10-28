import ua_flag from "../img/ua_flag.png"
export const Header = () => {

    return (
        <header className="bg-gray-100">
            <div className="max-w-[1200px] flex items-center items-start mx-auto justify-between">
                <div className="max-w-[50%]">
                    <img src={ua_flag} alt="ua heart flag" />
                </div>
                <div className="max-w-[40%] p-5">
                    <h1 className="mb-12 text-4xl font-semibold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">Pomoc pro potřebné lorem ipsum <span className="text-yellow">sit dolor</span></h1>
                    <p className="mb-14 text-lg font-normal text-gray-500 lg:text-xl  dark:text-gray-500">
                        Pomáháme Ukrajině hodně, lorem ipsum sitak dolorak ametak bramborak, tramtarara cimcimcim hej hej filip je gej
                    </p>
                    <a href="#" className="border rounded-lg p-5 ukblue text-white">
                        Dozvědet se více
                    </a>
                </div>

            </div>
        </header>
    );
}
export default Header;