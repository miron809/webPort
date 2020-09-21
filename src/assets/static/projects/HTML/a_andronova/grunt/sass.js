module.exports = {
  // Настройки для разработки
  dev: {
    options: {
      outputStyle: 'nested',
      sourceMap: false
    },
    files: [{
      expand: true,
      cwd: 'scss',
      src: ['main.scss','bootstrap.scss'],
      dest: 'css',
      ext: '.css'
    }]
  },
  // Настройки для продакшна
  prod: {
    options: {
      outputStyle: 'compressed',
      sourceMap: false
    },
    files: [{
      expand: true,
      cwd: 'scss',
      src: ['main.scss'],
      dest: 'css',
      ext: '.css'
    }]
  }
};