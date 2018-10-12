import React from "react";
import {
  Alert,
  Card,
  CardTitle,
  CardBody,
  CardHeader,
  Row,
  Col
} from "reactstrap";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";

import { PanelHeader, Button } from "components";

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
      <div>
        <PanelHeader
          content={
            <div className="header text-center">
              <h2 className="title"></h2>
              <p className="category">
                Please Checkout{" "}
                <a
                  href="https://github.com/creativetimofficial/react-notification-alert"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Full Documentation
                </a>.
              </p>
            </div>
        
          }
        />
        <div className="content">
          <NotificationAlert ref="notificationAlert" />
            <Col md={12} xs={12}>
              <Card>
                <CardBody>
                  <div className="places-buttons">
                    <Row>
                      <Col md={6} className="ml-auto mr-auto text-center">
                        <CardTitle tag="h4">
                          Notifications Places
                          <p className="category">
                            Click to view notifications
                          </p>
                        </CardTitle>
                        
                         <Alert
                            color="info"
                            className="alert-with-icon"
                            isOpen={this.state.visible}
                            toggle={this.onDismiss}
                          >
                            <span
                              data-notify="icon"
                              className="now-ui-icons ui-1_bell-53"
                            />
                            <span data-notify="message">
                              This is a notification with close button and icon and have
                              many lines. You can see that the icon and the close button
                              are always vertically aligned. This is a beautiful
                              notification. So you don't have to worry about the style.
                            </span>
                          </Alert>

                        
                      </Col>
                    </Row>
                  </div>
                </CardBody>
              </Card>
            </Col>
          
        </div>
      </div>
    );
  }
}

export default Notifications;
