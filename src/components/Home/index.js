import Header from "../Header";
import Categories from "../Categories";
import Banner from "../Banner";
import RecipeList from "../RecipeList";
import { loremIpsum } from "lorem-ipsum";
import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram } from "react-icons/bi";

const lorem = loremIpsum({
    count: 5,
    units: "sentences",
    sentenceLowerBound: 4,
    sentenceUpperBound: 5,
    paragraphUpperBound: 8,
    paragraphLowerBound: 4
});

const loremSmall = loremIpsum({
    count: 5,
    units: "sentences",
    sentenceLowerBound: 1,
    sentenceUpperBound: 2,
    paragraphUpperBound: 2,
    paragraphLowerBound: 1
});

const Home = () => (
    <>
        <Header />
        <hr />
        <div className="flex flex-col gap-20">
            <Banner />
            <Categories />
            <div className="mt-10 mb-20">
                <h1 className="text-3xl text-center mb-2">Simple and tasty recipes</h1>
                <p className="text-center mb-10">{lorem}</p>
                <RecipeList />
            </div>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div className="order-1 md:order-none">
                <h1 className="text-4xl">Everyone can be a chef in their own kitchen</h1>
                <p className="text-normal my-10">{lorem}</p>
                <button type="button" className="bg-slate-600 text-white px-5 py-2 rounded-lg">Learn More</button>
            </div>
            <img className="rounded-xl" src="./images/chef.jpg" alt="Chef" />
        </div>
        <div>
            <div className="py-10 grid md:grid-cols-2 items-start">
                <h1 className="text-4xl text-center">Try this delicious recipe to make your day</h1>
                <p className="m-auto max-w-[70%] text-normal my-5 text-center">{lorem}</p>
            </div>
            <RecipeList />
        </div>
        <div className="my-10 bg-blue-100 rounded-2xl px-20 py-20 flex flex-col items-center">
            <h1 className="text-4xl mb-5 text-center">Deliciousness to your inbox</h1>
            <p className="text-center mb-5">{lorem}</p>
            <div className="flex gap-2 items-center justify-center bg-white p-2 inline-block rounded-2xl">
                <input type="email" className="outline-transparent" />
                <button className="bg-black text-white text-xs p-2 rounded-lg">Subscribe</button>
            </div>
        </div>
        <footer>
            <div className="md:flex items-center justify-between py-5">
                <div>
                    <h1 className='text-center md:text-left font-[Arizonia] text-2xl cursor-pointer'>FoodieLand</h1>
                    <p className="text-center mb-5">{loremSmall}</p>
                </div>
                <nav>
                    <ul className='flex gap-1 md:gap-5 cursor-pointer font-bold justify-center md:justify-start'>
                        <li className="hover:bg-sky-700 rounded-xl p-2 hover:text-white">Recipes</li>
                        <li className="hover:bg-sky-700 rounded-xl p-2 hover:text-white">Blog</li>
                        <li className="hover:bg-sky-700 rounded-xl p-2 hover:text-white">Contact</li>
                        <li className="hover:bg-sky-700 rounded-xl p-2 hover:text-white">About Us</li>
                    </ul>
                </nav>
            </div>
            <hr />
            <div className="md:relative md:flex md:items-center md:justify-center mt-5">
                <p className="text-center md:absolute md:left-1/2 transform md:-translate-x-1/2">© 2025 Flowbase. Powered by Webflow</p>
                <div className="flex gap-10 justify-center mt-2 md:ml-auto md:justify-start">
                    <BiLogoFacebook /> <BiLogoTwitter /> <BiLogoInstagram />
                </div>
            </div>
        </footer>
    </>
)
export default Home