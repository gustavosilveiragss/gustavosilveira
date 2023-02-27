import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const About = () => {
    return (
        <section id="about">
            <div className="about hero min-h-screen bg-base-200">
                <div className="hero-content items-start grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="mb-4">
                        <div className="flex flex-row">
                            <h3 className="text-lg text-white mr-1 whitespace-nowrap">ABOUT ME</h3>
                            <div className="h-[1px] w-full bg-secondary block relative top-3"></div>
                        </div>
                        <div className="pt-2 text-accent max-w-lg">
                            I&apos;ve always enjoyed <span className="text-info">building things</span>. Before high school, I started getting interested in programming. Since then, I&apos;ve been a part of <span className="text-info">two startups</span>, working mostly with <span className="text-info">mobile and web development</span>.<br /><br />
                            Currently, I&apos;m studying <span className="text-info">Software Engineering (PUCPR)</span> and working on personal projects. However, I am actively seeking new job opportunities this year.<br /> <br />
                            When I&apos;m not coding or studying, some of my <span className="text-info">main interests</span> are:
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
    );
}

export default About;