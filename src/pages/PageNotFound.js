import React from 'react'
import pagenotfoundImage from "../image/Illustration 404NotFound.png";
import "./PageNotFound.css"

const PageNotFound = () => {
    return (

        <div className="pageNotFound">

            <h1>Oops..! 404 Page Not Found</h1>
            <img src={pagenotfoundImage} height="400" width="400" alt="not found" />
        </div>
    )
}

export default PageNotFound;
