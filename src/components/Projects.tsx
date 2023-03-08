import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { FaExternalLinkAlt, FaExternalLinkSquareAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
    return (
        <section id="projects">
            <div className="wave-proj">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
            <div className="projects w-full min-h-screen bg-base-300">
                <div className="p-8 md:p-20 gap-4 flex flex-col items-stretch">
                    <div>
                        <div className="flex flex-row w-full">
                            <h3 className="text-lg text-white mr-1">PROJECTS</h3>
                            <div className="h-[1px] w-full bg-secondary block relative top-3"></div>
                        </div>
                        <h1 className="text-5xl font-bold text-white">Some personal projects</h1>
                        <div className="flex flex-wrap gap-5 pt-4 items-stretch justify-center">
                            <div className="card w-full md:w-[500px] bg-base-100 shadow-2xl">
                                <div className="carousel carousel-slider self-center h-max flex items-center">
                                    <img alt="." className="rounded-2xl" src="/images/projects/bacqpack/bacqpack.png" />
                                </div>
                                <div className="card-body text-white">
                                    <h2 className="flex flex-wrap card-title">
                                        Bacqpack <a href="https://github.com/gustavosilveiragss/bacqpack-flutter" className="btn border-opacity-0 lg:ml-2 gap-2 bg-[#0D1117]"><FaGithub size={20} /> GitHub</a>
                                    </h2>
                                    <p className="h-min">App for managing backpacks. <br />
                                        The idea started after frequently losing/forgetting things while hiking. <br />
                                        The <span className="text-info">user authentication</span> was implemented with Firebase Auth. <br />
                                        To manage the backpacks, with their child containers and items, I used a Firebase Realtime Database featuring <span className="text-info">online and offline CRUD operations.</span>
                                    </p>
                                    <div className="card-actions justify-end">
                                        <div className="badge badge-outline">Dart</div>
                                        <div className="badge badge-outline">Flutter</div>
                                        <div className="badge badge-outline">Firebase</div>
                                    </div>
                                </div>
                            </div>
                            <div className="card w-full md:w-[500px] bg-base-100 shadow-2xl">
                                <Carousel showThumbs={false} infiniteLoop={true} showStatus={false} swipeable={true} emulateTouch={true} >
                                    <div className="self-center h-max flex items-center">
                                        <img alt="." className="rounded-2xl" src="/images/projects/museum/museum.png" />
                                    </div>
                                    <img alt="." className="rounded-2xl" src="/images/projects/museum/1.png" />
                                    <img alt="." className="rounded-2xl" src="/images/projects/museum/2.png" />
                                    <img alt="." className="rounded-2xl" src="/images/projects/museum/3.png" />
                                </Carousel>
                                <div className="card-body text-white">
                                    <h2 className="flex flex-wrap card-title">
                                        Feelings Museum
                                        <a href="https://github.com/gustavosilveiragss/museudossentimentos" className="btn border-opacity-0 ml-2 gap-2 bg-[#0D1117]"><FaGithub size={20} /> GitHub</a>
                                        <a href="https://museudossentimentos.gustavosilveira.codes" className="btn border-opacity-0 gap-2 bg-violet-800"><FaExternalLinkSquareAlt size={16} /> visit</a>
                                    </h2>
                                    <p>A &quot;web museum&quot; for people to demonstrate their feelings through art. <br />
                                        Made for a scientific research fair, the goal was to have a public and collaborative display for art that represented feelings <br />
                                        Developed with <span className="text-info">Next.js</span>, the project contained an <span className="text-info">API</span> to manage the <span className="text-info">Firebase Realtime Database</span> as well as <span className="text-info">storage and user authentication.</span> <br />
                                        Lastly, the frontend was made with <span className="text-info">React</span>
                                    </p>
                                    <div className="card-actions justify-end">
                                        <div className="badge badge-outline">JavaScript</div>
                                        <div className="badge badge-outline">Next.js</div>
                                        <div className="badge badge-outline">Firebase</div>
                                        <div className="badge badge-outline">React</div>
                                    </div>
                                </div>
                            </div>
                            <div className="card w-full md:w-[500px] bg-base-100 shadow-2xl">
                                <Carousel showThumbs={false} infiniteLoop={true} showStatus={false} swipeable={true} emulateTouch={true} >
                                    <div className="self-center h-max flex items-center">
                                        <img alt="." className="rounded-2xl" src="/images/projects/dolphin/dolphin.png" />
                                    </div>
                                    <img alt="." className="rounded-2xl" src="/images/projects/dolphin/1.png" />
                                </Carousel>
                                <div className="card-body text-white">
                                    <h2 className="flex flex-wrap card-title">
                                        Dolphin <a href="https://github.com/gustavosilveiragss/dolphin" className="btn border-opacity-0 ml-2 gap-2 bg-[#0D1117]"><FaGithub size={20} /> GitHub</a>
                                    </h2>
                                    <p>Mask detection platform for establishments. <br />
                                        Made during the pandemic, the project aimed to provide an unexpensive mask detection platform for establishments to set up. <br />
                                        With help from someone who trained a <span className="text-info">Tensorflow model</span> to detect masks, I implemented a platform to take a picture when someone tried to enter without a mask and register it in a <span className="text-info">local MongoDB database</span>. Then the data was presented in a <span className="text-info">UI built with React.</span>
                                    </p>
                                    <div className="card-actions justify-end">
                                        <div className="badge badge-outline">JavaScript</div>
                                        <div className="badge badge-outline">Node.js</div>
                                        <div className="badge badge-outline">React</div>
                                        <div className="badge badge-outline">MongoDB</div>
                                        <div className="badge badge-outline">Python</div>
                                        <div className="badge badge-outline">Tensorflow</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Projects;