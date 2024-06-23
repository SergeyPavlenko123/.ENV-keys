const baseUrl = "http://localhost:4000/movies/get";

const input = document.querySelector("input");
const button = document.querySelector("button");
const result = document.getElementById("result");
const preloader = document.querySelector("spinner");

async function sendRequest(baseUrl, title) {
  const res = await fetch(`${baseUrl}/${title}`);
  return res.json();
}

function renderMovies(data, result) {
  let output = "";

  try {
    data.Search.forEach((element) => {
      output += `
    <div class='movie-item'>
    <div class="item-poster">
      <img src="${
        element.Poster == "N/A" ? "./img/no-poster.png" : element.Poster
      }" alt="${element.Title}">
    </div>
    <h2 class="movie-title">${element.Title},${element.Year}</h2>
    </div>    
`;
    });
  } catch {
    output = `<h1>За вашим запитом нічого не знайдено!</h1>`;
  }

  result.innerHTML = output;
}

button.addEventListener("click", (e) => {
  e.preventDefault();
  sendRequest(baseUrl, input.value).then((data) => renderMovies(data, result));
});
