import { Button, Card } from "react-bootstrap";
import { useShoppingContext } from "../context/SoppingCartContext";
type itemtype = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};
export default function ItemCard({ id, name, price, imgUrl }: itemtype) {
 const {getItem , increasItem , decreasItem ,removeItem} = useShoppingContext()
  const qauntity: number = getItem(id);
  return (
    <>
      <Card>
        <Card.Img
          src={imgUrl}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="w-100 d-flex justify-content-between align-items-baseline mb-4">
            <span className="fs-2">{name}</span>
            <span className="ms-2 text-muted">{price}$</span>
          </Card.Title>
          <div className="mt-auto">
            {qauntity == 0 ? (
              <Button className="w-100" onClick={()=>{increasItem(id)}}>+ Add to cart</Button>
            ) : (
              <div
                className="d-flex align-items-center flex-column"
                style={{ gap: "10px" }}
              >
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{ gap: "10px" }}
                >
                  <Button onClick={()=>{decreasItem(id)}}>-</Button>
                  <div>
                    <span className="fs-2 fw-bold">{qauntity} </span>
                     in cart
                  </div>
                  <Button onClick={()=>{increasItem(id)}}>+</Button>
                </div>
                <Button className="bg-danger" onClick={()=>{removeItem(id)}}>remove</Button>
              </div>
            )}
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
