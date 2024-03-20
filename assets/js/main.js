
$(window).resize(function () {
    //install app
   $('.t4s_btn_new_letter').click(function (e) {
       e.preventDefault();
       window.open(`https://ecomposer.app/install?shop=${$(".t4s_input_new_letter").val()}`,"_blank");
   });
});
$(window).resize();


class stickyBanner extends HTMLElement{
    constructor(){
      super();
      this.btn =this.querySelector('button.close');
  
      this.btn.addEventListener('click',()=>{
        this.querySelector('.banner-wrap').setAttribute('hide','')
        setTimeout(() => {
          this.setAttribute('hide','');
        }, 500);
      })
    }
  }
  customElements.define('sticky-banner',stickyBanner)