import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addUser, setLoginStatus } from "../../Store/Slices/authSlice";

function Register() {
    const auth = useSelector(state => state.auth);
    const history = useHistory()

    useEffect(() => {
        if (auth.isLogin) {
            history.push('/')
        }
    }, []);

    const dispatch = useDispatch()

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [ConfirmationPassword, setConfirmationPassword] = useState('');

    const [isLoading, setIsLoading] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault()

        const user = {
            id: Date.now(),
            name, username, email, password,
            created_at: new Date()
        }

        console.log(user)

        setIsLoading(true)

        dispatch(addUser(JSON.stringify(user)))
        dispatch(setLoginStatus(true))
        setName('')
        setUsername('')
        setEmail('')
        setPassword('')
        setIsLoading(false)
        history.push('/')
    }

    return (
        <>
            {!auth.isLogin && (<section className="row">
                <header>
                    <h1>Register</h1>
                    <p className="p-0 m-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, quos.</p>
                </header>
                <article>
                    <form onSubmit={handleRegister}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Name .."
                                id="name"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input
                                type="text"
                                name="username"
                                className="form-control"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Username .."
                                id="username"
                                required
                            />
                        </div>
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
                        <div className="mb-3">
                            <label htmlFor="confirmation_password" className="form-label">Confirm Password</label>
                            <input
                                type="password"
                                name="confirmation_password"
                                className="form-control"
                                value={ConfirmationPassword}
                                onChange={(e) => setConfirmationPassword(e.target.value)}
                                placeholder="Password .."
                                id="confirmation_password"
                                required
                            />
                        </div>

                        <button type="submit" className="btn btn-dark" disabled={isLoading}>
                            {!isLoading && <span>Register</span>}
                            {isLoading && <span>Register...</span>}
                        </button>
                    </form>
                </article>
            </section>)}
        </>
    )
}

export default Register
