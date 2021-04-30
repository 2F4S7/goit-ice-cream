$('a[href^="#"]').click(function () {
  var target = $(this).attr('href');
  $('html, body').animate(
    {
      scrollTop: $(target).offset().top,
    },
    1000,
  );
});
// const update = require('npm-update');
// const pkg = require('../package.json')(async () => {
//   const { needUpdate } = await update({ pkg });
//   if (needUpdate) return;
//   // do some stuff
// })();
