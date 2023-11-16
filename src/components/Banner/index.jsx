

const Banner = ({title,image}) => {
  
  return (
   
      <div className='banner'>
           <img src={image} alt='bannière kasa' className='img_banner' />
        <h1 className='banner_title'>{title}</h1>
     
        
      </div>  
    
    
  );
};

export default Banner;