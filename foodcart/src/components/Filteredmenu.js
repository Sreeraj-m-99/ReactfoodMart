import React, { useState } from 'react'


function Filteredmenu(props) {
    let [allmenu, setAllmenu] = useState(props.AllDishes)
    let [fullonmenu, setFullonmenu] = useState([])




    function ShowDataWhen(food) {
        alert(`the item clicked is ${food}`)

        let FullOn = allmenu.filter((item) => {
            return item.strCategory === food



        }).map((item) => {
            return (
                <li>
                   <div> <img src={item.strMealThumb} alt="" /></div>
                   <div> <h1>{item.strMeal}</h1></div>
                </li>

            )
        })


        setFullonmenu(FullOn)


    }

   let beefy= props.BeefItems.map((item)=>{
        return(
            <div>
                <li>
                    <img src={item.strMealThumb} alt="" />
                    <h1>{item.strMeal}</h1>
                    
                </li>
            </div>
        )
    })





    let FoodItems = props.FilteredFood.map((items) => {
        return (
            <div>
                <li onClick={() => {
                    ShowDataWhen(items.strCategory)
                }}>
                    {items.strCategory}

                </li>
            </div>
        )
    })

    return (
        <div>
            <div>
                <ul>
                    {FoodItems}
                </ul>
            </div>

            <div>
                <div>{beefy}</div>
                <ul>
                    {fullonmenu.length!=0?fullonmenu:<h1>sorry</h1>}

                </ul>
            </div>


        </div>
    )
}

export default Filteredmenu