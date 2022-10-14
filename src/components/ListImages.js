import React,{useState} from 'react'
import { ContentImages,ContainerContent, ContainerImage} from '../style/Layout';
import {useImages} from '../hook/useImages'
import {Image} from './Image'
import styled from 'styled-components';

export const ListImages = ({keyword}) => {

const {images, setPage} = useImages({keyword});
const [dataModal, setDataModal] = useState({})
const [isOpen, setIsOpen] = useState(false)

const handlerPage = () => {
  setPage(prevPage => prevPage+1)
}

const handlerModal = ({url,title}) => {
  const newDate = {url,title}
  setDataModal(newDate)
  setIsOpen(true)
  console.log(dataModal)
}
 /* <div>{ isOpen ? <img style={{position:'absolute',width:'300px', height:'300px'}} src={dataModal.url}></img> : <></> }</div>*/ 
  return (
      <div>
        <ContainerContent>
          <ContentImages> {images.map(image => 
           <ContainerImage key={image.id}>
            <Image
            handlerModal = {handlerModal}
            key={image.id}
            url={image.url}
            title={image.alt_description}/> 
            </ContainerImage>)}
          </ContentImages>
        </ContainerContent>
            
      <ContainerButton><ButtonNextPage onClick={handlerPage}>Carga más fotos</ButtonNextPage></ContainerButton>
    
      </div>
  )
}

const ContainerButton = styled.div`
display:flex;
justify-content: center;
align-items:center;
`

const ButtonNextPage = styled.button`

height: 45px;
width: 150px;
border-radius:5px;
border: 0.4px solid rgb(209,209,209);
background-color: #fff;
cursor:pointer;
color: rgb(118,118,118);
transition: border 200ms linear;

:hover {
  color: #000;
  border: 0.01px groove #000;
}

`