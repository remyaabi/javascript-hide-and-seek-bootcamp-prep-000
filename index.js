var selectorValue="main.#app li";
function getFirstSelector(selectorValue){
  return document.querySelector(selectorValue);
  
}

function nestedTarget(){
  var element='div';
  var divNested=document.getElementById('app').querySelector(`${element}#nested .target`);
 /* var divTargetArray=[];
  for(let i=0;i<divNested.length;i++){
    console.log("array element: " + divNested[i]);
    divTargetArray.push(divNested[i].child.querySelectorAll('.target'));
  }
  console.log("divNested : "+ divNested);*/
  return divNested;
  
}
 function increaseRankBy(n){
  var ranked_list_value=document.querySelectorAll("ul.ranked-list li");
    for(let i=0; i<ranked_list_value.length;i++){
       console.log("ranked_list_value : " + ranked_list_value[i]);
       console.log("ranked_list_value.innerText : " + ranked_list_value[i].innerHTML);
       var value=parseInt(ranked_list_value[i].innerHTML) + n;
       console.log("value : "+value)
       ranked_list_value[i].innerHTML=value;
      }
     }
     
   function deepestChild() {
     var childNodeOfDiv=document.getElementById('app').querySelector('div#grand-node');
     while(childNodeOfDiv.children[0]){
        childNodeOfDiv = childNodeOfDiv.children[0]
       }
       return childNodeOfDiv;
      }
    