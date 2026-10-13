import React from "react";


const ObjectExample =()=> {

    const student = [{
        id: 1,
        name: "Bala",
        age: 21,
        department: "cse",
        mark: 90
    },{
        id: 2,
        name: "Bharani",
        age: 20,
        department: "cse",
        mark: 95
    }
     ]

    const numbers = [1,2,3,4,5,6];

    // console.log("pop", numbers.pop(), numbers) //remove the last element
    // console.log("push", numbers.push(7), numbers) //Add a elememnt
    // console.log("shift", numbers.shift(), numbers) //Remove the first element
    // console.log("unshift", numbers.unshift(9), numbers) // Add the first element
    
    const result = numbers.slice(1,5)
    console.log("result", result)
    const answer = numbers.splice(1,3,"10")
    console.log("answer", answer,numbers)

    // const filtered = numbers.filter(
    //     function (x) {
    //         return x>4
    //     }
    // )
    // console.log(filtered)

    const data = student.filter((i)=>i.mark > 90)
    console.log(data)
     

    return(
        <>
        <table>
            <thead>
                <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Mark</th></tr>
            </thead>


           {student.map((i)=>{
            return (
                <>
                <tbody>
                    <tr>
                        <td>{i.name}</td>
                        <td>{i.age}</td>
                        <td>{i.mark}</td>
                    </tr>
                    
                </tbody>
                </>
            )
           })}
           {data.map((i)=> {
                    return (
                        <>
                        {i.name}
                        </>
                    )
                })}
           </table>
        </>
            

          
          
          
    
    )

}

export default ObjectExample;