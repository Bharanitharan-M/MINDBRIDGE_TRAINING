import { Link, NavLink, useNavigate } from 'react-router-dom'
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../Button/Button'
export const Navbar = () => {
    const check_in = useSelector((state) => state.all_data.sign_in)
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const handleLogin = ()=>{
        navigate("/login")
    }
    return (
        <nav>
            <div className="webLogo">
                <img src="./Gobal_assests/Images/web_logo.jpg" alt="" />
                <h3>Tasty Trip</h3>
            </div>
            <div className='webLink'>
                <ul>
                    <NavLink to="/">
                        <li>Home</li>
                    </NavLink>
                    <NavLink to="/menu">
                        <li>Menu</li>
                    </NavLink>
                    <NavLink to="/cart">
                        <li>Cart</li>
                    </NavLink>
                </ul>
            </div>
            <div className='login_section'>
                {check_in ? 
                <div className='success_login'>
                    <h4>Hello, {check_in}</h4>
                </div>
                : <div className='unsuccess_login'><Button btn_name={"Login"} handle_click={()=>handleLogin()}/></div>
            }
            </div>

        </nav>
    )
}
