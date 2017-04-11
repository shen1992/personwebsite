/**
 * Created by shen on 2017/2/27.
 */

function isDevice() {
    const location = navigator.userAgent;

    return /Andrond/.test(location)

}

export {
    isDevice,
}