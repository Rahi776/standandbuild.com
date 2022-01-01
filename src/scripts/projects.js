
import 'lazysizes';

// helper to get the slug portion of a cloudinary image url
const getSlug = (url) => {
  const parts = url.split('/');
  const urlSlugIndex = parts.indexOf('upload') + 2; // see structure of cloudinary urls
  return parts.slice(urlSlugIndex).join('/');
}

const thumbnails = document.querySelectorAll('.projects-main .image-bar img');

thumbnails.forEach((thumbnail) => {
  // get main image and cache in closure
  const ix = thumbnail.className.split(' ').pop().split('-').pop(); // this is fragile and depends on order of classes
  const mainImage = document.querySelector(`.projects-main .main-image-${ix}`);

  thumbnail.onclick = (e) => {
    const mainSlug = getSlug(mainImage.src);
    const thumbSlug = getSlug(e.target.src);
    const mainSlugRegex = new RegExp(mainSlug, 'g');
    mainImage.src = mainImage.src.replace(mainSlugRegex, thumbSlug);
    mainImage.srcset = mainImage.srcset.replace(mainSlugRegex, thumbSlug);
  };
});
