import React from 'react'
import { Form,Input,ButtonSearch,LogoSearch, Header,ButtonLogo,ListCategoriesContainer} from './style/Layout'
import { useState } from 'react'
import {ListImages} from './components/ListImages'
import {Logo} from './components/Logo'
import { Route, useLocation} from "wouter"
import Home from './pages/Home'
import { Experimental } from './pages/Experimental'
import { ListCategories } from './components/ListCategories'

const App = () => {
  
  const [search, setSearch] = useState('')

  const [path,pushLocation] = useLocation()

  const handlerSubmit = (e) =>{
    e.preventDefault()
    if(search.length>0) pushLocation(`/search/image/${search}`)
  }

  const handlerChange = (e) => {
      e.preventDefault()
      setSearch(e.target.value)
  }
  
  const handleLocation = (e) => {
    e.preventDefault()
    setSearch('')
    pushLocation('/')
  }

  return (
  <div className='app'>
    <Header>
      <ButtonLogo onClick={handleLocation}><Logo/></ButtonLogo>
      <div style={{position:'relative'}}>
        <Form onSubmit={handlerSubmit}>
        <ButtonSearch type='submit'><LogoSearch/></ButtonSearch>
        <Input placeholder='Busca fotos de alta resolución gratis' onChange={handlerChange} type='text' value={search}></Input>
        </Form>
      </div>
      <ListCategories></ListCategories>
    </Header>
    <section className='app-content'>
      <Route 
      component={Home}
      path='/'>
      </Route>
      <Route path='/search/image/:keyword'>
      {params => <ListImages keyword={params.keyword}></ListImages>}
      </Route>
      <Route path='/topic/images/peliculas'>
          {Experimental}
        </Route>
    </section>
  </div>
  )

}

export default App