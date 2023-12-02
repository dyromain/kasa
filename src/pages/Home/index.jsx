import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Gallery from '../../components/Gallery'
import Footer from '../../components/Footer'
import header_banner from '../../assets/header_banner.png'

export default function Home() {
	return (
		<>
		<div className='home'>
			<Header />
			<Banner title="Chez vous, partout et ailleurs" image={header_banner}/>
			<Gallery />
			
		</div>
		<Footer />
		</>
	)
}