import Navbar from "../Navbar";
import React, { useState, useEffect,useRef } from 'react';
import Sidebar from "../Sidebar";
import axios from 'axios';
import "../MainCompnents/Sontracker.css";
import { Link, useParams } from 'react-router-dom';

function parseDuration(durationString) {
  const match = durationString.match(/^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/);
  if (match) {
    const hours = parseInt(match[1] || 0, 10);
    const minutes = parseInt(match[2] || 0, 10);
    const seconds = parseInt(match[3] || 0, 10);

    // Handle hours (if any) by converting them to minutes and adding to existing minutes
    const totalMinutes = hours * 60 + minutes;

    return `${totalMinutes}:${seconds.toString().padStart(2, '0')}`;
  } else {
    throw new Error("Invalid ISO 8601 duration format");
  }
}
function Player(){
 const [loadmusic,setloadmusic]=useState(0);
  // State variable to hold session data
  const { username } = useParams();
if(":"+sessionStorage.getItem("currentvdID")!=username){
  setloadmusic(loadmusic => [loadmusic+1])
}
sessionStorage.setItem("currentvdID",sessionStorage.getItem("video_id"));
  
  const progressBar = document.querySelector('#musicloader'); // Select the progress bar element

// Define a function to update progress
function updateProgress(progressValue) {
  try{
    const currentTime =  document.querySelector('audio').currentTime;
    const [minutes, seconds] = endTime.split(":");
  const videoDuration = parseInt(minutes, 10) * 60 + parseInt(seconds); // Replace with actual video ID
  const progress = (currentTime / videoDuration) * 100;
  progressBar.style.width = `${progress}%`;
    //progressBar.style.width = `${progressValue}%`; // Set the width as a percentage

  }catch{}
}

// Simulate progress increase (replace with your actual logic)

  const [audioReady, setAudioReady] = useState(false);
  useEffect(() => {
    const audio = document.getElementById('audioBtn');

    const handleCanPlay = () => {
      setAudioReady(true);
      audio.play();
    };

    audio.addEventListener('canplay', handleCanPlay);

    return () => {
      audio.removeEventListener('canplay', handleCanPlay);
    };
  }, []);
  const handlePause = () => {
   // alert("pause");
  };

  // Function to handle play event
  const handlePlay = () => {
  // alert("play");
   setisplaying("true");
  };
  function StreamingAudioPlayer() {
    
  
    
  
    return (
      <audio id="audioBtn"  src={music} className="audioBtn"  preload="auto">
      <source src={music} id="track" type="audio/mp4"></source>
    </audio>
    );
  }
   const [isPlaying, setisplaying]=useState("");
   
  let initAudio = () => {
    //const targetAudio = document.getElementsByClassName("audioBtn")[0];
    //targetAudio.play();
  
  if (isPlaying!=="true" || isPlaying==="") {
    const audioRef = document.getElementById("audioBtn");
    const track = document.getElementById("track");
    

    
    //audioRef.src = track.src;
        audioRef.load();
        audioRef.play();
    //targetAudio.play();
    //setisplaying("true");
    document.querySelector('audio').addEventListener('timeupdate', updateProgress); 
    document.querySelector('audio').addEventListener("ended", function(){
      document.querySelector('#musicloader').style.width = "100%";
 });
   /* let currentProgress = 0;
    const intervalId = setInterval(() => {
      currentProgress += 5; // Increase progress by 5% each interval
      updateProgress(currentProgress);
      if (currentProgress >= 100) { // Stop at 100%
        clearInterval(intervalId);
      }
    }, 100);*/
    } else {
      //clearInterval(intervalId);
      
    const audioRef = document.getElementById("audioBtn");
const isAudioPlaying = !document.querySelector('audio').paused;
if(isAudioPlaying){
  audioRef.pause();
}else{
  setisplaying("false");
}
      //setisplaying("false");
    }
  };
  const [data, setData] = useState([]);

  const [title, settitle] = useState([]);
  const [subtitle, setsubtitle] = useState([]);
 const [imgurl,setimgurl]=useState([]);
 const [music,setmusic]=useState([]);
 const [audio, setAudio] = useState(new Audio(music));
 const [endTime,setendTime]=useState(0.00);
  useEffect(() => {
    let data = '';
  let  config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://cloudy-ox-earmuffs.cyclic.app/music/'+sessionStorage.getItem("video_id"),
    headers: {}
  };
  
  axios.request(config)
  .then((response) => {
    audio.pause();
    setmusic(response.data.musicUrl);
    const timer = setTimeout(() => {
      try{
    initAudio();

      }catch{}
      }, 100);
    //element.querySelector('audio')
    //source.src = response.data.musicUrl;
    // Cause the audio element to load the new source
    //audio.load();
    //document.getElementsByClassName("audioBtn").play();
   // audio.pause();
    
  })
  .catch((error) => {
    console.log(error);
  });

     config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&type=video&videoEmbeddable=true&key=AIzaSyB_wVUnTgR8ZDVUHyrw5YZ5zme9oVKIeow&id='+sessionStorage.getItem("video_id"),
        headers: { }
      };
    axios.request(config)
  .then((response) => {
  var responsedata = response.data.items[0];
  settitle(responsedata.snippet.title);
  setimgurl(responsedata.snippet.thumbnails.high.url);
  setsubtitle(responsedata.channelTitle);
  setendTime(parseDuration(responsedata.contentDetails.duration));
    //console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
    /*const fetchData = async () => {
      try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/videos?part=snippet&type=video&videoEmbeddable=true&key=AIzaSyB_wVUnTgR8ZDVUHyrw5YZ5zme9oVKIeow&id=gJLVTKhTnog');
        settitle(response.data.items[0].snippet.title);
        setimgurl(response.data.items[0].snippet.thumbnails.default.url);
        setimgurl(response.data.items[0].snippet.thumbnails.default.url);
        
       
    } catch (error) {
        console.error('Error fetching data:', error);
      }
    };*/

   // fetchData();
  }, [loadmusic]);
    return(<>
<Sidebar/>
        <div class="p-4 sm:ml-64">
        <Navbar/>
   <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
      

   <StreamingAudioPlayer/>
    <div class="bg-gray-100 p-4 flex justify-center items-center h-screen">
  <div class="bg-white p-8 rounded-lg shadow-md w-80">
    <img  src={imgurl}
            alt="LogoMusicImage" class="w-64 h-64 mx-auto rounded-lg mb-4 shadow-lg shadow-teal-50"/>
    
    <h2 class="text-xl font-semibold text-center">{title}</h2>
    
    <div class="mt-6 flex justify-center items-center">
      <button class="p-3 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none">
        <svg width="64px" height="64px" viewBox="0 0 24 24" class="w-4 h-4 text-gray-600" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M16.6598 14.6474C18.4467 13.4935 18.4467 10.5065 16.6598 9.35258L5.87083 2.38548C4.13419 1.26402 2 2.72368 2 5.0329V18.9671C2 21.2763 4.13419 22.736 5.87083 21.6145L16.6598 14.6474Z" fill="#000000"></path>
            <path d="M22.75 5C22.75 4.58579 22.4142 4.25 22 4.25C21.5858 4.25 21.25 4.58579 21.25 5V19C21.25 19.4142 21.5858 19.75 22 19.75C22.4142 19.75 22.75 19.4142 22.75 19V5Z" fill="#000000"></path>
          </g>
        </svg>
      </button>
      <button className="play" onClick={initAudio} class="p-4 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none mx-4">
        <svg width="64px" height="64px" viewBox="0 0 24 24" class="w-6 h-6 text-gray-600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M2 6C2 4.11438 2 3.17157 2.58579 2.58579C3.17157 2 4.11438 2 6 2C7.88562 2 8.82843 2 9.41421 2.58579C10 3.17157 10 4.11438 10 6V18C10 19.8856 10 20.8284 9.41421 21.4142C8.82843 22 7.88562 22 6 22C4.11438 22 3.17157 22 2.58579 21.4142C2 20.8284 2 19.8856 2 18V6Z" fill="#000000"></path>
            <path d="M14 6C14 4.11438 14 3.17157 14.5858 2.58579C15.1716 2 16.1144 2 18 2C19.8856 2 20.8284 2 21.4142 2.58579C22 3.17157 22 4.11438 22 6V18C22 19.8856 22 20.8284 21.4142 21.4142C20.8284 22 19.8856 22 18 22C16.1144 22 15.1716 22 14.5858 21.4142C14 20.8284 14 19.8856 14 18V6Z" fill="#000000"></path>
          </g>
        </svg>
      </button>
      <button class="p-3 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none">
        <svg width="64px" height="64px" viewBox="0 0 24 24" class="w-4 h-4 text-gray-600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M16.6598 14.6474C18.4467 13.4935 18.4467 10.5065 16.6598 9.35258L5.87083 2.38548C4.13419 1.26402 2 2.72368 2 5.0329V18.9671C2 21.2763 4.13419 22.736 5.87083 21.6145L16.6598 14.6474Z" fill="#000000"></path>
            <path d="M22.75 5C22.75 4.58579 22.4142 4.25 22 4.25C21.5858 4.25 21.25 4.58579 21.25 5V19C21.25 19.4142 21.5858 19.75 22 19.75C22.4142 19.75 22.75 19.4142 22.75 19V5Z" fill="#000000"></path>
          </g>
        </svg>
      </button>
    </div>
    <div class="mt-6 bg-gray-200 h-2 rounded-full">
      <div id="musicloader" class="bg-teal-500 h-2 rounded-full" style={{"width" : "0%"}}></div>
    </div>
    <div class="flex justify-between mt-2 text-sm text-gray-600">
      <span>0:00</span>
      <span>{endTime}</span>
    </div>
  </div>
</div>
   </div>
</div>
</>
    );
}

export default Player;