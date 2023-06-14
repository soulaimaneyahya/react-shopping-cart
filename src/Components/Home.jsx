import ProductsList from "./Partials/ProductsList";
import { PropTypes } from 'prop-types'
import { useSelector } from "react-redux";
import CartList from './Common/Partials/CartList'
import { useContext, useState } from "react";
import { CurrencyContext } from "../Contexts/CurrencyContext";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import ShopNow from "./Partials/ShopNow";


function Home({ products }) {

    const [showSuccessAlert, setShowSuccessAlert] = useState(false); // State for showing success alert
    const history = useHistory();
    const auth = useSelector(state => state.auth);

    useEffect(() => {
        if (!auth.isLogin) {
            history.push('/login')
        }
    }, []);

    const { currencySymbol } = useContext(CurrencyContext);
    const total = useSelector((state) => state.cart.totalPrice);
    // console.log(cart)
    // console.log(products)

    return (
        <>
            {auth.isLogin && (<section className="row">
                <header>
                    <h1>Home Page</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, dignissimos at? Corporis odit repellat maxime quam totam molestiae est dolor.</p>
                </header>
                <article>
                    <header>
                        {showSuccessAlert && (<div className="alert alert-success alert-dismissible fade show bg-light fw-bold text-success d-flex align-items-center mb-3 py-2 gap-2" role="alert">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle-fill" viewBox="0 0 16 16">
                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                            </svg>
                            <div>
                                Successfully Added to Cart
                            </div>
                            <button type="button" className="btn btn-sm btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>)}
                    </header>
                    <div>
                        <div>
                            <CartList />
                            <ProductsList
                                setShowSuccessAlert={setShowSuccessAlert}
                                currencySymbol={currencySymbol}
                                products={products} />
                        </div>
                        <div className="mt-5">
                            <ShopNow
                                amountTotal={total}
                                currencySymbol={currencySymbol}
                            />
                        </div>
                    </div>
                </article>
            </section>)}
        </>
    )
}

Home.propTypes = {
    products: PropTypes.array
}

export default Home;
