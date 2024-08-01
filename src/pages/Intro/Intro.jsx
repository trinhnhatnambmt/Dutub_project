import "./index.scss";

function Intro() {
    return (
        <div className="intro">
            <video autoPlay muted loop>
                <source
                    type="video/mp4"
                    src="https://download-video.akamaized.net/v3-1/playback/00755cfa-bbf4-4bcb-a760-9982642b50d7/1ff46d31?__token__=st=1722492159~exp=1722506559~acl=%2Fv3-1%2Fplayback%2F00755cfa-bbf4-4bcb-a760-9982642b50d7%2F1ff46d31%2A~hmac=d9d828c1dfd90d86d9f8dbc20f8d2cc335a61e962dc1a5a6ff7f4a5707beff4d&r=dXMtY2VudHJhbDE%3D"
                />
            </video>
        </div>
    );
}

export default Intro;
