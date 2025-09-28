import {  useState } from "react"
import { BiMenu, BiX } from "react-icons/bi";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
    <header className='relative flex gap-10 items-center justify-between'>
        <h1 className='font-[Arizonia] text-5xl hover:text-blue-500 cursor-pointer'>Foodieland</h1>
        <nav className="hidden md:block">
            <ul className='flex gap-5 cursor-pointer font-bold'>
                <li className="hover:bg-sky-700 rounded-xl p-2 hover:text-white">Home</li>
                <li className="hover:bg-sky-700 rounded-xl p-2 hover:text-white">Recipes</li>
                <li className="hover:bg-sky-700 rounded-xl p-2 hover:text-white">Blog</li>
                <li className="hover:bg-sky-700 rounded-xl p-2 hover:text-white">Contact</li>
                <li className="hover:bg-sky-700 rounded-xl p-2 hover:text-white">About Us</li>
            </ul>
        </nav>
         <button
        className="md:hidden text-3xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <BiX /> : <BiMenu />}
      </button>
        {isOpen ? <nav className="absolute p-2 right-0 top-10 bg-black text-white md:hidden">
            <ul className='font-bold'>
                <li className="p-2">Home</li>
                <li className="p-2">Recipes</li>
                <li className="p-2">Blog</li>
                <li className="p-2">Contact</li>
                <li className="p-2">About Us</li>
            </ul>
        </nav> : null}
    </header>
)
}

export default Header