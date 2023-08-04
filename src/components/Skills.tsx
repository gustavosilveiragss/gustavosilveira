import { SiNextdotjs, SiJava, SiFlutter, SiDotnet, SiTypescript, SiJavascript, SiC, SiReact, SiPython, SiRust, SiPostgresql, SiVuedotjs } from "react-icons/si";

const Skills = () => (
    <>
        <section id="skills">
            <div className="spacer-skills"></div>
            <div className="skills hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div>

                        <div className="flex flex-row w-full">
                            <h3 className="text-lg text-white mr-1">SKILLS</h3>
                            <div className="h-[1px] w-full bg-secondary block relative top-3"></div>
                        </div>
                        <h1 className="text-5xl font-bold text-info">Technologies I&apos;ve used</h1>
                        <div className="pt-2 text-white">Though I&apos;ve experimented with many other tools,<br /> I&apos;m most experienced with:</div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-4 items-center justify-center">
                            <div id="rust" className="card">
                                <figure><SiRust size={80} color='white' /></figure>
                                <div className="card-body p-1">
                                    <h2 className="card-title justify-center text-white">
                                        Rust
                                    </h2>
                                </div>
                            </div>
                            <div id="c" className="card">
                                <figure><SiC size={80} color='white' /></figure>
                                <div className="card-body p-1">
                                    <h2 className="card-title justify-center text-white">
                                        C
                                    </h2>
                                </div>
                            </div>
                            <div id="python" className="card">
                                <figure><SiPython size={80} color='white' /></figure>
                                <div className="card-body p-1">
                                    <h2 className="card-title justify-center text-white">
                                        Python
                                    </h2>
                                </div>
                            </div>
                            <div id="postgres" className="card">
                                <figure><SiPostgresql size={80} color='white' /></figure>
                                <div className="card-body p-1">
                                    <h2 className="card-title justify-center text-white">
                                        PostgreSQL
                                    </h2>
                                </div>
                            </div>
                            <div id="dotnet" className="card">
                                <figure><SiDotnet size={80} color='white' /></figure>
                                <div className="card-body p-1">
                                    <h2 className="card-title justify-center text-white">
                                        .NET
                                    </h2>
                                </div>
                            </div>
                            <div id="java" className="card">
                                <figure><SiJava size={80} color='white' /></figure>
                                <div className="card-body p-1">
                                    <h2 className="card-title justify-center text-white">
                                        Java
                                    </h2>
                                </div>
                            </div>
                            <div id="vue" className="card">
                                <figure><SiVuedotjs size={80} color='white' /></figure>
                                <div className="card-body p-1">
                                    <h2 className="card-title justify-center text-white">
                                        Vue.js
                                    </h2>
                                </div>
                            </div>
                            <div id="flutter" className="card">
                                <figure><SiFlutter size={80} color='white' /></figure>
                                <div className="card-body p-1">
                                    <h2 className="card-title justify-center text-white">
                                        Flutter
                                    </h2>
                                </div>
                            </div>
                            <div id="js" className="card">
                                <figure><SiJavascript size={80} color='white' /></figure>
                                <div className="card-body p-1">
                                    <h2 className="card-title justify-center text-white">
                                        JavaScript
                                    </h2>
                                </div>
                            </div>
                            <div id="ts" className="card">
                                <figure><SiTypescript size={80} color='white' /></figure>
                                <div className="card-body p-1">
                                    <h2 className="card-title justify-center text-white">
                                        TypeScript
                                    </h2>
                                </div>
                            </div>
                            <div id="react" className="card">
                                <figure><SiReact size={80} color='white' /></figure>
                                <div className="card-body p-1">
                                    <h2 className="card-title justify-center text-white">
                                        React
                                    </h2>
                                </div>
                            </div>
                            <div id="next" className="card">
                                <figure><SiNextdotjs size={80} color='white' /></figure>
                                <div className="card-body p-1">
                                    <h2 className="card-title justify-center text-white">
                                        Next.js
                                    </h2>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </>
);

export default Skills;