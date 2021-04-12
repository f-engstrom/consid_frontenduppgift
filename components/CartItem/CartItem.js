import {useState} from "react";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import {XCircle} from 'react-bootstrap-icons';
const item = ({item, update,remove}) => {


    const [quantity, setQuantity] = useState(item.quantity);
    const [amount, setAmount] = useState(item.quantity*item.price);

    const handleUpdate = (quantity) => {


        setQuantity(quantity)
        item.quantity = quantity;
        calculateAmount();
        update(item);
    }

    const calculateAmount = () => {

        const calculatedAmount = item.quantity * item.price;

        setAmount(calculatedAmount);

    }

    console.log("item", item)

    return (
        <tr className="align-items-center">


            <td className="align-middle"><Image src={item.mainImage.url} style={{maxHeight: 171 + "px", maxWidth: 180 + "px"}} rounded/>
               <strong className="p-3"> {item.name}</strong>  </td>
            <td className="align-middle">{item.price}  </td>
           <td className="align-middle"> <input type="number" onChange={(event) => handleUpdate(event.target.value)} value={quantity}/></td>
            <td className="align-middle">{amount}</td>
            <td className="align-middle">

                <XCircle onClick={()=>remove(item.id) } className="bi bi-x"/>

            </td>


        </tr>

    )
}

export default item;