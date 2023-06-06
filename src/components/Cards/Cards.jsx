import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards() {

  const [count, setCount] = useState(0);
  const [colorN, setColor] = useState();
  const change = {color : colorN}

  const dec = () =>{
    let n = count - 1;

    if(n >= 0){
      setCount(n);
    }
    else{
      setCount(0);
    }
  }


  return (
    <div>
      <Card style={{ width: '18rem', marginTop: 10}}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text style={change}>
            Some quick example text to build on the card title and make up thebulk of the card's content.
          </Card.Text>
          <p>
            {
              count
            }
          </p>
          <Button variant="primary" onClick={()=>{{setCount(count + 1)}}}>Increase</Button>
          <Button variant="danger" onClick={dec}>Decrease</Button>
        </Card.Body>
      </Card>
      <div className="colorbox">
        <button className="red" onClick={()=> {setColor("red")}}>Red</button>
        <button className="yellow" onClick={()=> {setColor("yellow")}}>Yellow</button>
        <button className="blue" onClick={()=> {setColor("blue")}}>Blue</button>
        <button className="green" onClick={()=> {setColor("green")}}>Green</button>
        <button className="crimson" onClick={()=> {setColor("crimson")}}>Crimson</button>
      </div>
    </div>
  );
}

export default Cards;