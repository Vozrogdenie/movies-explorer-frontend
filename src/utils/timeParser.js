export function timeParseRU(time) {
    if (time/60<1) {
        return `${time}м`;
    } else {
        return `${Math.floor(time/60)}ч ${time%60}м`;
    };
};