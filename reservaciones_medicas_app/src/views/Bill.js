import FixedPlugin from "components/FixedPlugin/FixedPlugin";
import { Global } from "helpers/global";
import React, { useEffect, useState } from "react";
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
import { NavLink } from "react-router-dom";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
// core components
import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart,
} from "variables/charts.js";

function Bill() {
  // funcion para recoger valores del formulario.
  const [saved, setSaved] = useState("error");
  const [facturas, setPaciente] = useState([{}]);

  useEffect(() => {
    sacar_facturas();
  });

  let token = localStorage.getItem("token");

  const sacar_facturas = async () => {
    const request = await fetch(Global.url + "factura/ver-factura", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    const paciente = await request.json();
    setPaciente(paciente.facturas);
    // console.log(paciente);
  };

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <NavLink className="btn btn-success" to="/admin/agregar-factura">
              <i class="fa-solid fa-plus"></i>
            </NavLink>
            <Card>
              <CardHeader>
                <CardTitle tag="h5">Facturas pendientes</CardTitle>
              </CardHeader>
              <CardBody className="opacity-50">
                {facturas?.map((pac) => {
                  return (
                    <article
                      className="card card-body bg-info p-4"
                      key={pac.id}
                    >
                      <h5>
                        Factura no: <strong>{pac._id}</strong>
                      </h5>
                      <strong>Nombre: </strong>
                      <p> {pac.client}</p>

                      <strong>Atendido por:</strong>
                      <p>{pac.attended_by}</p>

                      <strong>tratamiento:</strong>
                      <p>{pac.treatment}</p>

                      <strong>Monto:</strong>
                      <p>{pac.amount}</p>
                    </article>
                  );
                })}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Bill;
