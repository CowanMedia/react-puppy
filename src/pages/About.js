import React from 'react';
import Hero from '../components/Hero';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col'

const About = () => 
    <div>
    <Hero backgroundImage="https://i.imgur.com/qkdpN.jpg">
        <h1>Pupster</h1>
        <h2>They're good boys and girls</h2>
    </Hero>

    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1>Welcome to Pupster</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <p>Lorem ipsum dolor sit amet, an mel vocent tritani menandri. Usu an oportere intellegebat, et eam case verear. Etiam iudico sed et, ea vel case dicant. Sea et exerci ceteros.
          </p>
          <p>Platonem tractatos dignissim et nec. Alterum dissentiunt ex vim. Te quo dicta impedit patrioque, ne vix adhuc impetus apeirian. Quas brute simul in sit.
          </p>
          <p>Cu mea dicat tamquam legendos, utinam commodo cu per. Corpora maluisset interesset ut has. Blandit persecuti moderatius ea quo, eu mei mucius probatus percipitur, nec oportere senserit id. Mazim praesent ad duo, eam ex agam partem nostro.

          </p>
        </Col>
      </Row>

    </Container>
    </div>

    export default About;