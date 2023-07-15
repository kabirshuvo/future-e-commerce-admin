"use client";

import Divider from "./components/Divider/page";

export default function Error(){
    return(
        <div className="bg-blue-900 w-screen h-screen flex flex-col justify-center items-center ">
             <Divider/>
        <br />
            <h1>Error Opps ! </h1>
            <p>Something went wrong !!!</p>
        <br />
        refresh the page to try again
            <Divider/>
        </div>
    )
}