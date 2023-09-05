import React from "react";
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
import { Link } from "react-router-dom";
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

function Dashboard() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h5"></CardTitle>
                <h1 className=""></h1>
              </CardHeader>
              <CardBody>
                <section>
                  <h2>Bienvenido al nuestro sistema medical support</h2>
                  <span>
                    <>
                      En este sistema puedes gestionar todo tu trabajo de manera
                      eficiente para su empresa. Ver los datos de seguimiento de
                      tus pacientes su historial y mucho más.
                    </>
                  </span>
                </section>

                <h5>
                  <strong>
                    <ins>Informaciones de uso</ins>
                  </strong>
                </h5>
                <h5>
                  Puedes agregar las citas de tus pacientes
                  <Link to="/admin/agregarcitas"> Aquí</Link> como tambien su
                  historial de
                  <Link to="/admin/agregar-factura"> En este enlace</Link> y sus
                  <Link to="/admin/agregar-factura"> facturas</Link>. De igual
                  menera ver estos enlaces en el panel lateral si estas en una
                  vista movil.
                </h5>
              </CardBody>
              <CardFooter></CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
