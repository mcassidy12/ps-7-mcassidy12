import React, { Component } from 'react';
import * as d3 from 'd3';
import { Card, Button, CardBody, CardTitle, CardText, Col } from 'reactstrap';

export class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    componentDidMount() {
        d3.csv("projects.csv").then((d) => {
            this.setState({ data: d });
        });
    }
    render() {
        console.log(this.state.data)
        return <div className="container">Projects
                 { this.state.data.map((d, i) => {
                       return <Col sm="6" key={ "project" + i }>
                              <Card>
                                <CardBody>
                                  <CardTitle>
                                    { d.Title }
                                  </CardTitle>
                                  <CardText>
                                    { d.Description }
                                  </CardText>
                                  <a target="_blank" href={ d.Link }>
                                    <Button>Link</Button>
                                  </a>
                                </CardBody>
                              </Card>
                              <br/>
                              </Col>
                   
                   }) }
               </div>
    }
}