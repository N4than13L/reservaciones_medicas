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
import React from "react";
// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

export function Login() {
  let email = document.getElementById("email");
  let password = document.getElementById("password");

  // email.value = "";
  // password.value = "";

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>Inicia sesion aquí</CardHeader>
              <CardBody>
                <form className="form-group">
                  {/* lo necesario. */}
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
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
                      name="password"
                      id="password"
                      placeholder="Contraseña"
                      className="form-control"
                    />
                  </div>

                  <input
                    type="submit"
                    value="Login"
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
