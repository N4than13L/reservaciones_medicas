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
import React from "react";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";
// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

// importando el hook para el form.
import { UseForm } from "hooks/useForm";

export function Register() {
  // funcion para recoger valores del formulario.

  const { form, changed } = UseForm({});

  const saveUser = (e) => {
    // prevenir comportamiento por defecto.
    e.preventDefault();

    // crear objeto de usuario
    let newUser = form;
  };
  return (
    <>
      <div className="content">
        <NotificationAlert />
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <h2>Registrate aquí</h2>
              </CardHeader>
              <CardBody>
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
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      password
                    </label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
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
