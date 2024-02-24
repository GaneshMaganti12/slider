import React, { useState } from "react"
import './App.css';

function App() {

  const imageList = [
    { id: 1, imageUrl: "https://img.freepik.com/premium-photo/bansuri-serenade-3d-visualization-little-krishna-s-music_789916-1767.jpg?w=740"},
    { id: 2, imageUrl: "https://img.freepik.com/premium-photo/tiger-cub-is-playing-swing-wearing-hat_986511-725.jpg?w=740"},
    { id: 3, imageUrl: "https://img.freepik.com/free-photo/3d-rendering-cartoon-boy_23-2150797600.jpg?t=st=1708751523~exp=1708755123~hmac=d0dfea7155379e621ee80ffdfb29f48f81bb958233ec97bad9173fcebab30623&w=740"},
    { id: 4, imageUrl: "https://img.freepik.com/free-photo/cute-ai-generated-cartoon-bunny_23-2150288868.jpg?t=st=1708751527~exp=1708755127~hmac=b35f5b497ae8a1c57a85ea616f6e48a118753e292ecbe0e59545d052d02aef18&w=740"},
    { id: 5, imageUrl: "https://img.freepik.com/free-photo/cute-elephant-wearing-cool-outfit_23-2150802040.jpg?t=st=1708751533~exp=1708755133~hmac=dfb0013c84a7d7899be7dc8e7ab29eb75b90d374471f87dcfca6869b30113437&w=740"},
    { id: 6, imageUrl: "https://img.freepik.com/premium-photo/cartoon-character-with-blue-shirt-that-says-i-think-you_911330-226.jpg?w=740"},
    { id: 7, imageUrl: "https://img.freepik.com/free-photo/3d-rendering-young-tiger_23-2150897780.jpg?t=st=1708751547~exp=1708755147~hmac=991bffaf7733df425701d7f0ce853bb7d769d1fc042f3c6c9f4574fdbb08e622&w=740"},
    { id: 8, imageUrl: "https://img.freepik.com/free-photo/cute-cartoony-characters-hugging_23-2151012435.jpg?t=st=1708751563~exp=1708755163~hmac=e7c18ff9b98a639e0ef9c9631bd3cf1d8be9c1f48550196e4a7e7d75aab9fcfd&w=740"},
    { id: 9, imageUrl: "https://img.freepik.com/free-photo/cartoon-like-kid-playing-with-cubes-indoors_23-2150898599.jpg?t=st=1708751617~exp=1708755217~hmac=91e497685a745bfa288f601d4f6271c18906880e6d31bfbfbdbc598c37aa2a17&w=740"},
    { id: 10, imageUrl: "https://img.freepik.com/free-photo/cute-tiger-studio_23-2150875491.jpg?t=st=1708706378~exp=1708709978~hmac=029de394cc632d8c1eeedb1cc8c84ea3d261cda7584165e39f2b24f136c784da&w=740"},
    { id: 11, imageUrl: "https://img.freepik.com/free-photo/3d-render-little-boy-with-t-shirt-shorts_1142-51210.jpg?t=st=1708751694~exp=1708755294~hmac=0d699a36d8e6d5bcd2495acd2ae75326b010940a043aff597723811edcf81a1f&w=740"},
    { id: 12, imageUrl: "https://img.freepik.com/free-photo/3d-cartoon-style-character_23-2151033991.jpg?t=st=1708751701~exp=1708755301~hmac=2dbe8cdf9840cb50df50d3638bcc9e09d3cb89292b2b21b9daa98753e07a406d&w=740"},
    { id: 13, imageUrl: "https://img.freepik.com/free-photo/3d-rendering-boy-playing-swing_23-2150898529.jpg?t=st=1708751706~exp=1708755306~hmac=0dcf5d91d22ad56b906179149fa510d558173f32254607759a60c58472e5b91b&w=740"},
    { id: 14, imageUrl: "https://img.freepik.com/free-photo/3d-rendering-cartoon-like-boy-holding-sign_23-2150797672.jpg?t=st=1708751707~exp=1708755307~hmac=69499964b49b9e38d523aa88d008f3d286dd2fdcf4a03b15cababa94160d3f41&w=740"},
  ]

  const [imageArr, setImageArr] = useState(imageList)
  const [activeIndex, setActiveIndex] = useState(0)
  let slides = 5


  const handleRight = () =>{
    const addExtra = Math.floor(imageList.length / slides) - 1
    if(activeIndex <= (imageList.length / 2) + addExtra){
      setActiveIndex(activeIndex => activeIndex + 1)
    }
  }

  const handleLeft = () =>{
    if(activeIndex > 0){
      setActiveIndex(activeIndex => activeIndex - 1)
    }
  }

  return (
    <div className="app">
      <button className="left" onClick={handleLeft}>{"<"}</button>
      <div className="app-container">
        <div style={{display: "flex", transition: "transform 0.5s ease", transform: `translateX(-${activeIndex * 160}px)`}}>
          {imageList.map((each) =>(
            <div className="image-card">
              <img src={each.imageUrl} alt="/" className="image" />
            </div>
          ))}
        </div>
      </div>
      <button className="right" onClick={handleRight}>{">"}</button>
    </div>
  );
}

export default App;