console.log('hello word')
const input = document.querySelector('#todo');
const ol = document.querySelector('ol');








const arr =[];
function getinput(){
 ol.innerHTML = ""   
 arr.push(input.value)   
console.log(arr);
input.value =''

for (let i = 0; i < arr.length; i++){
ol.innerHTML +=`<li>${arr[i]}
<button onclick="inputdelete(${i})">delete</button>
<button onclick="inputedit(${i})">edit</button>
</li>`


}
}  
function inputdelete(index){
arr.splice(index , 1)
getinput()

}
function inputedit(index){
  const updatevalue = prompt('enter update value');
  arr.splice(index , 1 , updatevalue)
getinput()
}