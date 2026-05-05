import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./ScrollToTop";

import Layout from "./Layout";

// Pages
import Home from "./pages/Home";
import Plan from "./pages/Plan";
import Step1 from "./pages/steps/Step1";
import Step2 from "./pages/steps/Step2";
import Step3 from "./pages/steps/Step3";
import Receipt from "./pages/Receipt";
import HowItsWork from "./pages/HowItsWork";
import Contact from "./pages/Contact";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import Dashboard from "./pages/dashboard/Dashboard";
import Internet from "./pages/Internet";
// import Services1 from "./pages/spectrum-internet-service/Services1";
import Services2 from "./pages/spectrum-internet-service/Services2";
import Services3 from "./pages/spectrum-internet-service/Services3";
import Services4 from "./pages/spectrum-internet-service/Services4";
import Services5 from "./pages/spectrum-internet-service/Services5";

function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />

      <Header />

      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>

            {/* WRAPPED ROUTES (ANIMATED) */}
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/internet" element={<Internet />} />
              <Route path="/plan" element={<Plan />} />
              <Route path="/step1" element={<Step1 />} />
              <Route path="/step2" element={<Step2 />} />
              <Route path="/step3" element={<Step3 />} />
              <Route path="/receipt" element={<Receipt />} />
              <Route path="/how-its-work" element={<HowItsWork />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>

            {/* AUTH (NO LAYOUT ANIMATION IF YOU WANT CLEAN SEPARATION) */}
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />


            {/* <Route path="/services1" element={<Services1 />} /> */}
            <Route path="/services2" element={<Services2 />} />
            <Route path="/services3" element={<Services3 />} />
            <Route path="/services4" element={<Services4 />} />
            <Route path="/services5" element={<Services5 />} />



          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </>
  );
}

export default App;