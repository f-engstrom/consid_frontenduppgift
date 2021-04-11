import {connect} from "react-redux";
import {clearAllItemsAction, updateItemAction} from "../store/actions";
import Item from "../components/Item/Item";


export function Cart({basket,clearAllItems, updateItem}) {

    console.log("cartprops", basket);
    let cartContents = <div>Basket empty</div>;

    if (basket.items.length > 0) {

        cartContents = basket.items.map(item => (
                <Item item={item} update={updateItem}/>

            )
        )
    }


    return (


        <div>{cartContents}
        <button onClick={()=>clearAllItems()}>clear</button>
        </div>
        
    )


}

const mapDispatchToProps = {
   clearAllItems : clearAllItemsAction,
    updateItem:updateItemAction
};

const mapStateToProps = state => ({
    basket: state.basket
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);