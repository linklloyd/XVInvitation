export default function Example() {
  return (
    <form>
      <div className="form">
        {/* <div>
        <div>
              <label htmlFor="attendance" className="fix">
                Asistira?
              </label>
              <div className="mt-1 sm:col-span-2 sm:mt-0">
                <select
                  id="attendance"
                  name="attendance"
                  autoComplete="attendance-name"
                  className="form-select px-4 py-3 rounded-full"
                    >
                  <option>Si Asistire</option>
                  <option>No Asistire</option>
                </select>
              </div>
            </div>
        </div> */}
            <div>
      <label htmlFor="attendance" className="fix block text-sm font-medium text-gray-700">
      Asistira?
      </label>
      <select
        id="attendance"
        name="attendance"
        className="input-select mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        defaultValue="Si Asistire"
      >
        <option>Si Asistire</option>
        <option>No Asistire</option>
      </select>
    </div>

        <div>
          <div>
            <h3 className="fix2">Indique la cantidad de asistencias</h3>
            <label htmlFor="guests" className="fix block text-sm font-medium text-gray-700">
            Adultos
            </label>
            <input className="input-select mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" type="number" id="guests" name="guests"
       min="0" max="100" ></input>
          </div>
          <div>
          </div>
          <br></br>
        </div> 
        
        {/* <div>
              <div>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="input-fields"
                  defaultValue={''}
                  placeholder="Escriba un mensaje para la Quinceañera"
                />
              </div>
          </div>  */}
          <div>
      <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
      </label>
      <div className="mt-1">
        <textarea
          rows={4}
          placeholder="Escriba un mensaje para la Quinceañera"
          name="comment"
          id="comment"
          className="input-fields block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          defaultValue={''}
        />
      </div>
    </div>
      </div>

      <div className="pt-5">
        <div className="flex justify-end">
        <button type="sumbit" className="button">
        Confirmar
      </button>
        </div>
      </div>
    </form>
  )
}