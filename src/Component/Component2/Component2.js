import './Component2.css';

import Img2 from './dish-2 1.png'
import Vector from './Vector.png'
import Vector2 from './Vector2.png'
import Vector3 from './Vector3.png'
import Facebook from './facebool.png'
import Instagram from './instagram.svg'
import Twitter from './twitter.png'

function Component2() {
  return (
    <div className='Component2' style={{margin:'150px 0px',position:'relative'}}>
        <div className='Component2-Box1' style={{height:'500px',display:'flex',justifyContent:'space-around',flexDirection:'column'}}>
            {/* <div style={{position:'absolute',top:'-50px',left:'50px'}}>FOODDELECIOUS</div> */}
            <svg viewBox="0 0 110 110"  style={{position:'absolute',top:'-100px',width:'80px',height:'80px'}}>
  <defs>
    <path id="circle"
      d="
        M 50, 52
        m -37, 0
        a 37,37 0 1,1 74,0
        a 37,37 0 1,1 -74,0"/>
  </defs>
  <text fontSize="20" fontFamily='Inter' fontWeight='700'>
    <textPath href="#circle">
      FOODDELECIOUS
    </textPath>
  </text>
</svg>
            <div>
                <div className='Component2-Heading-Text' style={{fontFamily:'David Libre',margin:'0px 0px 10px 0px',textAlign:'left'}}>We provide the best food for you</div>
                <div><div className='Component2-Description-Text' style={{margin:'40px 0px 30px 0px',fontSize:'16px',fontFamily:'Inter',display:'flex',alignItems:'flex-start',textAlign:'left',color:'#5C6574'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                <div style={{display:'flex',justifyContent:'flex-start',alignItems:'center',flexDirection:'row',padding:'10px 0px 10px 0px',margin:'30px 0px'}}>
                <div style={{padding:'10px 20px',borderTopLeftRadius:'8px',borderBottomRightRadius:'8px',color:'white',margin:'0px 10px 0px 0px',backgroundColor:'#101A24'}}>Menu</div>
                <div style={{padding:'10px 20px',borderTopLeftRadius:'8px',borderBottomRightRadius:'8px',color:'white',backgroundColor:'#EA6D27'}}>Book A Table</div>
                </div>
                <div style={{display:'flex',justifyContent:'flex-start',alignItems:'center',flexDirection:'row',padding:'10px 0px 10px 0px'}}>
                <div style={{border:'1px solid black',borderRadius:'50%',display:'flex',justifyContent:'center',alignItems:'center',padding:'3px',margin:'0px 10px'}}><img src={Facebook} alt='facebook' style={{height:'30px',width:'30px'}}/></div>
                <div style={{border:'1px solid black',borderRadius:'50%',display:'flex',justifyContent:'center',alignItems:'center',padding:'3px',margin:'0px 10px'}}><img src={Instagram} alt='instagram' style={{height:'30px',width:'30px'}}/></div>
                <div style={{border:'1px solid black',borderRadius:'50%',display:'flex',justifyContent:'center',alignItems:'center',padding:'3px',margin:'0px 10px'}}><img src={Twitter} alt='twitter' style={{height:'30px',width:'30px'}}/></div>
                </div>
                </div>
            </div>
        </div>
        <div className='Component2-Box2' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <img className='Component2-Vector' src={Vector} alt='Vector' style={{position:'absolute',top:'-100px',zIndex:'-1',opacity:'0.2'}}/>
          <img className='Component2-Vector2' src={Vector2} alt='Vector2' style={{position:'absolute',top:'-100px',right:'40px',zIndex:'-1',opacity:'0.2'}}/>
          <img className='Component2-Vector3' src={Vector3} alt='Vector3' style={{position:'absolute',bottom:'20px',right:'50px',zIndex:'-1',opacity:'0.2',height:'250px'}}/>
            <div className='Component-Main-Image' style={{borderRadius:'50px 25px'}}></div>
        </div>
        <div className='Image-Dish' style={{height:'60%',width:'40%',position:'absolute',bottom:'0px',left:'500px'}}><img src={Img2} alt='DishImage' style={{height:'100%',width:'70%'}}/></div>
    </div>
  );
}

export default Component2;
