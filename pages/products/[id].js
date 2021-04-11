import {request} from "../../lib/datocms";
import {ALL_PRODUCTS_QUERY, PRODUCT_QUERY} from "../../querys/querys";
import {connect} from "react-redux";
import {addItemAction} from "../../store/actions";


export async function getStaticPaths() {


    const {allProducts} = await request({
        query: ALL_PRODUCTS_QUERY,
        variables: {}
    });


    const paths = allProducts.map((product) => ({
        params: {id: product.id},
    }))

    console.log("paths", paths)

    return {paths, fallback: false}
}


export async function getStaticProps({params}) {
    console.log("params", params)


    const data = await request({
        query: PRODUCT_QUERY,
        variables: {id: params.id.toString()}
    });

    console.log(data)
    return {
        props: {data}
    };
}

const Product = ({data, addItem}) => {

    console.log("product", data)

    const item = {...data}
    
    return (
        <div>
            <p>ID: {data.product.id}</p>
            <p>Price: {data.product.price}</p>
            <p>Name:{data.product.name}</p>
            
            <div><button onClick={()=>addItem(item)}>Add to cart</button></div>
        </div>
        

    )
}

const mapDispatchToProps = {
   addItem:addItemAction
};

const mapStateToProps = state => ({
    basket: state.basket
});
export default connect(mapStateToProps,mapDispatchToProps)(Product);
