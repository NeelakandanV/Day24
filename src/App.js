import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import {Badge} from 'react-bootstrap';
import { useState } from 'react';

function App() {
  let ProdArr = [{image :"https://akm-img-a-in.tosshub.com/indiatoday/images/story/201505/imagegen_650_050215125927.jpg?VersionId=6EhqtTGLPynIO8n5LxXYbYKutw92y075",
  product :"Fancy Product",
  price :"$40.00 - $80.00"},
  {image :"https://www.newznew.com/wp-content/uploads/2021/12/Diamond-Shoot615461_CMYK-1-3-Small.jpg",
  product :"Special Item",
  rating :"⭐⭐⭐⭐⭐",
  actualPrice :"$20.00",
  price :"$18.00"},
  {image :"https://i.pinimg.com/474x/04/a5/d4/04a5d4fa5b0208351802db61b8f5b1cd.jpg",
  product :"Sale Item",
  actualPrice :"$50.00",
  price :"$25.00"},
  {image :"https://rukminim1.flixcart.com/image/850/1000/xif0q/jewellery-set/7/f/o/na-na-1-0-singhal-collections-original-imagqhgtcgyh9mgq.jpeg?q=90",
  product :"Popular Item",
  rating :"⭐⭐⭐⭐⭐",
  price :"$40.00"},
  {image :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTciyMtUPPOOFYmJDtbJuN4F0Kc8mDoZCgTwA&usqp=CAU",
  product :"Sale Item",
  actualPrice :"$50.00",
  price :"$25.00"},
  {image :"https://sehgalgold.com/wp-content/uploads/sites/444/2023/05/Z7-1.jpg",
  product :"Fancy Product",
  price :"$120.00 - $280.00"},
  {image :"https://i.pinimg.com/736x/d9/53/68/d95368f3db7187d959f87b47ee402752.jpg",
  product :"Special Item",
  rating :"⭐⭐⭐⭐⭐",
  actualPrice :"$20.00",
  price :"$18.00"},
  {image :"https://blingvine.com/cdn/shop/products/alina-pendant-set-platinum-necklace-sets-blingvine-686536_1000x.jpg?v=1636527535",
  product :"Popular Item",
  rating :"⭐⭐⭐⭐⭐",
  price :"$40.00"}]

  let [count , setcount] = useState(0);

  return (
    <div className='App'>
      <h2>Shopify.com</h2>
      <hr></hr>

      <div className='CartValue'>
      <h4><Badge bg="dark">Cart {count} </Badge></h4>
      </div>

      <div className="cardComp">
      {ProdArr.map((item,idx)=><CartCard
      item = {item}
      idx = {idx}
      count ={count}
      setcount ={setcount}
      />)}
    </div>
    </div>
  );
}

function CartCard({item,idx,count,setcount}){
  let [hide , sethide] = useState(true);

  function addCart(){
    setcount(count+1)
    sethide(!hide)
  }

  function removeCart(){
    setcount(count-1)
    sethide(!hide)
  }
  
  return(
      <Card key={idx} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
          <Card.Title>{item.product}</Card.Title>
          <Card.Text>
            <label>{item.rating}</label><br></br>
            <span>{item.actualPrice}</span>{" "}
            <label>{item.price}</label>        
          </Card.Text>

          {hide ? <Button onClick={addCart} variant="primary">Add Cart</Button> : ""}

          {!hide ? <Button onClick={removeCart} variant="danger">Remove Cart</Button> : ""}
        </Card.Body>
      </Card>
  );
}

export default App;
