

export const Footer = () => {
    return (<footer className="uablue">
        <div className="container max-w-[1200px] mx-auto md:px-10 sm:px-8 px-6 mx-auto py-8 text-white md:flex flex-wrap md:justify-between">
            <div className="max-w-[320px] mx-auto md:mx-0 py-8 mb-10 pr-5">
                <h2 className="mb-6 text-sm font-semibold  uppercase text-uayellow">Lorem ipsum</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris
                    elementum mauris vitae tortor. Duis ante orci, molestie vitae vehicula venenatis,
                    tincidunt ac pede. Integer rutrum, orci vestibulum ullamcorper ultricies, lacus quam ultricies odio,
                    vitae placerat pede sem sit amet enim. Integer imperdiet lectus quis justo. Vestibulum fermentum tortor id mi. Duis pulvinar. Cras pede libero, dapibus nec, pretium sit amet.
                </p>
            </div>
            <div className="max-w-[320px] mx-auto md:mx-0 py-8 mb-10 pr-5">
                <h2 className="mb-6 text-sm font-semibold  uppercase text-uayellow">Kontakty</h2>
                <ul className="">
                    <li className="mb-4">
                        <p className="font-semibold">
                            Dům dětí a mládeže "Smetanka" Nový Bor, okres Česká Lípa, příspěvková organizace
                        </p>
                    </li>
                    <li className="mb-4">
                        Smetanova 387, 473 01 Nový Bor<br />

                        IČ: 46750401<br />

                        Bankovní spojení: 2600725928/2010
                    </li>
                    <li className="mb-4">
                        <a href="tel:487727048" className="hover:underline text-uayellow">Tel.: 487 727 048</a>
                    </li>
                    <li className="mb-4">
                        <a href="mailto:vase@smetankanovybor.cz" className="hover:underline text-uayellow">vase@smetankanovybor.cz</a>
                    </li>
                </ul>
            </div>
            <div className="max-w-[320px]  py-8 mx-auto md:mx-0 mb-10">
                <h2 className="mb-6 text-sm font-semibold uppercase text-uayellow">Externí odkazy</h2>
                <ul className="">
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Privacy Policy</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Licensing</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                    </li>
                </ul>
            </div>

        </div>
        <div className="py-6 uayellow text-gray-700">
            <div className="container max-w-[1200px] mx-auto md:px-10 sm:px-8 px-6 mx-auto flex flex-wrap md:flex-nowrap justify-center md:justify-between">
                <div className="mb-5 md:mb-0 mr-5" >
                    <span className="text-sm text-center md:text-left">© 2022 <a href="https://flowbite.com/" className="">Dům dětí a mládeže "Smetanka" Nový Bor</a> všechna práva vyhrazena.
                    </span>
                </div>

                <div className="flex flex-wrap justify-center items-center md:mb-0">
                    <a href="#" className="text-sm  mr-2">Prohlášení o přístupnosti</a>
                    <span> </span>
                    <a href="#" className="text-sm  mr-2">Soubory cookie</a>
                    <span> </span>
                    <a href="#" className="text-sm  mr-2">Vstup pro správu</a>
                </div>

            </div>
        </div>
    </footer>);
}
export default Footer;