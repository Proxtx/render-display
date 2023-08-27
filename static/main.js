const imageApi = await framework.load("image.js");
const img = document.getElementById("img");

const imgLoop = async () => {
  try {
    img.src = "data:image/png;base64, " + (await imageApi.getImage());
  } catch {}
  setTimeout(() => imgLoop(), 1000);
};

imgLoop();
