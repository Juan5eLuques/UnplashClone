import styled from 'styled-components'
import { RiSearchLine } from "react-icons/ri";
import { Image } from '../components/Image';
import { Link } from 'wouter';
import { ListCategories } from '../components/ListCategories';

export const Form = styled.form`
display: flex;
width: 100%;
height: 20px;
text-align: center;
align-items: center;
box-sizing: inherit;
`
export const Input = styled.input`
width: 700px;
height: 30px;
font-size: 15px;
padding: 5px 10px;
padding-left: 35px;
margin: 40px 0 0 10px;
border-radius: 30px;
border:0.1px solid transparent;
outline: none;
transition: border 200ms linear;

:hover {
   border: 0.1px solid #c7c7c7;
}

:focus {
border: 0.1px solid #c7c7c7;
}

`

export const LogoSearch = styled(RiSearchLine)`
width: 17px;
height: 17px;
color: gray;
box-sizing: border-box;
:hover {
    color: #000;
}

`

export const ButtonSearch = styled.button`
display: flex;
align-items: center;
justify-content: center;
height: 35px;
border-radius: 50%;
margin: 40px 0 0 15px;
border: none;
cursor: pointer;
position: absolute;
background-color: transparent;
`

export const ListImagesContent = styled.div`
margin:10px;
text-align: center;
display: grid;
grid-template-columns:repeat(3,1fr);
`

export const SCListCategorys = styled.ul`
display: flex;
flex-direction: row;
justify-content:flex-end;
align-items: flex-end;
padding: 30px;
gap:30px;
list-style: none;
`

export const ItemCategory = styled.li`
    text-decoration: none;
    font-size: 15px;
    font-weight: 450;
    `

export const SCLink = styled(Link)`
    text-decoration: none;
    color: gray;
`


export const ItemImage = styled(Image) `
    display: inline-block;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin: 0;

`

export const Header = styled.div`
display: flex;
position: sticky;
top: 0;
margin: 0;
padding: 0;
background: #FFF;
width: 100%;
height: 110px;
box-sizing: none;
`
export const ButtonLogo = styled.button`
border: none;
cursor: pointer;
margin: 8px;
height: 50px;
width: 50px;
box-sizing: content-box;

`