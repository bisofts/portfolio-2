Vue.component('vue-nav', {
  template: '<nav><input type="checkbox" id="nav" class="hidden" /><label for= "nav" class= "nav-open" > <i></i> <i></i> <i></i></label><div class="nav-container"><ul><li><a href="/design/index.html">DESIGN</a></li><li><a href="/ux/index.html">UX</a></li><li><a href="/contact/index.html">CONTACT</a></li></ul></div></nav>'
});
// <img src="img/ms-logo-lines.min.svg" alt="Mike Sonnenberg Logo, Home" class="navlogo">
//  <nav>
//   <input type="checkbox" id="nav" class="hidden" />
//   <label for="nav" class="nav-open"><i></i><i></i><i></i></label>
//   <div class="nav-container">
//     <ul>
//       <li><a href="/design/index.html">DESIGN</a></li>
//       <li><a href="/ux/index.html">UX</a></li>
//       <li><a href="/contact/index.html">CONTACT</a></li>
//     </ul>
//   </div>
// </nav>
Vue.component('vue-logo', {
  template: '<div id="nav-logo"> <img src="/img/ms-logo-lines.svg" alt="Mike Sonnenberg Logo"> </div>'
});
Vue.component('vue-footer', {
  template: '<div id="footer" class="textcenter">&COPY; {{ new Date().getFullYear() }} Mike Sonnenberg</br>Special thanks to the FOSS contributors at Vue.js and Typed.js</&COPY;></div>'
});
new Vue({
  el: '#vue-container',
});
// new Vue({
//   el: '#vuefooter'
// });

// typed js
// var typed = new Typed('#typed', {
//   strings: ["ux / ui", "graphic", "motion", "print", "all sorts of"],
//   showCursor: true, typeSpeed: 120, loop: false, backDelay: 1500,
//   backSpeed: 80, autoInsertCss: true, cursorChar: '_'
// });

//typeit js
new TypeIt('#typeit')
  .pause(500)
  .type('I work in ')
  .pause(500)
  .type('UX/UI design')
  .pause(500)
  .delete(12)
  .type('brand desi')
  .pause(300)
  .delete(10)
  .type('web de')
  .pause(300)
  .delete(6)
  .type('graphic')
  .pause(250)
  .delete()
  .type('I am a <span class="textcherry">multidisciplinary</span> designer.')
  .go();
