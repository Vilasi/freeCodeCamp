var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
    let copiedArray = [];
    copiedArray = copiedArray.concat(arr);
    return copiedArray.sort((a, b) => a - b)
}
nonMutatingSort(globalArray);
