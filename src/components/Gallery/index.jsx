import datas from '../../datas/accomodations.json'
import Card from '../Card'

export default function Gallery() {
  return (
    <main className="hp_gallery">
      {datas.map((data) => {
        return (
          <Card
            key={data.id}
            id={data.id}
            title={data.title}
            cover={data.cover}
          />
        )
      })}
    </main>
  )
}
