$(function() {
// カルーセル
  $('.carousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 1500,
    arrows: false,
  });

  $('a').hover( 
    function(){
    $(this).animate({ 'opacity': 0.5}, 300);
    },
    function(){
    $(this).animate({ 'opacity': 1.0},300);
    }
    );
  
    // 100px　スクロールしたらボタン表示
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('#page-top').fadeIn();
      } else {
        $('#page-top').fadeOut();
      }
      });
    // topボタンを押したときに滑らかに上に行く
      $('a[href^="#"]').on('click', function(){
      const speed = 500;
      const href = $(this).attr('href');
      let $target;
      if (href == '#') {
        $target = $('html');
      }
      else {
        $target = $(href);
      }
      const position = $target.offset().top;
      $('html, body').animate({ 'scrollTop': position }, speed, 'swing');
      return false;
    });

    // スクロールした時にセクションをフェードインさせる
    $(window).scroll(function() {
      const scrollAmount = $(window).scrollTop();
      const windowHeight = $(window).height();
      $('section').each(function() {
        const position = $(this).offset().top;
        if (scrollAmount > position - windowHeight + 100) {
          $(this).addClass('fade-in');
        }
      });
    });
    // worksの画像をクリックしたときにモーダルで拡大表示する
    $('.works img').click(function () {
      const imgSrc = $(this).attr('src');
      $('.big-img').attr('src', imgSrc);
      $('.modal').fadeIn();
      return false
    });
    // 閉じるボタンをクリックしたときにモーダルを閉じる
    $('.close-btn').click(function (){
      $('.modal').fadeout();
      return false
    });
});



