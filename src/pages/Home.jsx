import Contacts from "../components/Contacts/Contacts";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Residencies from "../components/Residencies/Residencies";
import Value from "../components/Value/Value";

function Home() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Residencies/>
      <Value/>
      <Contacts/>
    </div>
  );
}

export default Home;