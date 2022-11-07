import 'keen-slider/keen-slider.min.css'

import LimitedCardList from "../pages/LimitedCardList";
import { useKeenSlider } from 'keen-slider/react'
import { Outlet} from "react-router-dom";
export const Slider = () => {
    const [sliderRef, instanceRef] = useKeenSlider(
        {
            breakpoints: {
                "(min-width: 720px)": {
                  slides: { perView: 2, spacing: 20 },
                },
                "(min-width: 1000px)": {
                  slides: { perView: 3, spacing: 15 },
                },
              },
              slides: { perView: 1 , spacing: 10},
        },
        [
            // add plugins here
        ]
    )
    return (
        <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide max-w-[320px] my-5 bg-white rounded-lg shadow-md">
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

                            <div className="keen-slider__slide max-w-[320px] my-5 bg-white rounded-lg shadow-md">
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
                            </div><div className="keen-slider__slide max-w-[320px] my-5 bg-white rounded-lg shadow-md">
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
        </div>)
}

export default Slider;