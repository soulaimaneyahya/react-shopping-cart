import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { authActions } from "../../Store/Slices/authSlice";

function Login() {
    const auth = useSelector(state => state.auth);
    const history = useHistory()

    useEffect(() => {
        if (auth.isLogin) {
            history.push('/')
        }
    }, []);

    const dispatch = useDispatch()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault()

        const user = {
            id: Date.now(),
            email, password,
            created_at: new Date()
        }

        console.log(user)

        setIsLoading(true)

        setEmail('')
        setPassword('')
        setIsLoading(false)
        dispatch(authActions.login())
        history.push('/')
    }

    return (
        <>
            {!auth.isLogin && (<section className="row">
                <header>
                    <h1>Login</h1>
                    <p className="p-0m-0 text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, ab.</p>
                </header>
                <article>
                    <form onSubmit={handleLogin}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email address .."
                                id="email"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password .."
                                id="password"
                                required
                            />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="remember" />
                            <label className="form-check-label" htmlFor="remember">Remember me</label>
                        </div>

                        <button type="submit" className="btn btn-dark" disabled={isLoading}>
                            {!isLoading && <span>Login</span>}
                            {isLoading && <span>Login...</span>}
                        </button>
                    </form>
                </article>
            </section>)}
        </>
    )
}

export default Login
