import { Link } from "react-router-dom";
import "../../src/App.css";
import HeaderSection from "./HeaderSection";
import { Container, Card, Button } from 'react-bootstrap';

const MainSection = () => {
  return (
    <>
      <HeaderSection />
      {/* <h2 className="head-2">This is Home Page</h2> */}
      {/* <Link to="HeaderSection" >Click to go to Header Section</Link> */}
      {/* <div className="wrapper">
        <div className="wrapper-left"><h3 className="h3-heading">Enjoy Your <b style={{color:"Orange"}}>Special</b> Delicious Meal</h3>
        <p className="para">We make it easy for you to give your guests the same experience onlinethat they expect within your doors. </p>
        <button type="button" className="btn-order"><a href="/Menu">ORDER NOW</a></button>
        </div>
        <div className="wrapper-right"></div>
      </div> */}
      <Container className="text-center my-5" style={{marginLeft:"3rem"}}>
            <Card bg="transparent" text="white" border="0" className="col-sm-8">
                <Card.Body>
                    <Card.Title className="card-title-css"><h3 className="h3-heading">Enjoy Your <b style={{color:"Orange"}}>Special</b> Delicious Meal</h3></Card.Title>
                    <Card.Text className="para" >
                    We make it easy for you to give your guests the same experience onlinethat they expect within your doors.
                    </Card.Text>
                    <Button type="button" className="btn-order"><a href="/Menu">ORDER NOW</a></Button>
                </Card.Body>
            </Card>
        </Container>
    </>
  );
};

export default MainSection;
