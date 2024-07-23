import HeaderSection from "./HeaderSection";
// import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import itemsData from "./JsonData";
import "bootstrap/dist/css/bootstrap.css";
import Button from "./Button";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

const Menu = () => {
  return (
    <>
      <HeaderSection />
      <h2 className="head-2 text-warning display-4">Menu Page</h2>

      {/* <Link to="/">Click to go to Main Section</Link> */}
      {/* <Container className="text-center my-5 md-0">
        <Card bg="info" text="white">
          <Card.Body>
            <Card.Title>Welcome to our Website</Card.Title>
            <Card.Text>
              Discover the beauty of React Bootstrap Layout with a stunning
              container component approach.
            </Card.Text>
            <Button variant="light">Learn More</Button>
          </Card.Body>
        </Card>
      </Container> */}
      <Container className="d-flex justify-content-around align-items-center flex-wrap my-5">
        {itemsData.map((item) => (
          <div className="bg-white text-white p-3 m-2 rounded">
            <img src={item.imgUrl} alt="" width={200} height={180} /> <br />
            <div className="d-flex justify-content-between bd-highlight mb-1">
              <div className="p-2 bd-highlight text-primary">{item.name}</div>
              <div className="p-2 bd-highlight text-primary">
                {" "}
                <i className="bi bi-heart" style={{ color: "black" }}></i>
              </div>
            </div>
            {/* Add to cart code start here */}
            <div className="d-flex justify-content-between bd-highlight mb-1">
              <div className="p-2 bd-highlight text-primary">{item.price}</div>
              <div className="p-2 bd-highlight text-primary">
               <Button text="Add To Cart" />
              </div>
            </div>
            {/* add to cart code ends here */}
          </div>
        ))}

      </Container>

      
    </>
  );
};
export default Menu;
