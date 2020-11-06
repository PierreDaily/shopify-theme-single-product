// Put your application javascript here

function sameTagSiblings(elem) {
  // create an empty array
  let siblings = [];

  // if no parent, return empty list
  if (!elem.parentNode) {
    return siblings;
  }

  // first child of the parent node
  let sibling = elem.parentNode.firstElementChild;

  // loop through next siblings until `null`
  do {
    // push sibling to array
    if (sibling != elem && sibling.tagName === elem.tagName) {
      siblings.push(sibling);
    }
  } while ((sibling = sibling.nextElementSibling));

  return siblings;
}

window.addEventListener("load", function () {
  document
    .getElementById("productSelect")
    .addEventListener("change", function (e) {
      var variantId = e.target.value;
      var selectedImage = document.querySelector(
        'img.product-display[data-variant="' + variantId + '"]'
      );
      selectedImage.style.display = "inherit";
      var siblingList = sameTagSiblings(selectedImage);
      for (var i = 0; i < siblingList.length; i += 1) {
        siblingList[i].style.display = "none";
      }
    });
});
