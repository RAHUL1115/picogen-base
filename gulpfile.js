const { src, dest, watch } = require("gulp");
const minifyCss = require("gulp-clean-css");
const concat = require("gulp-concat");
const minifyJs = require("gulp-uglify");

const cssfiles = "{fontawsome,splide,tailwind,main}";
const jsfiles = "{alpine,splide,main}";

const buildCss = () => {
  let csstask = src(`./src/_static/css/${cssfiles}.css`);
  csstask = csstask.pipe(
    minifyCss({
      level: {
        1: {
          specialComments: false,
        },
      },
    })
  );
  csstask = csstask.pipe(concat("bundle.css"));
  csstask = csstask.pipe(dest("./public/css"));
  return csstask;
};

const buildJs = () => {
  let jstask = src(`./src/_static/js/${jsfiles}.js`);

  jstask = jstask.pipe(minifyJs());
  jstask = jstask.pipe(concat("bundle.js"));
  jstask = jstask.pipe(dest("./public/js"));
  return jstask;
};

exports.buildcss = buildCss;
exports.buildjs = buildJs;