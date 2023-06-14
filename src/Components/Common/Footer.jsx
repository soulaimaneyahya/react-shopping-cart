const Footer = () => {
    return (<>
        <div className="bg-dark">
            <div className="container py-3">
                <span className="text-white fw-bold">© Copyright <span>Yahya Blog</span> <span>{ new Date().getFullYear() }</span></span>
            </div>
        </div>
    </>);
}

export default Footer;
