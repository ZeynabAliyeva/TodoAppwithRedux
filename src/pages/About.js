import React from 'react'
import {useSelector} from 'react-redux'
function About() {
  const aboutTodo = useSelector((state)=>state)
  return (
    <div>
      {aboutTodo.length}
    </div>
  )
}

export default About