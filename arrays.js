var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]

function addElementToBeginningOfArray (array1,elem1) {
  array1 = [elem1,...array1]
  return array1
}

function destructivelyAddElementToBeginningOfArray (array2,elem2) {
  array2.unshift(elem2)
  return array2
}