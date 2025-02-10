import Banner from "./components/Banner";
import Card from "./components/Cards";
import Category from "./components/Category";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Videos from "./json/videos.json";

function App() {
  return (
    <>
    <Header />
    <Banner image="favoritos" />
    <Container>

      {/* <h2>Geografia</h2>
      <section className="cards">
        { Videos.map((video) => <Card id={video.id} key={video.id} /> )}
      </section> */ }

        <Category category="geografia">
          { Videos.map((video) => <Card id={video.id} key={video.id} /> )}

        </Category>

    </Container>
    <Footer /> 
    </>
  );
}

export default App;
