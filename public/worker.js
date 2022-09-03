// worker.js
function Worker () {
	var self = this;
self.addEventListener('message', function(e) {
  var message = e.data + 'to myself!';
  self.postMessage(message);
}
}