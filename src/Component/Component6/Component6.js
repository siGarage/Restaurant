import './Component6.css';
import Facebook from './facebool.png'
import Instagram from './instagram.svg'
import Twitter from './twitter.png'
import Image4 from './Image4.png'


function Component6() {
  return (
    <>
    <div className="Component6" id='Component6' style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',position:'relative'}}>
      <img className='Component6-Image' src={Image4} alt='Image4' style={{position:'absolute',top:'600px',height:'400px',opacity:'0.3',transform:'scalex(-1)'}}/>
      <div style={{height:'200px',backgroundColor:'#F3F4F4',width:'100%'}}></div>
      <div className='Component6-Image2' style={{backgroundSize:'fill',height:'300px',width:'85%',position:'relative',borderRadius:'20px',display:'flex',justifyContent:'space-around',alignItems:'center',top:'-150px',flexDirection:'column'}}>
        <div className='Component6-Box-Text' style={{color:'white',fontFamily:'David Libre'}}>Get Or Promo Code by Subscribing To our Newsletter</div>
        <div style={{width:'100%',display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}><input type='text' placeholder='Enter Your Email' style={{width:'60%',height:'50px',borderRadius:'10px 0px 0px 10px',border:'none'}}></input> <div style={{width:'20%',height:'52px',borderRadius:'0px 10px 10px 0px',backgroundColor:'white',display:'flex',justifyContent:'center',alignItems:'center'}}><div className='Subscribe' style={{width:'80%',borderRadius:'10px',height:'40px',backgroundColor:'#EA6D27',color:'white',display:'flex',justifyContent:'center',alignItems:'center',fontFamily:'Inter'}}>Subscribe</div></div></div>
      </div>
      <div className='Component6-Box-Container' style={{position:'relative',width:'100%'}}>
        <div className='Component6-Box1' style={{display:'flex',flexDirection:'column'}}>
            <div style={{textAlign:'left',fontWeight:'800',fontSize:'20px'}}>restaurant</div>
            <div className='Component6-Box1-Text textAlign' style={{fontFamily:'Inter',fontSize:'16px',color:'#5C6574'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore .Learn more</div>
            <div className='Opening-Hours' style={{fontWeight:'700',fontFamily:'Inter',fontSize:'12px'}}>OPENING HOURS</div>
            <div className='Opening-Hours-Details' style={{justifyContent:'center',alignItems:'center',width:'100%'}}>
                <div className='Opening-Hours-Detail' style={{display:'flex',flexDirection:'column',width:'33.33%'}}><div className='textAlign' style={{fontFamily:'Inter',color:'#5C6574'}}>Monday-Friday</div><div className='textAlign' style={{fontFamily:'Inter',color:'#5C6574'}}>8:00 am to 9:00 pm</div></div>
                <div  className='Opening-Hours-Detail' style={{display:'flex',flexDirection:'column',width:'33.33%'}}><div className='textAlign' style={{fontFamily:'Inter',color:'#5C6574'}}>Saturday</div><div className='textAlign' style={{fontFamily:'Inter',color:'#5C6574'}}>8:00 am to 9:00 pm</div></div>
                <div className='Opening-Hours-Detail' style={{display:'flex',flexDirection:'column',width:'33.33%'}}><div className='textAlign' style={{fontFamily:'Inter',color:'#5C6574'}}>Sunday</div><div className='textAlign' style={{fontFamily:'Inter',color:'#5C6574'}}>CLOSED</div></div>
        </div>
        </div>
        <div className='Component6-Box2' style={{display:'flex',height:'200px',flexDirection:'column'}}>
            <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',margin:'10px 0px',fontWeight:'600',fontSize:'16px'}}>NAVIGATION</div>
            <div className='Component6-Navigation' style={{display:'flex',flexDirection:'column'}}>
                <div style={{fontFamily:'Inter',margin:'5px 0px',color:'#5C6574'}}>Menu</div>
                <div style={{fontFamily:'Inter',margin:'5px 0px',color:'#5C6574'}}>About Us</div>
                <div style={{fontFamily:'Inter',margin:'5px 0px',color:'#5C6574'}}>Contact Us</div>
                <div style={{fontFamily:'Inter',margin:'5px 0px',color:'#5C6574'}}>Main Dishes</div>
            </div>
        </div>
        <div className='Component6-Box3' style={{display:'flex',height:'200px',flexDirection:'column'}}>
            <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',margin:'10px 0px',fontWeight:'600',fontSize:'16px'}}>DISHES</div>
            <div className='Component6-Dishes-Container' style={{display:'flex',flexDirection:'column'}}>
                <div className='Component6-Dishes' style={{fontFamily:'Inter',margin:'5px 0px',color:'#5C6574'}}>Fish and Vigies</div>
                <div className='Component6-Dishes' style={{fontFamily:'Inter',margin:'5px 0px',color:'#5C6574'}}>Tofu Chilli</div>
                <div className='Component6-Dishes' style={{fontFamily:'Inter',margin:'5px 0px',color:'#5C6574'}}>Egg and Cucumber</div>
                <div className='Component6-Dishes' style={{fontFamily:'Inter',margin:'5px 0px',color:'#5C6574'}}>Lumpia with Sauce</div>
            </div>
        </div>
        <div className='Component6-Box4' style={{display:'flex',height:'200px',flexDirection:'column'}}>
            <div className='Follow-Us' style={{width:'100%',display:'flex',margin:'10px 0px',fontWeight:'600',fontSize:'16px'}}>FOLLOW US</div>
            <div style={{display:'flex',flexDirection:'row',padding:'10px 0px 10px 0px',justifyContent:'center',alignItems:'flex-start'}}>
                <div style={{border:'1px solid black',borderRadius:'50%',display:'flex',justifyContent:'center',alignItems:'center',padding:'3px',margin:'0px 10px'}}><img src={Facebook} alt='facebook' style={{height:'30px',width:'30px'}}/></div>
                <div style={{border:'1px solid black',borderRadius:'50%',display:'flex',justifyContent:'center',alignItems:'center',padding:'3px',margin:'0px 10px'}}><img src={Instagram} alt='instagram' style={{height:'30px',width:'30px'}}/></div>
                <div style={{border:'1px solid black',borderRadius:'50%',display:'flex',justifyContent:'center',alignItems:'center',padding:'3px',margin:'0px 10px'}}><img src={Twitter} alt='twitter' style={{height:'30px',width:'30px'}}/></div>
              </div>
        </div>
      </div>
    </div>

<div style={{display:'flex',alignItems:'center',flexDirection:'row',justifyContent:'space-around',margin:'100px 0px'}}>
<div className='Footer-Text' style={{color:'#5c6574'}}>© 2022 Restaurants. All Right Reserved. Designed by Isaac</div>
<div style={{display:'flex',flexDirection:'row'}}>
<div className='Footer-Text' style={{color:'#5c6574',margin:'0px 10px'}}>Terms of Service</div>
<div className='Footer-Text' style={{color:'#5c6574'}}>Privacy Policy</div>
</div>
</div>
</>
   
  );
}

export default Component6;
