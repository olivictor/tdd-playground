import hello from '../src/hello'

describe('#hello', () => {
  it('should return the name you passed with an exaggerated number of exclamation points', () => {
    expect(hello('foo')).toEqual('foo!!!!!!')
  }) 
})