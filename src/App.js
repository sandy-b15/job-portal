import React , {useLayoutEffect} from "react";
import { BrowserRouter, Routes, Route , useLocation } from "react-router-dom";
import Footer from "./Footer/Footer";
import Home from "./screens/Home";
import JobDetails from "./screens/JobDetails";

const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
} 


export default function App() {
  return (
    <BrowserRouter>
    <Wrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/foot" element={<Footer />} />
        <Route path="/jobDetails/:id" element={<JobDetails />} />
      </Routes>
      </Wrapper>
    </BrowserRouter>
  );
}
