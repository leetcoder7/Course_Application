import React from 'react'
import { Link } from 'react-router-dom';
import { ListGroup } from 'reactstrap';

const Menus = ()=>{
    return(
        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to="/" action>
                    Home
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/add-course" action>
                    Add Course
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/view-course" action>
                    View Courses
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="#" action>
                    About
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="#" action>
                    Contact
            </Link>
        </ListGroup>
    )
}

//to stop the loading while select multiple options we uses Link and insted of href used to
//to select the same item in multiple lines click alt+select

export default Menus;