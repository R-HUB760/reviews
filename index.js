let reviews =[
{
 id:1,
 img: "demo2.png",
 author: "Bilkish Banu",
 job: "Web Designer",
 info: "Web designers plan, create and code internet sites and web pages, many of which combine text with sounds, pictures, graphics and video clips. A web designer is responsible for creating the design and layout of a website or web pages. It and can mean working on a brand new website or updating an already existing site."
},
{
 id:2,
 img: "demo3.png",
 author: "Raihan Islam",
 job: "Web Developer",
 info: "A web developer is a programmer who develops World Wide Web applications using a client–server model. The applications typically use HTML, CSS and JavaScript in the client, PHP, ASP.NET (C#), Python, Node."
},
{
 id:3,
 img: "demo4.png",
 author: "Abdur Rahim",
 job: "UI Designer",
 info: "User interface (UI) design is the process designers use to build interfaces in software or computerized devices, focusing on looks or style. Designers aim to create interfaces which users find easy to use and pleasurable. UI design refers to graphical user interfaces and other forms—e.g., voice-controlled interfaces."
},
{
 id:4,
 img: "demo5.png",
 author: "Sorifa Katun",
 job: "Graphic Designer",
 info: "Graphic designers create visual concepts, using computer software or by hand, to communicate ideas that inspire, inform, and captivate consumers. They develop the overall layout and production design for applications such as advertisements, brochures, magazines, and reports."
},
{
  id:5,
  img: "demo6.png",
  author: "Mim Akter",
  job: "Front-End Designer",
  info: "A front end developer, also known as a front end web developer, is a professional responsible for the design and implementation of the interface. The users require this interface so that they can access the application in question. A web designer is a professional who creates a website's appearance and design."
 }
];

// Html dom selectors
let img = document.querySelector('#img');
let user_name = document.querySelector('#author');
let job = document.querySelector('#job');
let info = document.querySelector('#info');
let pre_btn = document.querySelector('.pre-btn');
let next_btn = document.querySelector('.next-btn');
let random_btn = document.querySelector('.random');

// set starting
let current_item = 0;

// load initial item
window.addEventListener('DOMContentLoaded', ()=>{
  show_item();
})


// Show item based on person
function show_item(){
  let item = reviews[current_item];
  img.src = item.img;
  user_name.textContent = item.author;
  job.textContent = item.job;
  info.textContent = item.info;
}

// Next review
next_btn.addEventListener('click', () =>{
  current_item++;
  if(current_item > reviews.length -1){
    current_item = 0;
  }
  show_item();
})

// Previous review
pre_btn.addEventListener('click', () =>{
  current_item--;
  if(current_item < 0){
    current_item = reviews.length -1;
  }
  show_item();
})

// Random review
random_btn.addEventListener('click', () =>{
  current_item = Math.floor(Math.random() * reviews.length);
  show_item();
})


// auto load 
function auto_show_item(){
  current_item++;
  if(current_item > reviews.length -1){
    current_item = 0;
  }
  show_item();
 
}

setInterval(auto_show_item, 1800);