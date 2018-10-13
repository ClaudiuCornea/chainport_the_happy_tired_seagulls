import React from "react";
import { Card, CardHeader, Row, Col } from "reactstrap";

import { PanelHeader } from "components";

class Icons extends React.Component {
  render() {
    return (
      <div>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col md={12}>
              <Card>
                <CardHeader>
                  <h5 className="title">Cause You Have To Go With The Flow  </h5>
                  <p className="category">
                    Weather of this gorgeous day
                   
                  </p>
                </CardHeader>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Icons;
