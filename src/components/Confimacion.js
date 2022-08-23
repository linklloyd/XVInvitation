import React, { useState } from "react";

const Confirmacion = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <label>Asistira?</label>
          <select
            name="asisst"
            value={inputs.guests}
            onChange={handleChange}
          >
            <option value="noasistire">No asistire</option>
            <option value="asistire">Si asistire</option>
          </select>
        </div>
        <div className="input-field">
          <label>
            Numero de invitados
            <input
              type="number"
              name="guests"
              value={inputs.guests || ""}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="input-field-message">
        <label>
          <input
            style={{ height: "100px", width: "400px" }}
            type="text"
            name="message"
            value={inputs.message || ""}
            onChange={handleChange}
            placeholder="Escriba un mensaje para la Quinceañera"
          />
        </label>
        </div>
        <div className="buttons-container">
        <button type="submit" className="button">Confirmar</button>
        </div>
      </form>
    </div>
  );
};

export default Confirmacion;
