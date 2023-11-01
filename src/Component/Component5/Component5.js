import './Component5.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from './Card';
import Img from './dish-2 1.png'
import Image4 from './Image4.png'
function Component5() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1
    }
  };
  return (
    <div className='Component5' id='Component5' style={{background:'#F3F4F4',height:'auto',padding:'100px 0px 0px 0px',position:'relative'}}>
      <img className='Component5-Image' src={Image4} alt='something' style={{position:'absolute',left:'0',top:'0'}}/>
      <div className='Happy-Customer' style={{fontFamily:'David Libre'}}>Our Happy Customers</div> 
      <div className='Happy-Customer-Text' style={{fontFamily:'Inter',color:'#5C6574',fontSize:'16px',margin:'20px 0px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</div> 
      <div className='content7 animation' style={{display:'flex',flexDirection:'column',fontFamily:'lato',fontSize:'32px',margin:'0px'}} >
    <Carousel responsive={responsive} style={{width:'100%',display:'block'}}>
  <div style={{height:'520px'}}><Card Logo={Img}  text={"Silicon Garage exceeded my expectations with their website for Solitude Inn. Friendly, great communication, and on-time delivery!"} name={'Sunil Thakur'} owner={'Owner Solutude Inn'}/></div>
  <div style={{height:'520px'}}><Card  Logo={Img} text={"Silicon Garage delivered an exceptional website for Infinite Trails. They're friendly, communicate well, and meet deadlines. Thanks to their work, our customer base has grown significantly. Highly recommended!"} name={'Nikhil Thakur'} owner={'Business Head Infinite Trails'}/></div>
  <div style={{height:'520px'}}><Card  Logo={Img}  text={"Silicon Garage's website for E-fruit Hub has been a game-changer. Their friendly, timely, and effective work has boosted our marketplace connecting Himachal Pradesh growers with consumers."} name={'Abhishek Verma'} owner={'Owner E-Fruit Hub'}/></div>
  <div style={{height:'520px'}}><Card Logo={Img}  text={"Silicon Garage's website for Himachal Darpan Live TV has been a game-changer. Their friendly, punctual, and effective work has helped us reach and inform the people of Himachal Pradesh."} name={'Vikalp Singh'} owner={'Bureau Chief Himachal Darpan'}/></div>
  <div style={{height:'520px'}}><Card Logo={Img} text={"Silicon Garage created our Coaching Center's website, Creative Coaching Classes. They're friendly, punctual, and excellent communicators. The site has expanded our student base and highlighted our achievements."} name={'Hitesh Chauhan'} owner={'Owner Creative Coaching Classes'}/></div>
  <div style={{height:'520px'}}><Card Logo={Img}  text={"Silicon Garage crafted a website for Hotel Alpine Holiday Homes that exceeded our expectations. The website has significantly expanded our customer base "} name={'Deepak Kanwar'} owner={'Owner Alpine Holiday'}/></div>
  </Carousel>
    </div>
    </div>


  );
}

export default Component5;
