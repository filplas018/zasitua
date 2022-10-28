

export const Footer = () => {
    return (<footer className="ukblue">
        <div className="max-w-[1200px] mx-auto flex flex-wrap md:justify-between sm:justify-center sm:flex-wrap  py-8  text-white">
            <div className="max-w-[320px] py-8 px-10 mb-10">
                <h2 className="mb-6 text-sm font-semibold  uppercase text-yellow">Lorem ipsum</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris
                    elementum mauris vitae tortor. Duis ante orci, molestie vitae vehicula venenatis,
                    tincidunt ac pede. Integer rutrum, orci vestibulum ullamcorper ultricies, lacus quam ultricies odio,
                    vitae placerat pede sem sit amet enim. Integer imperdiet lectus quis justo. Vestibulum fermentum tortor id mi. Duis pulvinar. Cras pede libero, dapibus nec, pretium sit amet.
                </p>
            </div>
            <div className="max-w-[320px] py-8 px-10 mb-10">
                <h2 className="mb-6 text-sm font-semibold  uppercase text-yellow">Kontakty</h2>
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
                        <a href="tel:487727048" className="hover:underline text-yellow">Tel.: 487 727 048</a>
                    </li>
                    <li className="mb-4">
                        <a href="mailto:vase@smetankanovybor.cz" className="hover:underline text-yellow">vase@smetankanovybor.cz</a>
                    </li>
                </ul>
            </div>
            <div className="py-8 px-10 mb-10">
                <h2 className="mb-6 text-sm font-semibold uppercase text-yellow">Externí odkazy</h2>
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
        <div className="py-6 px-4 ukyellow">
            <div className="max-w-[1200px] mx-auto md:flex md:items-center md:justify-between">
                <span className="text-sm  sm:text-center">© 2022 <a href="https://flowbite.com/">Dům dětí a mládeže "Smetanka" Nový Bor</a> všechna práva vyhrazena.
                </span>

            </div>
        </div>
    </footer>);
}
export default Footer;