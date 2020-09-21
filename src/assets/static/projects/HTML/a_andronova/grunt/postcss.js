module.exports = {
        options: {
          map: true,
          processors: [
            require('autoprefixer')({browsers: ['last 4 version', 'Android 4']})
          ]
        },
        dist: {
            src: 'css/main.css'
        }
};