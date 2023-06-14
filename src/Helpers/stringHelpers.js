export const ucwords = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export const stringLimit = (str) => {
    return `${str.substring(0, 50)}..`;
}
