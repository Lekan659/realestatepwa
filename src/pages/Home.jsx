import Contacts from "../components/Contacts/Contacts";
import Footer from "../components/Footer/Footer";
import Getstarted from "../components/GetStarted/GetStarted";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Homevid from "../components/Homevids/Homevid";
import Ourvalue from "../components/Ourvalue/Ourvalue";
import Residencies from "../components/Residencies/Residencies";
import Value from "../components/Value/Value";
import { Welcome } from "../components/Welcome/Welcome";

function Home() {
  return (
    <div className="App">
      {/* <Header/> */}
      <Hero/>
      <Welcome/>
      <Residencies/>
      <Homevid/>
      <Ourvalue/>
      <Value/>
      <Contacts/>
      <Getstarted/>
      {/* <Footer/> */}
    </div>
  );
}

export default Home;
