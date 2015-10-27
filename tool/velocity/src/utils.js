/**
 *
 * @param el
 * @param children
 * @returns {Array}
 */
export function toArrayChildren(el, children) {
    const ret = [];
    el.forEach(children, (c) => {
        ret.push(c);
    });
    return ret;
}

export function findChildInChildrenByKey(children, key) {
    let ret = null;
    if (children) {
        children.forEach((c) => {
            if (ret) {
                return;
            }
            if (c.key === key) {
                ret = c;
            }
        });
    }
    return ret;
}

/**
 * 合并 children
 * @param prev
 * @param next
 * @returns {Array}
 */
export function mergeChildren(prev, next) {
    let ret = [];
    // For each key of `next`, the list of keys to insert before that key in
    // the combined list
    const nextChildrenPending = {};
    let pendingChildren = [];
    prev.forEach((c) => {
        if (findChildInChildrenByKey(next, c.key)) {
            if (pendingChildren.length) {
                nextChildrenPending[c.key] = pendingChildren;
                pendingChildren = [];
            }
        } else {
            pendingChildren.push(c);
        }
    });

    next.forEach((c) => {
        if (nextChildrenPending.hasOwnProperty(c.key)) {
            ret = ret.concat(nextChildrenPending[c.key]);
        }
        ret.push(c);
    });

    // 保持原有的顺序
    pendingChildren.forEach((c) => {
        const originIndex = prev.indexOf(c);
        if (originIndex >= 0) {
            ret.splice(originIndex, 0, c);
        }
    });

    return ret;
}

export function transformArguments(arg) {
    if (Array.isArray(arg) && arg.length === 2) {
        return arg;
    }
    return [arg, arg];
}

/**
 * 取得选择器指定的子元素
 * @param el
 * @returns {*}
 */
export function getChildren(el) {

    /**
     * 1. if el is string selector, get Element;
     * 2. if el is jQ obj, return
     */
    return el;
}
