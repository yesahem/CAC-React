// Will fetch random image here and display it in App.jsx

const ImageFetch = () => {
  const url = 'https://api.api-ninjas.com/v1/randomimage?category=technology'
  fetch(url, {
    method: 'GET',
    headers: {
      "X-Auth-Token": '2Q2Fqgb8bmYB3uI+HxkE6A==bSN6U7IEThvaasZp'
    }
  })
    .then(res => {
      return res;
    })
}
