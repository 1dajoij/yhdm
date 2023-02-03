export const debounce = (fn: Function, delay: number = 400): () => void => {
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

export const resetScore = (num: number) => {
    switch (num) {
        case 1:
            return "1.0";
        case 2:
            return "2.0";
        case 3:
            return "3.0";
        case 4:
            return "4.0";
        case 5:
            return "5.0";
        case 6:
            return "6.0";
        case 7:
            return "7.0";
        case 8:
            return "8.0";
        case 9:
            return "9.0";
        default:
            return String(num)
    }
};