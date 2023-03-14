import React from 'react'

function SpecialDishes(props) {
    let NumberOfItems=8;
    // console.log("props are",props.SpecialDishes);
  let SpecialDishes= props.SpecialDishes.map((item,index)=>{
    if(index<NumberOfItems){

        return(
            <div>
                <li><img src= {item.strMealThumb} alt="" /></li>
                <li><h3>{item.strCategory}</h3></li>
            </div>
        )

    }
        
    })
  return (
   <div>
    <ul>{SpecialDishes}</ul>
   </div>
  )
}

export default SpecialDishes