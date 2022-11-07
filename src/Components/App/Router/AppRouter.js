import { Routes, Route } from "react-router-dom"
import { Home } from "../../Pages/Home"
import { Login } from "../../Pages/Login/Login"
import { NotFound } from "../../Pages/NotFound"
import { UserProfile } from "../../Pages/UserProfile"
import { FlashMessages } from "../FlashMessages/FlashMessages"
import { Modal } from "../Modal/Modal"
import { Footer } from "../Partials/Footer"
import { Header } from "../Partials/Header"

 export const AppRouter = () => {
  return (
    <>
    <FlashMessages/>
    <Modal />
    <Header/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="user" element={<UserProfile/>}/>
        <Route path="*" element={<NotFound/>}/>
    </Routes>
    <Footer/>
    </>
    )
}
