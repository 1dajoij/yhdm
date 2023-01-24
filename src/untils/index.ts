export const debounce = (fn: Function, delay:number = 400): () => void => {
    let time: NodeJS.Timeout;
    function _debounce(): void {
        if (time !== null) {
            clearTimeout(time)
        };
        time = setTimeout(() => {
            fn()
        }, delay)
    };
    return _debounce
}