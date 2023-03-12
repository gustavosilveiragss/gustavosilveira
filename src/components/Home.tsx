import Image from "next/image";
import Photo from "../../public/images/me.jpeg";

const Home = () => {
    return (
        <section id="home" className="overflow-x-clip">
            <div className="home hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row z-40">
                    <div className="stack">
                        <Image src={Photo} sizes="" className="lg:max-w-lg md:max-w-xl sm:max-w-sm rounded-lg top-0" alt=""></Image>
                        <div className="gooey"></div>
                    </div>
                    <div className="z-30 pl-0 pt-8 lg:pl-10 lg:pt-0">
                        <h1 className="text-5xl font-bold text-white">Hey, I&apos;m <span className="text-info">Gustavo</span></h1>
                        <div className="w-fit px-2 border-solid border rounded-md text-secondary border-secondary mt-3">SOFTWARE DEVELOPER</div>
                        <p className="py-6 text-white">I&apos;ve got a passion for problem-solving and helping create new things</p>
                        <a href="mailto:gustavo24gss@gmail.com">
                            <button className="btn btn-success mr-2 hover:bg-opacity-80">Contact</button>
                        </a>
                        <a href="/files/CV.pdf">
                            <button className="btn btn-primary hover:bg-opacity-80">Resume</button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;