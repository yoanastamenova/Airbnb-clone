import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import { Card } from './components/Card/Card'
import data from './components/Card/data'

function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <>
      <div>
        <Navbar />
        <Hero />
       <section className="cards-list">{cards}</section>
      </div>
    </>
  )
}

export default App
