// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Component5.css'
function BasicExample(props) {
  return (
    <Card style={{height:'500px',width:'auto',position:'relative',margin:'0px 40px',border:'0px',display:'flex',justifyContent:'center',alignItems:'center'}}>
      <img src={props.Logo} alt='img' style={{height:'100px',width:'100px',borderRadius:'50%',position:'absolute',top:'20px',left:'40%',zIndex:'100'}}/>
      <Card.Body style={{borderRadius:"100px 20px 100px 20px",position:'relative',background:'white',color:'black',height:'400px',display:'flex',justifyContent:'center',alignItems:'space-around',flexDirection:'column',padding:'0px 50px'}}>
        <Card.Title style={{margin:'30px 0px',fontSize:'28px'}}>{props.title}</Card.Title>
        <Card.Text style={{fontSize:'16px',fontWeight:'300'}}>
       {props.text}
        </Card.Text>
          
        <Card.Text style={{fontFamily:"'Red Hat Display', sans-serif",fontSize:'15px',lineHeight:'10px',fontWeight:'200',fontStyle:'italic'}}>
        <h5 style={{fontSize:'20px',fontFamily:'Red Hat Display',fontWeight:'600',fontStyle:'normal'}}>{props.name}</h5>
         {props.owner}
        </Card.Text >
      </Card.Body>
    </Card>
  );
}

export default BasicExample;