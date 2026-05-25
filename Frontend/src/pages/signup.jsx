import { useNavigate } from "react-router-dom";
export default function Signup() {
    const navigate = useNavigate();
    const handleSignup = () => {
    navigate("/dashboard");
}
    return (
        <> 
        <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card p-4 shadow" style={{width: "400px"}}>
        <h2 className="text-center mb-3">Signup</h2>

        <input className="form-control mb-2" placeholder="Name" />
        <input className="form-control mb-2" placeholder="Email" />
        <input className="form-control mb-2" placeholder="Password" />
        <input className="form-control mb-3" placeholder="Confirm Password" />

        <button className="btn btn-primary w-100" onClick={handleSignup}>Create Account</button>
      </div>
    </div>
        </>
    )
}