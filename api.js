function apiLoad() {
  const apiBox = document.createElement("div");
  apiBox.id = "apiBox";
  apiBox.className = "apiBox";
  document.getElementById("main").appendChild(apiBox);

  const apiIn = document.createElement("INPUT");
  apiIn.id = "apiIn";
  apiIn.className = "apiIn";
  document.getElementById("apiBox").appendChild(apiIn);

  const button = document.createElement("button");
  button.id = "button";
  button.className = "button";
  button.textContent = "Call API";
  button.addEventListener("click", RandomPic);
  document.getElementById("apiBox").appendChild(button);

  const showImg = document.createElement("div");
  showImg.className = "showImg";
  showImg.id = "showImg";
  document.getElementById("main").appendChild(showImg);

  async function RandomPic() {
    try {
      const number = document.getElementById("apiIn").value;
     
      const response = await fetch(
        `https://dog.ceo/api/breeds/image/random/${number}`
      );
      const data = await response.json();

      data.message.map((message) => {
        const newImage = document.createElement("img");
        newImage.src = message;
        document.getElementById("showImg").appendChild(newImage);
      });
    } catch (error) {
      console.log(error);
    }
  }
}
