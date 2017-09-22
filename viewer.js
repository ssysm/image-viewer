try{
	function viewer(option){
	if(!option.class){
		option.class = 'viewer-image'
	}if (!option.scale) {
		option.scale = '75%'
	}
	if(!option.text){
		option.text = '';
	}
	var total_class = document.querySelectorAll('.'+option.class).length
	var container = document.getElementById('viewer-container')
	for (var i = 0; i <= total_class -1; i++) {
		var image_src = document.getElementsByClassName(option.class)[i].getAttribute('src');
		container.insertAdjacentHTML('beforeend',`
			<div id="myModal" class="viewer-modal modal-main modal-number-${i}">
			<div class="viewer-modal-content">
			<span class="viewer-modal-close" onclick="onClose(${i})">&times;</span>
			<img class='modal-image' src='${image_src}' >
			<div class="modal-text">
			${option.text}
			</div>
			</div>
			</div>
			`)
		document.getElementsByClassName(option.class)[i].setAttribute("onclick","onView("+i+",'"+option.scale+"')")
	}
}
}catch(err){
	throw err;
}
	function onView(id,scale) {
		var modal = document.getElementsByClassName('viewer-modal')[id];
		document.getElementsByClassName('modal-image')[id].style.width = scale;
		document.getElementsByClassName('modal-text')[id].style.width = scale;
		modal.style.display="block";
		window.onclick = function(event) {
			if (event.target == modal) {
				modal.style.display = "none";
			}
		}
	}
	function onClose(id){
		var modal = document.getElementsByClassName('viewer-modal')[id];
		modal.style.display = "none";
	}