import { Outlet } from "react-router-dom"
import { Navbar } from "../Components/NavBar/Navbar"


export const WebLayout = () => {
  return (
    <div>
    <Navbar />
    <Outlet />
    </div>
  )
}
