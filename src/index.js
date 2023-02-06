//Call all functions inside services and log updated value/s
import {
  updateUser,
  getAllUsers,
  addUser,
  getUserById,
} from "./services/users";
import {
  getPosts,
  getPostsByUser,
  getPostById,
  addPost,
  updatePostTitle,
  updatePostBody,
  updatePost,
  deletePostBy,
  deletePostsByUserId,
} from "./services/posts";
import {
  getCommentById,
  getCommentsByPostId,
  updateCommentBody,
  deleteCommentById,
  addComment,
} from "./services/comments";

// User
// console.log(getAllUsers());
// addUser({
//   name: "daryl",
//   username: "da",
//   email: "da@da",
//   address: {
//     street: "Maunlad Homes",
//     suite: "N/A",
//     city: "Guiguinto",
//     zipcode: 3015,
//     geo: { lat: "-123", lng: "123" },
//   },
//   phone: 123,
//   website: "github.com",
//   company: {
//     name: "Company Name",
//     catchPhrase: "What is money, paper only!",
//     bs: "I don't know",
//   },
// });
// console.log(getAllUsers());
// console.log(getUserById(10001));

// Posts
// console.log(getPosts());
// console.log(getPostsByUser(1));
// console.log(getPostById(2));
// addPost({ title: "KICKS ZONE", body: "KICKS ZONE POST BODY" });
// updatePostTitle(2, "KICKS ZONE TITLE");
// updatePostBody(2, "KICKS ZONE BODY");
// deletePostBy(2);
// deletePostsByUserId(1);

// Comments
// console.log(getCommentById(3));
// console.log(getCommentsByPostId(4));
// updateCommentBody(1, "KICKS ZONE COMMENT BODY");
// deleteCommentById(1);
// addComment({ postId: 1999, name: "daryl", email: "da@da", body: "katawan" });
