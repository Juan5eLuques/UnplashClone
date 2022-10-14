import React from 'react'
import { SCImage } from '../style/Layout'


export const Image = ({url,title,handlerModal}) => {
  return (<SCImage src={url} alt={title} onClick={()=>handlerModal({url,title})}></SCImage>)
}