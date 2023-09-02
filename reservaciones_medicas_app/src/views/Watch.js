import React from "react";
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
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
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h5">Citas pendientes</CardTitle>
              </CardHeader>
              <CardBody>
                <article>
                  <h5>Nombre y apellido paciente</h5>
                  <span>
                    Fecha de la cita <strong>2/2023</strong>
                  </span>
                  <p>
                    Fecha de creación <strong>1/1/2023</strong>
                  </p>
                </article>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Watch;
