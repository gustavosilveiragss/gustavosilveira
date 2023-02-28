import { SiNextdotjs, SiJquery, SiDart, SiFlutter, SiDotnet, SiCsharp, SiMicrosoftsqlserver, SiFirebase, SiTypescript, SiJavascript, SiNodedotjs, SiReact } from "react-icons/si";

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
                        <h1 className="text-5xl font-bold text-info">Technologies I use</h1>
                        <div className="pt-2 text-white">Though I&apos;ve experimented with many other tools,<br /> I&apos;m most experienced with:</div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-4 items-center justify-center">
                            <div id="dotnet" className="card">
                                <figure><SiDotnet size={80} color='white' /></figure>
                                <div className="card-body p-1">
                                    <h2 className="card-title justify-center text-white">
                                        .NET
                                    </h2>
                                </div>
                            </div>
                            <div id="csharp" className="card">
                                <figure><SiCsharp size={80} color='white' /></figure>
                                <div className="card-body p-1">
                                    <h2 className="card-title justify-center text-white">
                                        C#
                                    </h2>
                                </div>
                            </div>
                            <div id="mssql" className="card">
                                <figure><SiMicrosoftsqlserver size={80} color='white' /></figure>
                                <div className="card-body p-1">
                                    <h2 className="card-title justify-center text-white">
                                        MSSQL
                                    </h2>
                                </div>
                            </div>
                            <div id="dart" className="card">
                                <figure><SiDart size={80} color='white' /></figure>
                                <div className="card-body p-1">
                                    <h2 className="card-title justify-center text-white">
                                        Dart
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
                            <div id="firebase" className="card">
                                <figure><SiFirebase size={80} color='white' /></figure>
                                <div className="card-body p-1">
                                    <h2 className="card-title justify-center text-white">
                                        Firebase
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
                            <div id="node" className="card">
                                <figure><SiNodedotjs size={80} color='white' /></figure>
                                <div className="card-body p-1">
                                    <h2 className="card-title justify-center text-white">
                                        Node.js
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
                            <div id="jquery" className="card">
                                <figure><SiJquery size={80} color='white' /></figure>
                                <div className="card-body p-1">
                                    <h2 className="card-title justify-center text-white">
                                        JQuery
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