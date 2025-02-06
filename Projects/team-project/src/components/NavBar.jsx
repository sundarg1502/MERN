import logo from "/src/assets/logo.png"
import search from "/src/assets/search_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg"
import account from "/src/assets/account_circle_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg"
import star from "/src/assets/star_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg"
import cart from "/src/assets/shopping_cart_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg"
import menu from "/src/assets/menu_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 (1).svg"
import "/src/styles/NavBar.css"

const NavBar = () => {
  return (
    <div className='nav-bar'>
      <img src={logo} alt="" />
      <div className="search">
        <select className="filters">
          <option value="">select</option>
        </select>
        <button className="button-input">
          <input type="text" />
          <img src={search} alt="" />
        </button>
      </div>
      <div className="icons icons-hide">
        <div className="icon"><img src={account} alt="" /><span>Account</span></div>
        <div className="icon"><img src={star} alt="" /><span>Wishlist</span></div>
        <div className="icon"><img src={cart} alt="" /><span>Cart</span></div>
        <div className="icon"><img src={menu} alt="" /><span></span></div>
      </div>
    </div>
  )
}

export default NavBar
