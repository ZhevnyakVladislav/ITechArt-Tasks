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

const setAsync = (key, value) => new Promise(function(resolve) {
    setValue(key, value, function() {
        return resolve();
    });
});

const getAsync = (key) => new Promise(function(resolve) {
    getValue(key, function(value) {
        return resolve(value);
    });
});

export default {
    getAsync,
    setAsync
};

