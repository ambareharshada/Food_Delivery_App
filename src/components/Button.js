const Button = ({text}) => {
  return (
    <>
      <button type="button" className="btn btn-primary float-right">
        {/* Add To Cart */}
        {text}
      </button>{" "}
    </>
  );
};

export default Button;
