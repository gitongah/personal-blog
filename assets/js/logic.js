// my variables to get the data from the html as they are entered
const userNameInput = document.querySelector("#fname");
const titleInput = document.querySelector("#title");
const contentInput = document.querySelector("#content");
const submitBtnInput = document.querySelector("#submit-btn");


//creating an empty list that will contain the blogs
let blogs = [];
console.log(blogs);


//this function will be called when the page loads
function initialize(){
  // Gets stored blogs from local storage
  let getBlogs = JSON.parse(localStorage.getItem("blogs"))
  console.log(getBlogs)


}

function storeBlogPost(){

  //storing the object to the local storage to be retrived later
  localStorage.setItem("blogs", JSON.stringify(blogs));

}

// adding an event listener to the to the submit btn
submitBtnInput.addEventListener ("click", function(event){
  event.preventDefault();

    //creating a blog post object that contains the userName, 
  //title of the blog and the content of the blog post
  let blog = {
    userName : userNameInput.value.trim(),
    title : titleInput.value.trim(),
    content : contentInput.value.trim()
  };

  //adding new blog to the blogs array, clear the input
  blogs.push(blog);
  // console.log(blogs)
  
  window.location.href = './blog.html';

  

  
  storeBlogPost();
  
 
  
})
initialize()
