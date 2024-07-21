
const App=()=>{
     return(
      <>
      </>
     )
}
export default App;





// npm i react-router-dom

/*import { useState } from "react";
import axios from "axios";
const App=()=>{
  const [input,setInput] = useState({})

  const handleInput=(e)=>{
    const name = e.target.name;
    const value = e.target.value;

     setInput((values)=>({...values,[name]:value}))
     console.log(input);

  }
  const handleSubmit=()=>{
      const api = "http://localhost:3000/student"
      axios.post(api,input).then((res)=>{
        console.log(res)
        alert("data Saave")
      })
  }
  return(
    <>
    Enter Roll No <input type="text" name="rollno"  value={input.rollno} onChange={handleInput}></input>
    <br></br>
    Enter Name  <input type="text" name="name"  value={input.name} onChange={handleInput}></input>
    <br></br>
    Enter City <input type="text" name="city"  value={input.city} onChange={handleInput}></input>
    <br></br>
    Enter fees <input type="text" name="fees"  value={input.fees} onChange={handleInput}></input>
    <br></br>
    <button onClick={handleSubmit}>Data Save</button>
    </>
  )
}
export default App;

*/




/*
import { useState , useEffect} from "react";
const App=()=>{
   const [name ,setname ] = useState("")
   const [city,setcity] = useState("")
  
    const handleSubmit=()=>{
      console.log({name:name, city:city})
    }
   
  return(
    <>
        <h1>Application form </h1>
        Enter name : <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}}></input>
        <br>
        </br>
        Enter city : <input type="text" value={city}  onChange={(e)=>{setcity(e.target.value)}}></input>
        <br></br>
      <button onClick={handleSubmit} >Submit Data</button>
    </>
  )
}
export default App;
*/



/*

import { useEffect ,useState } from "react";
const App=()=>{
     const [cnt ,setcnt] = useState(0)

  useEffect (()=>{
      setTimeout(()=>{
        setcnt(cnt+1)
      },500)
        
  },[])

  return(
    <>
    <h1>Welcome to Cybrom Bhopal!!!!!! : {cnt}</h1>
    </>
  )
}
export default App;

*/

/*
import { useState } from "react";
import Button from "react-bootstrap/Button"
const App=()=>{
  const [cnt ,setcnt] = useState(0)
  
  const mydec=()=>{
    if(cnt<=0){
      alert("No negative decrement");
    }
    else{
      setcnt(cnt-1);
    }
  }
 
  return(
    <>
      <h1 >My Counter program</h1>

      <h2>Count : {cnt}</h2>
      <Button type="button" className="btn btn-primary"  onClick={()=>{setcnt(cnt+1)}}>Incremnt</Button>
      <Button type="button" className="btn btn-secondary" onClick={mydec}>Decrement</Button>
      <Button type="button" className="btn btn-warning" onClick={()=>{setcnt(0)}}>Reset</Button>
      
      
    </>
  )
}

export default App;
*/


/*
// color change
import { useState } from "react";

const App=()=>{
  const [color ,setColor] = useState("red")

 
  return(
    <>
      <h1 style={{color:color}}>My Favourrite  : {color}</h1>

      <button onClick={()=>{setColor("green")}}>Green</button>
      <button onClick={()=>{setColor("yellow")}}>Yellow</button>
      <button onClick={()=>{setColor("pink")}}>Pink</button>
      <button onClick={()=>{setColor("blue")}}>blue</button>

    </>
  )
}

export default App;
*/


/*
Hook 

import { useState } from "react";

const App=()=>{
  const [name ,setname] = useState("Aman")

  const myName=()=>{
       setname("Gaurav")
  }
  return(
    <>
      <h1>Welcome  : {name}</h1>

      <button onClick={myName}>CLick Here</button>

    </>
  )
}

export default App;


*/




/*

import { BrowserRouter , Routes , Route } from "react-router-dom"

import Layout from "./Layout";
import Profile from "./Profile";
import Project from "./Project";
import Contact from "./Contact";
import Experience from "./Experience";

const App = () => {
    return (

      <BrowserRouter>
            <Routes>
                 <Route path="/" element={<Layout/>}> 
                    <Route index element={<Profile/>}/>
                    <Route path="/profile" element={<Profile/>} />
                    <Route path="/project" element={<Project/>} />
                    <Route path="/contact" element={<Contact/>} />
                    <Route path="/experience" element={<Experience/>}/>
                 </Route>   
            </Routes>
      </BrowserRouter>
    )
}

export default App;


*/





//

/*

import React from 'react';
import { DatePicker } from 'antd';
import { message, Button } from 'antd';
const App = () => {
  const info = () => {
    message.info('This is a normal message');
  };
  
  //return <DatePicker />;
  return(
    <>
   

  <Button type="primary" onClick={info}>
   Click me
  </Button>,
    

    </>
  )
  
};

export default App;

*/





/*import Container from 'react-bootstrap/Container';
import TopMenu from './Component/TopMenu';
import TopBanner from './Component/TopBanner';
import HomePageCard from './Component/HomePageCard';

const App=()=>{
     return(
      <>
      <Container>
        <TopMenu></TopMenu>
        <TopBanner></TopBanner>
       
        <HomePageCard></HomePageCard>
      </Container>
      
      </>
     )
}

export default App;

*/



