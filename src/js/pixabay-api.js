
export function getImages(paramsToSearch) {
  const params = new URLSearchParams({
    key: '43250270-1f98e5ae52bb69b689c51c131',
    q: paramsToSearch,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`https://pixabay.com/api/?${params}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}