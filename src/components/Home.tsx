import Image from "next/image";
import test from "../../public/images/me.jpeg";

const Home = () => (
    <section id="home">
        <div className="home hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <Image src={test} sizes="" className="lg:max-w-lg md:max-w-xl sm:max-w-sm rounded-lg shadow-2xl" alt=""></Image>
                <div>
                    <h1 className="text-5xl font-bold text-white">Hey, I&apos;m Gustavo</h1>
                    <div className="w-fit px-2 border-solid border rounded-md text-secondary border-secondary mt-3">SOFTWARE DEVELOPER</div>
                    <p className="py-6 text-white">I&apos;ve got a passion for problem-solving and helping create new things</p>
                    <a href="mailto:gustavo24gss@gmail.com">
                        <button className="btn btn-success hover:bg-opacity-80">Contact</button>
                    </a>
                </div>
            </div>
        </div>
    </section>
);

export default Home;