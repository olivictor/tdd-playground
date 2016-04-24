import { countNotXs, countXs, findPivot } from '../src/split'

describe('#countXs', () => {
  it('returns the number of elements with same value inside array', () => {
    expect(countXs([1], 1)).toEqual(1)
    expect(countXs([1, 1, 2], 1)).toEqual(2)
    expect(countXs([], 1)).toEqual(0)
  }) 
})

describe('#countNotXs', () => {
  it('returns the number of elements with different value than `x` inside array', () => {
    expect(countNotXs([1], 1)).toEqual(0)
    expect(countNotXs([1, 4, 2], 1)).toEqual(2)
    expect(countNotXs([], 1)).toEqual(0)
  }) 
})

describe('#findPivot', () => {
  it('returns -1 for empty array', () => {
    expect(findPivot([], 1)).toEqual(-1)
  }) 

  it('returns -1 if no index can split an array into two arrays that have the same count of Xs and non Xs', 
    () => {
    expect(findPivot([1,1,1], 1)).toEqual(-1)
    expect(findPivot([0,0,0], 1)).toEqual(-1)
  }) 

  it('returns the index of split so that the first array have a count of Xs equal to non Xs in the second', 
    () => {
    expect(findPivot([2,1,2,1], 1)).toEqual(2)
    expect(findPivot([2,3,2,1,1,2], 1)).toEqual(4)
    expect(findPivot([1,1,1,2], 1)).toEqual(1)
  }) 
})