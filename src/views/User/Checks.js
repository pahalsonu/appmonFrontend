import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardFooter,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Container,
  Row,
} from "reactstrap";
// core components

import { Link } from "react-router-dom";

class Checks extends React.Component {
  state = {
    dropA1: false,
    dropA2: false,
    dropA3: false,
    dropA4: false,
    dropA5: false,
    dropP1: false,
    dropP2: false,
    dropP3: false,
    dropP4: false,
    dropP5: false,
  };
  toggle = (dropDown) => {
    this.setState({ [dropDown]: !this.state[dropDown] });
  };
  render() {
    return (
      <>
        {/* Page content */}
        <Container className="mt--7" fluid>
          {/* Table */}
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">Active Checks</h3>
                </CardHeader>
                <Table
                  className="align-items-center table-flush table-hover"
                  responsive
                >
                  <thead class="thead-light">
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Protocol</th>
                      <th scope="col">Method</th>
                      <th scope="col">Success Codes</th>
                      <th scope="col">Timeout</th>
                      <th scope="col">Status changed</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="table-row">
                      <th scope="row">
                        <Link to="/dashboard/checks/id">Argon API</Link>
                      </th>
                      <td>HTTP</td>
                      <td>GET</td>
                      <td>200, 201, 202</td>
                      <td>3</td>
                      <td>30 mins ago</td>
                      <td>
                        <i class="fas fa-check-circle text-success mr-1"></i> Up
                      </td>
                      <td>
                        <Dropdown
                          isOpen={this.state.dropA1}
                          toggle={() => {
                            this.toggle("dropA1");
                          }}
                        >
                          <DropdownToggle caret color="primary">
                            Actions
                          </DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem>Edit</DropdownItem>
                            <DropdownItem>Delete</DropdownItem>
                          </DropdownMenu>
                        </Dropdown>
                      </td>
                    </tr>
                    <tr class="table-row">
                      <th scope="row">
                        <Link to="/dashboard/checks/id">THS API</Link>
                      </th>
                      <td>HTTP</td>
                      <td>GET</td>
                      <td>200, 201, 202</td>
                      <td>3</td>
                      <td>30 mins ago</td>
                      <td>
                        <i class="fas fa-times-circle text-danger mr-1"></i>
                        Down
                      </td>
                      <td>
                        <Dropdown
                          isOpen={this.state.dropA2}
                          toggle={() => {
                            this.toggle("dropA2");
                          }}
                        >
                          <DropdownToggle caret color="primary">
                            Actions
                          </DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem>Edit</DropdownItem>
                            <DropdownItem>Delete</DropdownItem>
                          </DropdownMenu>
                        </Dropdown>
                      </td>
                    </tr>
                    <tr class="table-row">
                      <th scope="row">
                        <Link to="/dashboard/checks/id">Random Service</Link>
                      </th>
                      <td>HTTP</td>
                      <td>GET</td>
                      <td>200, 201, 202</td>
                      <td>3</td>
                      <td>6 hours ago</td>
                      <td>
                        <i class="fas fa-check-circle text-success mr-1"></i> Up
                      </td>
                      <td>
                        <Dropdown
                          isOpen={this.state.dropA3}
                          toggle={() => {
                            this.toggle("dropA3");
                          }}
                        >
                          <DropdownToggle caret color="primary">
                            Actions
                          </DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem>Edit</DropdownItem>
                            <DropdownItem>Delete</DropdownItem>
                          </DropdownMenu>
                        </Dropdown>
                      </td>
                    </tr>
                    <tr class="table-row">
                      <th scope="row">
                        <Link to="/dashboard/checks/id">Cool Service</Link>
                      </th>
                      <td>HTTP</td>
                      <td>GET</td>
                      <td>200, 201, 202</td>
                      <td>3</td>
                      <td>3 secs ago</td>
                      <td>
                        <i class="fas fa-times-circle text-danger mr-1"></i>
                        Down
                      </td>
                      <td>
                        <Dropdown
                          isOpen={this.state.dropA4}
                          toggle={() => {
                            this.toggle("dropA4");
                          }}
                        >
                          <DropdownToggle caret color="primary">
                            Actions
                          </DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem>Edit</DropdownItem>
                            <DropdownItem>Delete</DropdownItem>
                          </DropdownMenu>
                        </Dropdown>
                      </td>
                    </tr>
                    <tr class="table-row">
                      <th scope="row">
                        <Link to="/dashboard/checks/id">Good Stuff</Link>
                      </th>
                      <td>HTTPS</td>
                      <td>POST</td>
                      <td>400, 404</td>
                      <td>5</td>
                      <td>3 days ago</td>
                      <td>
                        <i class="fas fa-check-circle text-success mr-1"></i> Up
                      </td>
                      <td>
                        <Dropdown
                          isOpen={this.state.dropA5}
                          toggle={() => {
                            this.toggle("dropA5");
                          }}
                        >
                          <DropdownToggle caret color="primary">
                            Actions
                          </DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem>Edit</DropdownItem>
                            <DropdownItem>Delete</DropdownItem>
                          </DropdownMenu>
                        </Dropdown>
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <CardFooter className="py-4">
                  <nav aria-label="...">
                    <Pagination
                      className="pagination justify-content-end mb-0"
                      listClassName="justify-content-end mb-0"
                    >
                      <PaginationItem className="disabled">
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          tabIndex="-1"
                        >
                          <i className="fas fa-angle-left" />
                          <span className="sr-only">Previous</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem className="active">
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          1
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          2 <span className="sr-only">(current)</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          3
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-angle-right" />
                          <span className="sr-only">Next</span>
                        </PaginationLink>
                      </PaginationItem>
                    </Pagination>
                  </nav>
                </CardFooter>
              </Card>
            </div>
          </Row>
          {/* T2 */}
          <Row className="mt-5">
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">Paused Checks</h3>
                </CardHeader>
                <Table
                  className="align-items-center table-flush table-hover"
                  responsive
                >
                  <thead class="thead-light">
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Protocol</th>
                      <th scope="col">Method</th>
                      <th scope="col">Success Codes</th>
                      <th scope="col">Timeout</th>
                      <th scope="col">Status changed</th>
                      <th scope="col">Status</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="table-row">
                      <th scope="row">
                        {" "}
                        <Link to="/dashboard/checks/id">Argon API</Link>
                      </th>
                      <td>HTTP</td>
                      <td>GET</td>
                      <td>200, 201, 202</td>
                      <td>3</td>
                      <td>30 mins ago</td>
                      <td>
                        <i class="fas fa-pause-circle text-warning mr-1"></i>
                        Paused
                      </td>
                      <td>
                        <Dropdown
                          isOpen={this.state.dropP1}
                          toggle={() => {
                            this.toggle("dropP1");
                          }}
                        >
                          <DropdownToggle caret color="primary">
                            Actions
                          </DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem>Edit</DropdownItem>
                            <DropdownItem>Delete</DropdownItem>
                          </DropdownMenu>
                        </Dropdown>
                      </td>
                    </tr>
                    <tr class="table-row">
                      <th scope="row">
                        {" "}
                        <Link to="/dashboard/checks/id">THS API</Link>
                      </th>
                      <td>HTTP</td>
                      <td>GET</td>
                      <td>200, 201, 202</td>
                      <td>3</td>
                      <td>30 mins ago</td>
                      <td>
                        <i class="fas fa-pause-circle text-warning mr-1"></i>
                        Paused
                      </td>
                      <td>
                        <Dropdown
                          isOpen={this.state.dropP2}
                          toggle={() => {
                            this.toggle("dropP2");
                          }}
                        >
                          <DropdownToggle caret color="primary">
                            Actions
                          </DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem>Edit</DropdownItem>
                            <DropdownItem>Delete</DropdownItem>
                          </DropdownMenu>
                        </Dropdown>
                      </td>
                    </tr>
                    <tr class="table-row">
                      <th scope="row">
                        {" "}
                        <Link to="/dashboard/checks/id">Random Service</Link>
                      </th>
                      <td>HTTP</td>
                      <td>GET</td>
                      <td>200, 201, 202</td>
                      <td>3</td>
                      <td>6 hours ago</td>
                      <td>
                        <i class="fas fa-pause-circle text-warning mr-1"></i>
                        Paused
                      </td>
                      <td>
                        <Dropdown
                          isOpen={this.state.dropP3}
                          toggle={() => {
                            this.toggle("dropP3");
                          }}
                        >
                          <DropdownToggle caret color="primary">
                            Actions
                          </DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem>Edit</DropdownItem>
                            <DropdownItem>Delete</DropdownItem>
                          </DropdownMenu>
                        </Dropdown>
                      </td>
                    </tr>
                    <tr class="table-row">
                      <th scope="row">
                        {" "}
                        <Link to="/dashboard/checks/id">Cool Service</Link>
                      </th>
                      <td>HTTP</td>
                      <td>GET</td>
                      <td>200, 201, 202</td>
                      <td>3</td>
                      <td>3 secs ago</td>
                      <td>
                        <i class="fas fa-pause-circle text-warning mr-1"></i>
                        Paused
                      </td>
                      <td>
                        <Dropdown
                          isOpen={this.state.dropP4}
                          toggle={() => {
                            this.toggle("dropP4");
                          }}
                        >
                          <DropdownToggle caret color="primary">
                            Actions
                          </DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem>Edit</DropdownItem>
                            <DropdownItem>Delete</DropdownItem>
                          </DropdownMenu>
                        </Dropdown>
                      </td>
                    </tr>
                    <tr class="table-row">
                      <th scope="row">
                        {" "}
                        <Link to="/dashboard/checks/id">Good Stuff</Link>
                      </th>
                      <td>HTTPS</td>
                      <td>POST</td>
                      <td>400, 404</td>
                      <td>5</td>
                      <td>3 days ago</td>
                      <td>
                        <i class="fas fa-pause-circle text-warning mr-1"></i>
                        Paused
                      </td>
                      <td>
                        <Dropdown
                          isOpen={this.state.dropP5}
                          toggle={() => {
                            this.toggle("dropP5");
                          }}
                        >
                          <DropdownToggle caret color="primary">
                            Actions
                          </DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem>Edit</DropdownItem>
                            <DropdownItem>Delete</DropdownItem>
                          </DropdownMenu>
                        </Dropdown>
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <CardFooter className="py-4">
                  <nav aria-label="...">
                    <Pagination
                      className="pagination justify-content-end mb-0"
                      listClassName="justify-content-end mb-0"
                    >
                      <PaginationItem className="disabled">
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          tabIndex="-1"
                        >
                          <i className="fas fa-angle-left" />
                          <span className="sr-only">Previous</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem className="active">
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          1
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          2 <span className="sr-only">(current)</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          3
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-angle-right" />
                          <span className="sr-only">Next</span>
                        </PaginationLink>
                      </PaginationItem>
                    </Pagination>
                  </nav>
                </CardFooter>
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default Checks;