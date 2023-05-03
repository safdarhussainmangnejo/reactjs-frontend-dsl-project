import image1 from '../images/companion-ai-image.png';
import image2 from '../images/text-ai-image.png';
import image3 from '../images/image-ai-image.png';
import image4 from '../images/videos-ai-image.png';

const CreditImage = ()=>{

    
        
  return (
            <div className='row' style={{padding:'50px', backgroundColor:'#3D6783'}}>
            <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12' style={{padding:'10px'}}>


                <div class="card" styles="width: 18rem;" style={{textAlign:'center', backgroundColor:'#3080AC', color:'white', border:'0px'}}>
                    <div class="card-body">
                        <h2 class="card-title">COMPANION AI</h2>
                    </div>
                    <div style={{backgroundColor: 'white', padding:'10px'}}>
                        <img src={image1} class="card-img-top" alt="..."/>
                    </div>
                    <div class="card-body">
                        <h3 class="card-title">1 CREDIT</h3>
                    </div>
                </div>


            </div>
            
            
            <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12' style={{padding:'10px'}}>


                <div class="card" styles="width: 18rem;" style={{textAlign:'center', backgroundColor:'#3080AC', color:'white', border:'0px'}}>
                    <div class="card-body">
                        <h2 class="card-title">TEXT AI</h2>
                    </div>
                    <div style={{backgroundColor: 'white', padding:'10px'}}>
                        <img src={image2} class="card-img-top" alt="..."/>
                    </div>
                    <div class="card-body">
                        <h3 class="card-title">10 CREDIT</h3>
                    </div>
                </div>


            </div>
            
            <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12' style={{padding:'10px'}}>


                <div class="card" styles="width: 18rem;" style={{textAlign:'center', backgroundColor:'#3080AC', color:'white', border:'0px'}}>
                    <div class="card-body">
                        <h2 class="card-title">IMAGE AI</h2>
                    </div>
                    <div style={{backgroundColor: 'white', padding:'10px'}}>
                        <img src={image3} class="card-img-top" alt="..."/>
                    </div>
                    <div class="card-body">
                        <h3 class="card-title">50 CREDIT</h3>
                    </div>
                </div>


            </div>
            
            <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12' style={{padding:'10px'}}>


                <div class="card" styles="width: 18rem;" style={{textAlign:'center', backgroundColor:'#3080AC', color:'white', border:'0px'}}>
                    <div class="card-body">
                        <h2 class="card-title">VIDEOS AI</h2>
                    </div>
                    <div style={{backgroundColor: 'white', padding:'10px'}}>
                        <img src={image4} class="card-img-top" alt="..."/>
                    </div>
                    <div class="card-body">
                        <h3 class="card-title">1000 CREDIT</h3>
                    </div>
                </div>


            </div>
            

        </div>
  );
};
export default CreditImage;