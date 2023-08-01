import logo from './logo.svg';
import './App.css';
import { Button, Col, Container, Row } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import home from  './components/home';
import Course from './components/course';
import Home from './components/home';
import Allcourse from "./components/AllCourses"
import Addcourse from './components/Addcourse';
import Header from './components/header';
import Menus from './components/Menus';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  const btnHandle = () =>{
      toast.success("success", {
        position: "top-center" // or bottom-left etc...
      });
  };

  //with the help of toast container messages will be visible
    return (
    <div>
      {/* <ToastContainer /> */}
      {/* <h1>This is botstrap components</h1>
      <Button color="primary" outline onClick={btnHandle}>
        React Button
      </Button> */}
      {/* importing component */}
      <BrowserRouter>
      <ToastContainer />
      <Container>
        <Header />
          <Row> {/* md-midium screen*/}
             <Col md={4}> 
             <Menus /> 
             </Col> 
             <Col md={8}>  
             <Routes> 
              <Route path="/" component={Home} exact />
              <Route path="/add-course" component={Addcourse} exact />
              <Route path="/view-course" component={Allcourse} exact />
            </Routes> 
             </Col>
          </Row> 
      </Container>      
      </BrowserRouter>
    </div>
  );

}

export default App; 
