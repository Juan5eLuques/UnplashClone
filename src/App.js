import React from 'react'
import {ListItemCategoryMenu, Form,Input,ButtonSearch,LogoSearch,SCLink,Header,ButtonLogo} from './style/Layout'
import {useState} from 'react'
import {ListImages} from './components/ListImages'
import {Logo} from './components/Logo'
import {Route, useLocation} from "wouter"
import Home from './pages/Home'
import GvS from './pages/GvS'
import Renders from './pages/Renders'
import CurrentEvents from './pages/CurrentEvents'
import TexturesAndPatterns from './pages/TexturesAndPatterns'
import Wallpaper from './pages/Wallpaper'
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
      <div>
      <ListItemCategoryMenu>
        <SCLink to='/algo'><li>Explorar</li></SCLink>
        <SCLink to='/algo'><li>Anunciarse</li></SCLink>
        <SCLink to='algo'><li>Blog</li></SCLink>
      </ListItemCategoryMenu>
      </div>
    </Header>
    <ListCategories></ListCategories>
      <Route component={Home} path='/'></Route>
      <Route path='/search/image/:keyword'>
      {params => <ListImages keyword={params.keyword}></ListImages>}
      </Route>
      <Route path='/es/t/girls-vs-stereotypes'>{GvS}</Route>
      <Route path='/es/t/current-events'>{CurrentEvents}</Route>
      <Route path='/es/t/wallpapers'>{Wallpaper}</Route>
      <Route path='/es/t/3d-renders'>{Renders}</Route>
      <Route path='/es/t/textures-patterns'>{TexturesAndPatterns}</Route>
  </div>
  )

}

export default App