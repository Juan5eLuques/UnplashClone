import React from 'react'
import { Nav,Input,ButtonSearch,LogoSearch } from '../style/Layout'
import { useState } from 'react'
import {ListImages} from './ListImages'
import { ListCategories } from './ListCategories'


export const Search = () => {

    const [search, setSearch] = useState('')
    const [keyword,setKeyword] = useState('')

    const handlerSubmit = (e) =>{
      e.preventDefault()
      setKeyword(search)
    }

    const handlerChange = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
    }

  return (
    <div>
    <Nav onSubmit={handlerSubmit}>
    <Input onChange={handlerChange} type='text'></Input>
    <ButtonSearch><LogoSearch/></ButtonSearch>
    </Nav>
    <ListCategories></ListCategories>
    <ListImages keyword={keyword}/>
    </div>
  )
}
