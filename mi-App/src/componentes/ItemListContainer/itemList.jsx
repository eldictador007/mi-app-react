
import { Item } from "./item"



const ItemList=({productos})=>{
    return(
        <div
            style={{
                display:'flex',
                flexDirection:'row',
                flexWrap:'wrap'
            }}>
                {
                productos.map(prod=><Item key={prod.id} product={prod} />)
                }

        </div>

    ) 
}
export default ItemList