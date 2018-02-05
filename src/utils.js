export function forEachString(string, callback) {
    const array = string.split("")
    return array.map(callback)
}