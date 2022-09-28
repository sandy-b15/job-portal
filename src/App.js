import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Footer/Footer";
import Home from "./screens/Home";
import JobDetails from "./screens/JobDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/foot" element={<Footer />} />
        <Route path="/jobDetails/:id" element={<JobDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
