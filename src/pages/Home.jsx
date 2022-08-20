import React from "react";
import { Header, HomeContainer, MainContainer, RowContainer } from "../components";
import "../styles/style.css"

export default function Home() {

    return (
        <>
            <div className="container">
                <Header />
                <div className="main">
                    <MainContainer />
                </div>
                <div className="gallery">
                    <section className="text-gray-600 body-font">
                        <p className="heading text-2xl min- font-semibold capitalize text-main relative before:absolute before:rounded-lg before:content before:w-72 ml-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-main to-main-700 transition-all ease-in-out duration-100">
                           Our Responsiblities & Services
                        </p>
                        <div className="container px-5 py-24 ">
                            <div className="flex flex-wrap -m-4">
                                <div className="lg:w-1/3 sm:w-1/2 p-4">
                                    <div className="flex relative">
                                        <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/600x360" />
                                        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Hygenic Feast</h1>
                                            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:w-1/3 sm:w-1/2 p-4">
                                    <div className="flex relative">
                                        <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/601x361" />
                                        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Quality assurance</h1>
                                            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:w-1/3 sm:w-1/2 p-4">
                                    <div className="flex relative">
                                        <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/603x363" />
                                        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Finger licking Taste</h1>
                                            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:w-1/3 sm:w-1/2 p-4">
                                    <div className="flex relative">
                                        <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/602x362" />
                                        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">On time delivery</h1>
                                            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:w-1/3 sm:w-1/2 p-4">
                                    <div className="flex relative">
                                        <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/605x365" />
                                        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Never Compromise on Quantity</h1>
                                            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:w-1/3 sm:w-1/2 p-4">
                                    <div className="flex relative">
                                        <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/606x366" />
                                        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Branded Ingredients</h1>
                                            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="reason">

                </div>
                <div className="footer">
                    <footer className="text-gray-600 body-font">
                        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                            <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                                <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                                    </svg>
                                    <span className="ml-3 text-xl">Tailblocks</span>
                                </a>
                                <p className="mt-2 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p>
                            </div>
                            <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                                    <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                                    <nav className="list-none mb-10">
                                        <li>
                                            <a className="text-gray-600 hover:text-gray-800">First Link</a>
                                        </li>
                                        <li>
                                            <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                                        </li>
                                        <li>
                                            <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                                        </li>
                                        <li>
                                            <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                                        </li>
                                    </nav>
                                </div>
                                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                                    <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                                    <nav className="list-none mb-10">
                                        <li>
                                            <a className="text-gray-600 hover:text-gray-800">First Link</a>
                                        </li>
                                        <li>
                                            <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                                        </li>
                                        <li>
                                            <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                                        </li>
                                        <li>
                                            <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                                        </li>
                                    </nav>
                                </div>
                                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                                    <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                                    <nav className="list-none mb-10">
                                        <li>
                                            <a className="text-gray-600 hover:text-gray-800">First Link</a>
                                        </li>
                                        <li>
                                            <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                                        </li>
                                        <li>
                                            <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                                        </li>
                                        <li>
                                            <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                                        </li>
                                    </nav>
                                </div>
                                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                                    <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                                    <nav className="list-none mb-10">
                                        <li>
                                            <a className="text-gray-600 hover:text-gray-800">First Link</a>
                                        </li>
                                        <li>
                                            <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                                        </li>
                                        <li>
                                            <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                                        </li>
                                        <li>
                                            <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                                        </li>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-100">
                            <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                                <p className="text-gray-500 text-sm text-center sm:text-left">© 2020 Tailblocks —
                                    <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@knyttneve</a>
                                </p>
                                <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                                    <a className="text-gray-500">
                                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </a>
                                    <a className="ml-3 text-gray-500">
                                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                        </svg>
                                    </a>
                                    <a className="ml-3 text-gray-500">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                        </svg>
                                    </a>
                                    <a className="ml-3 text-gray-500">
                                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                            <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                        </svg>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </>

    )

}