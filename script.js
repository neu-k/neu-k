document.addEventListener("DOMContentLoaded", function() {
  const imgElms = document.querySelectorAll("img");
  const currentTime = new Date().getTime();

  imgElms.forEach(imgElm => {
    const url = new URL(imgElm.src);
    url.searchParams.set("timestamp", currentTime);
    imgElm.src = url.toString();
  });
});
