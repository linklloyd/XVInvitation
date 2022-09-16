/*import React, { useState } from "react";

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

export default Confirmacion;*/
export default function Example() {
  return (
    <form className="space-y-8 divide-y divide-gray-200">
      <div className="form">
        <div className="space-y-6 sm:space-y-5">
        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label htmlFor="attendance" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                Asistira?
              </label>
              <div className="mt-1 sm:col-span-2 sm:mt-0">
                <select
                  id="attendance"
                  name="attendance"
                  autoComplete="attendance-name"
                  className="input-select"
                    >
                  <option>Si Asistire</option>
                  <option>No Asistire</option>
                </select>
              </div>
            </div>
        </div>

        <div className="space-y-6 pt-8 sm:space-y-5 sm:pt-10">
          <div>
            <h3>Indique la cantidad de asistencias</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Adultos</p>
            <input className="input-select" type="number" id="guests" name="guests"
       min="0" max="100" ></input>
          </div>
          <div className="space-y-6 sm:space-y-5">
          </div>
          <br></br>
        </div>
        <div className="space-y-6 sm:space-y-5">
              <div className="mt-1 sm:col-span-2 sm:mt-0">
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="input-fields"
                  defaultValue={''}
                  placeholder="Escriba un mensaje para la Quinceañera"
                />
              </div>
          </div>
      </div>

      <div className="pt-5">
        <div className="flex justify-end">
        <button
        type="sumbit"
        className="button fix"
      >
        Confirmar
      </button>
        </div>
      </div>
    </form>
  )
}