import {useRouter} from 'next/router'
import {request} from "../../lib/datocms";


const PRODUCT_QUERY = `query ProductQuery($id:ItemId) {
   product(filter: {id: {eq: $id}}) {
    id
    price
    name
  }
  
}`;

export async function getServerSideProps({params}) {
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
