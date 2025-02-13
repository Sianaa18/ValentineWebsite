const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const image = document.querySelector(".image");
const playVideoBtn = document.querySelector(".play-video-btn"); 
const videoContainer = document.querySelector(".video-container");
const videoPlayer = document.querySelector("#video-player");

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
    // Hide the No button
    noBtn.style.display = "none";
    yesBtn.style.display = "none";
    question.innerHTML = "Yay! I knew it😊";
    image.style.display = "none";
    playVideoBtn.style.display = "inline-block";
});

// Show and play the video when the Play Video button is clicked
playVideoBtn.addEventListener("click", () => {
    videoContainer.style.display = "block"; 
    videoPlayer.play(); 
});

// Make the No button move randomly on hover
noBtn.addEventListener("mouseover", () => {
    const wrapper = document.querySelector(".wrapper");
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    // Calculate max positions to ensure the button stays within the wrapper
    const maxX = wrapperRect.width - noBtnRect.width;
    const maxY = wrapperRect.height - noBtnRect.height;

    // Ensure randomX and randomY are within the wrapper bounds
    const randomX = Math.min(Math.floor(Math.random() * maxX), maxX);
    const randomY = Math.min(Math.floor(Math.random() * maxY), maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});
