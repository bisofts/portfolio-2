Vue.component('vuenav', {
  template: '<nav><input type="checkbox" id="nav" class="hidden" /><label for= "nav" class= "nav-open" > <i></i> <i></i> <i></i></label><div class="nav-container"><ul><li><a href="/design/index.html">DESIGN</a></li><li><a href="/ux/index.html">UX</a></li><li><a href="/contact/index.html">CONTACT</a></li></ul></div></nav>'
});
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
Vue.component('vuefooter', {
  template: '<div id="footer" class="textcenter smallcaps"><p>&COPY; {{ new Date().getFullYear() }} Mike Sonnenberg</p></div>'
});
new Vue({
  el: '#vuecontainer',
});
// new Vue({
//   el: '#vuefooter'
// });