import React from "react"
import stylec from "styled-components"


import SearchBar from "./SearchBar.js"

const NavBar = stylec.div`
    height:52px; 
    background-color:#FF4F4F;
    display:flex;
    justify-content:space-between;
`

const NavLink = stylec.div`
    display:flex;
    align-items:center;
`

const NavBrand = stylec.a`
    display:inline-block;
    margin:0;
    border:0;
    font-family: Arial;
    font-size: 18px;
    text-decoratio padding: 0px;n: none;
   
    color:${props => props.color ? props.color : "white"};
`

const NavSearch = stylec.input`
    height:20px;
`

const Link = stylec.a`
    display:inline-block;
    margin:0;
    border:0;
    font-family: Radley;
    font-size: 24px;
    text-decoration: none;
    padding: 12.4px;
    color:${props => props.color ? props.color : "white"};

    &:hover {
     background-color: ${props => props.primary ? "palevioletred" : "#e61919"};
 }
`


export default function AppBar() {

    const links = [
        ["Carrito", "Carrito"],
        ["Iniciar Sesión", "IniciarSesión"],
        ["Crear Cuenta", "CrearCuenta"]]

    return (
        <NavBar>
            <NavBrand href="/">StoreJunior</NavBrand>
             <SearchBar/>
            <NavLink>
                {links.map(link => (
                    <Link href={"/" + link[1]}>{link[0]}</Link>
                ))}
            </NavLink>
        </NavBar>
    )
}