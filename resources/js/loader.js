window.Features = {};
window.RegisteredFeatures = [];

window.onload = function() {
  window.RegisteredFeatures.forEach(feature => feature());
};
