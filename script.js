function test() {
    //描画コンテキストの取得
    var canvas = document.getElementById('sample');
    canvas.width = window.screen.width;
    canvas.height = window.screen.height;
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
      ctx.strokeStyle = '#fff';
      ctx.fillStyle = '#fff';
      ctx.lineWidth = 10;
      
      for (let i = 0; i < 30; i++) {
        for (let j = 0; j < 30; j++) {
          if (j*i % 12 == 0) {
            ctx.strokeStyle = '#c8ffa8ca';
            ctx.fillStyle = '#c8ffa8ca';
          }else if(j*i % 12 == 1){
            ctx.strokeStyle = '#fcffa8ca';
            ctx.fillStyle = '#fcffa8ca';
          }else if(j*i % 12 == 2){
            ctx.strokeStyle = '#ffa8a8ca';
            ctx.fillStyle = '#ffa8a8ca';
          }else{
            ctx.strokeStyle = '#ffffffca';
            ctx.fillStyle = '#ffffffca';
          }
          ctx.beginPath();
          ctx.arc(100*j+Math.random()*100, 100*i+Math.random()*100, 0.5+Math.random()*3, 0, 2 * Math.PI);
          ctx.closePath();
          ctx.fill(); 
        }
      }
    }
  }