import { ArrowRightOutlined, SearchOutlined } from "@ant-design/icons";
import { logo } from "../../assets";
import "./index.scss";
import { Link } from "react-router-dom";
function Header() {
    return (
        <div className="header">
            <header className="header__inner">
                <div className="header__left">
                    <img src={logo} alt="logo" />
                    <div className="header__search">
                        <SearchOutlined style={{ color: "#ccc" }} />
                        <input type="text" placeholder="Search..." />
                    </div>
                </div>
                <div className="header__right">
                    <div className="header__cta">
                        <Link className="header__login">Log in</Link>
                        <button className="header__signUp">
                            Sign Up{" "}
                            <div className="signUp__decor">
                                <ArrowRightOutlined />
                            </div>
                        </button>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;
