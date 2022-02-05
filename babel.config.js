module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      "babel-preset-expo",
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".ts", ".tsx", ".js", ".json"],
          alias: {
            "@assets": "./src/assets",
            "@screens": "./src/screens",
            "@components": "./src/components",
          },
        },
      ],
    ],
  };
};
