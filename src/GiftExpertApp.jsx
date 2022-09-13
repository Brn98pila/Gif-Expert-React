import { useState } from "react";
import { AddCategory, GifGrid } from "./components/";


// const key = 'fj9Dd7k1Lu7YIJABxKg7jODWbWtVY8Bz;AbortSignal';

export const GifExpertApp = () => {
    const [categories , setcategories  ] = useState(['One Punch'])

    const onAddCategory = (newCategory) => {
           // categories.push(newCategory) NO SE PUEDE USAR .PUSH EN REACT
           console.log(newCategory)
           // Para agregar nuevos componentes se utiliza setcategories
           if(categories.includes(newCategory)) return;
           // Si en las categorias, ya existe la que queremos agregar, retorna.
           setcategories([newCategory,...categories])
    }

    // Lo que va en corchetes, es el estado o lo que renderiza el buscador
    // Es decir, el contenido del input deberia trasladarse ahi
    return (
        <>
          <h1>Gift Expert App</h1>
           <AddCategory 
           onNewCategory={onAddCategory}
           // setcategories={setcategories} => Esta linea desentiende el codigo, porque exporta e importa, es funcional, pero se puede hacer de mejores maneras
           ></AddCategory>
            <ol>
                {categories.map(category => (
                        <GifGrid 
                        key={category} 
                        category={category}></GifGrid>
                    )

                    // Categories es un array con los elementos dentro del useState, al desestructurarlo
                    // debemmos agregarle un key si o si, es la base de los hooks de react

                    // Regla de oro: Los hooks no se basan en nombres sino en posiciones
                    // NO USAR CONDICIONALES CON HOOKS DENTRO, YA QUE ALTERA EL ORDEN DE LOS MISMOS
                )}
                
            </ol>

        </>
    )
}