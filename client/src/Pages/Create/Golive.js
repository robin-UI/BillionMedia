import Webcam from "react-webcam";

const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };

const Golive = () => {
    return (
        <div>
            <Webcam
                audio={false}
                height={720}
                screenshotFormat="image/jpeg"
                width={1280}
                videoConstraints={videoConstraints}
            >
                {({ getScreenshot }) => (
                    <button
                        onClick={() => {
                            const imageSrc = getScreenshot()
                        }}
                    >
                        Capture photo
                    </button>
                )}
            </Webcam>
        </div>
    )
}

export default Golive