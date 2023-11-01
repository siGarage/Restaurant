import './Component1.css';
import Hamburger from './Hamburger'

function Navbar() {
  return (
    <div className="Navbar">
        <div className='circular-box' style={{position:'absolute',height:'600px',width:'600px',top:'-225px',left:'-220px',border:'1px solid #101A24',borderRadius:'50%',opacity:'0.2'}}></div>
        <div className='circular-box' style={{position:'absolute',height:'600px',width:'600px',top:'-200px',left:'-240px',border:'1px solid #101A24',borderRadius:'50%',opacity:'0.2'}}></div>
        <div className='circular-box' style={{position:'absolute',height:'600px',width:'600px',top:'-250px',left:'-260px',border:'1px solid #101A24',borderRadius:'50%',opacity:'0.2'}}></div>
      <div className='Logo' style={{fontWeight:'800'}}>restaurant</div>
      <div className='NavLinks'>
        <a href='#Component3' style={{textDecoration:'none',color:'black'}}><div style={{margin:'0px 10px',fontSize:'16px',fontFamily:'Inter'}}>Menu</div></a>
        <a href='#Component5' style={{textDecoration:'none',color:'black'}}><div style={{margin:'0px 10px',fontSize:'16px',fontFamily:'Inter'}}>Events</div></a>
        <a href='#Component4' style={{textDecoration:'none',color:'black'}}><div style={{margin:'0px 10px',fontSize:'16px',fontFamily:'Inter'}}>About</div></a>
        <a href='#Component6' style={{textDecoration:'none',color:'black'}}><div style={{margin:'0px 10px',fontSize:'16px',fontFamily:'Inter'}}>Contact</div></a>
      </div>
      <div className='BookTable' style={{backgroundColor:'#EA6D27',color:'white',borderTopLeftRadius:'8px',borderBottomRightRadius:'8px',filter:'drop-shadow(0px 15px 30px rgba(0, 0, 0, 0.15))'}}>Book A Table</div>
      <Hamburger/>
    </div>
  );
}

export default Navbar;
