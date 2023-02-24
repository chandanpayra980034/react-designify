import { useEffect, useState } from "react";
import { Button } from "../button";

export const Carousel = ({ prev, next }) => {
    const [activeSlide, setActiveSlide] = useState(0)
    const onPrev = () => {
        setActiveSlide(activeSlide === 0 ? 2 : activeSlide - 1)
    }
    const onNext = () => {
        setActiveSlide(activeSlide === 2 ? 0 : activeSlide + 1)
    }
    useEffect(() => {
        let nodes = document.querySelectorAll(".carouselChild")
        for (let i = 0; i < nodes?.length; i++) {
            if (activeSlide === i) {
                nodes[i].classList.remove("hidden")
            }
            else {
                nodes[i].classList.add("hidden")
            }
        }
    }, [activeSlide])
    return (
        <div className="relative">
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96" id="carousel">
                <div className="hidden carouselChild duration-700 ease-in-out">
                    <span className="absolute text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl dark:text-gray-800">First Slide</span>
                    <img src="https://picsum.photos/1300/500" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
                <div className="hidden carouselChild duration-700 ease-in-out">
                    <img src="https://picsum.photos/1301/500" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
                <div className="hidden carouselChild duration-700 ease-in-out">
                    <img src="https://picsum.photos/1302/500" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
            </div>
            {
                prev ? prev() :
                    <div className={"absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"}>
                        <Button onClick={onPrev} rounded="full" onlyIcon={() => {
                            return (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
                                </svg>
                            )
                        }} type="dark" />
                    </div>
            }
            {
                next ? next() :
                    <div className={"absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"}>
                        <Button onClick={onNext} rounded="full" onlyIcon={() => {
                            return (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                </svg>
                            )
                        }} type="dark" />
                    </div>
            }
            {/* <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to={0} />
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to={1} />
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to={2} />
            </div> */}
        </div>
    );
}