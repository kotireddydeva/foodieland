import { RiTimerFill } from "react-icons/ri";
import { TbToolsKitchen3 } from "react-icons/tb";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";

const recipeList = [
    { id: 1, name: "Big and Juicy Wagyu Beef Cheeseburger", type: "Snack", imgUrl: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1758874610/chicken_ttlu4u.jpg" },
    { id: 2, name: "Fresh Lime Roasted Salmon with Ginger Sauce", type: "Fish", imgUrl: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1758874610/chicken_ttlu4u.jpg" },
    { id: 3, name: "Strawberry Oatmeal Pancake with Honey Syrup", type: "Breakfast", imgUrl: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1758874610/chicken_ttlu4u.jpg" },
    { id: 4, name: "Fresh and Healthy Mixed Mayonnaise Salad", type: "Healthy", imgUrl: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1758874610/chicken_ttlu4u.jpg" },
    { id: 5, name: "Chicken Meatballs with Cream Cheese", type: "Meat", imgUrl: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1758874610/chicken_ttlu4u.jpg" },
    { id: 6, name: "Don’t forget to eat healthy food!", type: "none", imgUrl: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1758874610/chicken_ttlu4u.jpg" },
    { id: 7, name: "Fruity Pancake with Orange & Blueberry", type: "Sweet", imgUrl: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1758874610/chicken_ttlu4u.jpg" },
    { id: 8, name: "The Best Easy One Pot Chicken and Rice", type: "Snack", imgUrl: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1758874610/chicken_ttlu4u.jpg" },
    { id: 9, name: "The Creamiest Creamy Chicken and Bacon Pasta", type: "Noodles", imgUrl: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1758874610/chicken_ttlu4u.jpg" }
]

const RecipeList = () => {
    const [loved, setLoved] = useState([])
    const handleLove = id => {
        setLoved(prev =>
            prev.includes(id) ? prev.filter(loveId => loveId !== id) : [...prev, id]
        )
    }
    return (
        <div>
            <ul className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {recipeList.map(eachRecipe =>
                    <li
                        key={eachRecipe.id}
                        className='cursor-pointer recipe-item rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center justify-between relative'>
                        <div
                            className="absolute bg-white w-14 h-14 rounded-full right-5 top-5 flex items-center justify-center">
                            <button type="button"
                                className="transition ease-in-out hover:scale-150 duration-500"
                                onClick={() => handleLove(eachRecipe.id)}>
                                <FaHeart
                                    color={loved.includes(eachRecipe.id) ? "red" : "grey"}
                                    size={20} />
                            </button>
                        </div>
                        <img src={eachRecipe.imgUrl} alt={eachRecipe.name} className="w-full" />
                        <p className="my-5 px-5 text-center">{eachRecipe.name}</p>
                        <div className="flex gap-5 mb-5">
                            <button type='button'
                                className='transition ease-in-out delay-150 hover:scale-105 duration-300  flex gap-2 items-center p-[10px] font-medium'>
                                <RiTimerFill />
                                30 Minutes
                            </button>
                            <button
                                type='button'
                                className='transition ease-in-out delay-150 hover:scale-105 duration-300  flex gap-2 items-center p-[10px] font-medium'>
                                <TbToolsKitchen3 />
                                {eachRecipe.type}
                            </button>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default RecipeList