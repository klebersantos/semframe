var gulp = require("gulp");
var sass = require("gulp-sass");
var notify = require("gulp-notify");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var imagemin = require("gulp-imagemin");
var cleanCSS = require("gulp-clean-css");

gulp.task(
  "sass",
  gulp.series(function () {
    return (
      gulp
        .src("../css/estilo.scss")
        .pipe(
          sass({ outputStyle: "compressed" }).on(
            "error",
            notify.onError(function (error) {
              return "Erro ao compilar CSS: " + error.message;
            })
          )
        )
        .pipe(cleanCSS())
        .pipe(concat("all.css"))
        // .pipe(sourcemaps.write())
        .pipe(gulp.dest("../build/css"))
        .pipe(notify({ message: "CSS concluído", onLast: true }))
    );
  })
);

gulp.task(
  "imagem",
  gulp.series(function () {
    return gulp
      .src("../images/*")
      .pipe(imagemin())
      .pipe(gulp.dest("../build/images"));
  })
);

gulp.task(
  "js",
  gulp.series(function () {
    return gulp
      .src([
        "../js/jquery-1.12.4.min.js",
        "../js/jquery.mask.min.js",
        "../js/owl.carousel.min.js",
        "../js/main.js",
      ])
      .pipe(concat("scripts.min.js"))
      .pipe(uglify())
      .pipe(gulp.dest("../build/js"))
      .pipe(notify({ message: "Scripts concluídos", onLast: true }));
  })
);

gulp.task(
  "watch",
  gulp.series(function () {
    gulp.watch(["../css/*.scss"], gulp.parallel(["sass"]));
    gulp.watch(["../images/*"], gulp.parallel(["imagem"]));
    gulp.watch(["../js/*.js"], gulp.parallel(["js"]));
  })
);

gulp.task("default", gulp.series(["sass", "js", "imagem", "watch"]));
