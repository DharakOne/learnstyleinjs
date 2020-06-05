import React from 'React'
import"./AppBar.css"

export default function SearchBar(){
    return(
        <div className="search">    
            <input  
                type="text"
                placeholder=" Buscar Producto"
                name="search" 
            />
        </div>
    )
} 