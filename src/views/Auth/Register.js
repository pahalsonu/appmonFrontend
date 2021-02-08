import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Form, FormGroup, Label, Input, FormText, Row, Container, Col, InputGroup, InputGroupAddon, Button, InputGroupText } from 'reactstrap';

export class Register extends Component {
    render() {
        return (
            <>
                <Container>
                    <Row className="justify-content-center mt--8 pb-5 " >
                        <Form className="bg-secondary card border-0 mb-0 px-lg-5 py-lg-5 col-md-7 col-lg-7">
                            <FormGroup className="text-center mt-2 text-muted mb-4 ">
                                <Label for="information">Sign up by providing following details</Label>
                            </FormGroup>
                            <Row    >
                                <Col className="d-lg-flex ml-2" >
                                    <FormGroup>
                                        <Label className="labels " for="Account">Account Type</Label>
                                    </FormGroup>
                                    <FormGroup check className="custom-control custom-radio ml-5">
                                        <Label for="individualRadio" className="custom-control-label" check>
                                            <Input type="radio" name="radio1" className="custom-control-input"
                                                id="individualRadio" />{' '}
                                     Individual
                                     </Label>
                                    </FormGroup>
                                    <FormGroup check className="custom-control custom-radio ml-5">
                                        <Label check>
                                            <Input type="radio" name="radio1" />{' '}
                                           Organization
                                    </Label>
                                    </FormGroup>
                                </Col>

                            </Row>
                            <Row>
                                <Col d-lg-flex>
                                    <FormGroup>
                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>  <i className="ni ni-hat-3"></i></InputGroupText>
                                            </InputGroupAddon>
                                            <Input placeholder="First Name"
                                                type="text" />
                                        </InputGroup>
                                    </FormGroup>
                                </Col>
                                <Col d-lg-flex>
                                    <FormGroup>
                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>  <i className="ni ni-hat-3"></i></InputGroupText>
                                            </InputGroupAddon>
                                            <Input placeholder="Last Name"
                                                type="text" />
                                        </InputGroup>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <FormGroup>
                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>  <i className="ni ni-email-83"></i></InputGroupText>
                                            </InputGroupAddon>
                                            <Input placeholder="Email"
                                                type="email" />
                                        </InputGroup>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <FormGroup>
                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>  <i className="ni ni-mobile-button"></i></InputGroupText>
                                            </InputGroupAddon>
                                            <Input placeholder="Mobile Number"
                                                type="number" />
                                        </InputGroup>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col d-lg-flex>
                                    <FormGroup>
                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>  <i className="ni ni-lock-circle-open"></i></InputGroupText>
                                            </InputGroupAddon>
                                            <Input placeholder="Password"
                                                type="password" />
                                        </InputGroup>
                                    </FormGroup>
                                </Col>
                                <Col d-lg-flex>
                                    <FormGroup>
                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>  <i className="ni ni-lock-circle-open"></i></InputGroupText>
                                            </InputGroupAddon>
                                            <Input placeholder="Confirm Password"
                                                type="password" />
                                        </InputGroup>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <FormText className="text-muted font-italic">
                                        password strength:
                                        <span className="text-success font-weight-700">strong</span>
                                    </FormText>
                                </Col>
                            </Row>
                            <Row className="my-4">
                                <Col>
                                    <FormGroup className="custom-control custom-control-alternative custom-checkbox">
                                        <Label for="customCheckRegister" className="custom-control-label" check>
                                            <Input type="checkbox" name="radio1" className="custom-control-input"
                                                id="customCheckRegister" />{' '}
                                            <span className="text-muted">
                                                I agree with the
                        <a href="./Terms.html">Privacy Policy</a>
                                            </span>
                                        </Label>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <FormText className="text-muted font-italic">
                                        Optional: Enter a Url to begin monitoring
                                        
                                    </FormText>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <FormGroup>
                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>  <i className="ni ni-mobile-button"></i></InputGroupText>
                                            </InputGroupAddon>
                                            <Input placeholder="Url"
                                                type="text" />
                                        </InputGroup>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="text-center">
                                <button type="submit" className="btn btn-primary mt-4">
                  Create account
                </button>
                                </Col>
                            </Row>
                            
                        </Form>
            
             
                    </Row>
                    <Row className="mt-3">
          <Col lg="6" mg="6">
            <Link to="./forgotPassword" className="text-light">
              <small>Forgot password?</small>
            </Link>
          </Col>
          <Col lg="6" mg="6" className="text-right">
            <Link to="./register" className="text-light">
              <small>Create new account</small>
            </Link>
          </Col>
        </Row>
          
                </Container>
            </>
        )
    }
}

export default Register
