
// Que la funcion este fuera del componente es buena practica
// Ya que no tiene que estar reprocesando 

// import { useEffect, useState } from "react"
import { useFetchGif } from "../hooks/useFetchGif"
// import { getGifs } from "../helpers/GetGifs"
import { GifItem } from "./GifItem"


export const GifGrid = ({category}) => {
  
      const {images, isLoading} = useFetchGif(category)

      // const [images, setImages] = useState([])

      // const getImages = async() => {
      //   const newImages = await getGifs(category);
      //   setImages(newImages)
      // }

      // useEffect(() => {
      //     getImages()
      // }, [ ])
      // TODAS ESTAS LINEAS DE CODIGO PUEDEN SIMPLIFICARSE EN UN SOLO CUSTOM HOOK
    
    // Crea numeros y los mapea en el HTML como lista, la finalidad es ver los gif buscados en lista
    
  return (<>
            <h3>{category}</h3>
            {
              isLoading && (<h2>Cargando...</h2>)
            }
            <div className="card-grid">
              {
                images.map((image) => (
                <GifItem
                 {...image}></GifItem>

                ))
              }
            </div>
             </>
  )
}
