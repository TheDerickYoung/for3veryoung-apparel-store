import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as F3yLogo } from "../../assets/f3y-logo.svg";
import { ReactComponent as CartIcon } from "../../assets/cart-icon.svg";
import "../../routes/navigation/navigation.styles.scss";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <F3yLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/contact">
            CONTACT
          </Link>
          <Link className="nav-link" to="/login">
            LOGIN
          </Link>
          <Link className="nav-link" to="/sign-in">
            <CartIcon className="cart-icon" to="/cart" />
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
