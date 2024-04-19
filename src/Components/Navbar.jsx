import React,{useEffect,useState,useRef} from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios'
import $ from 'jquery';
var textvalue = "";
function Search(){
  sessionStorage.setItem("hi",1);
  const [search_data,setsearch_datah] = useState([]);
  const [searchky,setsearchky] = useState(0);
  const [textBoxValue, setTextBoxValue] = useState('');
  const navigate = useNavigate();
sessionStorage.setItem("hi",1);
  var search_res_var = "";
 function UpdateOnKeyUP(event){
  if(textvalue != ""){
    //const timer = setTimeout(() => {
      setsearchky(previous => previous +1 );
      setsearch_datah([]);
      setShowElement(true)
      //setShowElement(true)
    //}, 3000);
  }
 
 }
 function ToMusicPlayer(event){
sessionStorage.setItem("video_id",event.currentTarget.id);
navigate("/player");
 }
 function Updatefocusout(event){
  textvalue = event.target.value;
  setsearch_datah([]);
  //setTextBoxValue("");
 }
 const [showElement, setShowElement] = useState(false);
 const elementRef = useRef(null);

 useEffect(() => {
   function handleClickOutside(event) {
    if (
      elementRef.current &&
      !elementRef.current.contains(event.target) &&
      event.target.id !== 'showButton'
    ) {
      setShowElement(false);
    }
   }

   document.addEventListener('click', handleClickOutside);

   return () => {
     document.removeEventListener('click', handleClickOutside);
   };
 }, []);

    useEffect(() => {
  
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://www.googleapis.com/youtube/v3/search?q='+textvalue+' song&part=snippet&type=video&videoEmbeddable=true&key=AIzaSyB_wVUnTgR8ZDVUHyrw5YZ5zme9oVKIeow',
    headers: { }
  };
  
  axios.request(config)
  .then((response) => {
  var responsedata = response.data.items;
  responsedata.filter(
    (vdinfo) =>{ 
      const sercht_res_jsx = <a href="#" onClick={ToMusicPlayer} id={vdinfo.id.videoId}  className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
      <div className="flex-shrink-0">
        <img className="rounded-full w-11 h-11" src={vdinfo.snippet.thumbnails.high.url} alt="Jese image"/>
        
      </div>
      <div className="w-full ps-3">
          <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400"> <span className="font-semibold text-gray-900 dark:text-white">{vdinfo.snippet.title}</span></div>
          <div className="text-xs text-blue-600 dark:text-blue-500">{vdinfo.snippet.channelTitle}</div>
      </div>
    </a>; 
     /* search_res_var= search_res_var + sercht_res_jsx;*/
      //$("#search_results").append(sercht_res_jsx);
      setsearch_datah(search_data => [...search_data, sercht_res_jsx])
      console.log(vdinfo); }
  );
    //console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
  

  const jsondata = {
    "kind": "youtube#searchListResponse",
    "etag": "Q6dzu0yM8rhvZITWPzIrSFniR4g",
    "nextPageToken": "CAUQAA",
    "regionCode": "IN",
    "pageInfo": {
        "totalResults": 1000000,
        "resultsPerPage": 5
    },
    "items": [
        {
            "kind": "youtube#searchResult",
            "etag": "zGzJxFkTOpyJ4CLsDIqKM2iitKI",
            "id": {
                "kind": "youtube#video",
                "videoId": "gJLVTKhTnog"
            },
            "snippet": {
                "publishedAt": "2023-11-30T14:30:08Z",
                "channelId": "UCafUh796DToiY2U3s7X_WTw",
                "title": "Anuv Jain - HUSN (Official Video)",
                "description": "The eleventh studio recorded single, written, sung and composed by #AnuvJain is here! Listen to 'Husn' on all streaming ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/gJLVTKhTnog/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/gJLVTKhTnog/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/gJLVTKhTnog/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Anuv Jain",
                "liveBroadcastContent": "none",
                "publishTime": "2023-11-30T14:30:08Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "Bw-Hdk_DjWe18AtWKIR2wpPW5xs",
            "id": {
                "kind": "youtube#video",
                "videoId": "0IIJxkDtkHY"
            },
            "snippet": {
                "publishedAt": "2023-12-22T06:33:08Z",
                "channelId": "UC2VdyYW39rxCLA8jr8hEzkg",
                "title": "Anuv Jain - HUSN (Lyrics)",
                "description": "Anuv Jain - HUSN Stream/Download ~ https://anuvjain.lnk.to/Husn ~ Follow Anuv Jain ~ https://www.instagram.com/anuvjain ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/0IIJxkDtkHY/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/0IIJxkDtkHY/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/0IIJxkDtkHY/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Indie India",
                "liveBroadcastContent": "none",
                "publishTime": "2023-12-22T06:33:08Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "vknvC9D6W2wx6iEMT7nZkpHqgM0",
            "id": {
                "kind": "youtube#video",
                "videoId": "GlVT-K721ZE"
            },
            "snippet": {
                "publishedAt": "2023-12-31T14:17:59Z",
                "channelId": "UCLUSOLDM_5-iaXHCN83lYSg",
                "title": "HUSN (Lyrics) - Anuv Jain |Aesthetics Status Video| Whatsapp Status Video| #trending #short",
                "description": "Subscribe For More ♥️… . . . . . aesthetics With Lyrics…♥️ . . . #aesthetic #aestheticdom #aestheticsongs #aestheticquiz ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/GlVT-K721ZE/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/GlVT-K721ZE/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/GlVT-K721ZE/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Aesthetics_Edits",
                "liveBroadcastContent": "none",
                "publishTime": "2023-12-31T14:17:59Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "BMo9Lc8sTpNfe83HQbRi0rP0ojI",
            "id": {
                "kind": "youtube#video",
                "videoId": "bL6dJjxm0x0"
            },
            "snippet": {
                "publishedAt": "2023-12-13T12:30:19Z",
                "channelId": "UCDLvkN2TZ1oyhUBxbltMn_w",
                "title": "Let Her Go x Husn (Gravero Mashup) | Anuv Jain",
                "description": "Business Enquiries: info.gravero@gmail.com Let Her Go x Husn: A Mashup of Heartbreak and Beauty Get ready to be swept away ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/bL6dJjxm0x0/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/bL6dJjxm0x0/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/bL6dJjxm0x0/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Gravero",
                "liveBroadcastContent": "none",
                "publishTime": "2023-12-13T12:30:19Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "6B3Hzqdz0U2WkiC4j9f-Rb9kuoE",
            "id": {
                "kind": "youtube#video",
                "videoId": "0Ua3temCTU4"
            },
            "snippet": {
                "publishedAt": "2024-01-22T09:58:49Z",
                "channelId": "UC3FOH1Zlcrb1TdRy2hUN2jA",
                "title": "Husn - Anuv Jain #prasxor #lyrics #lofi #status #love",
                "description": "THE DIGITAL WORLD MUSIC CREDITS: Music production - Angad Bahra, PUNA Recorded, Mixed and Mastered - Angad Bahra ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/0Ua3temCTU4/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/0Ua3temCTU4/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/0Ua3temCTU4/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "THE DIGITAL WORLD",
                "liveBroadcastContent": "none",
                "publishTime": "2024-01-22T09:58:49Z"
            }
        }
    ]
  }

  
    }, [searchky]);
    

return(
<nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  
  <div className="flex md:order-2">
    
    <div className="relative  md:block">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" strokeLinecap="round"  strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span className="sr-only">Search icon</span>
      </div>
      <div class="flex items-center max-w-sm mx-auto">
      <label for="simple-search" class="sr-only">Search</label>
    <div class="relative w-full">
        
        <input type="text"  id="search-navbar"   onBlur={Updatefocusout}  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-5 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search"  />
        {showElement && (
        <div ref={elementRef}  className="z-20 max-w-sm bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-800 dark:divide-gray-700 mt-2.5 absolute w-80" aria-labelledby="dropdownNotificationButton">
        <div className="block px-4 py-2 font-medium text-center text-gray-700 rounded-t-lg bg-gray-50 dark:bg-gray-800 dark:text-white">
            Search Results
        </div>
        <div className="divide-y divide-gray-100 dark:divide-gray-700" id='search_results'>
          
            
            {search_data}
          
        </div>
        <a href="#" className="block py-2 text-sm font-medium text-center text-gray-900 rounded-b-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">
          <div className="inline-flex items-center ">
            <svg className="w-4 h-4 me-2 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
              <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>
            </svg>
              View all
          </div>
        </a>
      </div>
      )}
        
    </div>
    <button type="submit" onClick={UpdateOnKeyUP} id="showButton"   class="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >
        <svg class="w-4 h-4 me-2" id="showButton" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" id="showButton" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>Search
    </button>
    </div>
      
    </div>
    
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 mt-2.5" >
      <div class="relative mt-3 md:hidden">
        </div>
      
    </div>
  </div>
  
</nav>

)



  }

  function Navbar(){
    
    return(

        
      Search()


        );
  }
  export default Navbar;