const gallery = document.getElementById("gallery");
const addImageBtn = document.getElementById("addImageBtn");

const myImages = [
    "images/IMG-20250929-WA0002.jpg",
    "images/IMG-20250929-WA0003.jpg",
    "images/IMG-20250929-WA0004.jpg",
    "images/IMG-20250929-WA0005.jpg",
    "images/IMG-20250929-WA0006.jpg",
    "images/IMG-20250929-WA0007.jpg",
    "images/IMG-20250929-WA0008.jpg",
    "images/IMG-20250929-WA0008.jpg",
    "images/IMG-20250929-WA0010.jpg",
    "images/IMG-20250929-WA0011.jpg",
    "images/IMG-20250929-WA0012.jpg",
    "images/IMG-20250929-WA0001.jpg",
];

let index = 0;

addImageBtn.addEventListener("click", () => {
    if (index < myImages.length) {
    const newImg = document.createElement("img");
    newImg.src = myImages[index];
    newImg.alt = "My Picture " + (index + 1);
    gallery.appendChild(newImg);
    index++;
} else {
    alert("no more images to add!" );
}
});
