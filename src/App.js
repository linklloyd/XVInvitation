import "./App.css";
import React, { useState, useEffect } from "react";
import Clock from "./components/Clock";
import Maps from "./components/Map";
import Confimacion from "./components/Confimacion"
import Info from "./components/Info"
import Header from "./components/Header";
import ImageSlider from "./components/ImageSlider";
import { SliderData } from "./components/SliderData";

function App() {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;

  const startTimer = () => {
    const Datee = new Date("October 16, 2022, 09:45:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = Datee - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));

      const hour = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );

      const min = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));

      const sec = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hour);
        setTimerMinutes(min);
        setTimerSeconds(sec);
      }
    });
  };

useEffect(()=>{
  startTimer()
})

  return (
    <div>
      <div className="App">
      <Info mode="infoBlack" Title="16 / Octubre / 2022" Text="Faltan:"/>
        <Clock
          timerDays={timerDays}
          timerHours={timerHours}
          timerMinutes={timerMinutes}
          timerSeconds={timerSeconds}
        />
      </div>
      <Header text="galeria"/>
      <div>
      <ImageSlider slides={SliderData} />
      </div>
      <Header text="mapas"/>
      <div className="App">
        <Info mode="infoBlack" Title="Misa" Text="La Misa de Acción de Gracias se celebrará a las 17:00 hrs. en la capilla...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius dui ut porta iaculis. Integer eleifend aliquam odio vitae faucibus. Nam id massa mi"/>
        <Maps />
      </div>
      <Header text="Vestimenta"/>
      <div className="AppWhite">
        <Info mode="infoWhite" Title="Formal" Text="*Evento al aire libre en jardín"/>
      </div>
      <Header text="Mesa de Regalos"/>
      <div className="App">
        <Info mode="infoBlack" Text="*Evento al aire libre en jardín"/>
      </div>
      <Header text="Confirmación"/>
      <div className="AppWhite">
        <Confimacion />
      </div>
    </div>
  );
}

export default App;
