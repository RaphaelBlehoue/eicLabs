let Encore = require('@symfony/webpack-encore');
const CopyWebpackPlugin = require('copy-webpack-plugin');

Encore
    // directory where compiled assets will be stored
    .setOutputPath('public/build')
    // public path used by the web server to access the output path
    .setPublicPath('/build')
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    // only needed for CDN's or sub-directory deploy
    //.setManifestKeyPrefix('build/')
    .addStyleEntry('css/core', [
        './assets/vendor/bootstrap/css/bootstrap.min.css',
        './assets/vendor/font-awesome/css/font-awesome.min.css',
        './assets/vendor/themify-icons/css/themify-icons.css',
        './assets/vendor/animsition/css/animsition.min.css',
        './assets/vendor/perfect-scrollbar/css/perfect-scrollbar.min.css'
    ])
    .addStyleEntry('css/app', [
        './assets/css/scss/app.scss',
        './assets/css/style.scss'
    ])
    /*
     * ENTRY CONFIG
     *
     * Add 1 entry for each "page" of your app
     * (including one that's included on every page - e.g. "app")
     *
     * Each entry will result in one JavaScript file (e.g. app.js)
     * and one CSS file (e.g. app.css) if you JavaScript imports CSS.
     */
    .addEntry('js/script/editor', './assets/js/editor.js')
    .addEntry('js/script/bundle', './assets/js/bundle.js')


    // will require an extra script tag for runtime.js
    // but, you probably want this, unless you're building a single-page app
    .enableSingleRuntimeChunk()

    /*
     * FEATURE CONFIG
     *
     * Enable & configure other features below. For a full
     * list of features, see:
     * https://symfony.com/doc/current/frontend.html#adding-more-features
     */
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    .enableSourceMaps(true)
    // enables hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())

    // enables Sass/SCSS support
    .enableSassLoader()

    // uncomment if you use TypeScript
    //.enableTypeScriptLoader()

    // uncomment if you're having problems with a jQuery plugin
    //.autoProvidejQuery()
    .addPlugin(new CopyWebpackPlugin([
        { from: './assets/static', to: 'static' }
    ]))
;

module.exports = Encore.getWebpackConfig();
