import React from "react"
import { Card, CardBody } from "reactstrap";

//component
function Header({ name, title }) {  
    // to get the dynamic value we have to do object destructuring
    return (
        <div>
            <Card className="my-2 bg-success">
                <CardBody>
                <h1 className="text-center my-3">Course Application</h1> 
                </CardBody> 
            </Card>
        </div>
    )
}

export default Header;


