import React from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Allcourses from './Components/Allcourses';
import AddCourse from './Components/AddCourse';
import { Col, Container, Row } from 'reactstrap';
import Menus from './Components/Menus';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Course from './Components/Course';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
      <Router>
        <Container>
        <Header />
          <Row>
            <Col md={4}>
              <Menus />
            </Col>
            <Col md={8}>
                <Switch>

                  <Route path="/" component={Home} exact />
                  <Route path="/add-course" component={AddCourse} exact />
                  <Route path='/view-courses' component={Allcourses} exact />
                  <Route path='/course' exact>
                    <Course />
                  </Route>

                </Switch>
                
            </Col>
          </Row>
        </Container>
        <ToastContainer />
      </Router>
  );
}

export default App;
