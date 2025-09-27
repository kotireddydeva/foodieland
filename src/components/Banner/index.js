import { RiTimerFill } from "react-icons/ri";
import { TbToolsKitchen3 } from "react-icons/tb";
import { loremIpsum } from "lorem-ipsum";

const lorem = loremIpsum({
  count: 5,
  units: "sentences",
  sentenceLowerBound: 4,
  sentenceUpperBound: 5,
  paragraphUpperBound: 8,
  paragraphLowerBound: 4
}); 

const Banner = () => (
    <>
    
    {/* desktop view */}    

    <div className="hidden md:grid grid-cols-2 mt-[20px]">
        <div className='p-[20px] rounded-l-[10px] bg-blue-50 flex flex-col gap-10'>
            <h1 className="text-4xl font-sans">Spicy Delicious Chicken</h1>
            <p className="text-base font-sans">{lorem}</p>
            <div className="flex gap-5">
                <button type='button' className='transition ease-in-out delay-150 hover:scale-110 duration-300  flex gap-2 items-center bg-emerald-200 hover:bg-emerald-500 p-[10px] rounded-xl font-semibold'>
                    <RiTimerFill />
                    30 Minutes
                </button>
                <button type='button' className='transition ease-in-out delay-150 hover:scale-110 duration-300  flex gap-2 items-center bg-emerald-200 hover:bg-emerald-500 p-[10px] rounded-xl font-semibold'>
                    <TbToolsKitchen3 />
                    Chicken
                </button>
            </div>
        </div>
        <img src="https://res.cloudinary.com/dyz8l9er0/image/upload/v1758874610/chicken_ttlu4u.jpg" alt='hot recipe' className="rounded-r-[10px] h-full" />
    </div>

    {/* mobile view */} 

    <div className="w-full max-w-full flex flex-col mt-5 rounded-[10px] bg-blue-50 overflow-hidden shadow-md md:hidden">
      <img
        src="https://res.cloudinary.com/dyz8l9er0/image/upload/v1758874610/chicken_ttlu4u.jpg"
        alt="hot recipe"
        className="w-full h-40 object-cover"
      />
      <div className="p-4 flex flex-col gap-4">
        <h1 className="text-2xl font-sans font-bold">Spicy Delicious Chicken</h1>
        <p className="text-sm font-sans">{lorem}</p>
        <div className="flex flex-col items-center gap-2">
          <button
            type="button"
            className="transition hover:scale-105 duration-200 flex gap-2 items-center bg-emerald-200 hover:bg-emerald-500 p-2 rounded-xl font-semibold"
          >
            <RiTimerFill />
            30 Minutes
          </button>
          <button
            type="button"
            className="transition hover:scale-105 duration-200 flex gap-2 items-center bg-emerald-200 hover:bg-emerald-500 p-2 rounded-xl font-semibold"
          >
            <TbToolsKitchen3 />
            Chicken
          </button>
        </div>
      </div>
    </div>

    </>
)

export default Banner