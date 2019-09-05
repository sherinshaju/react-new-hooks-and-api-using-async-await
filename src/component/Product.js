import React, { useEffect } from "react";

const Datastyle = {
  display: "flex",
  width: "100%",
  overflow: "hidden",
  flexWrap: "wrap",
  justifyContent: "space-around"
};
const Newstyle = {
  width: "20%",
  overflow: "hidden",
  marginRight: "10px",
  boxShadow: "#0000002e 2px -2px 5px",
  padding: "10px",
  marginTop: "20px"
};
const button = {
  backgroundColor: "#03A9F4",
  border: "none",
  color: "white",
  padding: "15px 32px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "14px",
  margin: "4px 2px",
  cursor: "pointer"
};

function Product(props) {
  let dataClick = id => {
    console.log(id);
  };

  console.log(props.newProps);
  return (
    <React.Fragment>
      <div className="wrapper" style={Datastyle}>
        {props.newProps.map(product => (
          <div key={product.id} style={Newstyle}>
            <div className="image">
              <img src={product.iconimage} width="100%" height="280px"></img>
            </div>
            <div className="content-wrapper">
              <p>{product.name}</p>
              <p>{product.offer_price}</p>
            </div>
            <button style={button} onClick={() => dataClick(product.id)}>
              View
            </button>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}
export default Product;
