import React, { useState } from 'react'

function Table({handleSubmit}) {

  const[data,setData] = useState([
    {id:1,name:"soap",brand:"santoor",price : 20.0},
    {id:2,name:"soap",brand:"santoor",price : 20.0},
    {id:3,name:"soap",brand:"santoor",price : 20.0},
    {id:4,name:"soap",brand:"santoor",price : 20.0},
    {id:5,name:"soap",brand:"santoor",price : 20.0}
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
