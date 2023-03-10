const mix = require("laravel-mix");
let productionSourceMaps = false;

mix.js("resources/js/app.js", "public/js")
    .sass("resources/sass/app.scss", "public/css")
    .combine(
        [
            "public/css/app.css",
            "resources/css/custom1.css",
            "resources/css/custom2.css",
            "resources/css/custom3.css",
        ],
        "public/css/all.css"
    )
    .sourceMaps(productionSourceMaps, "source-map");