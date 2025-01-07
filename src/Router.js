import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ExperiencePage from "./ExperiencePage";

export default function Router() {
    return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}/>
            {/* <Route path="*" element={<NoPage />} /> */}
            <Route path="/zeekr" element={<ExperiencePage/>}/>
        </Routes>
      </BrowserRouter>
    );
  }