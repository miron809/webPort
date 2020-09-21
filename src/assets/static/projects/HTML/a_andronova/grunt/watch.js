module.exports = {

  options: {
    spawn: false,
    livereload: true
  },

  // scripts: {
  //   files: [
  //     'js/*.js'
  //   ],
  //   tasks: [
  //     'concat',
  //     'uglify'
  //   ]
  // },

  styles: {
    files: [
      'scss/*.scss'
    ],
    tasks: [
      'sass:dev',
      'postcss'
    ]
  },

  templates : {
    files: [
      '*.html'
    ],
  },
};