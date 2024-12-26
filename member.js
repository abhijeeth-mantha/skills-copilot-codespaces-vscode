function skillsMember() {
    // Get the value of the input field with id="myInput"
    var input = document.getElementById("myInput");
    var filter = input.value.toUpperCase();
    var ul = document.getElementById("skillsList");
    var li = ul.getElementsByTagName("li");
    var a = ul.getElementsByTagName("a");
    for (var i = 0; i < li.length; i++) {
        var txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}