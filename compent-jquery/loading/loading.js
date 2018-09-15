(function($,w){
  function Loading(){
    this.dom = $('<div class="mask_loading">'+
      '<div class="loading_box">' +
        '<canvas width="200" height="300" id="myCanvas"></canvas>' +
        '<div id="tags">' +
          '<a href="#">月当窗</a>' +
          '<a href="#">满庭芳</a><a href="#">情谊深似水</a><a href="#">幸福安康</a><a href="#">缘分相遇</a>' +
          '<a href="#">风十美</a><a href="#">水调歌头</a><a href="#">花好月圆长久</a><a href="#">好运常永驻</a><a href="#">幸福永驻</a>' +
          '<a href="#">幸福</a>' +
          '<a href="#">美酒香香醇</a><a href="#">谒金门</a><a href="#">八声甘州</a><a href="#">温馨</a>' +
          '<a href="#">顺利</a><a href="#">淡茶为友</a><a href="#">新年吉祥</a><a href="#">吉祥</a><a href="#">明天远航</a>' +
        '</div>' +
      '</div>' +
      '<div class="desc_loading">AI李白</div>' +
      '<div class="desc_loading">努力创作ing</div>' +
      '<div class="loading_tt">' +
        '<span></span>' +
        '<span></span>' +
        '<span></span>' +
        '<span></span>' +
        '<span></span>' +
      '</div>' +
      '<img class="yun" src="./yun.png"/>' +
    '</div>');
    this.simpleDom = $('<div class="mask_simple">' +
        '<div class="loading_tt">' +
          '<span></span>' +
          '<span></span>' +
          '<span></span>' +
          '<span></span>' +
          '<span></span>' +
        '</div>' +
      '</div>')
  }
  Loading.prototype.show = function(type){
    switch(type){
      case 1:
        $('body').append(this.dom);
        try {
          TagCanvas.Start('myCanvas', 'tags', {
            textColour: '#bb4226',
            outlineColour: '#24273c',
            reverse: true,
            wheelZoom: false,
            depth: 0.8,
            dragControl: true,
            decel:1.2,
            maxSpeed: 0.1,
            initial: [-0.2, 0]
          });
        } catch (e) {
          console.log(e)
        }
        break;
      case 2:
        $('body').append(this.simpleDom);
        break;
      default:
      break;
    }


  }
  Loading.prototype.hide = function(){
    this.dom && this.dom.remove();
    this.simpleDom && this.simpleDom.remove();
  }
  w.Loading = Loading;
})(jQuery,window)

