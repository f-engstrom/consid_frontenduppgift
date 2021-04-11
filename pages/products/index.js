import {request} from "../../lib/datocms";
import ProductCard from "../../components/ProductCard/ProductCard";
import {ALL_PRODUCTS_QUERY} from "../../querys/querys";



export async function getServerSideProps({params}) {


    const data = await request({
        query: ALL_PRODUCTS_QUERY,
        variables: {}
    });

    return {
        props: {data}
    };
}

const Product = ({data}) => {


    return (

        <div className="users">
            {data.allProducts.map((product, index) => (
                <ProductCard product={product}/>

            ))}
        </div>

    )
}

export default Product