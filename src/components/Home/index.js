import Header from "../Header";
import Categories from "../Categories";
import Banner from "../Banner";
import RecipeList from "../RecipeList";
import './index.css'
const Home = () => (
    <>
    <Header />
    <hr />
    <Banner />
    <Categories />
    <div className="resipes-section">
        <div className="recipes-header ">
        <h1 className="recipes-heading">Simple and tasty recipes</h1>
        <p>bjkhhhhhhvk sdlclh sdvckbhdc sdvchjbkhjuscd hjccksdvbc</p>
        </div>
        <RecipeList />
    </div>
    </>
)

export default Home