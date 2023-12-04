import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Collapse from '../../components/Collapse'
import about from '../../datas/about.json'
import about_banner from '../../assets/about_banner.png'

export default function About() {
  return (
    <>
    <div className='about_page'>
      <Header />
      <Banner image={about_banner} />
      <div className="collapse_container">
        {about.map((item) => {
          return (
            //<div className="collapse_item">
              <Collapse
                key={item.title}
                
                title={item.title}
              >
                <p>{item.content}</p>
              </Collapse>
           // </div>
          )
        })}
      </div>

      
    </div>
    <Footer />
    </>
  )
}
