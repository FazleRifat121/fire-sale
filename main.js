// type writer animation
window.onload = function () {
  const bannerP1 = document.getElementById("banner-p-1");
  const bannerP2 = document.getElementById("banner-p-2");
  const bannerP3 = document.getElementById("banner-p-3");
  const bannerP2_1 = document.getElementById("banner-p-2-1");
  const bannerP3_1 = document.getElementById("banner-p-3-1");
  const speed = 20;

  const text1 = `Fed up with living out of a suitcase <br>
                  and waiting endlessly for home repairs?`;
  const text2 = `Join Our Team of  <br>
                  Independent <br>`;
  const text3 = `Unlock Unique Buying  <br>
                  Opportunities with <br>`;
  const text2_1 = `Expert Consultants `;
  const text3_1 = `Fire-Sale Properties`;

  function typeWriter(element, text, index = 0, callback) {
    if (index < text.length) {
      if (text.charAt(index) === "<") {
        // Handle the opening of a tag
        element.innerHTML += text.slice(index, index + 4); // Add '<br />' or other HTML
        index += 4; // Move the index past the tag
      } else {
        element.innerHTML += text.charAt(index);
        index++;
      }
      setTimeout(() => typeWriter(element, text, index, callback), speed);
    } else if (callback) {
      callback(); // Call the callback function once typing is complete
    }
  }

  // Check if banner-p-1 exists
  if (bannerP1) {
    typeWriter(bannerP1, text1, 0); // Start typing for the first banner
  }

  // Check if banner-p-2 exists
  if (bannerP2) {
    // Start typing for the second banner after a delay based on the length of text1
    setTimeout(() => {
      typeWriter(bannerP2, text2, 0, () => {
        // Once bannerP2 is finished, start typing for bannerP2_1
        typeWriter(bannerP2_1, text2_1, 0);
      });
    }, text1.length * speed); // Adjust delay based on text1 length
  }
  // Check if banner-p-3 exists
  if (bannerP3) {
    // Start typing for the second banner after a delay based on the length of text1
    setTimeout(() => {
      typeWriter(bannerP3, text3, 0, () => {
        // Once bannerP2 is finished, start typing for bannerP2_1
        typeWriter(bannerP3_1, text3_1, 0);
      });
    }, text1.length * speed); // Adjust delay based on text1 length
  }
};
// splide slider
var splide = new Splide(".splide", {
  type: "loop",
  perPage: 4,
  perMove: 1,
  autoplay: true,
  interval: 3000,
});

splide.mount();
