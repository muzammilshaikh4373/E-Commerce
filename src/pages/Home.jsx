import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CardForproduct() {
  const [cardData, setCardData] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        setCardData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // console.log(cardData)

  const onclick =(id)=>{
    navigate(`/details/${id}`)
  }

  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: "space-around" }}>
        {cardData.map((data) => {
          return (
            <Card key={data.id} style={{ width: '18rem', margin: "10px" }}>
              <Card.Img style={{ height: '250px' }} src={data.image} />
              <Card.Body>
                <Card.Title>Price: {data.price}$</Card.Title>
                <Card.Text> {data.title.substring(0,12)}</Card.Text>
                <Button onClick={()=>onclick(data.id)}>Add to Cart</Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </>
  );
}

export default CardForproduct;
