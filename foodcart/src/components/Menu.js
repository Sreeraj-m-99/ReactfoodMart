import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import SpecialDishes from './SpecialDishes'
import Hero from './Hero'
import Filteredmenu from './Filteredmenu'


function Menu() {


    const [menu, Setmenu] = useState([])
    const [filteredMenus, setFilteredMenus] = useState([])
    const [loading,setLoading]=useState(false)
    const [oneDish,setOneDish]=useState([])


    


    async function ApiCall() {
        setLoading(true)
        
        const Api_url = "https://www.themealdb.com/api/json/v1/1/search.php?f=c"

        const response = await fetch(Api_url)
        const data = await response.json()

        Setmenu(data.meals)
        setLoading(false)
        



    }
    async function FilteredItems() {
        
        setLoading(true)

        const Api_url = "https://www.themealdb.com/api/json/v1/1/categories.php"

        const response = await fetch(Api_url)
        const NameOfItems = await response.json()
        setFilteredMenus(NameOfItems.categories)
        setLoading(false)
    
    }


    async function SingleDishItem() {
         
        const Api_url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef"

        const response = await fetch(Api_url)
        const beef = await response.json()
        setOneDish(beef.meals)
       
        
    }
  

  
   



    const FoodApi = useEffect(() => {
        ApiCall()
        FilteredItems()
        SingleDishItem()
      

    }, [])

console.log("beeeeef",oneDish);


    return (
        <div>
            <Hero />
            <div>
                {!loading ? <SpecialDishes
                    SpecialDishes={menu}
                /> : <h1>loading</h1>}
            </div>

            <div>
                {!loading ? (<Filteredmenu

                    FilteredFood={filteredMenus} 
                    AllDishes={menu}
                    BeefItems={oneDish}
                   
                    

                />) : <h1>loading</h1>}
            </div>






        </div>)
}

export default Menu