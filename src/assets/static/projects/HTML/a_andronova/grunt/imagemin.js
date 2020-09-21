module.exports = {
  all: {
    files: [{
      expand: true,
      cwd: 'sourceimage/',
      src: ['**/*.{png,jpg,gif}'],
      dest: 'img/'
    }]
  }
};