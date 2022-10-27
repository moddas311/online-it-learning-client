import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { BsCloudDownload } from 'react-icons/bs';
import { Button } from 'react-bootstrap';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const CourseDetails = () => {

    const course = useLoaderData();
    const { name, description, price } = course;



    return (
        <div className="card mt-5 " ref={ref}>
            <div className="card-body">
                <h5>{name}</h5>
                <p>{description}</p>
                <p><small>This is Our course: {price}</small></p>

                <div className='d-flex justify-content-evenly'>
                    <Pdf targetRef={ref} filename="code-example.pdf">
                        {({ toPdf }) => <Button onClick={toPdf} className="btn btn-light"><BsCloudDownload /> Download Pdf</Button>}
                    </Pdf>
                    <Link to='premium' className="btn btn-dark">Get Premium</Link>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;




