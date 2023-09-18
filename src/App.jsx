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
        <Route path="/about" element={<About/>}/>
       
        </Route>
      </Routes>
      </BrowserRouter>

      </QueryClientProvider>
    </div>
  );
}

export default App;
