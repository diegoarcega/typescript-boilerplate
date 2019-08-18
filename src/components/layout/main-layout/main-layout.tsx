// @ts-ignore
import { Container, Row, Col } from 'react-awesome-styled-grid'
import React from 'react'

export default ({ children }: any) => (
  <Container>
    <Row>
      <Col>{children}</Col>
    </Row>
  </Container>
)
