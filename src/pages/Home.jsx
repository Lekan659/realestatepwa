import { motion, useAnimation } from "framer-motion";
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
import Ourcontact from "../components/Ourcontact/Ourcontact";

motion

function Home() {
  const controls = useAnimation()

  return (
    <motion.div className="App" animate = {controls}>
      {/* <Header/> */}
      <Hero/>
      <Welcome/>
      <Residencies/>
      <motion.div
        onViewportEnter = {() =>
        controls.start({
          backgroundColor: "var(--frie)",
        })
        }
        onViewportLeave={() =>
          controls.start({
            backgroundColor: "white"
          })
        }
        viewport={{amount: 0.4}}
        >
                <Homevid/>
      </motion.div>

      <Ourvalue/>
      {/* <Value/> */}
    
      <motion.div
        onViewportEnter = {() =>
        controls.start({
          backgroundColor: "var(--lightBlue)",
        })
        }
        onViewportLeave={() =>
          controls.start({
            backgroundColor: "white"
          })
        }
        viewport={{amount: 0.4}}
        >
                <Contacts/>
      </motion.div>
        {/* <Ourcontact/> */}
      <Getstarted/>
      {/* <Footer/> */}
    </motion.div>
  );
}

export default Home;
