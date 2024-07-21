//import { Link, Outlet } from "react-dom";
import {Link,Outlet} from "react-router-dom"
import { Row , Col } from "react-bootstrap";
import Aside from "./Aside"


const Layout = () => {
    return (
     <div style={{overflowX:"hidden"}}>   
      <Row>
         <Col  md={3} style={{ border:"1px solid black"}}>
           <Aside></Aside>
         </Col>
         <Col md={9} style={{backgroundColor:"#282828"}}>
             
        <div style={{display:"flex" , justifyContent:"center" , marginTop:"10px" , alignItems:"center"}}>
            <div style={{backgroundColor:"#898887" , width:"60%" , display:"flex" , justifyContent:"space-around" , borderRadius:"10px" , height:"5vh" , alignItems:"center"}}>
                <Link style={{color:"black" , textDecoration:"none", fontWeight:"500"}} to="/profile"> Profile</Link>
                <Link style={{color:"black" , textDecoration:"none", fontWeight:"500"}} to="/project">Project</Link>
                <Link style={{color:"black" , textDecoration:"none", fontWeight:"500"}} to="/contact"> Contact</Link>
                <Link style={{color:"black" , textDecoration:"none", fontWeight:"500"}} to="/experience"> Experience</Link>
            </div>
        </div>  
         
            <Outlet/>
         </Col>
      </Row>
      </div> 
    );
}

export default Layout;