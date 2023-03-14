import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import SpecialDishes from './SpecialDishes'

function Menu() {


    const [menu, Setmenu] = useState([])

    async function ApiCall() {
        const Api_url = "https://www.themealdb.com/api/json/v1/1/search.php?f=c"
        
        const response = await fetch(Api_url)
        const data = await response.json()

        Setmenu(data.meals)


    }
    console.log("data are",menu);

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

    }, [])




    return (
        <div>
          <SpecialDishes
          SpecialDishes={menu}
          />

        </div>)
}

export default Menu