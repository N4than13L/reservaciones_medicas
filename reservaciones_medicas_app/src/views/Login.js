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
import { Global } from "helpers/global";
// import UseAuth from "hooks/useAuth";
import { UseForm } from "hooks/useForm";
import React, { useState } from "react";
// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

export function Login() {
  const { form, changed } = UseForm({});
  const [saved, setSaved] = useState("not_saved");

  // const { compartido } = UseAuth();
  // const { setAuth } = UseAuth();

  const loginUser = async (e) => {
    // prevenir que se recargue la pagina
    e.preventDefault();

    // recoger los datos del formulario.
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let newUser = {
      email: email,
      password: password,
    };

    const request = await fetch(Global.url + "usuario/login", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    });

    const data = await request.json();
    console.log(data);

    if (data.status == "success") {
      // persistir datos en el navegador en el navegador.

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      setSaved("login");

      // setear datos en el auth.
      // setAuth(data.user);

      // redireciion.
      setTimeout(() => {
        window.location.href = "/admin/dashboard";
      }, 500);
    } else {
      setSaved("error");
    }
  }; // fin del metodo de guardar

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>Inicia sesion aquí</CardHeader>
              <CardBody>
                <form className="form-group" onSubmit={loginUser}>
                  <div className="mb-3">
                    {saved == "login" ? (
                      <strong className="alert alert-success">
                        usuario identificado correctamente
                      </strong>
                    ) : (
                      ""
                    )}

                    {saved == "error" ? (
                      <strong className="alert alert-danger">
                        error al identificar.
                      </strong>
                    ) : (
                      ""
                    )}
                  </div>

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
