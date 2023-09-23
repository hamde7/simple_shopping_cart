import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingContext } from "../context/SoppingCartContext";
import CartItem from "./CartItem";
import FakeData from '../data/fakeData.json'
type booleanType = {
    isOpen : boolean;
}
export default function ShoppingCartSection({isOpen}:booleanType) {
    const {closeCart , Items} = useShoppingContext();
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title >Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
          <Stack gap={3}>
              {Items.map((item)=>{
                return <CartItem key={item.id} {...item}/>
              })}
              <div className="fw-bold fs-5 ms-auto">Total :{
                Items.reduce((acc , item)=>{
                  const ItemServer = FakeData.find((i)=>i.id===item.id);
                  return acc + ((ItemServer?.price||0) * item.quantity )
                } , 0)
              } </div>
          </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
