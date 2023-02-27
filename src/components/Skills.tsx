import { IoLogoReact, IoLogoNodejs, IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import { SiNextdotjs, SiJquery, SiDart, SiFlutter, SiDotnet, SiCsharp, SiMicrosoftsqlserver, SiFirebase } from "react-icons/si";

const Skills = () => (
    <section id="skills">
        <div className="skills hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div>

                    <div className="flex flex-row w-full">
                        <h3 className="text-lg text-white mr-1">SKILLS</h3>
                        <div className="h-[1px] w-full bg-secondary block relative top-3"></div>
                    </div>
                    <h1 className="text-5xl font-bold text-info">Technologies I use</h1>
                    <div className="pt-2 text-white">Though I&apos;ve experimented with many other tools,<br /> I&apos;m most experienced with:</div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-4 items-center justify-center">
                        <div id="js" className="card">
                            <figure><IoLogoJavascript size={80} /></figure>
                            <div className="card-body p-1">
                                <h2 className="card-title justify-center">
                                    JavaScript
                                </h2>
                            </div>
                        </div>
                        <div id="node" className="card">
                            <figure><IoLogoNodejs size={80} /></figure>
                            <div className="card-body p-1">
                                <h2 className="card-title justify-center">
                                    Node.js
                                </h2>
                            </div>
                        </div>
                        <div id="react" className="card">
                            <figure><IoLogoReact size={80} /></figure>
                            <div className="card-body p-1">
                                <h2 className="card-title justify-center">
                                    React
                                </h2>
                            </div>
                        </div>
                        <div id="next" className="card">
                            <figure><SiNextdotjs size={80} /></figure>
                            <div className="card-body p-1">
                                <h2 className="card-title justify-center">
                                    Next.js
                                </h2>
                            </div>
                        </div>
                        <div id="jquery" className="card">
                            <figure><SiJquery size={80} /></figure>
                            <div className="card-body p-1">
                                <h2 className="card-title justify-center">
                                    JQuery
                                </h2>
                            </div>
                        </div>
                        <div id="dart" className="card">
                            <figure><SiDart size={80} /></figure>
                            <div className="card-body p-1">
                                <h2 className="card-title justify-center">
                                    Dart
                                </h2>
                            </div>
                        </div>
                        <div id="flutter" className="card">
                            <figure><SiFlutter size={80} /></figure>
                            <div className="card-body p-1">
                                <h2 className="card-title justify-center">
                                    Flutter
                                </h2>
                            </div>
                        </div>
                        <div id="firebase" className="card">
                            <figure><SiFirebase size={80} /></figure>
                            <div className="card-body p-1">
                                <h2 className="card-title justify-center">
                                    Firebase
                                </h2>
                            </div>
                        </div>
                        <div id="dotnet" className="card">
                            <figure><SiDotnet size={80} /></figure>
                            <div className="card-body p-1">
                                <h2 className="card-title justify-center">
                                    .NET
                                </h2>
                            </div>
                        </div>
                        <div id="csharp" className="card">
                            <figure><SiCsharp size={80} /></figure>
                            <div className="card-body p-1">
                                <h2 className="card-title justify-center">
                                    C#
                                </h2>
                            </div>
                        </div>
                        <div id="mssql" className="card">
                            <figure><SiMicrosoftsqlserver size={80} /></figure>
                            <div className="card-body p-1">
                                <h2 className="card-title justify-center">
                                    MSSQL
                                </h2>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
);

export default Skills;