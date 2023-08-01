import React, { useState, useEffect } from 'react'
import Course from "./course"

import base_url from './../api/bootapi';
import axios from 'axios';
import { toast } from 'react-toastify';

const Allcourse = () =>{
    useEffect(() => {
        document.title = "All Courses";
    }, []);

    //function to call the server
    const getAllCoursesFromServer = () =>{
        axios.get(`${base_url}/courses`).then(
            (response)=>{
                //for success
                console.log(response);
                console.log(response.data);
                toast.success("course has been loaded",{
                    position: "top-center",
                });
                setCourses(response.data); //here we are getting dynamic values from the restapi server
            },
            (error)=>{
                //for error
                console.log(error);
                toast.error("something went wrong",{
                    position: "top-center",
                });
            }
        );
    };
    //for calling only one time we used blank array []
    //calling loading course function
    useEffect(() => {
        getAllCoursesFromServer();
    }, []);

    const [courses,setCourses]=useState([]);

        //function to auto-update the course page after deleting the course
        const updateCourses=(id)=>{
            setCourses(courses.filter((c)=>c.id !== id));
        };
        //as we are now getting dynamic values we don't have to pass values here 
        // {title:"Java Course", description:"Demo course"}, /*here we are creating array of courses*/
        // {title:"React Course", description:"Demo course"},
        // {title:"Angular Course", description:"Demo course"}
     //by using useState we can create variable for this course

    return(
        <div>
            <h1>All courses</h1>
            <p>List of courses are as follows</p>

            {courses.length >0 
            ? courses.map((item)=> <Course key={item.id} course={item} update={updateCourses} />)
                 : "No courses"}

        </div>
    )
}

export default Allcourse;
