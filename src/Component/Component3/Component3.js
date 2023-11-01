import './Component3.css';
import Card from './Card';
import Leaf1 from './Leaf.png'
import Leaf2 from './Leaf2.png'


import Image1 from './Dish1.png'
import Image2 from './Dish2.png'
import Image3 from './Dish3.png'
import Image4 from './Dish4.png'
import Image5 from './DISH5.png'

import Image6 from './Image1.png'
import Image7 from './Image2.png'
import Image8 from './Image3.png'
import Image9 from './Image4.png'
import Image10 from './Image5.png'
import Image11 from './Image6.png'
import Image12 from './Image7.png'
import Image13 from './Image8.png'
function Component3() {
  return (
    <div className='Component3' id='Component3' style={{position:'relative',margin:'50px 0px',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',padding:'50px 0px',backgroundColor:'#F3F4F4'}}>
      <img className='Image6' src={Image6} alt='Image4' style={{position:'absolute',top:'50px',left:'200px'}}/>
      <img className='Image7' src={Image7} alt='Image4' style={{position:'absolute',top:'50px'}}/>
      <img className='Image8' src={Image8} alt='Image4' style={{position:'absolute',top:'500px',left:'280px'}}/>
      <img className='Image9' src={Image9} alt='Image4' style={{position:'absolute',top:'700px',opacity:'0.2'}}/>
      <img className='Image10' src={Image10} alt='Image4' style={{position:'absolute'}}/>
      <img className='Image11' src={Image11} alt='Image4' style={{position:'absolute',top:'500px'}}/>
      <img className='Image12' src={Image12} alt='Image4' style={{position:'absolute' ,bottom:'500px',right:'100px',opacity:'0.2'}}/>
      <img className='Image13' src={Image13} alt='Image4' style={{position:'absolute',bottom:'50px',right:'30px'}}/>
       <div className='Our-Favorite-Dishes' style={{fontFamily:'David Libre'}}>Our Special Dishes</div>
       <div className='Component3-text' style={{textAlign:'left',fontSize:'15px',fontFamily:'Inter',margin:'15px 0px',color:'#5C6574'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</div>
       <div  className='Dishes' style={{display:'flex',justifyItems:'center',alignItems:'center'}}>
       <Card className='Dish Dish1'  price='200' Img={Image1} text1='Lumpia with Suac' text2='Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor'></Card>
       <Card className='Dish Dish2'price='400'  Img={Image2} text1='Fish and Veggi' text2='Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor'></Card>
       <Card className='Dish Dish3' price='450' Img={Image3} text1='Tofu Chil' text2='Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor'></Card>
       <Card className='Dish Dish4' price='300'  Img={Image4} text1='Egg and Cocumber' text2='Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor'></Card>
       </div>
       <div className='Component3-Box' style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <div className='Component3-Box1' style={{height:'70%'}}><img className='Component3-Box1-Image1' src={Image5} alt='Dish' style={{width:'80%'}}/></div>
        <img className='Leaf' src={Leaf1} alt='Leaf1' style={{position:'absolute',top:'60%',left:'10%',zIndex:'3'}}/>
        <img className='Leaf' src={Leaf2} alt='Leaf1' style={{position:'absolute',top:'60%',right:'50%',zIndex:'3'}}/>
        <img className='Leaf' src={Leaf2} alt='Leaf1' style={{position:'absolute',bottom:'5%',right:'70%',zIndex:'3',transform:'scaleX(-1)'}}/>
        <div className='Component3-Box2' style={{padding:'0px 50px'}}>
          <div className='Welcome' style={{fontFamily:'David Libre',textAlign:'left'}}>Welcome To Our Restaurant</div>
          <div style={{margin:'10px 0px',textAlign:'left',fontFamily:'Inter'}}>Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor </div>
          <div style={{display:'flex',justifyContent:'flex-start',alignItems:'center',flexDirection:'row',padding:'10px 0px 10px 0px'}}>
          <div style={{padding:'10px 20px',borderTopLeftRadius:'8px',borderBottomRightRadius:'8px',color:'white',margin:'0px 20px 0px 0px',backgroundColor:'#101A24'}}>Menu</div>
          <div style={{padding:'10px 20px',borderTopLeftRadius:'8px',borderBottomRightRadius:'8px',color:'white',backgroundColor:'#EA6D27'}}>Book A Table</div>
          </div>
        </div>
        </div> 
    </div>
  );
}

export default Component3;
