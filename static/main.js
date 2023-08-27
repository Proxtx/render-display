const imageApi = await framework.load("image.js");
const img = document.getElementById("img");

const imgLoop = async () => {
  img.src = "data:image/png;base64, " + (await imageApi.getImage());

  setTimeout(() => imgLoop(), 1000);
};

imgLoop();
