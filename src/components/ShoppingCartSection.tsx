import { Offcanvas } from "react-bootstrap";
import { useShoppingContext } from "../context/SoppingCartContext";
type booleanType = {
    isOpen : boolean;
}
export default function ShoppingCartSection({isOpen}:booleanType) {
    const {closeCart} = useShoppingContext();
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title >Cart</Offcanvas.Title>
      </Offcanvas.Header>
    </Offcanvas>
  );
}
