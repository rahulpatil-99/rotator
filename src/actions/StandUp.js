export const remove = name => ({
    type: 'REMOVE',
    name
});

export const reload = () => ({
    type: 'RELOAD'
});

export const skip = name => ({
    type: 'SKIP',
    name
});