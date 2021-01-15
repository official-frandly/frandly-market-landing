const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
const nextConfiguration = {
  target: "serverless", //will output independent pages that don't require a monolithic server. It's only compatible with next start or Serverless deployment platforms (like ZEIT Now) — you cannot use the custom server API.
  webpack: (config) => {
    config.resolve.modules.push(__dirname);

    config.resolve.alias = {
      ...config.resolve.alias,
    };
    return config;
  },
};

const sassConfig = {
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    // localIdentName: "[local]__[hash:base64:12]",
  },
  sassLoaderOptions: {
    includePaths: ["src"],
  },
};

module.exports = withPlugins(
  [
    // [
    //   withCSS(
    //     withSass({
    //       webpack(config, options) {
    //         config.module.rules.push({
    //           test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
    //           use: {
    //             loader: "url-loader",
    //             options: {
    //               limit: 100000,
    //             },
    //           },
    //         });

    //         return config;
    //       },
    //     })
    //   ),
    //   sassConfig,
    // ],
    // withCSS,
    optimizedImages,
  ],
  nextConfiguration
);
