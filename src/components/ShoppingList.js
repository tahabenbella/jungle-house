import React,{useState} from 'react'
import '../styles/ShoppingList.css';
import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import Categories from './Categories'


function ShoppingList({ cart, updateCart }) {
    const [activeCategory, setActiveCategory] = useState('')
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

    function addToCart(name, price) {
		const currentPlantSaved = cart.find((plant) => plant.name === name)
		if (currentPlantSaved) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}
	return (
        <div>
            <Categories categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}/>
            <ul className='jh-plant-list'>
                {plantList.map((plant) => !activeCategory || activeCategory === plant.category ?(
                    <div key={plant.id}>
                        <PlantItem name={plant.name} cover={plant.cover}light={plant.light} water={plant.water}/>
                        <button onClick={() => addToCart(plant.name,plant.price)}>Add to cart</button>
                    </div>): null)
                }
             </ul>
        </div>
    )
}

export default ShoppingList;