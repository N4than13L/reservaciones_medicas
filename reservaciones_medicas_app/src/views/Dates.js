import React, { useState } from "react";

// importando el hook para el form.
import { UseForm } from "hooks/useForm";
import { Global } from "helpers/global";

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

export default function Dates() {
  // funcion para recoger valores del formulario.
  const { form, changed } = UseForm({});
  const [saved, setSaved] = useState("error");
  const saveUser = async (e) => {
    // prevenir que se recargue la pagina
    e.preventDefault();

    // recoger los datos del formulario.
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let fecha = document.getElementById("fecha").value;

    let newUser = {
      name: nombre,
      surname: apellido,
      email: fecha,
    };

    const request = await fetch(Global.url + "usuario/registro", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    });

    const data = await request.json();
    console.log(data);
    if (data.status == "success") {
      setSaved("saved");
    } else {
      setSaved("error");
    }

    // console.log(data);
  }; // fin del metodo de guardar
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card className="demo-icons">
              <CardHeader>
                <CardTitle tag="h5">Agregar Citas</CardTitle>
              </CardHeader>
              <CardBody className="all-icons">
                {/* cuerpo de formulario. */}
                {/* alerta si si envio el usuario */}
                <div className="mb-3">
                  {saved == "saved" ? (
                    <strong className="alert alert-success">
                      cita guardada exitosamente
                    </strong>
                  ) : (
                    ""
                  )}
                  {saved == "error" ? (
                    <strong className="alert alert-danger">
                      Error al registrar
                    </strong>
                  ) : (
                    ""
                  )}
                </div>
                <form className="form-group" onSubmit={saveUser}>
                  <div className="mb-3">
                    <label
                      htmlFor="nombre"
                      form="nombre"
                      className="form-label"
                    >
                      Nombre
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nombre"
                      name="nombre"
                      id="nombre"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="apellido" className="form-label">
                      apellido
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Apellido"
                      name="apellido"
                      id="apellido"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="apodo" className="form-label">
                      fecha
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Fecha"
                      name="fecha"
                      id="fecha"
                    />
                  </div>

                  <button type="submit" className="btn btn-info">
                    <i className="fa-solid fa-floppy-disk"></i> Guardar
                  </button>
                </form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}
