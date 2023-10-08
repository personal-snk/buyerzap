export const getImagePath = (imgPath) => {
  const assetPath = process.env.REACT_APP_ASSETS_PATH;
  return assetPath + imgPath;
};

export const generateRandNum = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
