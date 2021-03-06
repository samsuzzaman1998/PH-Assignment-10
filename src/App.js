import Header from "./Components/Header/Header";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import HomePage from "./Pages/HomePage/HomePage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import BlogPage from "./Pages/BlogPage/BlogPage";
import CheckOutPage from "./Pages/CheckOutPage/CheckOutPage";
import LogInPage from "./Pages/LogInPage/LogInPage";
import SignUpPage from "./Pages/SignUpPage/SignUpPage";
import NotFoundPage from "./Pages/404Page/NotFoundPage";
import "bootstrap/dist/css/bootstrap.min.css";
import PasswordReset from "./Components/PasswordReset/PasswordReset";
import RequireAuth from "./utilities/RequireRoute";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route
                    path="/checkout"
                    element={
                        <RequireAuth>
                            <CheckOutPage />
                        </RequireAuth>
                    }
                />
                <Route path="/signIn" element={<LogInPage />} />
                <Route path="/signUp" element={<SignUpPage />} />
                <Route path="/passwordReset" element={<PasswordReset />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
