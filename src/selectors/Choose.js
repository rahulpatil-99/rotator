const choose = (list) => {
    const random_index = Math.floor(Math.random() * list.length);
    return list[random_index];
}

export default choose; 