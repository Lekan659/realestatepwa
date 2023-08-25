import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Home from "./pages/Home";
import { Suspense } from "react";
import Layout from "./components/Layout/Layout";
import Properties from "./pages/Properties/Properties";
import { QueryClient, QueryClientProvider } from "react-query";

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
        <Route path="/projects" element={<Properties/>}/>
        </Route>
      </Routes>
      </BrowserRouter>

      </QueryClientProvider>
    </div>
  );
}

export default App;
