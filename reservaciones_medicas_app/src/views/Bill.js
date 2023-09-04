import React from "react";
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
                <CardTitle tag="h5">Facturas</CardTitle>
              </CardHeader>
              <CardBody>
                <article>
                  <p>
                    <h5>cliente</h5>
                    <span>sintomas</span>
                    <span>atendo por</span>
                    <span>monto</span>
                  </p>
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

export default Bill;
