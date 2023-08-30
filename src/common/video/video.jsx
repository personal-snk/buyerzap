import ReactPlayer from "react-player";
import video from 'src/assets/home/buyerzap_video.mp4';
import VideoIcon from 'src/assets/home/video_icon.svg';

const Video = ({props,className}) => {  
    return (
       <div className={`player-wrapper ${className}`}>
            <ReactPlayer
            // light={<img src={VideoIcon} alt='Thumbnail' />}
            className='react-player fixed-bottom'
            url= {video}
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