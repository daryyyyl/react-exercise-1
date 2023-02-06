//Call all functions inside services and log updated value/s
import { updateUser, getAllUsers, addUser } from "./services/users";
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

// console.log("Before editing");
// console.log(getAllUsers());
// updateUser(1, { email: "roger@77.com", website: "hilde-edit.org" });
// console.log("after editing");
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
// console.log(getPosts());
// console.log("Posts by Id: ");
// console.log(getPostById(1));
// console.log("Posts by user: ");
// console.log(getPostsByUser(2));
// console.log("Comment by Id: ");
// console.log(getCommentById(3));
// console.log("Comments by post Id: ");
// console.log(getCommentsByPostId(4));
// addPost({ title: "KICKS ZONE", body: "KICKS ZONE POST BODY" });
// console.log(getPosts());
// console.log(getCommentsByPostId(1));
// addComment({ postId: 15, name: "daryl", email: "da@da", body: "katawan" });
// console.log(getCommentsByPostId(15));
// console.log(getPostById(2));
// updatePost(2, { title: "KICKS ZONE", body: "KICKS ZONE POST BODY" });
// console.log(getPostById(2));
// console.log(getPosts());
// deletePostBy(1);
// deletePostsByUserId(1);
// console.log(getPosts());
// console.log(getCommentById(1));
// updateCommentBody(1, "KICKS ZONE COMMENT BODY");
// deleteCommentById(1);
// console.log(getCommentById(1) ? getCommentById(1) : "No comment found!");
