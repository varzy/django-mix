window.Features = {};
window.RegisteredFeatures = [];

window.onload = function() {
  window.RegisteredFeatures.map(feature => feature());
};
