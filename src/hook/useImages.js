import { useState,useEffect } from 'react';
import getImages from '../services/getImages';

const INITIAL_PAGE = 1

export function useImages({keyword}){

    const [images, setImage] = useState([]);
    const [page, setPage] = useState(INITIAL_PAGE)
 
    const keywordToUse = keyword || 'random'

    useEffect(function () {
        getImages({keyword:keywordToUse}).then(image => setImage(image)
       )
    }, [keyword,keywordToUse])

    useEffect(()=> {
      if(page === INITIAL_PAGE) return
      getImages({keyword:keywordToUse,page}).then(images => setImage(prevImages => prevImages.concat(images)))
    },[page,keyword,keywordToUse])

    return {images,setPage};
}