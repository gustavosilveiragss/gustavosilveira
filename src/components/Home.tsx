import Image from "next/image";
import test from "../../public/images/lakitu.jpg";

const Home = () => (
    <div className="home hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
            <Image src={test} className="max-w-md rounded-lg shadow-2xl" alt=""></Image>
            <div>
                <h1 className="text-5xl font-bold">Hey, I'm Gustavo</h1>
                <div className="w-fit px-2 border-solid border rounded-md text-secondary border-secondary mt-3">SOFTWARE DEVELOPER</div>
                <p className="py-6">I've got a passion for problem-solving and helping create new things</p>
                <a href="mailto:gustavo24gss@gmail.com">
                    <button className="btn btn-success">Contact</button>
                </a>
            </div>
        </div>
    </div>
);

export default Home;