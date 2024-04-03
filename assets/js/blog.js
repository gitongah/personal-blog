const mainElement = document.querySelector('main');


function handleEmpty(){
  const element = document.createElement("h2");
  element.textContent = "No blogs available yet.....";
  mainElement.appendChild(element);
}
// handleEmpty()

function renderBlogList(){

  const blogs =JSON.parse(localStorage.getItem('blogs'));
  for(let index = 0; index < blogs.length; index++){
    const article = document.createElement('article');
    const  content= document.createElement('p');
    const title = document.createElement('h2');
    const user = document.createElement('h3');

    content.textContent = blogs[index].content;
    title.textContent = blogs[index].title;
    user.textContent = blogs[index].userName;
    article.appendChild(title)
    article.appendChild(content)
    article.appendChild(user)
    mainElement.appendChild(article)
  }
  
  if(blogs.length === 0){
    handleEmpty();
    return;
  }

}

renderBlogList();