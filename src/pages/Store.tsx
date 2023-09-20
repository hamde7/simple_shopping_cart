import { Col, Row } from 'react-bootstrap'
import FakeData from '../data/fakeData.json'
import ItemCard from '../components/ItemCard'
export default function Store(){
    return<>
        <Row md={2} xs={1} lg={4} className='g-3'>
            {FakeData.map((item)=>{
                return <Col key={item.id}><ItemCard {...item} /></Col>
            })}
        </Row>
    </>
}