// @ts-ignore
import { Container, Row, Col } from 'react-awesome-styled-grid'
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export default ({ children }: any) => (
  <Fragment>
    <Container>
      <Row>
        <Col>
          <ul style={{ display: 'flex', justifyContent: 'space-between', listStyle: 'none' }}>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/login">login</Link>
            </li>
            <li>
              <Link to="/signup">signup</Link>
            </li>
            <li>
              <Link to="/dashboard">dashboard</Link>
            </li>
            <li>
              <Link to="/logout">logout</Link>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
    <Container fluid>
      <Row>
        <Col>{children}</Col>
      </Row>
    </Container>
  </Fragment>
)
