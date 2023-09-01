/*!

=========================================================
* Paper Dashboard React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React, { useState } from "react";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";
// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

// importando el hook para el form.
import { UseForm } from "hooks/useForm";
import { Global } from "helpers/global";

export function Register() {
  // funcion para recoger valores del formulario.
  const { form, changed } = UseForm({});
  const [saved, setSaved] = useState("error");

  const saveUser = async (e) => {
    // prevenir que se recargue la pagina
    e.preventDefault();

    // recoger los datos del formulario.
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let newUser = {
      name: nombre,
      surname: apellido,
      email: email,
      password: password,
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
            <Card>
              <CardHeader>
                <h2>Registrate aquí</h2>
              </CardHeader>
              <CardBody>
                {/* alerta si si envio el usuario */}
                <div className="mb-3">
                  {saved == "saved" ? (
                    <strong className="alert alert-success">
                      Usuario guardado exitosamente
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
                    <label htmlFor="email" className="form-label">
                      email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Correo electrónico"
                      name="email"
                      id="email"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      password
                    </label>
                    <input
                      type="password"
                      placeholder="Contraseña"
                      className="form-control"
                      name="password"
                      id="password"
                    />
                  </div>

                  <input
                    type="submit"
                    value="Registrarte"
                    className="btn btn-success"
                  />
                </form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}
