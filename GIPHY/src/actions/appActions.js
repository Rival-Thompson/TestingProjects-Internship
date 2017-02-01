/**
 * Created by rival on 31/01/2017.
 */
export function saveImages(gifs) {
    return {type:"UPDATE_IMAGES",gifs}
}

export function updatePopup(url) {
    return {type:"UPDATE_SELECTED",url}
}

