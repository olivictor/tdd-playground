import { fizz, buzz, fizzbuzz } from '../src/fizzbuzz'

describe('#fizz', () => {
  it('returns `fizz` string if number is divisible by 3', () => {
    expect(fizz(3)).toEqual('fizz')
    expect(fizz(15)).toEqual('fizz')
  }) 

  it('returns empty string if number is not divisible by 3', () => {
    expect(fizz(4)).toEqual('')
  }) 
})

describe('#buzz', () => {
  it('returns `buzz` string if number is divisible by 5', () => {
    expect(buzz(5)).toEqual('buzz')
    expect(buzz(15)).toEqual('buzz')
  }) 

  it('returns empty string if number is not divisible by 5', () => {
    expect(buzz(4)).toEqual('')
    expect(buzz(3)).toEqual('')
  }) 
})

describe('#fizzbuzz', () => {
  it('returns `fizzbuzz` string if number is divisible by 5 & 3', () => {
    expect(fizzbuzz([15])).toEqual(['fizzbuzz'])
    expect(fizzbuzz([30])).toEqual(['fizzbuzz'])
  }) 

  it('returns number if number is not divisible by 5 or 3', () => {
    expect(fizzbuzz([2])).toEqual([2])
    expect(fizzbuzz([4])).toEqual([4])
  }) 

  it('returns the array replacing with `fizz` if divisible by 3, `buzz` if by 5 and `fizzbuzz` if both', 
    () => {
    expect(fizzbuzz([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])).
      toEqual([1,2,'fizz',4,'buzz','fizz',7,8,'fizz','buzz',11,'fizz',13,14,'fizzbuzz'])
  }) 
})
