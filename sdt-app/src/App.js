import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import MainContainer from "./components/main/Main-container";
import Footer from "./components/footer/Footer";
import SliderBlock from "./components/slider/SliderBlock";
import IsAuth from "./components/isAuth/IsAuth";

function App() {
  const [value, setValue] = useState("");
  useEffect(() => {
    setValue(localStorage.getItem("email"));
  });
  return (
    <div className="App"> 
      <Header></Header>
      {value ? <>
        <MainContainer></MainContainer>
        <SliderBlock />
      </> : <>
        <IsAuth/>
      </>}
      <Footer></Footer>
    </div>
  );
}

export default App;
