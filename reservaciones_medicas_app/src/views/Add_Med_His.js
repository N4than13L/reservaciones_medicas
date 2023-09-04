import React, { useState } from "react";

// importando el hook para el form.
import { UseForm } from "hooks/useForm";
import { Global } from "helpers/global";

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";
import { NavLink } from "react-router-dom";

export default function Add_Medical_History() {
  // funcion para recoger valores del formulario.
  const { form, changed } = UseForm({});
  const [saved, setSaved] = useState("error");
  const saveUser = async (e) => {
    // prevenir que se recargue la pagina
    e.preventDefault();

    // recoger los datos del formulario.
    let client = document.getElementById("client").value;
    let symptoms = document.getElementById("symptoms").value;

    let newUser = {
      client: client,
      symptoms: symptoms,
    };

    let token = localStorage.getItem("token");

    const request = await fetch(Global.url + "historial/guardar-hist-med", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: token,
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
            <NavLink className="btn btn-success" to="/admin/historial">
              <i class="fa-solid fa-chevron-left"></i>
            </NavLink>
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
                      Error al guardar la cita
                    </strong>
                  ) : (
                    ""
                  )}
                </div>
                <form className="form-group" onSubmit={saveUser}>
                  <div className="mb-3">
                    <label htmlFor="client" className="form-label">
                      cliente
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="paciente"
                      name="client"
                      id="client"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="symptoms" className="form-label">
                      sintomas
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="sintomas"
                      name="symptoms"
                      id="symptoms"
                    />
                  </div>

                  <button type="submit" className="btn btn-info">
                    <i className="fa-solid fa-floppy-disk"></i> Guardar Registro
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
