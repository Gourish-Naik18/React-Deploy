import React, { useState } from 'react'

function Table({handleSubmit}) {

  const[data,setData] = useState([
    {id:1,name:"soap",brand:"santoor",price : 20.0},
    {id:2,name:"shoe",brand:"one8",price : 2000.0},
    {id:3,name:"shirt",brand:"adidas",price : 350.0},
    {id:4,name:"watch",brand:"rolex",price : 200000.0},
    {id:5,name:"phone",brand:"apple",price : 300000.0}
  ])

  return (
    <div>
      <table border={1} style={{padding : '5px'}}>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>brand</th>
            <th>price</th>
            <th>action</th>
          </tr>
        </thead>
         <tbody>
          {data.map((ele) => (
            <tr key={ele.id}>
              <td>{ele.id}</td>
              <td>{ele.name}</td>
              <td>{ele.brand}</td>
              <td>{ele.price}</td>
              <td><button onClick={handleSubmit}>order</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
