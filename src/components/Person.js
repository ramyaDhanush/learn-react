import React from 'react'

function Person({person}) {
  
  return (
    <div>
      <h1>I am {person.name}  with id : {person.id} of age {person.age} skilled in {person.skill}</h1>
    </div>
  )
}

export default Person
