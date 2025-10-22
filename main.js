
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function capitalizeFirstAll(str) {
    return str.split(' ').map(capitalizeFirst).join(' ');
}

console.log(capitalizeFirst("hello world"), capitalizeFirstAll("hello world and you"));