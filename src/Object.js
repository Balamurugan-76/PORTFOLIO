import React from 'react'

function Object() {
    const cars = {
       name: "suzuki",
       price: "5,00,000",
       color: "white",
       varanty: "1 year",
       model: "2026",
       downpayment: "1,20,000",
       emi:"10,000",
       month: "48"

    }

    const {name , price , color , ...remains } = cars
    console.log(remains)

    const updatedcars = {
        ...cars,
        model: "2028"
    }

    console.log(updatedcars)
        return(
            <>
            {price}
            </>
  )
}

export default Object