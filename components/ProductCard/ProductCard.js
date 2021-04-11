import Link from "next/link";

const productCard = ({product}) => {

    console.log("product", product);


    return (
        <div>

            <img style={{height: 50 + "px"}} src={product.mainImage.url} alt=""/>
            <Link href={`products/${product.id}`}><a>{product.name}</a></Link>
            <p>{product.price}</p>
        </div>

    )
}

export default productCard;