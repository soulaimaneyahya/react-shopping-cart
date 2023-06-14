import { useHistory } from "react-router-dom"

function NotFound() {
    const history = useHistory();

    const handleGoBack = () => {
        history.go(-1)
    }

    return (
        <>
            <div className="text-center">
                <h1 className="text-dark mt-5 fw-bold">404 | Not Found</h1>
                <button className="btn btn-sm btn-dark" onClick={handleGoBack}>Go Back</button>
            </div>
        </>
    )
}

export default NotFound
