import styled from 'styled-components'
import { RiSearchLine } from "react-icons/ri";
import { Link } from 'wouter';

export const Form = styled.form`
display: flex;
width: 60vw;
margin: 0 20px 0 0px;
height: 20px;
text-align: center;
align-items: center;
`
export const Input = styled.input`
width: 100%;
height: 30px;
font-size: 15px;
padding: 5px 10px;
padding-left: 35px;
margin: 40px 0 0 10px;
border-radius: 30px;
border:0.1px solid transparent;
outline: none;
transition: border 200ms linear;
background-color: rgb(238,238,238);
:hover {
   border: 0.1px solid #c7c7c7;
}

:focus {
border: 0.1px solid #c7c7c7;
background-color: #fff;
}

`

export const ButtonLogo = styled.button`
border: none;
cursor: pointer;
margin: 8px;
height: 50px;
width: 50px;
box-sizing: content-box;
display: block;
background-color: #fff;
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
:hover {
    color:black;
    caret-color: black;
}
`
export const Header = styled.div`
display: flex;
position: fixed;
gap:15px;
height: 60px;
top: 0;
margin:0;
padding: 0;
background: #FFF;
width: 100%;
box-sizing: border-box;
`
export const SCLink = styled(Link)`
text-decoration: none;
color:#767676;
font-size:15px;
font-weight: 400;
transition: color 0.700ms linear;
:focus {
    color: #000;
}

:hover {
    color:#000;
}
`

export const ContentImages = styled.div`
display: grid;
grid-template-columns: repeat(3,1fr);
gap:20px;
box-sizing:border-box;
justify-content: center;
margin:20px;
`

export const ListItemCategorySearch = styled.ul`
display: flex;
gap:80px;
flex-direction: row;
justify-content: flex-start;
text-decoration: none;
list-style: none;
color:gray;
`


export const ListItemCategoryMenu = styled(ListItemCategorySearch)`
margin-top:15px;
color:gray;
`

export const SCImage = styled.img`
display: flex;
height: auto;
width:1fr;
max-width: 100%;
object-fit:cover;
:hover {
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
   cursor: -webkit-zoom-in;
   cursor: zoom-in;
}
`
export const ContainerContent = styled.div`
display: block;
min-width: 100%;
justify-content: center;
`

export const ContainerList = styled.div`
display:flex;
align-items: center;
justify-content: flex-start;
position: sticky;
top:60px;
padding: 0 15px;
height: 56px;
background:white;
border-bottom: 0.2px solid #c7c7c7 ;
`
export const ItemCategory = styled.div`
display: flex;
justify-content:center;
align-items:center;
margin-right: 60px;
height: 100%;
:focus-within {
    border-bottom: 2.5px solid #000;
}

`

export const HeroContainer = styled.div`
width: 100%;
height:100vh;
`

export const ContainerImage = styled.div`

display:flex;
margin:0; 
padding:0;


`