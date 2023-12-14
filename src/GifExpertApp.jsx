import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(['One Punch '])

    const onAddCategory = (newCategory) => {

        if (categorias.includes(newCategory)) return;

        // const newCategoria = ['Dragon Ball', ...categorias];
        setCategorias([newCategory, ...categorias]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                onNewCategory={event => onAddCategory(event)}
            />

            {
                categorias.map(category => (
                    <GifGrid
                        key={category}
                        category={category} />
                ))
            }
        </>
    )
}
