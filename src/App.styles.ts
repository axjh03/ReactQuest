import styled, { createGlobalStyle } from 'styled-components';
// import BGImage from './images/nattu-adnan-unsplash.jpg';
import BGImage from './images/bgwebp.webp';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    background-image: url(${BGImage});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }

  * {
    font-family: 'Catamaran', sans-serif;
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }

  .score {
    color: #fff;
    font-size: 2rem;
    margin: 3%;
  }

h1 {
  font-family: 'Press Start 2P', cursive; /* Retro arcade-like font */
  font-weight: 900; /* Extra bold font weight */
  background-size: 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  font-size: 100px; /* Larger font size for a bolder impact */
  text-align: center;
  margin: 30px;
  letter-spacing: 4px; /* Increased spacing for more style */
  animation: orangeFlow 3s ease-in-out infinite; /* Flowing shades of orange animation */
}

@keyframes orangeFlow {
  0% {
    color: #ff914d; /* Bright orange */
    text-shadow: 5px 5px 0 #ff914d, 10px 10px 15px rgba(255, 145, 77, 0.5);
  }
  33% {
    color: #ff7518; /* Darker orange */
    text-shadow: 5px 5px 0 #ff7518, 10px 10px 15px rgba(255, 117, 24, 0.5);
  }
  66% {
    color: #ff4500; /* Deep orange (almost red-orange) */
    text-shadow: 5px 5px 0 #ff4500, 10px 10px 15px rgba(255, 69, 0, 0.5);
  }
  100% {
    color: #ff914d; /* Return to bright orange */
    text-shadow: 5px 5px 0 #ff914d, 10px 10px 15px rgba(255, 145, 77, 0.5);
  }
}


.start, .next {
    cursor: pointer;
    background: linear-gradient(135deg, #1a1a2e, #ff914d); /* Dark blue to orange gradient */
    border: 2px solid #ff914d;  /* Orange border to complement the background */
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.5); /* Stronger shadow for a darker background */
    border-radius: 12px;
    height: 50px; /* Increased height for better readability */
    margin: 15px 0;
    padding: 0 40px;
    font-size: 18px; /* Increased font size */
    color: #ffffff; /* White text for better contrast */
    font-weight: bold;
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.start:hover, .next:hover {
    transform: translateY(-3px);
    box-shadow: 0px 12px 25px rgba(0, 0, 0, 0.7); /* Enhanced shadow on hover */
}

.start:active, .next:active {
    transform: translateY(1px);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
}


  .start {
    max-width: 200px;
  }
`;
