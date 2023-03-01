import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";

const Projects = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <section id="projects">
            <div className="wave-proj">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
            <div className="projects w-full min-h-screen bg-neutral">
                <div className="p-20 gap-4 flex-col">
                    <div>
                        <div className="flex flex-row w-full">
                            <h3 className="text-lg text-white mr-1">PROJECTS</h3>
                            <div className="h-[1px] w-full bg-secondary block relative top-3"></div>
                        </div>
                        <h1 className="text-5xl font-bold text-white">Some personal projects</h1>
                        <div className="flex flex-wrap gap-5 pt-4 items-center justify-center">
                            <div className="card w-[500px] pb-7 bg-base-100 shadow-xl">
                                <Carousel showThumbs={false} infiniteLoop={true} showStatus={false} swipeable={true} emulateTouch={true} >
                                    <img alt="." className="rounded-2xl" src="/images/lakitu.jpg" />
                                    <img alt="." className="rounded-2xl" src="/images/me.jpeg" />
                                </Carousel>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        Bacqpack
                                    </h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions justify-end">
                                        <div className="badge badge-outline">Dart</div>
                                        <div className="badge badge-outline">Flutter</div>
                                        <div className="badge badge-outline">Firebase</div>
                                    </div>
                                </div>
                            </div>
                            <div className="card w-[500px] bg-base-100 shadow-xl">
                                <Carousel showThumbs={false} infiniteLoop={true} showStatus={false} swipeable={true} emulateTouch={true} >
                                    <img alt="." className="rounded-2xl" src="/images/lakitu.jpg" />
                                    <img alt="." className="rounded-2xl" src="/images/me.jpeg" />
                                </Carousel>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        Dolphin
                                    </h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
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
                            <div className="card w-[500px] pb-7 bg-base-100 shadow-xl">
                                <Carousel showThumbs={false} infiniteLoop={true} showStatus={false} swipeable={true} emulateTouch={true} >
                                    <img alt="." className="rounded-2xl" src="/images/lakitu.jpg" />
                                    <img alt="." className="rounded-2xl" src="/images/me.jpeg" />
                                </Carousel>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        Feelings Museum
                                    </h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions justify-end">
                                        <div className="badge badge-outline">JavaScript</div>
                                        <div className="badge badge-outline">Next.js</div>
                                        <div className="badge badge-outline">Firebase</div>
                                        <div className="badge badge-outline">React</div>
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