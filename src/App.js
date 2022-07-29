import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/login";
import Feed from "./pages/feed";
import About from "./pages/about";
import Contact from "./pages/contact";
import Account from "./pages/account";
import Footer from "./pageComponents/footer1/footer";

import { useState } from "react";

import "./css/app.css";

const App = () => {
  const [user, setUser] = useState();
  return (
    <div className="AppStyles">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login setter={setUser} user={user} />} />

          <Route path="/about" element={<About />} />
          <Route
            path="/account"
            element={<Account setter={setUser} user={user} />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/feed" element={<Feed />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
