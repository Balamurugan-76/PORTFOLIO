import React from 'react'
import './Boys.css'

const Boys = ({ boysObj }) => {
  return (
    <div style={{ display: "flex" }}>
            {boysObj.map((item) => {
                return (
                    <>
                        <div className="containerCard">
                            <img src={item.image} className="image" />
                            <h3 className="heading">{item.name}</h3>
                            <div className="priceContainer"> <h4 className="price">${item.price}</h4> 
                                <strike className="strike">${item.strikePrice}</strike></div>
                            <button className="button">  BUY NOW</button>

                        </div>
                    </>
                )
            })}
        </div>
  )
}

export default Boys