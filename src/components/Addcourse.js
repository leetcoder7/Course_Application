import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'
import { Button, Container, Form, FormGroup, Input } from 'reactstrap'
import base_url from '../api/bootapi';
import { toast } from 'react-toastify';

const Addcourse=()=>{
    useEffect(() => {
        document.title = "Add Courses";
    }, []);

    const [course, setCourse] = useState({}); // {} this is just a black object
    //form handler function
    const handleForm=(e)=>{
        console.log(course);
        postDatatoServer(course);
        e.preventDefault();
    }
    //when we will submit the form the course we will pass the courses will be saved and go to server

    //creating function to post data on server
    const postDatatoServer=(data)=>{
        axios.post(`${base_url}/courses, data`).then(
            (response)=>{
                console.log("Data posted successfully", response)
                toast.success("course added successfully")
                setCourse({ id:"", title:"", description:"" }) //blank object for the auto-blank after saving a course
            },
            (error) =>{
                console.log("error while posting the course", error);
                toast.error("something went wrong")

            }
        )
    }

    return(
        <Fragment>
            <h1 className="text-center my-3">Fill Course Detail</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label>Course ID</label>
                    <Input type="text"  placeholder="enter here" name="id" id="userId" 
                    onChange= {(e) =>{
                        setCourse({...course, id: e.target.value})
                    }} />
                </FormGroup>
                <FormGroup>
                    <label for="title">Course Title</label>
                    <Input type="text" placeholder="Enter title here" id="title" 
                    onChange={(e) =>{
                        setCourse({...course, title: e.target.value })
                    }}/>
                </FormGroup>
                <FormGroup>
                    <label for="description">Course Description</label>
                    <Input type="textarea" placeholder="Enter description here" id="description" style={{height: 150}} 
                    onChange={(e)=>{
                        setCourse({...course, description: e.target.value})
                    }}/>
                </FormGroup>
                <Container className="text-center">
                    <Button type="submit" color="success">Add Course</Button>
                    <Button color="warning mx-2" type="reset" 
                    onClick={()=>{
                        setCourse({ id:"", title:"", description:"" })
                    }}>Clear</Button>
                </Container>
            </Form>
        </Fragment>
    );
    // if any change will be change on input and id then we also have to change the course id
    //... is old data
};



export default Addcourse;
