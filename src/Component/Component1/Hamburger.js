import './Hamburger.css'
// import {div} from 'react-router-dom';
function NavScrollExample() {
    /* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav(e) {
    e.preventDefault()
    document.getElementById("mySidenav").style.width = "0";
    window.location.href = '#Component3'
  }

  function closeNav2(e) {
    e.preventDefault()
    document.getElementById("mySidenav").style.width = "0";
    window.location.href = '#Component5'
  }
  function closeNav3(e) {
    e.preventDefault()
    document.getElementById("mySidenav").style.width = "0";
    window.location.href = '#Component4'
  }
  function closeNav4(e) {
    e.preventDefault()
    document.getElementById("mySidenav").style.width = "0";
    window.location.href = '#Component6'
  }

  return (
    <>
  <div className='Hamburger' style={{backgroundColor:'white',margin:'10px 0px'}}>
  <div id="mySidenav" className="sidenav" style={{backgroundColor:'white',color:'black',opacity:'0.955',zIndex:'1000'}}>
  <div  className="closebtn" onClick={closeNav}>&times;</div>
  <div  onClick={closeNav} style={{textDecoration:'none',color:'black',margin:'10px 0px'}}><div style={{margin:'0px 10px',fontFamily:'Inter',fontSize:'20px'}}>Menu</div></div>
  <div  onClick={closeNav2} style={{textDecoration:'none',color:'black',margin:'10px 0px'}}><div style={{margin:'0px 10px',fontFamily:'Inter',fontSize:'20px'}}>Events</div></div>
  <div  onClick={closeNav3} style={{textDecoration:'none',color:'black',margin:'10px 0px'}}><div style={{margin:'0px 10px',fontFamily:'Inter',fontSize:'20px'}}>About</div></div>
  <div  onClick={closeNav4} style={{textDecoration:'none',color:'black',margin:'10px 0px'}}><div style={{margin:'0px 10px',fontFamily:'Inter',fontSize:'20px'}}>Contact</div></div>
</div>

 {/* Use any element to open the sidenav  */}
<button className='Hamburger-button' onClick={openNav} style={{backgroundColor:'transparent',border:'0px'}}>
<div style={{height:'3px',width:'20px',backgroundColor:'black',margin:'3px'}}></div>
<div style={{height:'3px',width:'20px',backgroundColor:'black',margin:'3px'}}></div>
<div style={{height:'3px',width:'20px',backgroundColor:'black',margin:'3px'}}></div>
</button>
</div>
    </>
  );
}

export default NavScrollExample;