function skillsMember() {
  var members = document.getElementsByClassName("member");
  for (var i = 0; i < members.length; i++) {
    var member = members[i];
    var skills = member.getElementsByClassName("skills")[0];
    skills.style.display = "none";
  }
}
