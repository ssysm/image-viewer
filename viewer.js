var total_class = document.querySelectorAll('.viewer-image').length
console.log(total_class)
var container = document.getElementById('viewer-container')
for (var i = 0; i <= total_class -1; i++) {
	console.log(i)
	var image_src = document.getElementsByClassName('viewer-image')[i].getAttribute('src');
	container.insertAdjacentHTML('beforeend',`
		<div id="myModal" class="modal modal-main modal-number-${i}">
		<!-- Modal content -->
			<div class="modal-content">
				<span class="close" onclick="onClose(${i})">&times;</span>
				<img class='modal-image' src='${image_src}' >
			</div>
		</div>
	`)
	document.getElementsByClassName('viewer-image')[i].setAttribute("onclick","onView("+i+")")
}
function onView(id) {
	var modal = document.getElementsByClassName('modal')[id];
	modal.style.display="block";
	window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
}
function onClose(id){
	var modal = document.getElementsByClassName('modal')[id];
	modal.style.display = "none";
}
