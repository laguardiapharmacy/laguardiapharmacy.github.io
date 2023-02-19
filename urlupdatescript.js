function updateUrl(page) {
  history.pushState({}, page, `/${page}`);
}

document.getElementById("contact").addEventListener("click", function() {
  updateUrl("contact");
  
});
document.getElementById("services").addEventListener("click", function() {
    updateUrl("services");
});