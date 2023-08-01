import React, { useEffect } from 'react'
import { Container, Button } from 'reactstrap'


//to call a function we can call it inside useEffect function
const Home= () =>{
    useEffect(() => {
        document.title = "Home || Course Application";
    }, []);
    return(
        <div>
            <section className='text-center'>
                <h1 className='display-3'>My Courses</h1>
                <p>This is a project for learning react</p>
            <Container>
                <Button color='primary' outline>Continue</Button>
            </Container>
            </section>
        </div>
    );
};

export default Home;
