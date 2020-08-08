import React from 'react'

function Columns() {
  const items = [{ id: '1', title: 'tea' }, { id: '2', title: 'Coffee' }]
  return (
    <React.Fragment>
      {
        // only key is allowed to use with React.Fragment
        items.map(item=>(
          <React.Fragment key={item.id}>
            <h1>Title</h1>
            <p>{item.title}</p>
            </React.Fragment>
        ))
      }
      <td>Name</td>
      <td>Ramya</td>
    </React.Fragment>
  )
}

export default Columns
