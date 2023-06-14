import ProductsList from "./Partials/ProductsList";
import PropTypes from 'prop-types'
import { useSelector } from "react-redux";
import { useContext, useEffect, useState } from "react";
import { CurrencyContext } from "../Contexts/CurrencyContext";
import { useHistory } from "react-router-dom";
import ShopNow from "./Partials/ShopNow";

function Home({ products }) {
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const history = useHistory();
    const { isLogin } = useSelector(state => state.auth);
    const { currencySymbol } = useContext(CurrencyContext);
    const { totalPrice } = useSelector(state => state.cart);

    useEffect(() => {
        if (!isLogin) {
            history.push('/login');
        }
    }, [isLogin]);

    return (
        <>
            {isLogin && (
                <section className="row">
                    <header>
                        <h1>Home Page</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, dignissimos at? Corporis odit repellat maxime quam totam molestiae est dolor.</p>
                    </header>
                    <article>
                        <header>
                            {showSuccessAlert && (
                                <div className="alert alert-success alert-dismissible fade show bg-light fw-bold text-success d-flex align-items-center mb-3 py-2 gap-2" role="alert">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle-fill" viewBox="0 0 16 16">
                                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                                    </svg>
                                    <div>
                                        Successfully Added to Cart
                                    </div>
                                    <button type="button" className="btn btn-sm btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                </div>
                            )}
                        </header>
                        <ProductsList
                            setShowSuccessAlert={setShowSuccessAlert}
                            currencySymbol={currencySymbol}
                            products={products}
                        />
                        <div className="mt-5">
                            <ShopNow
                                amountTotal={totalPrice}
                                currencySymbol={currencySymbol}
                            />
                        </div>
                    </article>
                </section>
            )}
        </>
    );
}

Home.propTypes = {
    products: PropTypes.array
}

export default Home;
