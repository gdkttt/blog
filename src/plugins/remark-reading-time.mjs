export function remarkReadingTime() {
  return function (tree, file) {
    const textOnPage = file.value;
    if (!textOnPage) {
      file.data.astro.frontmatter.readingTime = 0;
      return;
    }

    const wordsPerMinute = 200;
    const words = textOnPage.split(/\s+/).length;
    const time = Math.ceil(words / wordsPerMinute);

    file.data.astro.frontmatter.readingTime = time;
  };
}
