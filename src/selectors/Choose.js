const random = range => (
    Math.floor(Math.random() * range)
)

const choose = (list) => {
    const length = list.length;
    if(length <= 1)
        return undefined;
    const index = random(length);
    const anotherIndex = (1 + index)%length;
    return [list[index], list[anotherIndex]];
}

export default choose;