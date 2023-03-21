import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import SpecialDishes from './SpecialDishes'
import Hero from './Hero'
import Filteredmenu from './Filteredmenu'

function Menu() {


    const [menu, Setmenu] = useState([])

    const [filteredMenus, setFilteredMenus] = useState([])

    const [loading, setLoading] = useState(true)


    async function ApiCall() {
        const Api_url = "https://www.themealdb.com/api/json/v1/1/search.php?f=c"

        const response = await fetch(Api_url)
        const data = await response.json()

        Setmenu(data.meals)
        setLoading(false)



    }
    async function FilteredItems() {

        const Api_url = "https://www.themealdb.com/api/json/v1/1/categories.php"

        const response = await fetch(Api_url)
        const NameOfItems = await response.json()
        setFilteredMenus(NameOfItems.categories)
        setLoading(false)
    }

    // let ShowImages = menu.map((item) => {
    //     return (
    //         <div>
    //             < img src={item.strMealThumb} alt="" />
    //             <h1>{item.strCategory}</h1>

    //         </div>
    //     )
    // })
    // console.log("menu items are", menu);



    const FoodApi = useEffect(() => {
        ApiCall()
        FilteredItems()

    }, [])




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

                    FilteredFood={filteredMenus} AllDishes={menu}

                />) : null}
            </div>






        </div>)
}

export default Menu