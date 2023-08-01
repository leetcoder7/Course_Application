import axios from 'axios';
import React from 'react'
import {
    Card,
    CardBody,
   // CardTitle,
    CardSubtitle,
    CardText,
    //CardFooter,
    Button,
    Container,
} from "reactstrap";
import base_url from '../api/bootapi';
import { toast } from 'react-toastify';

const Course = ( {course, update} ) =>{

    const deleteCourse=(id)=>{
        axios.delete(`${base_url}/courses/{id}`).then(
            (response)=>{
                toast.success("course deleted")
                update(id)
            },
            (error)=>{
                toast.error("Internal server error")
            }
        )
    }
    return(
        <Card className="text-center">
            <CardBody>
                <CardSubtitle className="fontWeight-bold" color="warning">{course.title}</CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container className="text-center">
                    <Button color="danger" onClick={()=>{
                        deleteCourse(course.id);
                    }}>Delete</Button>
                    <Button color="warning mx-2">Update</Button> {/*ml-margin left*/}
                </Container>
            </CardBody>
        </Card>
    );
};

export default Course;
















