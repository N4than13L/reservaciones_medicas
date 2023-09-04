import React, { useState } from "react";

// importando el hook para el form.
import { UseForm } from "hooks/useForm";
import { Global } from "helpers/global";

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";
import { NavLink } from "react-router-dom";

export default function Add_Bill() {
  // funcion para recoger valores del formulario.
  const { form, changed } = UseForm({});
  const [saved, setSaved] = useState("error");
  const saveUser = async (e) => {
    // prevenir que se recargue la pagina
    e.preventDefault();

    // recoger los datos del formulario.
    let client = document.getElementById("client").value;
    let attended_by = document.getElementById("attended_by").value;
    let treatment = document.getElementById("treatment").value;
    let amount = document.getElementById("amount").value;

    let newUser = {
      client: client,
      attended_by: attended_by,
      treatment: treatment,
      amount: amount,
    };

    let token = localStorage.getItem("token");

    const request = await fetch(Global.url + "factura/guardar-factura", {
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
            <NavLink className="btn btn-success" to="/admin/factura">
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
                      factura guardada exitosamente
                    </strong>
                  ) : (
                    ""
                  )}
                  {saved == "error" ? (
                    <strong className="alert alert-danger">
                      Error al guardar factura
                    </strong>
                  ) : (
                    ""
                  )}
                </div>
                <form className="form-group" onSubmit={saveUser}>
                  {/* cliente */}
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

                  {/* attendido por  */}
                  <div className="mb-3">
                    <label htmlFor="attended_by" className="form-label">
                      atendido por:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="atendido por:"
                      name="attended_by"
                      id="attended_by"
                    />
                  </div>

                  {/* tratamiento */}
                  <div className="mb-3">
                    <label htmlFor="treatment" className="form-label">
                      tratamiento
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="tratamiento"
                      name="treatment"
                      id="treatment"
                    />
                  </div>

                  {/* monto */}
                  <div className="mb-3">
                    <label htmlFor="amount" className="form-label">
                      monto
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="monto"
                      name="amount"
                      id="amount"
                    />
                  </div>

                  <button type="submit" className="btn btn-info">
                    <i className="fa-solid fa-floppy-disk"></i> Guardar factura
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
