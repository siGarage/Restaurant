import './Component4.css';
import Tick from './check.svg'
import Chef from './Chef.png'
import Onion from './Onion.png'
import Onion2 from './Onion2.png'
function Component4() {
  return (
    <div className='Component4' id='Component4' style={{margin:'100px 0px',position:'relative'}}>
     <img src={Onion} alt='onion' style={{position:'absolute'}}/>
     <img className='Onion-Image' src={Onion2} alt='onion' style={{position:'absolute',left:'100px'}}/>
        <div className='Component4-Box1'>
            <div className='textAlign' style={{fontSize:'60px',fontFamily:'David Libre'}}>Our Expert Chef</div>
            <div className='textAlign' style={{fontFamily:'Inter',fontSize:'16px',margin:'30px 0px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</div>
            <div className='Tick-Box'>
                <div className='Tick-Box1' style={{margin:'0px 10px'}}>
                    <div style={{display:'flex',justifyContent:'center',alignItems:'center',margin:'10px 0px'}}>
                        <div><img src={Tick} style={{height:'30px'}} alt='Tick'/></div>
                        <div style={{margin:'0px 3px',fontFamily:'Inter',textAlign:'left'}}>Lorem ipsum dolor sit amet, consectetur  </div>
                    </div>
                    <div style={{display:'flex',justifyContent:'center',alignItems:'center',margin:'10px 0px'}}>
                        <div><img src={Tick} style={{height:'30px'}} alt='Tick'/></div>
                        <div style={{margin:'0px 3px',fontFamily:'Inter',textAlign:'left'}}>Lorem ipsum dolor sit amet, consectetur </div>
                    </div>
                    <div style={{display:'flex',justifyContent:'center',alignItems:'center',margin:'10px 0px'}}>
                        <div><img src={Tick} style={{height:'30px'}} alt='Tick'/></div>
                        <div style={{margin:'0px 3px',fontFamily:'Inter',textAlign:'left'}}>Lorem ipsum dolor sit amet, consectetur </div>
                    </div>
                </div>
                <div className='Tick-Box2' >
                <div >
                    <div style={{display:'flex',justifyContent:'center',alignItems:'center',margin:'10px 0px'}}>
                        <div><img src={Tick} style={{height:'30px'}} alt='Tick'/></div>
                        <div style={{margin:'0px 3px',fontFamily:'Inter',textAlign:'left'}}>Lorem ipsum dolor sit amet, consectetur</div>
                    </div>
                    <div style={{display:'flex',justifyContent:'center',alignItems:'center',margin:'10px 0px'}}>
                        <div><img src={Tick} style={{height:'30px'}} alt='Tick'/></div>
                        <div style={{margin:'0px 3px',fontFamily:'Inter',textAlign:'left'}}>Lorem ipsum dolor sit amet, consectetur </div>
                    </div>
                    <div style={{display:'flex',justifyContent:'center',alignItems:'center',margin:'10px 0px'}}>
                        <div><img src={Tick} style={{height:'30px'}} alt='Tick'/></div>
                        <div style={{margin:'0px 3px',fontFamily:'Inter',textAlign:'left'}} >Lorem ipsum dolor sit amet, consectetur </div>
                    </div>
                </div>
                </div>
            </div>
            <div style={{margin:'30px 0px'}}>
            <div style={{display:'flex',justifyContent:'flex-start',alignItems:'center',flexDirection:'row',padding:'10px 0px 10px 50px'}}>
                <div style={{padding:'10px 30px',borderTopLeftRadius:'8px',borderBottomRightRadius:'8px',color:'white',margin:'0px 20px 0px 0px',backgroundColor:'#101A24'}}>Menu</div>
                <div style={{padding:'10px 20px',borderTopLeftRadius:'8px',borderBottomRightRadius:'8px',color:'white',backgroundColor:'#EA6D27'}}>Book A Table</div>
            </div>
            </div>
        </div>
        <div className='Component4-Box2' >
            <div>
                <img src={Chef} style={{height:'500px',width:'100%'}} alt='Chef'/>
            </div>
        </div>
       
    </div>
  );
}

export default Component4;
