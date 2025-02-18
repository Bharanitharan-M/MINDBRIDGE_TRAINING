import { useNavigate } from 'react-router-dom'
import './Home.css'
export const Home = () => {
  const navigate = useNavigate();
  const click_show_all = () => {
    navigate("/menu")
  }
  return (
    <div className="heading_home">
      <div className='image_style'>
        {/* <img src="/Gobal_assests/Images/menu_page_heading.jpg"  alt="" /> */}
        <div className='search_section'>
          <input type="search" name="search_menu" id="search_menu" placeholder={"🔎search by menu"} />
        </div>
      </div>

      <div className='our_service'>
        <div className='service'>
          <i class="fa-solid fa-store" />
          <h4>Top Restaurants</h4>
          <p>Serving the best food in town</p>
        </div>
        <div className='service'>
          <i class="fa-solid fa-basket-shopping" />
          <h4>Fresh Ingredients</h4>
          <p>We use only the freshest ingredients</p>
        </div>
        <div className='service'>
          <i class="fa-solid fa-motorcycle" />
          <h4>Fast Delivery</h4>
          <p>Get your food delivered in on time</p>
        </div>
        <div className='service'>
          <i class="fa-solid fa-map-location-dot" />
          <h4>Live Order Tracking</h4>
          <p>Track your food order in real-time</p>
        </div>
      </div>

      <div className='cuisines_list'>
        <div className='cuisines_head'>
          <div>
            <h4>Popular category</h4>
          </div>
          <div>
            <button onClick={click_show_all}>See All</button>
          </div>
        </div>
        <div className='cuisines'>
          <div className='cusisine col-3'>
            <div class="card">
              <div class="card-body">
                <div className='cuisine_button'>
                  <button>Show All</button>
                </div>
                <div className='cuisine_type'>
                  <i class="fas fa-bowl-food"></i>
                  <p class="card-text">Biryani</p>
                </div>
              </div>
            </div>
          </div>

          <div className='cusisine col-3'>
            <div class="card">
              <div class="card-body">
                <div className='cuisine_button'>
                  <button>Show All</button>
                </div>
                <div className='cuisine_type'>
                  <i class="fas fa-bowl-rice"></i>
                  <p class="card-text">Fried Rice</p>
                </div>
              </div>
            </div>
          </div>

          <div className='cusisine col-3'>
            <div class="card">
              <div class="card-body">
                <div className='cuisine_button'>
                  <button>Show All</button>
                </div>
                <div className='cuisine_type'>
                  <i class="fa-solid fa-pizza-slice"></i>
                  <p class="card-text">Pizza</p>
                </div>
              </div>
            </div>
          </div>

          <div className='cusisine col-3'>
            <div class="card">
              <div class="card-body">
                <div className='cuisine_button'>
                  <button>Show All</button>
                </div>
                <div className='cuisine_type'>
                  <i class="fa-solid fa-fish" />
                  <p class="card-text">Sea Food</p>
                </div>
              </div>
            </div>
          </div>

          <div className='cusisine col-3'>
            <div class="card">
              <div class="card-body">
                <div className='cuisine_button'>
                  <button>Show All</button>
                </div>
                <div className='cuisine_type'>
                  <i class="fa-solid fa-ice-cream" />
                  <p class="card-text">Ice Cream</p>
                </div>
              </div>
            </div>
          </div>

          <div className='cusisine col-3'>
            <div class="card">
              <div class="card-body">
                <div className='cuisine_button'>
                  <button>Show All</button>
                </div>
                <div className='cuisine_type'>
                  <i class="fas fa-cake" />
                  <p class="card-text">Pastry</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}
