import PropTypes from 'prop-types';
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';
import './appLayouts.css'

const AppLayouts = ({ children }) => {
    return (
        <div className="wrapper">
            <header className="app-header">
                <Navbar />
            </header>
            <section className="app-container py-4">
                <div className="container mb-5">
                    {children}
                </div>
            </section>
            <footer className="app-footer">
                <Footer />
            </footer>
        </div>
    );
};

AppLayouts.propTypes = {
    // This must be exactly one element or it will warn. single child can be passed
    children: PropTypes.element.isRequired
};

export default AppLayouts;
