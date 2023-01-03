import { Loader } from "@mantine/core";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Reservation from "./components/Reservation";
import Home from "./pages/Home";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  if (loading) {
    return (
      <div id="loader">
        <Loader color="green" size="xl" variant="bars" />
      </div>
    );
  }
  return (
    <div id="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
      <Footer />
    </div>
  );
}
