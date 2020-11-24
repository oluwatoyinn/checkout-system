import React from 'react'
import {connect} from "react-redux"
import {getProduct} from '../components/actions/ProductAction'
import { useEffect } from 'react'
// import { products } from './ProductTesting/ProductData'
// import { products } from './ProductTesting/ProductData'

 const Product=(props) =>{

    useEffect(()=>{
        props.getProduct()
    })

    const {products} = props
    return (
        <section className="booklist">
            {products.map((product)=>{
                    // return <Product {...product}></Product>
                    return(
                        <article className="book" >
                            <img src={product.image}/>
                            <h1>{product.title}</h1> 
                            {/* <h4>{}</h4>  */}
                        </article>
                    )
            })}
            
        </section>
    )
}

// const Product = (props) =>{
//     // const {img, title,author} =props
//     return(
//         <article className="book" >
//             <img src={products}/>
//             <h1>{}</h1> 
//             <h4>{}</h4> 
//         </article>
//     )
// }

const mapStateToProps= state=>({
    products:state.ProductReducer.products
})

export default connect(mapStateToProps,{getProduct}) (Product)
