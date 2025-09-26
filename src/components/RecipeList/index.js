import './index.css'
const recipeList = [
    {id: 1, name: "Name", imgUrl:"https://res.cloudinary.com/dyz8l9er0/image/upload/v1758874610/chicken_ttlu4u.jpg"},
    {id: 2, name: "Name", imgUrl:"https://res.cloudinary.com/dyz8l9er0/image/upload/v1758874610/chicken_ttlu4u.jpg"},
    {id: 3, name: "Name", imgUrl:"https://res.cloudinary.com/dyz8l9er0/image/upload/v1758874610/chicken_ttlu4u.jpg"},
    {id: 4, name: "Name", imgUrl:"https://res.cloudinary.com/dyz8l9er0/image/upload/v1758874610/chicken_ttlu4u.jpg"},
    {id: 5, name: "Name", imgUrl:"https://res.cloudinary.com/dyz8l9er0/image/upload/v1758874610/chicken_ttlu4u.jpg"},
    {id: 6, name: "Name", imgUrl:"https://res.cloudinary.com/dyz8l9er0/image/upload/v1758874610/chicken_ttlu4u.jpg"},
    {id: 7, name: "Name", imgUrl:"https://res.cloudinary.com/dyz8l9er0/image/upload/v1758874610/chicken_ttlu4u.jpg"},
    {id: 8, name: "Name", imgUrl:"https://res.cloudinary.com/dyz8l9er0/image/upload/v1758874610/chicken_ttlu4u.jpg"},
    {id: 9, name: "Name", imgUrl:"https://res.cloudinary.com/dyz8l9er0/image/upload/v1758874610/chicken_ttlu4u.jpg"}
]

const RecipeList = () => (
    <div>
        <ul className='recipe-list'>
        {recipeList.map(eachRecipe => 
            <li key={eachRecipe.id} className='recipe-item'>
                <img src={eachRecipe.imgUrl} alt={eachRecipe.name} className="recipe-img"/>
                <p>{eachRecipe.name}</p>
            </li>
        )}
        </ul>
    </div>
)

export default RecipeList