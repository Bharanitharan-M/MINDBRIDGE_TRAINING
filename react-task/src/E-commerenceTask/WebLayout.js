import { Outlet } from "react-router-dom"
import { Navbar } from "../Components/NavBar/Navbar"
import { Home } from "./Home"


export const WebLayout = () => {
  return (
    <div>
    <Navbar />
    <Outlet />
    </div>
  )
}
