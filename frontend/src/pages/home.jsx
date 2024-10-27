import home from "../assets/home.png";
import { useNavigate } from 'react-router-dom';
import "./home.css";


function HomePage() {
    const navigate = useNavigate();
    const toLogin = () => {
        navigate('/login');
    };
    const toSignUp = () => {
        navigate('/signup');
    };
    return (
        <div>
            <div className="back">
            <div className="button1">
                <button onClick={toLogin} style={{ background: 'none', border: 'none', color: 'transparent', cursor: 'pointer', padding: 0 }}>
                    Sign Up
                </button>
            </div>
            <div className="button2">
                <button onClick={toSignUp} style={{ background: 'none', border: 'none', color: 'transparent', cursor: 'pointer', padding: 0 }}>
                    Sign Up
                </button>
            </div>
                {/* <img
                    src={home}
                    alt="Background"
                    className="w-full h-full object-cover"
                ></img> */}
            </div>

        </div>

    );

}

export default HomePage;