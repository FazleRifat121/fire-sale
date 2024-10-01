// banner text animation

window.onload = function () {
  const bannerP1 = document.getElementsByClassName("banner-p-1")[0];
  let i = 0;
  const speed = 20;
  const text = `Fed up with living  out of a suitcase <br>
                  and waiting endlessly for home repairs?`;

  function typeWriter() {
    if (i < text.length) {
      if (text.charAt(i) === "<") {
        // Handle the opening of a tag
        bannerP1.innerHTML += text.slice(i, i + 4); // Add '<br />'
        i += 4; // Move the index past the tag
      } else {
        bannerP1.innerHTML += text.charAt(i);
        i++;
      }
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();
};
