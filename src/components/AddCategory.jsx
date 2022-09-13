import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {
    // Utilizacion de las props para traer setcategories
    // CADA COMPONENTE PUEDE TENER SUS PROPIOS ESTADOS
    const [inputValue, setInputValue] = useState('')       

    const onInputChange = (event) => {
        setInputValue(event.target.value);
        // EVENT.TARGET.VALUE => Cada vez que apretamos una letra se modifica la busqueda
    }
    const onSubmit = (event) => {
        event.preventDefault()
        // PreventDefault => Evita que cuando se envie el formulario se actualice el navegador
        if(inputValue.trim().length <= 1) return; // Si el input es menor a 1 caracter, no se ejecuta la busqueda
        // Desestructuracin de las categories para incrustar el inputValue
        onNewCategory(inputValue.trim())
        // InputValue => Valor del input
        setInputValue(``)
        // Borra el input value y lo deja vacio
    }

    return (
        <form onSubmit={onSubmit}>
        <input 
            type="text" 
            placeholder="Buscar gifs" 
            value={inputValue}
            onChange={onInputChange} />
        </form>
       

    )
}