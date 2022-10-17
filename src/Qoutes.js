import { useEffect, useState } from "react";
import axios from "axios";
const Qoutes = () => {
  const [advice, setAdvice] = useState("");

  const fetchData = () => {
    axios.get("https://api.adviceslip.com/advice").then((data) => {
      setAdvice(data.data.slip.advice);
    });
  };
  const onClickHandler = () => {
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="App">
        <div className="card">
          <h1 className="heading">{advice} </h1>
          <button className="button">
            <span onClick={onClickHandler}>Give Me Advice!</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Qoutes;
