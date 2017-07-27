const getValue = (key, callback) => {
    const rand = Math.random();
    if (rand > 0.5) {
        const value = localStorage.getItem(key);
        callback(value);
    } else {
        setTimeout(() => {
            const value = localStorage.getItem(key);
            callback(value);
        }, Math.random() * 1000);
    }
};

const setValue = (key, value, callback) => {
    const rand = Math.random();
    if (rand > 0.5) {
        localStorage.setItem(key, value);
        callback();
    } else {
        setTimeout(() => {
            localStorage.setItem(key, value);
            callback();
        }, Math.random() * 1000);
    }
};

export function setAsync(key, value) {
    return new Promise(resolve => {
        setValue(key, value, function() {
            return resolve();
        });
    });
};

export function  getAsync(key) {
    return new Promise(resolve => {
        getValue(key, function(value) {
            return resolve(value);
        });
    });
}

export function getAsyncFew(key) {
    return getAsync(key)
        .then(() => getAsync(key))
        .then(() => getAsync(key))
        .then(() => getAsync(key))
        .then(() => getAsync(key));
}

export async function getAsyncAwait(key) {
    const first = await getAsync(key);
    const second = await getAsync(key);
    const third = await getAsync(key);
    const fourth = await getAsync(key);
    const firth = await getAsync(key);
}
