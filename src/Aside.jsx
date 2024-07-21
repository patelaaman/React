import { Image } from "react-bootstrap";
import { FaUniversity , FaTwitter , FaGithub , FaLinkedin  } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Aside = () => {
     return (
         
               <div style={{ backgroundColor:"#898887", height:"100vh", display:"flex" , flexDirection:"column", justifyContent:"space-around" , padding:"20px" , position:"fixed" , width:"25%"}}>
                    <div style={{ display:"flex" , justifyContent:"center", alignItems:"center" , flexDirection:"column"}}>
                    <Image  src="./image/Aman.jpeg" roundedCircle style={{height:"200px" , width:"200px"}} />
                    <h7 style={{color:"black" , fontWeight:"500", paddingTop:"5px"}}> MERN Developer | Software Engineer</h7>
                    </div> 
                    <div style={{padding:"20px"}}>
                       <p style={{color:"black" , fontWeight:"400"}}> < faUniversity style={{fontSize:"25px"}}></faUniversity> :  Lakshmi Narain College of Technology (LNCT) , Bhopal </p>
                       <p style={{color:"black" , fontWeight:"300"}}>
                         <faLinkedin style={{fontSize:"25px"}}></faLinkedin> <font style={{fontWeight:"400"}}> Linked IN </font>  <a  style={{color:"black" ,fontWeight:"400"}} href="" > : Click Here </a>
                       </p>
                       <p style={{color:"black" , fontWeight:"300"}}>
                         <faGithub style={{fontSize:"25px"}}></faGithub> <font style={{fontWeight:"400"}}> GitHub </font>  <a  style={{color:"black" ,fontWeight:"400"}} href="" > : Click Here </a>
                       </p>
                       <p style={{color:"black" , fontWeight:"300"}}>
                         <SiLeetcode style={{fontSize:"25px"}}/>  <font style={{fontWeight:"400"}}> LeetCode </font> <a style={{color:"black" , fontWeight:"400"}}  href=""> Click Here </a>
                       </p>
                       <p style={{color:"black" , fontWeight:"300"}}>
                         <faTwitter style={{fontSize:"25px"}}></faTwitter>  <font style={{fontWeight:"400"}}> Twitter </font> : <a style={{color:"black" , fontWeight:"400"}} href=""> : Click Here </a>
                       </p>

                    </div>



               </div>
     )
}

export default Aside;