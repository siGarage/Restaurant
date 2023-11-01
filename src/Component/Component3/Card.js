// import './Card.css';
function Card(props) {
  return (
    <div className='Dish-Card' style={{padding:'0px 30px',position:'relative',height:'300px',display:'flex',justifyContent:'center',alignItems:'center'}}>
     <img className='Dish-Card-Image' src={props.Img} alt='Dish' style={{height:'150px',width:'150px',position:'absolute',top:'-50px'}}/>
     <div className='Dish-Price' style={{borderRadius:'50%',backgroundColor:'black',color:'white',position:'absolute',top:'-30px',height:'40px',width:'40px',fontFamily:'Inter',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'12px'}}>₹{props.price}</div>
     <div style={{backgroundColor:'white',color:'black',height:'250px',display:'flex',justifyContent:'flex-end',alignItems:'center',flexDirection:'column',width:'70%',borderRadius:'50px 10px 50px 10px'}}>
     <div style={{fontFamily:'David Libre',fontSize:'20px'}}>{props.text1}</div>
     <div style={{fontFamily:'Inter',fontSize:'15px',margin:'20px 20px'}}>{props.text2}</div>
     </div>
    </div>
  );
}

export default Card;