import "./App.css";
import React, { useState, useEffect } from "react";
import Clock from "./components/Clock";
import Maps from "./components/Map";
import Confimacion from "./components/Confimacion"
import TextInfo from "./components/Info"
import { SliderData } from "./components/SliderData";
import vestimenta from './vestimenta.png';
import liverpool from './liverpool-logo.png';
import fifteen from "./fifteen.png"
import { Header, Section, Subheader, Paragraph, Wrapper, Content } from "./components";
import Carousel from "nuka-carousel";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs';

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
      <Section>
        <Header size="lg" font="dancing">Mis XV años</Header>
        <Header as="h2" size="md" font="dancing">Fernanda Josselyn</Header>
        <img src={fifteen} alt="portada" width="570" height="570"/>
      </Section>

      <Section color="pink">
        <TextInfo header="Fecha del evento" subheader="16 / Octubre / 2022" text="Faltan"/>
        
        <Wrapper size="sm">
          <Clock
            timerDays={timerDays}
            timerHours={timerHours}
            timerMinutes={timerMinutes}
            timerSeconds={timerSeconds}
          />
        </Wrapper>

      </Section>

      <Section>
        <Header as="h3">Galeria</Header>

        <Carousel 
          className="flex w-full" 
          style={{ maxWidth: "70vw", maxHeight: "800px", overflow: "hidden" }} 
          slidesToShow={1} 
          autoplay
          animation="zoom" 
          adaptiveHeight={false} 
          dragging 
          enableKeyboardControls 
          pauseOnHover
          wrapAround
          scrollMode="page"
          renderCenterLeftControls={({previousDisabled, previousSlide }) => {
            return <BsArrowLeftSquareFill className="left-arrow" disabled={previousDisabled} onClick={previousSlide} />
          }}
          renderCenterRightControls={({nextDisabled, nextSlide }) => {
            return <BsArrowRightSquareFill className="right-arrow" disabled={nextDisabled} onClick={nextSlide} />
          }}
        >
          {SliderData.map((slide, index) => (<img src={slide.image} alt="" style={{
            maxWidth: "100%",
            maxHeight: "100%",
            width: "100%",
            height: "auto",
            resize: "both",
            aspectRatio: "16/12"
          }} />))}
        </Carousel>
      </Section>

      <Section color="pink">
        <Header as="h3">Lugares del evento</Header>

        <Content>
          <Subheader>Misa</Subheader>

          <Paragraph>
            La Misa de Acción de Gracias se celebrará a las 17:00 hrs. en la capilla...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius dui ut porta iaculis. Integer eleifend aliquam odio vitae faucibus. Nam id massa mi
          </Paragraph>
        </Content>


        <Wrapper size="md">
          <Maps />
        </Wrapper>
      </Section>

      <Section>
        <Header as="h3">Tipo de vestimenta</Header>
        <Wrapper>
        <img src={vestimenta} alt="vestimenta" height={320} width={320} />
        </Wrapper>        
        <TextInfo subheader="Formal" text="Evento al aire libre en jardín"/>
      </Section>

      <Section color="pink">
      <TextInfo header="Mesa de Regalos" subheader="El mejor regalo que puedo recibir, es compartir este momento con ustedes." text="Si gustan darme un obsequio, pueden hacerlo en mi mesa de regalo en"/>
        <Wrapper>
        <img src={liverpool} alt="liverpool" height={90} width={340} />
        </Wrapper>
        <TextInfo text='Núm. de Evento: #######'/>
      </Section>

      <Section color="pinkDark">  
          <Header as="h3">Confimación</Header>
          <Subheader>C. Sergio Ivan Ruiz Roque y Esposa</Subheader>
          <Wrapper>
          <Confimacion />
          </Wrapper>
      </Section>

      
    </div>
  );
}

export default App;
