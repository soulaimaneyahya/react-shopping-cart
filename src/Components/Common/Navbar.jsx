import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import CurrencyProvider from "../../Contexts/CurrencyContext";
import { setLoginStatus } from "../../Store/Slices/authSlice";
import Cart from "./Partials/Cart";
import CartList from "./Partials/CartList";

const Nav = () => {
    const auth = useSelector((state) => state.auth);
    const history = useHistory();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(setLoginStatus(false))
        history.push("/login");
    };

    return (
        <CurrencyProvider>
            <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
                <div className="container">
                    <NavLink className="navbar-brand" exact to="/">Shopping Cart</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-md-flex justify-content-between" id="navbarNav">
                        <ul className="navbar-nav">
                            {auth.isLogin && (
                                <>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" exact to="/">Home Page</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" exact to="/checkout">Checkout</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <Cart />
                                    </li>
                                </>
                            )}
                        </ul>
                        <ul className="navbar-nav">
                            {auth.isLogin ? (
                                <>
                                    <li className="nav-item">
                                        <a className="nav-link mx-md-3" role="button" onClick={handleLogout}>Logout</a>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li className="nav-item">
                                        <NavLink className="nav-link mx-md-3" exact to="/login">Login</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="btn btn-light text-dark" exact to="/register">Register</NavLink>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>

            <CartList />
        </CurrencyProvider>
    );
};

export default Nav;
