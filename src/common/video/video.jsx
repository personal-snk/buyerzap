import ReactPlayer from "react-player";
import { getImagePath } from "src/utils";

const Video = ({props,className}) => {  
    return (
       <div className={`player-wrapper ${className}`}>
            <ReactPlayer
            className='react-player fixed-bottom'
            url= {getImagePath('home/buyerzap_video.mp4')}
            width='100%'
            height='100%'
            controls = {true}
            muted={true}
            config={{ file: { attributes: {
              autoPlay: true,
              muted: true
            }}}}
            loop={true}
            playsinline={true}
            onReady={(e) => {
              const player = e.getInternalPlayer();
              player.setAttribute('muted', 'true');
            }}
            />
        </div>
    );
  };
  
  export default Video;