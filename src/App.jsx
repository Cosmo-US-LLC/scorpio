import { Routes, Route } from "react-router-dom";
import "./assets/styles.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
    <Toaster position="top-right"
    toastOptions={{
          style: {
            background: "#111",
            color: "#fff",
            fontSize: "14px",
            borderRadius: "8px",
          position: "relative",
          zIndex: 999,
          },
        }}
    reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
