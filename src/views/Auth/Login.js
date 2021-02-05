import React from "react";
import { Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary border-0 mb-0">
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Sign in with Credentials</small>
            </div>
            <form>
              <div class="form-group mb-3">
                <div class="input-group input-group-merge input-group-alternative">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="ni ni-email-83"></i>
                    </span>
                  </div>
                  <input
                    class="form-control"
                    placeholder="Email"
                    type="email"
                  />
                </div>
              </div>
              <div class="form-group">
                <div class="input-group input-group-merge input-group-alternative">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="ni ni-lock-circle-open"></i>
                    </span>
                  </div>
                  <input
                    class="form-control"
                    placeholder="Password"
                    type="password"
                  />
                </div>
              </div>
              <div class="custom-control custom-control-alternative custom-checkbox">
                <input
                  class="custom-control-input"
                  id=" customCheckLogin"
                  type="checkbox"
                />
                <label class="custom-control-label" for=" customCheckLogin">
                  <span class="text-muted">Remember me</span>
                </label>
              </div>
              <div class="text-center">
                <button type="submit" class="btn btn-primary my-4">
                  Sign in
                </button>
              </div>
            </form>
          </CardBody>
        </Card>
        <Row className="mt-3">
            <Col lg="6" mg="6">
                <Link to="./forgotPassword" className="text-light"><small>Forgot password?</small></Link>
            </Col>
            <Col lg="6" mg="6" className="text-right">
                <Link to="./register" className="text-light"><small>Create new account</small></Link>
            </Col>
        </Row>
      </Col>
    </>
  );
};

export default Login;
