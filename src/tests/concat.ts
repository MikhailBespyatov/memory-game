export const concatWords = (words: string[]): string => {
    const result = words.filter(Boolean).map((item, i) => {
        if (item.length === 0) return '';
        if (i === 0) {
            return `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`
        } else {
            return item.toLowerCase();
        }
    });
    
    if (result.length === 0) return '';

    const string = result.reduce((acc, current, i) => {
        if (i !== result.length - 1) {
            return `${acc}, ${current}`
        } else {
            return `${acc} и ${current}`
        }
    });
    return string;
}