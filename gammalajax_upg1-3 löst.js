$(document).ready(function() {
  $.get("https://jsonplaceholder.typicode.com/users/").done(function(data) {
    for (dataElement of data) {
      console.log(dataElement.name);
      $("#UserInfo").append(
        '<a class="user-info" data-name="' +
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
          "</a>"
      );
      $("#UserInfo").append("<br></br>");
    }

    // start av uppgift
    // $.get("https://jsonplaceholder.typicode.com/users/").done(function(data) {
    //     for (dataElement of data) {
    //       console.log(dataElement.name);
    //       $("#UserInfo").append("<p>" + dataElement.name + "</p>");  //#UserInfo samma sak som body
    //       $("#UserInfo").append("<p>" + dataElement.address.street + "</p>");
    //       $("#UserInfo").append("</br>")
    //     }

    //för att få ut hela listan med personer
    //     $.get("https://jsonplaceholder.typicode.com/users/",
    // { id:1 })
    // .done(function(data) {
    // console.log(data)
    // })
    // .fail(function(error) {
    // console.log(`Error: ${error.status}`)
    // });
  });
  $("#UserInfo").on("click", ".user-info", function() {
    event.preventDefault();
    $("#Name").html(
      "<p>" +
        $(this).data("name") +
        "</p>" +
        "<p>" +
        $(this).data("homepage") +
        "</p>" +
        "<p>" +
        $(this).data("phone") +
        "</p>" +
        "<p>" +
        $(this).data("email") +
        "</p>"
    );
  });
  });
  //   $("#UserInfo").each(function() {
  //       alert("Hej!")
  //   })
});