/*  day 5


import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { Accordion , AccordionBody , AccordionHeader } from "react-bootstrap";
import Badge from 'react-bootstrap/Badge';

const App = () => {
    return (
       <>
        <h1> Here we are on the main Page </h1>
        <Button variant="primary"> Click here !!! </Button>
        <br /> <br />
        <Button variant="secondary"> Click here !!! </Button>
        <br /> <br />
        <Button variant="success"> Click here !!! </Button>
        <br /> <br />
        <Button variant="dark"> Click here !!! </Button>
        <br /> <br />
        <Button variant="info"> Click here !!! </Button>
        <br /> <br />
        <Button variant="warning"> Click here !!! </Button>
        <br /> <br />
        <Button variant="danger" dismissible>  Click here !!! </Button>
        <br /><br />

      <Alert variant="danger">
           This is the Alert That we got 
      </Alert>
      <Alert variant="warning">
           This is the Alert That we got 
      </Alert>
      <Alert variant="success">
           This is the Alert That we got 
      </Alert> 
      <Alert variant="info">
           This is the Alert That we got 
      </Alert>


       <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>  


      <h1>
        Example heading <Badge bg="secondary">New</Badge>
      </h1>
      <h2>
        Example heading <Badge bg="secondary">New</Badge>
      </h2>
      <h3>
        Example heading <Badge bg="secondary">New</Badge>
      </h3>
      <h4>
        Example heading <Badge bg="secondary">New</Badge>
      </h4>
      <h5>
        Example heading <Badge bg="secondary">New</Badge>
      </h5>
      <h6>
        Example heading <Badge bg="secondary">New</Badge>
      </h6>
      
        
        

       </>
    )
}

export default App;
*/

//========================================================================================



//  Day 3 

/*

const  students = [
  {
    "rollno":201,
    "Name":"Aman",
    "Age": 234
  },
  {
    "rollno":201,
    "Name":"Aman",
    "Age": 234
  }
  ,{
    "rollno":201,
    "Name":"Aman",
    "Age": 234
  },
  {
    "rollno":201,
    "Name":"Aman",
    "Age": 234
  },
  {
    "rollno":201,
    "Name":"Aman",
    "Age": 234
  }
]

const ans = students.map((key)=>{
        return(
          <>
           <tr>
            <td>{key.rollno}</td>
            <td>{key.Name}</td>
            <td>{key.Age}</td>
           </tr>
          </>
        )
})
const App=()=>{
  return(
    <>
    <h1>This is A Map() Method  </h1>
    <table border="1" width="300px" bgcolor="pink">
      <tr>
        <th>Roll No</th>
        <th>Name</th>
        <th>Age</th>
      </tr>
     {ans} 
    </table>
    </>
  )
}
export default App;

*/

/*

const name=["aman","aman","aman","aman","aman"]
const age = [2,54,6,6,74,77,54]

// const mydata = age.map(key=> <h1>{key*2}</h1>)  // if i have a single lime array element 
const mydata = age.map((key)=>{
  return(
    <>
    <h1>{key*2}</h1></>
  )
})
const mynm =  name.map((key)=>{
    return(
      <>
      <h1>{key}</h1>
      </>
    )
   })
const App=()=>{
  return(
    <>
    <h1> This is Map() or method </h1>
    {mynm}
    {mydata}
    </>
  )
}
export default App;

*/


/*
 ->day 2


import Stu from "./Stu";

const students={
  "rollno":2001,
  "Name":"Aman",
  "City":"Bhopal",
  "Age" : 23
}
const App=()=>{
  return(
    <>
    <h1 align="center"> Welcome to Cybrom</h1>
    <Stu rl={students.rollno} nm={students.Name} ct={students.City} age={students.Age} />
    </>
  )
}
export default App;
*/



/*

->day 2

import Collage from "./Collage";

const Name ="Aman Patel"
const Roll = 201;
const address ="Rewa"
const fees = "15000"

const App=()=>{
         return(
          <>
          <h1 align="center">Welcome To Cybrom</h1>
          <Collage  nm={Name} roll={Roll} ad={address} fe={fees} />
          </>
         )
}
export default App;

*/

/*

->Day 2

import Cybrom from "./Cybrom";

const App=()=>{
         return(
          <>
          <h1 align="center">Welcome To Cybrom</h1>
          <Cybrom nm="Aman Patel" ad="Ratahra" fe="23344"/>
          </>
         )
}
export default App;

*/


/*   
 -> Day 1


import { useState } from 'react'
// Babel => babel is a compiler which is convert jsx into createlement in ja.sc.
// Fragment Tag (<></>0
const age = 34;
let name ="aman";
const sub =<ol>
  <li>PHP</li>
  <li>Java</li>
  <li>asp</li>
  <li>Oracle</li>
</ol>
const App=()=> {
  

  return (
    <>
      <h1>Hello  i am {age*2} years olds!!!  My name is {name} And the subject is {sub}</h1>
      <h1>Application form </h1>
      Name : <input type="text"></input>
      <br></br>
      Name : <input type="text"></input>
      <br>
      </br>
     <input type="button" value="save"></input>
    </>
  )
}

export default App;

*/