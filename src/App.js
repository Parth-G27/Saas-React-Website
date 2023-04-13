import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollTop from "./components/ScrollTop";
import About from "./pages/About/About";
import BlogDetails from "./pages/BlogDetails/BlogDetails";
import Blogs from "./pages/Blogs/Blogs";
import Contact from "./pages/Contact/Contact";
import HeaderStyleFive from "./pages/HeaderStyleFive/HeaderStyleFive";
import HeaderStyleFour from "./pages/HeaderStyleFour/HeaderStyleFour";
import HeaderStyleSeven from "./pages/HeaderStyleSeven/HeaderStyleSeven";
import HeaderStyleSix from "./pages/HeaderStyleSix/HeaderStyleSix";
import Home from './pages/Home/Home';
import HomeThree from "./pages/HomeThree/HomeThree";
import HomeTwo from "./pages/HomeTwo/HomeTwo";
import Portfolio from "./pages/Portfolio/Portfolio";
import PortfolioDetails from "./pages/PortfolioDetails/PortfolioDetails";
import Services from "./pages/Services/Services";
import ServicesDetails from "./pages/ServicesDetails/ServicesDetails";
import Team from "./pages/Team/Team";
import TeamDetails from "./pages/TeamDetails/TeamDetails";

import Platform from "./pages/Platform/Platform";
import Solutions from "./pages/Solutions/Solutions";
import Startnow from "./pages/Startnow/Startnow";
import AIAcademy from './pages/AIAcademy/AIAcademy';
import Ourteam from './pages/Ourteam/Ourteam';
import Partner from './pages/Partner/Partner';
import Service from './pages/Service/Service';
import News from './pages/News/News';
import Usecases from './pages/Usecases/Usecases';
import Bookdemo from './pages/Bookdemo/Bookdemo';
import Releasenotes from "./pages/Releasenotes/Releasenotes";
import Newsdetails1 from "./pages/Newsdetails1/Newsdetails1";
import Newsdetails2 from './pages/Newsdetails2/Newsdetails2';
import Newsdetails3 from './pages/Newsdetails3/Newsdetails3';
import Newsdetails4 from './pages/Newsdetails4/Newsdetails4';
import Privacy from "./pages/Privacy/Privacy";
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import { useRef } from 'react';


function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollTop/>
        <Routes>
            <Route path="/" element={<HomeThree/>} />
            <Route path="/home" element={<Home />} />
            <Route path="/homeTwo" element={<HomeTwo/>} />
            <Route path="/homeThree" element={<HomeThree/>} />
            <Route path="/headerStyleFour" element={<HeaderStyleFour/>} />
            <Route path="/headerStyleFive" element={<HeaderStyleFive/>} />
            <Route path="/headerStyleSix" element={<HeaderStyleSix/>} />
            <Route path="/headerStyleSeven" element={<HeaderStyleSeven/>} />
            <Route path="/platform" element={<Platform/>} />
            <Route path="/solutions" element={<Solutions/>} />
            <Route path="/startnow" element={<Startnow/>} />
            <Route path="/aiacademy" element={<AIAcademy/>} />
            <Route path="/ourteam" element={<Ourteam/>} />
            <Route path="/partner" element={<Partner/>} />
            <Route path="/service" element={<Service/>} />
            <Route path="/news" element={<News/>} />
            <Route path="/usecases" element={<Usecases/>} />
            <Route path="/bookdemo" element={<Bookdemo/>} />
            <Route path="/releasenotes" element={<Releasenotes/>} />
            <Route path="/newsdetails1" element={<Newsdetails1/>} />
            <Route path="/newsdetails2" element={<Newsdetails2/>} />
            <Route path="/newsdetails3" element={<Newsdetails3/>} />
            <Route path="/newsdetails4" element={<Newsdetails4/>} /> 
            <Route path="/privacy" element={<Privacy/>} />


            


            



            <Route path="/about" element={<About/>} />
            <Route path="/services" element={<Services/>} />
            <Route path="/servicesDetails" element={<ServicesDetails/>} />
            <Route path="/portfolio" element={<Portfolio/>} />
            <Route path="/portfolioDetails" element={<PortfolioDetails/>} />
            <Route path="/team" element={<Team/>} />
            <Route path="/teamDetails" element={<TeamDetails/>} />
            <Route path="/blogs" element={<Blogs/>} />
            <Route path="/blogDetails" element={<BlogDetails/>} />
            <Route path="/contact" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
