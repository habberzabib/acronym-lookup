//ACRONYM SEARCH

//BUTTON EVENT LISTENER
document.getElementById("search-btn").addEventListener("click", btnClicked);

function btnClicked() {
  //GET SEARCH INPUT
  let acronym = document.getElementById("search-in").value.toLowerCase();

  //OUTPUT
  if (acronym === "eu") {
    document.getElementById("acronym").innerHTML = `
        <p class ="center text">European Union</p>
        `;
  } else if (acronym === "nato") {
    document.getElementById("acronym").innerHTML = `
    <p class="center text">North Atlantic Treaty Organization</p>
    `;
  } else if (acronym === "un") {
    document.getElementById("acronym").innerHTML = `
    <p class="center text">United Nations</p>
    `;
  } else if (acronym === "ccp") {
    document.getElementById("acronym").innerHTML = `
    <p class="center text">Chinese Communist Party</p>
    `;
  } else if (acronym === "uae") {
    document.getElementById("acronym").innerHTML = `
    <p class="center text">United Arab Emirates</p>
    `;
  } else if (acronym === "uk") {
    document.getElementById("acronym").innerHTML = `
    <p class="center text">United Kingdom</p>
    `;
  } else if (acronym === "us") {
    document.getElementById("acronym").innerHTML = `
    <p class="center text">United States/United States of America</p>
    `;
  } else if (acronym === "ussr") {
    document.getElementById("acronym").innerHTML = `
    <p class="center text">United Socialist Soviet Republic</p>
    `;
  } else {
    document.getElementById("acronym").innerHTML = `
    <p class="center text">No results were found.</p>
    `;
  }
}
