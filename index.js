const express = require("express");
const importData = require("./dummyData");
const app = express();
app.use(express.static("public"));
app.get("/art", (req, res) => {
  const data = importData.data();
  const sendInfo = `<!DOCTYPE html>
  <html>
  <head>
    <title>Art News</title>
    <link rel="stylesheet" href="/style.css" />
  </head>
  <body>
    <div class="news-list">
      <header><img src="/logo.png"/>Art News</header>
      ${data
        .map(
          (
            post
          ) => `<div class='news-item'><span class="news-position">Artist: ${post.artist}</span>
        <p><a href='/art/${post.id}/'>
        Title: ${post.title}
      </p></a></div></html>`
        )
        .join("")}`;

  res.send(sendInfo);
});
app.get("/health", (req, res) => {
  res.send("Server is online!");
});
app.get("/art/:id", (req, res) => {
  const id = req.params.id;
  const post = importData.find(id);
  const sendInfo = `<!DOCTYPE html>
  <html>
  <head>
    <title>Art News</title>
    <link rel="stylesheet" href="/style.css" />
  </head>
  <body>
    <div class="news-list">
      <header><img src="/logo.png"/>Art News</header>
      <div class='title'>${post.title} by ${post.artist}</div>
      <p class="info">${post.details}</p>
      </div>
      <button><a href='/art'>Back to Home</a></button>
      </html>`;
  res.send(sendInfo);
});

const PORT = 1337;
app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
