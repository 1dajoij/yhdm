export const debounce = (fn: Function, delay:number = 400): () => void => {
    let timer: NodeJS.Timeout;
    function _debounce(...args: any[]): void {
        if (timer) {
            clearTimeout(timer);
        };
        timer = setTimeout(() => {
            fn(...args)
        }, delay)
    };
    return _debounce
};