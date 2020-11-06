// Put your application javascript here

$(document).ready(function() {
    $('#productSelect').change(function() {
        var variantId = this.value;
        var selectedImage = $('img.product-display[data-variant="' + variantId +'"]');
        selectedImage.show().siblings('img.product-display:visible').hide();
    });
});