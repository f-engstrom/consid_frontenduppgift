import {useRouter} from 'next/router'
import {request} from "../../lib/datocms";


const PRODUCT_QUERY = `query ProductQuery($id:ItemId) {
   product(filter: {id: {eq: $id}}) {
    id
    price
    name
  }
  
}`;

const ALL_PRODUCTS_QUERY = `query allProducts {
  allProducts {
    id
  }
}`;

export async function getStaticPaths() {


    const products = await request({
        query: ALL_PRODUCTS_QUERY,
        variables: {}
    });


    const paths = products.allProducts.map((product) => ({
        params: {id: product.id},
    }))

    console.log("paths", paths)

    return {paths, fallback: false}
}



export async function getStaticProps({params}) {
    console.log("params",params)


    const data = await request({
        query: PRODUCT_QUERY,
        variables: {id: params.id.toString()}
    });

    console.log(data)
    return {
        props: {data}
    };
}

const Product = ({data}) => {

    console.log("product",data)

    return (
        <div>
            <p>ID: {data.product.id}</p>
            <p>Price: {data.product.price}</p>
            <p>Name:{data.product.name}</p>
        </div>
      
    )
}

export default Product
