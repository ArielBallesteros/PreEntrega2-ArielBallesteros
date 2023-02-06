import "./contact.css";

export function Contact() {
  return (
    <main>
      <div className="wow animate__animated animate__backInLeft">
        <div className="contactos">
          <div className="titulo1">
            <h1 className="ubicacion">CONTACTO</h1>
          </div>
        </div>
      </div>

      <div className="wow animate__animated animate__fadeInUp contenedor-form">
        <div className="titulo1">
          <div className="formulario">
            <form action="#" className="form">
              <br></br>
              <input
                type="text"
                placeholder="Nombre y Apellido"
                name="nombre"
                cols="45"
                rows="10"
              />
              <br></br>
              <input
                type="text"
                placeholder="Email"
                name="Email"
                cols="45"
                rows="10"
              />
              <br></br>
              <input
                type="number"
                placeholder="Telefono"
                name="telefono"
                cols="45"
                rows="10"
              />
              <br></br>
              <input
                type="number"
                placeholder="Edad"
                name="Edad"
                cols="45"
                rows="10"
              />
              <br></br>
              <textarea
                name="comentario"
                placeholder="Describa el diseño de su proximo Tattoo."
                id=""
                cols="45"
                rows="10"
              ></textarea>
              <br></br>
              <div className="boton-enviar">
                <p className="boton">Enviar</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
