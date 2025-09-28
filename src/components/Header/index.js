const Header = () => (
    <header className='flex gap-10 items-center justify-between'>
        <h1 className='font-[Arizonia] text-5xl hover:text-blue-500 cursor-pointer'>Foodieland</h1>
        <nav>
            <ul className='flex gap-5 cursor-pointer font-bold'>
                <li className="hover:bg-sky-700 rounded-xl p-2 hover:text-white">Home</li>
                <li className="hover:bg-sky-700 rounded-xl p-2 hover:text-white">Recipes</li>
                <li className="hover:bg-sky-700 rounded-xl p-2 hover:text-white">Blog</li>
                <li className="hover:bg-sky-700 rounded-xl p-2 hover:text-white">Contact</li>
                <li className="hover:bg-sky-700 rounded-xl p-2 hover:text-white">About Us</li>
            </ul>
        </nav>
    </header>
)

export default Header