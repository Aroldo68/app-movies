import { useState } from "react";
import Banner from "../../components/Banner";
import Card from "../../components/Cards";
import Category, { categories, filterCategory } from "../../components/Category";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

function Home() {

  // let nomeDigitado = ''
  function pegarNome(event) {
    console.log(event.target.value)
    // nomeDigitado = event.target.value
    setNome(event.target.value)
  }

  //  Hook = gancho -> userState
  const [ nome, setNome ] = useState()

  return (
    <>
    <Header />
    <Banner image="favoritos" />
    <Container>

      <input
        type="text"
        placeholder="Nome"        
        onChange={pegarNome}

      />

      <h2>{nome}</h2>
{/* 
      { categories.map((category, index) =>
          <Category category={category}>
          { filterCategory(index).map((video) => <Card id={video.id} key={video.id} /> )}
          </Category>
      )} */}
            
    </Container>
    <Footer /> 
    </>
  );
}

export default Home;
