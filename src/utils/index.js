export const getImagePath = (imgPath) => {
    const assetPath = process.env.REACT_APP_ASSETS_PATH;
    return assetPath + imgPath
}