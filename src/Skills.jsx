import { Row , Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Skills = () => {
     return (
        <div>
            <Row style={{padding:"10px"}}>
              <Col>
                <Card style={{ width: '200px'}} className="card">
                     <img src="public/html.png" style={{padding:"10px" , width:"200px" , height:"150px"}}/>
                     <Card.Body>
                     <Card.Title style={{textAlign:"center" , fontFamily:"sans-serif" , fontWeight:"550"}} className="text">HTML</Card.Title>
                     {/* <Card.Text style={{fontSize:"13px"}}>
                     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt omnis nesciunt exercitationem velit reiciendis totam deserunt. Nemo molestiae nam quod ex aliquid? Quae, blanditiis cumque.
                     </Card.Text> */}
                     </Card.Body>
                </Card>
             </Col>

             <Col>
                <Card style={{ width: '200px'}}>
                     <img src="public/css.png" style={{padding:"10px" , width:"200px" , height:"150px"}}/>
                     <Card.Body>
                     <Card.Title style={{textAlign:"center" , fontFamily:"sans-serif" , fontWeight:"550"}}>CSS</Card.Title>
                     {/* <Card.Text style={{fontSize:"13px"}}>
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea deleniti nemo labore iusto corrupti praesentium quo delectus voluptatem minima doloremque cum officia, eius dolorem? Non?
                     </Card.Text> */}
                    </Card.Body>
                </Card>
             </Col>

             <Col>
                <Card style={{ width: '200px'}}>
                     <img src="public/javascript.png" style={{padding:"10px" ,width:"200px" , height:"150px"}}/>
                     <Card.Body>
                     <Card.Title style={{textAlign:"center" , fontFamily:"sans-serif" ,fontWeight:"550"}}>JavaScript</Card.Title>
                     {/* <Card.Text style={{fontSize:"13px"}}>
                     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel neque eaque velit consequuntur obcaecati sint. Obcaecati sapiente odit dignissimos minus placeat magni asperiores doloribus ex
                     </Card.Text> */}
                     </Card.Body>
                </Card>
             </Col>

             <Col>
                <Card style={{ width: '200px'}}>
                     <img src="public/reactbootstrap.png" style={{padding:"10px" ,width:"200px" , height:"150px"}}/>
                     <Card.Body>
                     <Card.Title style={{textAlign:"center" , fontFamily:"sans-serif" , fontWeight:"550"}}>React Bootstrap</Card.Title>
                     {/* <Card.Text style={{fontSize:"13px"}}>
                     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel neque eaque velit consequuntur obcaecati sint. Obcaecati sapiente odit dignissimos minus placeat magni asperiores doloribus ex
                     </Card.Text> */}
                     </Card.Body>
                </Card>
             </Col>
               
            </Row>

            <Row style={{padding:"15px"}}>
            <Col>
                <Card style={{ width: '200px'}}>
                     <img src="public/react.png" style={{padding:"10px" ,width:"200px" , height:"150px"}}/>
                     <Card.Body>
                     <Card.Title style={{textAlign:"center" , fontFamily:"sans-serif" , fontWeight:"550"}}>React JS</Card.Title>
                     {/* <Card.Text style={{fontSize:"13px"}}>
                     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel neque eaque velit consequuntur obcaecati sint. Obcaecati sapiente odit dignissimos minus placeat magni asperiores doloribus ex
                     </Card.Text> */}
                     </Card.Body>
                </Card>
             </Col>

             <Col>
                <Card style={{ width: '200px'}}>
                     <img src="public/nodejs.png" style={{padding:"10px" ,width:"200px" , height:"150px"}}/>
                     <Card.Body>
                     <Card.Title style={{textAlign:"center" , fontFamily:"sans-serif" , fontWeight:"550"}}>Node JS</Card.Title>
                     {/* <Card.Text style={{fontSize:"13px"}}>
                     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel neque eaque velit consequuntur obcaecati sint. Obcaecati sapiente odit dignissimos minus placeat magni asperiores doloribus ex
                     </Card.Text> */}
                     </Card.Body>
                </Card>
             </Col>

             <Col>
                <Card style={{ width: '200px'}}>
                     <img src="public/express.png" style={{padding:"10px" ,width:"200px" , height:"150px"}}/>
                     <Card.Body>
                     <Card.Title style={{textAlign:"center" , fontFamily:"sans-serif" , fontWeight:"550"}}>Express JS</Card.Title>
                     {/* <Card.Text style={{fontSize:"13px"}}>
                     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel neque eaque velit consequuntur obcaecati sint. Obcaecati sapiente odit dignissimos minus placeat magni asperiores doloribus ex
                     </Card.Text> */}
                     </Card.Body>
                </Card>
             </Col>

             <Col>
                <Card style={{ width: '200px'}}>
                     <img src="public/mongodb.png" style={{padding:"10px" ,width:"200px" , height:"150px"}}/>
                     <Card.Body>
                     <Card.Title style={{textAlign:"center" , fontFamily:"sans-serif" , fontWeight:"550"}}>MongoDB</Card.Title>
                     {/* <Card.Text style={{fontSize:"13px"}}>
                     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel neque eaque velit consequuntur obcaecati sint. Obcaecati sapiente odit dignissimos minus placeat magni asperiores doloribus ex
                     </Card.Text> */}
                     </Card.Body>
                </Card>
             </Col>
               
            </Row>
        </div>
     )
}

export default Skills;