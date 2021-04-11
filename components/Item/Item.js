import {useState} from "react";

const item = ({item, update}) => {


    const [quantity, setQuantity] = useState(item.quantity);

    const handleUpdate = () => {


        item.quantity = quantity;

        update(item);
    }

    return (
        <div>
            <p><span>{item.id}  </span>
                <span>{item.name}  </span>
                <span>{item.price}  </span>
                <input onChange={(event) => setQuantity(event.target.value)} value={quantity}/>
                <button onClick={handleUpdate}>Update</button>
            </p>

        </div>

    )
}

export default item;