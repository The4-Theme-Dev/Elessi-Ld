
$(window).resize(function () {
    //install app
   $('.t4s_btn_new_letter').click(function (e) {
       e.preventDefault();
       window.open(`https://ecomposer.app/install?shop=${$(".t4s_input_new_letter").val()}`,"_blank");
   });
});
$(window).resize();