// Deeply merges two or more objects.
export function merge(target: any, ...sources: any[]): any {
    if (!target) target = {};
    for (const source of sources) {
        if (source && typeof source === 'object') {
            for (const key in source) {
                if (source[key] && typeof source[key] === 'object') {
                    if (!target[key] || typeof target[key] !== 'object') {
                        target[key] = Array.isArray(source[key]) ? [] : {};
                    }
                    merge(target[key], source[key]);
                } else {
                    target[key] = source[key];
                }
            }
        }
    }
    return target;
}
