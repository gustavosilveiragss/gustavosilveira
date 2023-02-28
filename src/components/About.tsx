import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const About = () => {
    return (
        <>
            <section id="about">
                <div className="wave-abt">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                    </svg>
                </div>
                <div className="about hero min-h-screen bg-slate-600">
                    <div className="hero-content items-start grid grid-cols-1 lg:grid-cols-2 gap-4 z-40">
                        <div className="mb-4">
                            <div className="flex flex-row">
                                <h3 className="text-lg text-amber-50 mr-1 whitespace-nowrap">ABOUT ME</h3>
                                <div className="h-[1px] w-full bg-secondary block relative top-3"></div>
                            </div>
                            <div className="pt-2 text-accent max-w-lg">
                                I&apos;ve always enjoyed <span className="text-info">building things</span>. Before high school, I started getting interested in programming. Since then, I&apos;ve been a part of <span className="text-info">two startups</span>, working mostly with <span className="text-info">mobile and web development</span>.<br /><br />
                                Currently, I&apos;m studying <span className="text-info">Software Engineering (PUCPR)</span> and working on personal projects. However, I am actively seeking new job opportunities this year.<br /> <br />
                                Outside of coding, some of my <span className="text-info">main interests</span> include:
                                <ul className="interests">
                                    <li>Hiking</li>
                                    <li>Reading</li>
                                    <li>Running</li>
                                    <li>Music</li>
                                    <li>Climbing</li>
                                    <li>Movies</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-row">
                                <h3 className="text-lg text-white mr-1 whitespace-nowrap">FIND ME ON</h3>
                                <div className="h-[1px] w-full bg-secondary block relative top-3"></div>
                            </div>
                            <ul>
                                <li className="pb-2">
                                    <a href="mailto:gustavo24gss@gmail.com" className="flex flex-row text-white justify-start social">
                                        <IoMdMail size={25} /><span className='ml-1'>Email</span>
                                    </a>
                                </li>
                                <li className="pb-2">
                                    <a href="https://www.linkedin.com/in/gustavosilveirass" className="flex flex-row text-white justify-start social">
                                        <FaLinkedin size={25} /><span className='ml-1'>LinkedIn</span>
                                    </a>
                                </li>
                                <li className="pb-2">
                                    <a href="https://github.com/gustavosilveiragss" className="flex flex-row text-white justify-start social">
                                        <FaGithub size={25} /><span className='ml-1'>GitHub</span>
                                    </a>
                                </li>
                                <li className="pb-2">
                                    <a href="https://www.instagram.com/gustavosilveirass" className="flex flex-row text-white justify-start social">
                                        <FaInstagram size={25} /><span className='ml-1'>Instagram</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;