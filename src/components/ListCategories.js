import React from 'react'
import styled from 'styled-components'
import {ContainerList,SCLink,ItemCategory} from '../style/Layout'

export const ListCategories = () => {

  return (
    <ContainerList>
      <ItemCategory><SCLink to='/es/t/editorial'>Editorial</SCLink></ItemCategory>
      <ItemCategory><SCLink to='/es/t/girls-vs-stereotypes'>Niñas Contra Estereotipos</SCLink></ItemCategory>
      <ItemCategory><SCLink to='/es/t/current-events'>Eventos Actuales</SCLink></ItemCategory>
      <ItemCategory><SCLink to='/es/t/wallpapers'>Fondos De Pantalla</SCLink></ItemCategory>
      <ItemCategory><SCLink to='/es/t/3d-renders'>Renders 3D</SCLink></ItemCategory>
      <ItemCategory><SCLink to='/es/t/textures-patterns'>Texturas Y Patrones</SCLink></ItemCategory>
    </ContainerList>
    
  )
}

styled(ListCategories)`


`
