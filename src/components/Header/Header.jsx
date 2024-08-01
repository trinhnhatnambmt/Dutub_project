import { SearchOutlined } from "@ant-design/icons";
import { logo } from "../../assets";
import "./index.scss";
function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <img src={logo} alt="logo" />
                <div className="header__search">
                    <SearchOutlined />
                    <input type="text" placeholder="Search..." />
                </div>
            </div>
            <div className="header_right"></div>
        </div>
    );
}

export default Header;
