const categoryList = [
    {id: 'breakfast', name: 'Breakfast', imageUrl: 'https://res.cloudinary.com/dyz8l9er0/image/upload/v1758873515/beakfast_qmfszc.png', bgColor: 'to-red-50'},
    {id: 'vegan', name: 'Vegan', imageUrl: 'https://res.cloudinary.com/dyz8l9er0/image/upload/v1758874168/vegan_yd4y0u.png', bgColor: 'to-orange-50'},
    {id: 'meat', name: 'Meat', imageUrl: 'https://res.cloudinary.com/dyz8l9er0/image/upload/v1758874168/meat_fvvah4.png', bgColor: 'to-amber-50'},
    {id: 'dessert', name: 'Dessert', imageUrl: 'https://res.cloudinary.com/dyz8l9er0/image/upload/v1758874171/dessert_mei4qi.png', bgColor: 'to-yellow-50'},
    {id: 'lunch', name: 'Lunch', imageUrl: 'https://res.cloudinary.com/dyz8l9er0/image/upload/v1758874168/lunch_qcl9sy.png', bgColor: 'to-lime-50'},
    {id: 'chocolate', name: 'Chocolate', imageUrl: 'https://res.cloudinary.com/dyz8l9er0/image/upload/v1758873515/beakfast_qmfszc.png', bgColor: 'to-green-50'}
]
const Categories = () => (
<div>
    <div className='flex items-center justify-between'>
        <h1 className="text-2xl font-sans">Categories</h1>
        <button type='button' className='transition ease-in-out delay-150 hover:scale-110 duration-300 bg-emerald-200 hover:bg-emerald-500 p-[10px] rounded-xl font-medium'>View All Categories</button>
    </div>
    <ul className='flex flex-row flex-wrap gap-5 mt-10 justify-center'>
    {categoryList.map(eachCategory => 
        <li key={eachCategory.id} className={`transition ease-in-out delay-150 hover:scale-110 duration-300 flex-1 p-[10px] bg-gradient-to-b from-white ${eachCategory.bgColor} rounded-2xl flex flex-col justify-center items-center max-w-24 md:max-w-full`}>
            <button type='button' className="flex flex-col items-center gap-5">
            <img src={eachCategory.imageUrl} alt={eachCategory.name} className='h-[100px]'/>
            <p className="font-medium">{eachCategory.name}</p>
            </button>
        </li>
    )}
    </ul>
</div>
)


export default Categories