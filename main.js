function validateSearch() {
      var flyingFrom = document.querySelector("#source").value;
      var flyingTo = document.querySelector("#destination").value;

      if(flyingFrom === flyingTo) {
            alert("Source and destination cannot be same");
            return false;
      }
}