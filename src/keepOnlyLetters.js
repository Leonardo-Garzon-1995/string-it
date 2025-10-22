function keepOnlyLetters(str) {
    return str.replace(/[^a-zA-Z]/g, "");
}

export default keepOnlyLetters;