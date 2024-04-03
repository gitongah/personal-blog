// my variables to get the data from the html as they are entered

const userNameInput = document.getElementById("username");
const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");
const submitBtnInput = document.getElementById("submit");


//creating an empty list that will contain the blogs
let blogs = [];
console.log(blogs);

function storeBlogPost(){
  //storing the object to the local storage to be retrived later
  localStorage.setItem("blogs", JSON.stringify(blogs));
}

//this function will be called when the page loads
function initialize(){
  // Gets stored blogs from local storage
  let getBlogs = JSON.parse(localStorage.getItem("blogs"))
  console.log(getBlogs)
  return getBlogs || [];
}

// adding an event listener to the to the submit btn
function submit(event){
  event.preventDefault();
    //creating a blog post object that contains the userName, 
  //title of the blog and the content of the blog post
  if(!userNameInput.value || !titleInput.value || !contentInput.value){
    alert('Please fill in the form');
    return;
  }
  const blog = {
    userName : userNameInput.value,
    title : titleInput.value,
    content : contentInput.value
  };
  console.log(blog);


  //adding new blog to the blogs array, clear the input
  const currentLocalStorage = JSON.parse(localStorage.getItem("blogs"))
  if(currentLocalStorage !== null){
    blogs=currentLocalStorage;
  }
  blogs.unshift(blog);
  // console.log(blogs)

  storeBlogPost();
  
  location.href = './blog.html'; 

  

}
submitBtnInput.addEventListener('click', submit);

initialize();

