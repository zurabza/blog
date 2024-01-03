# Blog

The Blog app, initially developed for Redberry, is a web application designed for creating, posting, and viewing blog posts submitted by users.

## Technologies Used

React & CSS

## Live Demo

Experience the live project: [Blog App Live Demo](https://redberrianblog.vercel.app/)

## Installation Guide

Follow these steps to set up and run the blog application locally:

1. Clone or download the repository.
2. Open a terminal and navigate to the root directory of the project.
3. Run the command `npm install` to install the necessary dependencies.
4. Execute `npm run dev` to launch the application on your local environment.

### Environment Variables Configuration

Make sure to add the following environment variables to your `.env` file:

<details>
  <summary>VITE_REQUEST_URL</summary>
  https://api.blog.redberryinternship.ge/api
</details>

<details>
  <summary>VITE_TOKEN</summary>
  78ee04bc5dd520f6087d84ac1d163423b32aadcf61d466d501335d9ff1b88544
</details>

### How to login to create new blogpost

There is 3 pre-registered emails that you can use:

- gigagiorgadze@redberry.ge <br>
- elene.metreveli@redberry.ge <br>
- tamogagniashvili@redberry.ge

## What I've Learned

Throughout this project, I've learned:

- Setting up a React context api for managing global state, which solves a problem of "prop drilling" in components.
- How dividing application into as many components as possible improves overall product. E.g better code readabilty, reusability, performance.
