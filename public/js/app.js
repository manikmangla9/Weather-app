
//client side javascript

const weatherform=document.querySelector('form');
const search=document.querySelector('input');
var messageone=document.querySelector('#message-1');
var messagetwo=document.querySelector('#message-2');
weatherform.addEventListener('submit',(e)=>{
e.preventDefault();
const location=search.value;

messageone.textContent='Loading...';
messagetwo.textContent='';

fetch('http://127.0.0.1:5000/weather?address='+location).then((response)=>{
 response.json().then((data)=>{
    if(data.error)
    messageone.textContent=data.error;
    else
    {
        messageone.textContent=data.location;
        messagetwo.textContent=data.forecast;
    }
 });

});
});