$(document).ready(function() {
  $.get("https://jsonplaceholder.typicode.com/users/").done(function(data) {
    for (dataElement of data) {
      console.log(dataElement.name);
      $("#PeopleList").append(
        '<option class="user-info" value=' +
          dataElement.id +
          ' data-name="' +
          dataElement.name +
          '" data-homepage ="' +
          dataElement.website +
          '" data-phone ="' +
          dataElement.phone +
          '" data-email ="' +
          dataElement.email +
          '" href="https://jsonplaceholder.typicode.com/users/' +
          dataElement.id +
          '">' +
          dataElement.id +
          ": " +
          dataElement.name +
          "</option>"
      );
    }
  });
  $("#PeopleList").on("change", function() {
    var person = $(this).find("option:selected");
    $("#Name").html(
      "<p>" +
        person.data("name") +
        "</p>" +
        "<p>" +
        person.data("homepage") +
        "</p>" +
        "<p>" +
        person.data("phone") +
        "</p>" +
        "<p>" +
        person.data("email") +
        "</p>"
    );
  });
});
