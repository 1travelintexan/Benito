import { Loader } from "@mantine/core";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import SmallNavbar from "./components/SmallNavbar";
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
    <>
      <Navbar />
      <SmallNavbar />
    </>
  );
}
