import React from 'react'
import { useState, useEffect } from 'react'
import { ListImagesContent } from '../style/Layout';
import getImages from '../services/getImages';
import { ItemImage } from '../style/Layout';

export const ListImages = ({keyword}) => {

    const [image, setImage] = useState([]);

    useEffect(function () {
      const keywordToUse = keyword || 'random'

       getImages({keyword:keywordToUse}).then(images=>setImage(images))
    }, [keyword]) 
  
  
    return (
    <ListImagesContent> {image.map(images => 
        <ItemImage 
        key={images.id} 
        url={images.url} 
        title={images.alt_description}/>)}
      </ListImagesContent>
  )
}
