import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import Lenis from '@studio-freight/lenis'

const fadeVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
    exit: { opacity: 0, y: -40, transition: { duration: 0.8, ease: 'easeInOut' } },
}

const Work = () => {
    useEffect(() => {
        const lenis = new Lenis({ lerp: 0.1, smoothWheel: true })
        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
    }, [])

    return (
        <div className="w-full h-[180rem] bg-background relative top-[-10.5rem] flex justify-center items-start">
            <div className="w-[20%] h-[15%] bg-background absolute z-20 top-36 "></div>

            <motion.img
                src="/HomeWorkSlide.svg"
                alt="slide"
                className="w-full h-auto object-contain absolute z-40"
                variants={fadeVariant}
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: false, amount: 0.2 }}
            />

            <motion.div
                className="w-[15%] h-[15%] bg-[#b8dbef] absolute z-30 top-[150rem] left-[83.5rem] rounded-3xl overflow-hidden flex justify-end items-end"
                variants={fadeVariant}
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: false, amount: 0.2 }}
            >
                <div className="w-[95%] h-full bg-[#77b0d2] rounded-tl-3xl rounded-bl-3xl"></div>
            </motion.div>

            <div className="w-[80%] h-[55%] mt-[16rem] absolute z-40 gap-10 flex flex-col justify-between items-center">
                {/* Section 1 */}
                <motion.div
                    className="w-full h-[35%] flex flex-row justify-center items-center"
                    variants={fadeVariant}
                    initial="hidden"
                    whileInView="visible"
                    exit="exit"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <div className="w-[50%] h-full">
                        <img
                            src="/HomeMobile.svg"
                            alt="mobile"
                            className="w-[75%] h-auto object-contain mt-24 ml-16"
                        />
                    </div>
                    <div className="w-[50%] h-full flex flex-col justify-start items-start">
                        <h1 className="text-primary font-bold text-[6rem] relative bottom-[5rem]">
                            How it works
                        </h1>
                        <div className="w-full ml-20 h-[15rem] mt-[-2rem] flex justify-between items-start">
                            <div className="w-[4rem] h-[4rem] bg-primary rounded-full flex justify-center items-center text-4xl text-white font-semibold">
                                1
                            </div>
                            <div className="w-[85%] h-full flex flex-col justify-start gap-10 items-start">
                                <h1 className="text-primary font-bold text-6xl">Find</h1>
                                <p className="text-gray-600 text-2xl">
                                    Browse the map to find nearby <br /> restrooms with details like distance, <br /> availability, and amenities.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Section 2 */}
                <motion.div
                    className="w-full h-[30%] flex flex-row justify-center items-center"
                    variants={fadeVariant}
                    initial="hidden"
                    whileInView="visible"
                    exit="exit"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <div className="w-[50%] h-full">
                        <img
                            src="/HomeMobile2.svg"
                            alt="Mobile2"
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <div className="w-[50%] h-full flex flex-col justify-start items-start">
                        <div className="w-full ml-20 h-[15rem] flex justify-between items-start">
                            <div className="w-[4rem] h-[4rem] bg-primary rounded-full flex justify-center items-center text-4xl text-white font-semibold">
                                2
                            </div>
                            <div className="w-[85%] h-full flex flex-col justify-start gap-10 items-start">
                                <h1 className="text-primary font-bold text-6xl">Scan</h1>
                                <p className="text-gray-600 text-2xl">
                                    At the door, scan the QR code for <br /> instant access.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Section 3 */}
                <motion.div
                    className="w-full h-[30%] flex flex-row justify-center items-center"
                    variants={fadeVariant}
                    initial="hidden"
                    whileInView="visible"
                    exit="exit"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <div className="w-[50%] h-full">
                        <img
                            src="/HomeMobile3.svg"
                            alt="Mobile3"
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <div className="w-[50%] h-full flex flex-col justify-start items-start">
                        <div className="w-full ml-20 h-[15rem] flex justify-between items-start">
                            <div className="w-[4rem] h-[4rem] bg-primary rounded-full flex justify-center items-center text-4xl text-white font-semibold">
                                3
                            </div>
                            <div className="w-[85%] h-full flex flex-col justify-start gap-10 items-start">
                                <h1 className="text-primary font-bold text-6xl">Unlock</h1>
                                <p className="text-gray-600 text-2xl">
                                    When the light blinks green, turn the <br /> handle and enjoy a clean, comfortable <br /> restroom.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Work
