import { RiTimerFill } from "react-icons/ri";
import { TbToolsKitchen3 } from "react-icons/tb";
import './index.css'
const Banner = () => (
    <div className="banner-section">
        <div className='banner-text-conatiner'>
            <h1>Spicy Delicious Chicken</h1>
            <p>dgdg dfgdfgdfg dgdsgd fgsgsdg sdgsdg sdgsggssdgsdg bkkdkagdak</p>
            <div className="button-container">
                <button type='button' className='banner-button'>
                    <RiTimerFill />
                    30 Minutes
                </button>
                <button type='button' className='banner-button'>
                    <TbToolsKitchen3 />
                    Chicken
                </button>
            </div>
        </div>
        <img src="https://res.cloudinary.com/dyz8l9er0/image/upload/v1758874610/chicken_ttlu4u.jpg" alt='hot recipe' className="banner-img" />
    </div>
)

export default Banner