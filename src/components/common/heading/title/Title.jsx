import React from 'react'

const Title = ({title,subtitle}) => {

  return (
    <div id='heading'>
        <h1>{title}</h1>
        <p>{subtitle}</p>

    </div>
  )
}

export default Title