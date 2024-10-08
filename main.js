// banner text animation
window.onload = function () {
  const bannerP1 = document.getElementById("banner-p-1");
  const bannerP2 = document.getElementById("banner-p-2");
  const speed = 20;

  const text1 = `Fed up with living out of a suitcase <br>
                  and waiting endlessly for home repairs?`;
  const text2 = `Join Our Team of  <br>
                  Independent <br>
                 `;

  function typeWriter(element, text, index = 0) {
    if (index < text.length) {
      if (text.charAt(index) === "<") {
        // Handle the opening of a tag
        element.innerHTML += text.slice(index, index + 4); // Add '<br />' or other HTML
        index += 4; // Move the index past the tag
      } else {
        element.innerHTML += text.charAt(index);
        index++;
      }
      setTimeout(() => typeWriter(element, text, index), speed);
    }
  }

  // Check if banner-p-1 exists
  if (bannerP1) {
    typeWriter(bannerP1, text1, 0); // Start typing for the first banner
  }

  // Check if banner-p-2 exists
  if (bannerP2) {
    // Start typing for the second banner after a delay based on the length of text1
    // Adjust delay as necessary
    setTimeout(() => {
      typeWriter(bannerP2, text2, 0); // Start typing for the second banner
    });
  }
};
