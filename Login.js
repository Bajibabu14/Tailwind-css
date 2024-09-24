import React from 'react'

function project(){
    return(
        <div className="border-solid border-2 h-65 w-80 mt-36 mx-auto bg-white">
            <h1 className="pt-5 font-bold text-3xl">Login </h1>
            <input type="text" placeholder="Email/Username" className="border-solid border-black border-2 mt-5 w-4/5 rounded-lg px-3 h-10" />
            <br></br>
            <input type="password" placeholder="password" className="border-solid border-black border-2 mt-5 w-4/5 rounded-lg px-3 h-10" />
            <br></br>
            <button className=" mt-7 w-4/5 rounded-lg h-10 text-white bg-orange-600 hover:bg-red-950" >Login</button>
            <br></br>
            <a href="www.google.com" className="text-sky-500">Forgot password</a>

            <br></br>
            <br></br>
            <hr></hr>
            
            <p>Don't have an account</p>
            <button className=" mt-4 mb-4 w-4/5 rounded-lg h-10 text-white bg-orange-600 hover:bg-red-950">Create an account</button>

        </div>

    );   
}

export default project;   