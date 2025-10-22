function trimAll(str) {
    if (typeof str !== "string") return "";
    return str.trim().replace(/\s+/g, " ");
}

export default trimAll;