function sliceArray(anim, beginSlice, endSlice) {
    let slicedArray;
    return slicedArray = anim.slice(beginSlice, endSlice);
  }
  var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
  sliceArray(inputAnim, 1, 3);