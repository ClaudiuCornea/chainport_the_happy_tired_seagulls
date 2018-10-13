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
                             <span >
                              This is a notification with close button and icon and have
                              many lines. You can see that the icon and the close button
                              are always vertically aligned. This is a beautiful
                              notification. So you don't have to worry about the style.
                            </span>
                            </Alert>
                            </Col>
                            <Col md={2} className="container-fluid text-center">
                               <Alert color="info">
                                <span> BIDOU </span>
                                </Alert>
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
                             <span >
                              This is a notification with close button and icon and have
                              many lines. You can see that the icon and the close button
                              are always vertically aligned. This is a beautiful
                              notification. So you don't have to worry about the style.
                            </span>
                            </Alert>
                            </Col>
                            <Col md={2} className="container-fluid text-center">
                               <Alert color="info">
                                <span> BIDOU </span>
                                </Alert>
                            </Col>
                          
                            
                        </Row>
                          
                </CardBody>
              </Card>
              
                 <Card>
                <CardBody>
                         <Row className="container-fluid text-center"> 
                        
                            <Col md={10} className="container-fluid text-center" >
                            <Alert color="info">
                             <span >
                              This is a notification with close button and icon and have
                              many lines. You can see that the icon and the close button
                              are always vertically aligned. This is a beautiful
                              notification. So you don't have to worry about the style.
                            </span>
                            </Alert>
                            </Col>
                            <Col md={2} className="container-fluid text-center">
                               <Alert color="info">
                                <span> BIDOU </span>
                                </Alert>
                            </Col>
                          
                            
                        </Row>
                          
                </CardBody>
              </Card>
              
                 <Card>
                <CardBody>
                         <Row className="container-fluid text-center"> 
                        
                            <Col md={10} className="container-fluid text-center" >
                            <Alert color="info">
                             <span >
                              This is a notification with close button and icon and have
                              many lines. You can see that the icon and the close button
                              are always vertically aligned. This is a beautiful
                              notification. So you don't have to worry about the style.
                            </span>
                            </Alert>
                            </Col>
                            <Col md={2} className="container-fluid text-center">
                               <Alert color="info">
                                <span> BIDOU </span>
                                </Alert>
                            </Col>
                          
                            
                        </Row>
                          
                </CardBody>
              </Card>
              
                 <Card>
                <CardBody>
                         <Row className="container-fluid text-center"> 
                        
                            <Col md={10} className="container-fluid text-center" >
                            <Alert color="info">
                             <span >
                              This is a notification with close button and icon and have
                              many lines. You can see that the icon and the close button
                              are always vertically aligned. This is a beautiful
                              notification. So you don't have to worry about the style.
                            </span>
                            </Alert>
                            </Col>
                            <Col md={2} className="container-fluid text-center">
                               <Alert color="info">
                                <span> BIDOU </span>
                                </Alert>
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
