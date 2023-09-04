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

function Watch() {
  // funcion para recoger valores del formulario.
  const [saved, setSaved] = useState("error");
  const [pacientes, setPaciente] = useState([]);

  useEffect(() => {
    sacar_pacientes();
  });

  let token = localStorage.getItem("token");

  const sacar_pacientes = async () => {
    const request = await fetch(Global.url + "paciente/ver-pacientes", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    const paciente = await request.json();
    console.log(paciente);
  };

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <NavLink className="btn btn-success" to="/admin/agregarcitas">
              <i class="fa-solid fa-plus"></i>
            </NavLink>
            <Card>
              <CardHeader>
                <CardTitle tag="h5">Citas pendientes</CardTitle>
              </CardHeader>
              <CardBody>
                <>
                  {Array.isArray(
                    pacientes?.map((art) => {
                      return (
                        <tr key={art._id}>
                          <td>{art.name}</td>
                          <td>{art.surname}</td>
                          <td>{art.date}</td>
                        </tr>
                      );
                    })
                  )}
                </>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Watch;
