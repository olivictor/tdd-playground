import _ from 'lodash'

export function countXs(ys, x) {
  return _.filter(ys, (y) => y === x).length
}

export function countNotXs(ys, x) {
  return _.filter(ys, (y) => y !== x).length
}

export function findPivot(ys, x) {
  let pivot = -1
  
  ys.forEach((y, index) => {
    if(index === 0) { return true }
    if(countXs(ys.slice(0, index), x) === countNotXs(ys.slice(index, ys.length), x)) {
      pivot = index
      return false
    }
  })

  return pivot
}
