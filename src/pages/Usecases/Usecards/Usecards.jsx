import React from 'react';
import Card from 'react-bootstrap/Card';

function Usercards() {
  return (
    <div className='pl-30'>
    <div className="col-xl-3 col-lg-3">
    <Card className=" text-white">
      <Card.Img src="assets/img/usecases/R.jpg" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title clssName='h3'>Telecommunications</Card.Title>
        {/* <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text> */}
        {/* <Card.Text>Last updated 3 mins ago</Card.Text> */}
      </Card.ImgOverlay>
    </Card>
    </div>
    </div>
  );
}

export default Usercards;