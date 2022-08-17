import React from 'react'
import styled from 'styled-components'
import { SCListCategorys,ItemCategory,ListCategoriesContainer, SCLink } from '../style/Layout'

export const ListCategories = () => {

  return (
    <SCListCategorys>
        <ItemCategory><SCLink to='/topic/images/editorial'>Editorial</SCLink></ItemCategory>
        <ItemCategory><SCLink to='/topic/images/peliculas'>Peliculas</SCLink></ItemCategory>
        <ItemCategory><SCLink to='/category/:moda/images/moda'>Moda</SCLink></ItemCategory>
        <ItemCategory><SCLink to='/category/:deportes/images/deportes'>Deportes</SCLink></ItemCategory>
        <ItemCategory><SCLink to='/category/:comida/images/comida'>Comida</SCLink></ItemCategory>
        <ItemCategory><SCLink to='/category/:personas/images/personas'>Personas</SCLink></ItemCategory>
    </SCListCategorys>
  )
}

styled(ListCategories)`


`
