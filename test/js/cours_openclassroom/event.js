let parent = document.getElementById("parent");
let clicksParent = 0;

let child = document.getElementById("child");
let clicksChild = 0;

parent.addEventListener('click',function(event){
  clicksParent++;
  document.getElementById("parent-count").innerHTML = clicksParent;
});

child.addEventListener('click',function(event){
  clicksChild++;
  event.preventDefault();
  event.stopPropagation();
  document.getElementById("child-count").innerHTML = clicksChild;
});