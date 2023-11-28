import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Collapse from '../../components/Collapse'
import about from '../../datas/about.json'
import about_banner from '../../assets/about_banner.png'

export default function About() {
  return (
    <div>
      <Header />
      <Banner image={about_banner} />
      <div className="collapse_container">
        {about.map((item) => {
          return (
            //<div className="collapse_item">
              <Collapse
                key={item.id}
                content={item.content}
                title={item.title}
              />
           // </div>
          )
        })}
      </div>

      <Footer />
    </div>
  )
}
