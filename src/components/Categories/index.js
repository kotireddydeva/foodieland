import './index.css'
const categoryList = [
    {id: 'breakfast', name: 'Breakfast', imageUrl: 'https://res.cloudinary.com/dyz8l9er0/image/upload/v1758873515/beakfast_qmfszc.png'},
    {id: 'vegan', name: 'Vegan', imageUrl: 'https://res.cloudinary.com/dyz8l9er0/image/upload/v1758874168/vegan_yd4y0u.png'},
    {id: 'meat', name: 'Meat', imageUrl: 'https://res.cloudinary.com/dyz8l9er0/image/upload/v1758874168/meat_fvvah4.png'},
    {id: 'dessert', name: 'Dessert', imageUrl: 'https://res.cloudinary.com/dyz8l9er0/image/upload/v1758874171/dessert_mei4qi.png'},
    {id: 'lunch', name: 'Lunch', imageUrl: 'https://res.cloudinary.com/dyz8l9er0/image/upload/v1758874168/lunch_qcl9sy.png'},
    {id: 'chocolate', name: 'Chocolate', imageUrl: 'https://res.cloudinary.com/dyz8l9er0/image/upload/v1758873515/beakfast_qmfszc.png'}
]
const Categories = () => (
<div>
    <div className='cat-header'>
        <h1>Categories</h1>
        <button type='button' className='view-all-button'>View All Categories</button>
    </div>
    <ul className='cat-list'>
    {categoryList.map(eachCategory => 
        <li key={eachCategory.id} className='cat-item'>
            <button type='button'>
            <img src={eachCategory.imageUrl} alt={eachCategory.name} className='cat-img'/>
            <p>{eachCategory.name}</p>
            </button>
        </li>
    )}
    </ul>
</div>
)


export default Categories