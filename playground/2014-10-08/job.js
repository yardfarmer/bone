// this === self => true
this.addEventListener('message',function(e){
	this.postMessage('Eat, Good!' + e.data);
});
