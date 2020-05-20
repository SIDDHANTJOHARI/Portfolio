$(document).ready(function(){
$("#but-lang").click(function(){
$("#Languages").show();
$("#Frameworks").hide();
$("#Other").hide();
$("#Databases").hide();
});
$("#but-frame").click(function(){
$("#Languages").hide();
$("#Frameworks").show();
$("#Other").hide();
$("#Databases").hide();
});
$("#but-db").click(function(){
$("#Languages").hide();
$("#Frameworks").hide();
$("#Other").hide();
$("#Databases").show();
});
$("#but-oth").click(function(){
$("#Languages").hide();
$("#Frameworks").hide();
$("#Other").show();
$("#Databases").hide();
});
});
  window.addEventListener("DOMContentLoaded", function() {
    
    var form = document.getElementById("my-form");
    var button = document.getElementById("my-form-button");
    var status = document.getElementById("my-form-status");
    
    function success() {
      form.reset();
      button.style = "display: none ";
      status.innerHTML = "Thanks!";
    }

    function error() {
      status.innerHTML = "Oops! There was a problem.";
    }

    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }
