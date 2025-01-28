var posts=["2025/01/27/我好想做嘉然小姐的狗啊/","2025/01/27/Hololive死了/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };