import React from "react";
import {
  Alert,
  Card,
  CardTitle,
  CardBody,
  CardHeader,
  Container,
  Row,
  Col
} from "reactstrap";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";

import { PanelHeader } from "components";


class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    };
    this.onDismiss = this.onDismiss.bind(this);
    this.notify = this.notify.bind(this);
  }
  onDismiss() {}
  notify(place) {
    var color = Math.floor(Math.random() * 5 + 1);
    var type;
    switch (color) {
      case 1:
        type = "primary";
        break;
      case 2:
        type = "success";
        break;
      case 3:
        type = "danger";
        break;
      case 4:
        type = "warning";
        break;
      case 5:
        type = "info";
        break;
      default:
        break;
    }
    var options = {};
    options = {
      place: place,
      message: (
        <div>
          <div>
            Welcome to <b>Now UI Dashboard React</b> - a beautiful freebie for
            every web developer.
          </div>
        </div>
      ),
      type: type,
      icon: "now-ui-icons ui-1_bell-53",
      autoDismiss: 7
    };
    this.refs.notificationAlert.notificationAlert(options);
  }
    
  render() {
    return (
      <div >
        <PanelHeader
          content={
            <div className="header text-center">
              <h2 className="title"></h2>
              <p className="category">
              </p>
            </div>
            }
        />
        <div className="content">
          <NotificationAlert ref="notificationAlert" />
             <Card>
                <CardBody>
                         <Row>
                      <Col md={5} className="ml-auto mr-auto text-center ">
                        <CardTitle tag="h4">
                          Environment & technologies
                          <p className="category text-center">
                            Save the world, think about panda 
                          </p>
                        </CardTitle>
                          
                      </Col>
                    </Row> 
                          
                </CardBody>
            
              </Card>
              
              
              <Card>
                <CardBody>
                  <div className="places-buttons">
                    
                    <Row className="container-fluid text-center"> 
                        
                           
                        </Row>
                         <Row className="container-fluid text-center"> 
                        
                            <Col md={10} className="container-fluid text-center" >
                            <Alert color="info">
                             
                              <p>TO RECHARGE YOUR MOBILE </p>
                              <span>
                              Today, you have to get 67 Kw/H during 3 hours to charge a smartphone.
                              </span>
                                <p >
                                 →→→ It's equals to 10 hours of sunshining    
                                </p>
                                </Alert>
                                </Col>
                                <Col md={2} className="container-fluid text-center">

                                </Col>
                          
                            
                        </Row>
                          
                  </div>
                </CardBody>
              </Card>
              
              <Card>
                <CardBody>
                         <Row className="container-fluid text-center"> 
                        
                            <Col md={10} className="container-fluid text-center" >
                            <Alert color="info">
                            
                              <p>TO RECHARGE YOUR LAPTOP</p>
                             <span>
                              Today, you have to get 200 Kw/H during 5 hours to charge a basic laptop.
                              </span>
                                <p >
                                 →→→ It's equals to 45 hours of sunshining    
                                </p>
                            </Alert>
                            </Col>
                            <Col md={2} className="container-fluid text-center">
                               
                            </Col>
                           
                          
                            
                        </Row>
                          
                </CardBody>
              </Card>
              
                 <Card>
                <CardBody>
                         <Row className="container-fluid text-center"> 
                        
                            <Col md={10} className="container-fluid text-center" >
                            <Alert color="info">
                            <p> TO GRILL YOUR BREAD </p>
                            <span>
                              Today, you have to get 20 Kw/H during 0,1 hours to Grill 2 slices of bread.
                              </span>
                                <p >
                                 →→→ It's equals to 10 hours of sunshining    
                                </p>
                            </Alert>
                            </Col>
                            <Col md={2} className="container-fluid text-center">
                               
                            </Col>
                           
                          
                            
                        </Row>
                          
                </CardBody>
              </Card>
              
                 <Card>
                <CardBody>
                         <Row className="container-fluid text-center"> 
                        
                            <Col md={10} className="container-fluid text-center" >
                            <Alert color="info">
                             
                              <p>TO RECHARGE YOUR ELECTRIC BIKE </p>
                               <span>
                              Today, you have to get 356 Kw/H during 10 hours to charge a Bike.
                              </span>
                                <p >
                                 →→→  It's equals to 67 hours of sunshining    
                                </p>
                            </Alert>
                            </Col>
                            <Col md={2} className="container-fluid text-center">
                               
                            </Col>
                           
                          
                            
                        </Row>
                          
                </CardBody>
              </Card>
              
            
              
              
        </div>
      </div>
    );
  }
}

export default Notifications;
