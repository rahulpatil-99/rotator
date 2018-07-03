const random = range => (
    Math.floor(Math.random() * range)
)

const choose = (list) => {
    const length = list.length;
    const index = random(length);
    return list[index];
}

export default choose;