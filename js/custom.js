// ------- PRELOADER -------//
// $(window).load(function(){
//     $('.preloader').fadeOut("slow"); // set duration in brackets    
// });

/* HTML document is loaded. DOM is ready. 
-------------------------------------------*/
$(function(){
  $.ajax({
    type : "GET",
    url : 'http://192.168.1.127:5200/api/user/islogin', 
    success : function(res){
        console.log(res);
        if (res.code == 0) {
          $('#myuserName').text(res.user_name);
          $('#goLogin').css('display', 'none');
          $('#myuserName').css('display', 'block');
          $('#contact').css('display', 'none');
        }
      }
  })



  $('#myclose').click(function() {
    $('#maskWrap').css('display', 'none');
  })
  $('#xieyi').click(function() {
    $('#maskWrap').css('display', 'block');
  })
  $('#login').click(function () {
      var username = $('#username').val();
      var password = $('#email').val();
      // $('#contact').css('display', 'none')
      if (username && password) {
        $.ajax({
          type : "POST",
          contentType: 'application/json',
          url : 'http://192.168.1.127:5200/api/user/login', 
          dataType: 'json',
          data : JSON.stringify({user_name: username, pass: password}),
          success : function(res){
              if (res.code) {
                $('#tishi').text(res.erro_result.message);
                $('#tishi').css('display', 'block')
                setTimeout(() => {
                  $('#tishi').css('display', 'none');
                }, 2000);
              }
              else {
                $('#myuserName').text(res.user_name);
                $('#goLogin').css('display', 'none');
                $('#myuserName').css('display', 'block');
                $('#contact').css('display', 'none');
              }
            }
        })
      }
  })
  $('#zhuce').click(function () {
      var username = $('#firstname').val();
      var realname = $('#lastname').val();
      var idcard = $('#phone').val();
      var pass = $('#password').val();
      var repass = $('#repassword').val();
      // $('#contact').css('display', 'none')
      if (username && password) {
        $.ajax({
          type : "POST",
          contentType: 'application/json',
          url : 'http://192.168.1.127:5200/api/user/register', 
          dataType: 'json',
          data : JSON.stringify({
            user_name: username,
            real_name: realname,
            id_card: idcard,
            pass: pass,
            confirm_pass: repass
          }),
          success : function(res){
              var msg = res.code ? res.erro_result.message : '注册成功，请登录';
              $('#tishi').text(msg);
              $('#tishi').css('display', 'block')
              setTimeout(() => {
                $('#tishi').css('display', 'none');
              }, 2000);
            }
        })
      }
  })

   // --------- HIDE MOBILE MENU AFTER CLIKING ON A LINK ------- //
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

  // --------- PORTFOLIO IMAGE ----- //
  $('#portfolio a').nivoLightbox({
        effect: 'fadeScale',
    });

  // ------- WOW ANIMATED ------ //
  wow = new WOW(
  {
    mobile: false
  });
  wow.init();

  // ------- GOOGLE MAP ----- //
  loadGoogleMap();

  // ------- JQUERY PARALLAX ---- //
  function initParallax() {
    $('#home').parallax("100%", 0.3);
    $('#team').parallax("100%", 0.3);
    $('#contact').parallax("100%", 0.1);

  }
  initParallax();

});

