let thumbnails = document.querySelectorAll("img[id^='thumbnail']")

thumbnails.forEach((e) => e.addEventListener("click", () => {
    document.getElementById("mainImage").src = e.src
    document.getElementById("mainImageCaption").innerText = e.alt
}))
