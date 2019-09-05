import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "./component/Product";

function App() {
  const [count, setcount] = useState(0);
  const [book, setbook] = useState([]);
  const [name, setname] = useState("");
  const [select, setselect] = useState("");
  let [product, setproduct] = useState([]);
  // console.log(count);

  const newCount = () => {
    // console.log("yep");
    setcount(count + 1);
  };
  let Book = key => {
    // console.log(key);
    let newbook = book.splice(key, 1);
    setbook(newbook);
  };

  let handleData = e => {
    setname(e.target.value);
    // console.log(name);
  };

  let handlesubmit = e => {
    e.preventDefault();
    if (name.length >= 1) {
      let joined = book.concat(name);
      setbook(joined);
      setname("");
    } else {
      alert("no value");
    }
  };

  let newFunctionSelect = e => {
    setselect(e.target.value);
    // console.log(select);
  };
  let dataValue = e => {
    // console.log(e.target.value);
  };

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    let response = await axios(
      `https://cors-anywhere.herokuapp.com/http://13.126.132.56/api/v1/product/list/`
    );
    let user = await response.data.results;
    setproduct(user);
  }

  // console.log(product);
  return (
    <React.Fragment>
      <p>sdf</p>
      <button onClick={newCount}>click</button>
      <p>{count}</p>
      <input
        type="text"
        placeholder="enter data"
        name="data"
        onChange={handleData}
        value={name}
      />
      <button type="submit" onClick={handlesubmit}>
        submit
      </button>
      <ul>
        {book.map((books, index) => (
          <li key={index} onClick={() => Book(index)}>
            {books}
          </li>
        ))}
      </ul>
      <input
        type="file"
        name="fileToUpload"
        id="fileToUpload"
        onChange={dataValue}
      />
      <input type="submit" value="Upload Image" name="submit" />
      <br></br> <br></br> <br></br> <br></br>
      <select onChange={newFunctionSelect}>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
      <Product newProps={product} />
    </React.Fragment>
  );
}

export default App;
