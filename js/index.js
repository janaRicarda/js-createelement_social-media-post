console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const socialMediaPost = document.createElement("article");
socialMediaPost.classList.add("post");

const postText = document.createElement("p");
postText.classList.add("post__content");
postText.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";

const postFooter = document.createElement("footer");
postFooter.classList.add("post__footer");

const postUsername = document.createElement("span");
postUsername.classList.add("post__username");
postUsername.textContent = "@username";

const postButton = document.createElement("button");
postButton.classList.add("post__button");
postButton.textContent = "♥ Like";

postButton.addEventListener("click", () => {
  handleLikeButtonClick(event);
});

postFooter.append(postUsername, postButton);
socialMediaPost.append(postText, postFooter);

document.body.append(socialMediaPost);
