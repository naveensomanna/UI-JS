const star = document.querySelectorAll(".fa")


console.log(star)

star.forEach((node) => {
  node.addEventListener("click", function() {
    if (node.classList.contains("checked")) {
      node.classList.remove("checked");
    } else {
      node.classList.add("checked");
    }
  })
})
