import React, { useState, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { motion } from 'framer-motion'
import Lenis from '@studio-freight/lenis'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const cities = [
    { name: 'Washington, D.C.', img: '/Washington.svg' },
    { name: 'New York', img: '/NewYork.svg' },
    { name: 'Los Angeles', img: '/LosAngeles.svg' },
    { name: 'Chicago', img: '/Chicago.png' },
    { name: 'San Francisco', img: '/SanFrancisco.png' },
    { name: 'Miami', img: '/Miami.png' },
]

const fadeVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } }
}

const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Email is required'),
    city: Yup.string().min(2, 'Too short').required('City is required')
})

const Locations = () => {
    const [index, setIndex] = useState(0)

    const scrollLeft = () => setIndex(prev => Math.max(prev - 1, 0))
    const scrollRight = () => setIndex(prev => Math.min(prev + 1, cities.length - 3))

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.5,
            smoothWheel: true,
            smoothTouch: true,
            gestureOrientation: 'vertical',
            syncTouch: true,
            touchMultiplier: 1.5,
            wheelMultiplier: 1.2,
            lerp: 0.1,
        })
        const raf = (time) => {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
        return () => lenis.destroy()
    }, [])

    return (
        <div className='w-full h-[80rem] relative flex flex-col justify-start items-start bg-white'>
            {/* Gradient BG */}
            <div className='absolute w-full h-[10rem] mt-[-10rem] bg-gradient-to-t from-white to-background'></div>
            <div className='absolute w-full h-[10rem] bg-third bottom-0'></div>

            {/* Locations Section */}
            <motion.div
                className='absolute w-[90%] h-[45rem] ml-[10%] flex flex-col justify-start items-start bg-white z-10 overflow-hidden'
                variants={fadeVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
            >
                <h1 className='text-primary text-6xl font-black mb-6 ml-7'>Locations</h1>
                <p className='text-xl font-semibold text-gray-500 ml-7'>Discover Yedi in your City</p>

                <motion.div
                    className='relative w-full mt-16'
                    variants={fadeVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <div
                        id="city-container"
                        className="flex transition-transform duration-500 ease-in-out overflow-visible pr-16"
                        style={{ transform: `translateX(-${index * 32}rem)` }}
                    >
                        {cities.map((city, i) => (
                            <motion.div
                                key={i}
                                className="h-[20rem] w-[20rem] flex-shrink-0 mr-[2rem] -ml-2"
                                variants={fadeVariant}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.2 }}
                            >
                                <div className="h-[90%] w-full rounded-3xl overflow-hidden relative">
                                    <img
                                        src={city.img}
                                        alt={city.name}
                                        className={`w-full h-full object-cover transition duration-300 ${i > 1 ? 'filter grayscale' : ''
                                            }`}
                                    />
                                    {i > 1 && (
                                        <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center">
                                            <span className="text-white text-3xl font-bold tracking-widest">
                                                COMING SOON
                                            </span>
                                        </div>
                                    )}
                                </div>
                                <p className="text-lg text-gray-500 ml-10">{city.name}</p>
                            </motion.div>
                        ))}
                    </div>


                    {/* Arrows */}
                    <div className='w-[15rem] h-[5rem] flex justify-center gap-10 items-center relative left-[50rem] top-8'>
                        <div
                            onClick={scrollLeft}
                            className='w-[20%] h-[50%] rounded-full bg-background hover:bg-primary flex justify-center items-center cursor-pointer hover:scale-105 ease-in-out duration-300'
                        >
                            <FaChevronLeft className='text-white text-2xl' />
                        </div>
                        <div
                            onClick={scrollRight}
                            className='w-[20%] h-[50%] rounded-full bg-background hover:bg-primary flex justify-center items-center cursor-pointer hover:scale-105 ease-in-out duration-300'
                        >
                            <FaChevronRight className='text-white text-2xl' />
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            <motion.button
                className='text-gray-600 p-5 border-2 border-gray-500 text-lg cursor-pointer hover:bg-secondary hover:scale-105 ease-in-out duration-300 hover:border-transparent rounded-3xl w-[10rem] h-[2rem] absolute z-10 top-[40rem] left-[35rem] flex justify-center items-center'
                variants={fadeVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
            >
                LEARN MORE
            </motion.button>

            {/* Newsletter Section with Formik */}
            <motion.div
                className='absolute w-full h-[30rem] top-[50rem] left-0 bg-secondary rounded-[10rem] flex justify-around items-center'
                variants={fadeVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
            >
                <div className='w-[40%] h-[40%] mb-[10rem] flex flex-col justify-between items-start ml-5'>
                    <h1 className='text-6xl font-black text-primary'>Yedi News <br /> Alerts!</h1>
                    <p className='text-xl text-gray-600'>
                        Be the first to know when Yedi comes to your town, get <br /> special offers and discounts from partners, and more!
                    </p>
                </div>

                <Formik
                    initialValues={{ email: '', city: '' }}
                    validationSchema={validationSchema}
                    onSubmit={(values, { resetForm }) => {
                        alert(`Submitted: ${JSON.stringify(values, null, 2)}`)
                        resetForm()
                    }}
                >
                    {() => (
                        <Form className='w-[40%] h-[50%] mt-[10rem] flex flex-col justify-between items-start'>
                            <div className='w-full'>
                                <Field
                                    type="text"
                                    name="email"
                                    placeholder="Email Address"
                                    className='py-3 px-4 w-full border-2 border-third text-third text-xl rounded-full bg-transparent'
                                />
                                <ErrorMessage name="email" component="div" className="text-red-500 text-lg mt-1 ml-4" />
                            </div>
                            <div className='w-full mt-[-1rem]'>
                                <Field
                                    type="text"
                                    name="city"
                                    placeholder="City"
                                    className='py-3 px-4 w-full border-2 border-third text-third text-xl rounded-full bg-transparent'
                                />
                                <ErrorMessage name="city" component="div" className="text-red-500 text-lg mt-1 ml-4" />
                            </div>
                            <button
                                type="submit"
                                className='mt-4 py-3 px-16 text-white text-2xl ml-[1rem] rounded-full bg-primary hover:bg-third hover:text-white transition duration-300'
                            >
                                SUBMIT
                            </button>
                        </Form>
                    )}
                </Formik>
            </motion.div>
        </div>
    )
}

export default Locations
