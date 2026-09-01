import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Contact from "@/pages/Contact";
import ProjectDetail from "@/pages/ProjectDetail";
import Services from "@/pages/Services";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects/casa-verde" element={<ProjectDetail />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
