var posts=["2025/01/26/欢迎信息/","2025/01/27/Hololive死了/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };