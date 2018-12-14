window.onload = function () {
    var bandLists = document.getElementsByClassName( "band-list" );
    console.log(bandLists);
    Object.keys(bandLists).forEach(key => {
        bandLists[key].onclick = function() {
            this.classList.toggle('open');
            this.nextElementSibling.classList.toggle('open');
        }
    });
}