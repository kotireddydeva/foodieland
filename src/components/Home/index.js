import Header from "../Header";
import Categories from "../Categories";
import Banner from "../Banner";
import RecipeList from "../RecipeList";
import { loremIpsum } from "lorem-ipsum";

const lorem = loremIpsum({
  count: 5,
  units: "sentences",
  sentenceLowerBound: 4,
  sentenceUpperBound: 5,
  paragraphUpperBound: 8,
  paragraphLowerBound: 4
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
    </>
)  
export default Home