const random = range => (
    Math.floor(Math.random() * range)
)

const choose = (list) => {
    const length = list.length;
    if(length <= 1)
        return undefined;
    const oneFacilitator = list[0];
    const anotherFacilitator = list[1];
    return [oneFacilitator, anotherFacilitator];
}

export default choose;