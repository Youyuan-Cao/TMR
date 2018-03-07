function removeElement(parentDiv, childDiv){
     if (childDiv == parentDiv) {
          alert("Error - Axion can not be completed");
     }
     else if (document.getElementById(childDiv)) {
          var child = document.getElementById(childDiv);
          var parent = document.getElementById(parentDiv);
          parent.removeChild(child);
     }
     else {
          alert("You have already deleted event");
          return false;
     }
}
