import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Home from "./pages/Home";
import { Suspense } from "react";
import Layout from "./components/Layout/Layout";
import Properties from "./pages/Properties/Properties";
import Property from "./pages/Property/Porperty";
import { QueryClient, QueryClientProvider } from "react-query";
import About from "./pages/About/About";
// import {ReactWhatsapp} from "react-whatsapp";
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import ReactWhatsapp from "react-whatsapp";
import Oldproperties from "./pages/OldProperties/OldProperties";

function App() {
  const queryclient = new QueryClient
  return (
    <div className="App">
      <QueryClientProvider client={queryclient}>
      <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}></Suspense>
      <Routes>
        <Route element={<Layout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects">
        <Route index element={<Properties/>}/>
        <Route path=":projectId" element={<Property/>}/>
        </Route>

        <Route path="/oldprojects">
        <Route index element={<Oldproperties/>}/>
        <Route path=":projectId" element={<Property/>}/>
        </Route>
        
        <Route path="/about" element={<About/>}/>
       
        </Route>
      </Routes>
      </BrowserRouter>



      </QueryClientProvider>

      <ReactWhatsapp element="button" number="2348111120003" message="Hello World!!!" />
      <FloatingWhatsApp phoneNumber="2348111120003" avatar="/logo.png" accountName="Oak Homes" statusMessage="Available" />
      <float />
    </div>
  );
}

export default App;
