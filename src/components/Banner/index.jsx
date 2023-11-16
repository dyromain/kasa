import header_banner from '../../assets/header_banner.png'

const Banner = () => {
  return (
   
      <div className='header_banner'>
        <h1 className='banner_title'>Chez vous, partout et ailleurs</h1>
        <img src={header_banner} alt='bannière kasa' />
        
      </div>  
    
    
  );
};

export default Banner;