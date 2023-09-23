import { Button, Stack } from "react-bootstrap";
import FakeData from "../data/fakeData.json";
import { useShoppingContext } from "../context/SoppingCartContext";
type ItemType = {
  id: number;
  quantity: number;
};
export default function CartItem({ id, quantity }: ItemType) {
    const {removeItem} = useShoppingContext();
    const item  = FakeData.find(i => i.id===id);
    if(item===undefined)return null;
    return (
    <Stack direction="horizontal" gap={3}>
        <img src={item?.imgUrl} style={{width:"125px" , height:"75px" , objectFit:"cover"}} />
        <div className="me-auto">
            <div>{item?.name}{quantity > 1 && <span className="text-muted" style={{fontSize:".65rem"}}>x{quantity}</span>}</div>
            <div>${item?.price}</div>
        </div>
        <div>${item.price * quantity}</div>
        <Button variant="outline-danger" onClick={()=>{removeItem(id)}}>
            &times;
        </Button>
    </Stack>
  );
}
