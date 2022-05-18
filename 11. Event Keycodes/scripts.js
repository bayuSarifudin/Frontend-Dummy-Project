const insert = document.getElementById('insert');

window.addEventListener('keydown', (event) => {
   insert.innerHTML = `<div class="box-1">
   <div class="key">
      ${event.key === ' ' ? 'Space' : event.key}
      <small>event.key</small>
   </div>
   <div class="key">
      ${event.keyCode}
      <small>event.keycode</small>
   </div>
   <div class="key">
      ${event.code}
      <small>event.code</small>
   </div>
</div>`;
});
