// Find elements
const chatWrapper = () => document.querySelector("#chat-wrapper");
const videoWrapper = () => document.querySelector(".sizing-wrapper.with-chat");

// Application data
const data = {
  showChat: true,
  chatWidth: "288px",
};

// Hide/Show functions
const hideChat = () => {
  chatWrapper().style.display = "none";
  videoWrapper().style.width = "100%";
  data.showChat = false;
};
const showChat = () => {
  chatWrapper().style.display = "block";
  videoWrapper().style.width = `calc(100% - ${data.chatWidth})`;
  data.showChat = true;
};

// Handle event
window.onkeyup = (e) => {
  // Press to toggle: h
  if (e.keyCode === 72) {
    // Toggle chat visibility
    if (data.showChat) {
      hideChat();
    } else {
      showChat();
    }
  }
};
