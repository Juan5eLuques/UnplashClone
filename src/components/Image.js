import React from 'react'


export const Image = ({url,title}) => {
  return (
    <div>
    <h3>{title}</h3>
    <img src={url} alt={title}></img>
    </div>
  )
}
