import { ArrowRightOutlined } from "@ant-design/icons";
import { introVideo } from "../../assets";
import Footer from "../../components/Footer/Footer";
import "./index.scss";

function Intro() {
    return (
        <div className="intro">
            <video autoPlay muted loop>
                <source type="video/mp4" src={introVideo} />
            </video>
            <div className="intro__content">
                <h1 className="intro__title">Watch and create your Videos</h1>
                <p className="intro__desc">
                    Get everything you need to edit, manage, and publish
                    stunning videos that move the needle.
                </p>
                <button className="btn">
                    Watch Video
                    <div className="btn__decor">
                        <ArrowRightOutlined />
                    </div>
                </button>
            </div>
            {/* <Footer /> */}
        </div>
    );
}

export default Intro;
