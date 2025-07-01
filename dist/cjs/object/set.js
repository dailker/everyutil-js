"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.set = set;
// Sets the value at path of object.
function set(obj, path, value) {
    if (!obj)
        return obj;
    const keys = Array.isArray(path) ? path : path.split('.');
    let curr = obj;
    for (let i = 0; i < keys.length - 1; i++) {
        if (!curr[keys[i]])
            curr[keys[i]] = {};
        curr = curr[keys[i]];
    }
    curr[keys[keys.length - 1]] = value;
    return obj;
}
