(function () {

  var bv = new Bideo();
  var sp = [
      "https://cdn.jsdelivr.net/gh/810331109/w@w/1.mp4",
      "https://cdn.jsdelivr.net/gh/810331109/w@w/2.mp4",
      "https://cdn.jsdelivr.net/gh/810331109/w@w/3.mp4",
      "https://cdn.jsdelivr.net/gh/810331109/w@w/4.mp4",
      "https://cdn.jsdelivr.net/gh/810331109/w@w/5.mp4",
      "https://cdn.jsdelivr.net/gh/810331109/w@w/6.mp4",
      "https://cdn.jsdelivr.net/gh/810331109/w@w/7.mp4",];
  var index = Math.floor((Math.random()*sp.length));
  bv.init({
    // 视频元素
    videoEl: document.querySelector('#background_video'),

    // 容器元素
    container: document.querySelector('body'),

    // Resize
    resize: true,
     
    // 自动播放
    // autoplay: false,

    isMobile: window.matchMedia('(max-width: 768px)').matches,

    playButton: document.querySelector('#play'),
    pauseButton: document.querySelector('#pause'),

    // 包含地址和类型的对象数组
    // 添加不同的视频格式
    src: [
      {
        src: sp[index],
        type: 'video/mp4',
      },
    ],

    // 视频加载后的操作（初始帧）
    onLoad: function () {
      document.querySelector('#video_cover').style.display = 'none';
    }
  });
}());