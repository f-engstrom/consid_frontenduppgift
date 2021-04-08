import {request} from "../../lib/datocms";


const ALL_PRODUCTS_QUERY = `query allProducts {
  allProducts {
    price
    name
    id
  }
}`;

export async function getServerSideProps({params}) {
    console.log("params", params)


    const data = await request({
        query: ALL_PRODUCTS_QUERY,
        variables: {}
    });

    console.log(data)
    return {
        props: {data}
    };
}

const Product = ({data}) => {

    console.log("products", data)

    return (

        <div className="users">
            {data.allProducts.map((product,index) => (
                <div className="product">{product.name}</div>
                
            ))}
        </div>

    )
}

export default Product