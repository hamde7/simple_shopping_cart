import { Card } from "react-bootstrap";
type itemtype = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};
export default function ItemCard({ id, name, price, imgUrl }: itemtype) {
  return (
    <>
      <Card>
        <Card.Img src={imgUrl} style={{height:"200px", objectFit:"cover"}} />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="w-100 d-flex justify-content-space-between align-item-baseline mb-4">
            <span className="fs-2">{name}</span>
            <span className="fs-2 text-muted">{price}</span>
          </Card.Title>
        </Card.Body>
      </Card>
    </>
  );
}
