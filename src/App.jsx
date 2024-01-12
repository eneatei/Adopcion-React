//Importaciones
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header/Header";
import Card from './components/card/Card';
import Footer from "./components/footer/Footer";
import './App.css';



//Contenido
const App = () => {
  return (
  <>
    <Header />
    <main className='cards'>
    
    <Card urlImg="https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg"
    title= 'Diego'
    desc= 'Hola, mi nombre es Diego, tengo 6 añitos, me gusta jugar y acompañar a mi familia en el día a día.'
    contText= 'Kiltro'
    bg= 'black'/>
    
    <Card urlImg= "https://fastly.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y"
    title= 'Medusa'
    desc= 'Mi pasión es dormir y comer, disfruto de tardes descansando, siempre tapadita.'
    contText= 'Pug'
    bg= 'secondary' />

    <Card urlImg= "https://fastly.picsum.photos/id/237/3500/2095.jpg?hmac=y2n_cflHFKpQwLOL1SSCtVDqL8NmOnBzEW7LYKZ-z_o"
    title= 'Felipe'
    desc= 'Soy un perrito de tan sólo 5 meses, soy muy juguetón, pero también soy tímido. Tienes que tratarme con mucho cariño.'
    contText= 'Labrador'
    bg= 'black' />

    <Card urlImg= "https://images.pexels.com/photos/911808/pexels-photo-911808.jpeg"
    title= 'Pepe'
    desc= 'Soy un perrito soñador, que le encanta recorrer parques y plazas, juego mucho con la pelota y soy muy comilón'
    contText= 'Kiltro'
    bg= 'secondary' />
    </main>

    <Footer />
    </>
  )
}

export default App