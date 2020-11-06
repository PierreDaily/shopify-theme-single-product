// Put your application javascript here

/**
 *
 * @param {HTMLElement} elem - A valid HTML Element
 * @param {string} [selector] - A valid CSS selector
 */

// Polyfills
if (!Element.prototype.matches) {
  Element.prototype.matches =
    Element.prototype.msMatchesSelector ||
    Element.prototype.webkitMatchesSelector;
}
// Polyfills End

function siblings(elem, selector) {
  var siblings = [];

  if (!elem || !elem.parentNode) {
    return siblings;
  }

  var children = elem.parentNode.children;

  if (selector) {
    for (var i = 0; i < children.length; i += 1) {
      if (children[i].matches(selector) && children[i] !== elem)
        siblings.push(children[i]);
    }
    return siblings;
  }

  for (var i = 0; i < children.length; i += 1) {
    if (children[i] !== elem) siblings.push(children[i]);
  }

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
      var siblingList = siblings(selectedImage, "img.product-display");
      if (siblingList.length > 0) {
        selectedImage.style.display = "inherit";
        for (var i = 0; i < siblingList.length; i += 1) {
          siblingList[i].style.display = "none";
        }
      }
    });
});
