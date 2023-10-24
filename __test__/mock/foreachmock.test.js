import { forEach } from "./foreach";

const mockCallback = jest.fn(x => 42 + x);

test('forEach mock function', () => {
  forEach([10, 20], mockCallback);
  console.log(mockCallback.mock) 

  /*
    {
      calls: [ [ 10 ], [ 20 ] ],
      instances: [ undefined, undefined ],
      invocationCallOrder: [ 1, 2 ],
      results: [ { type: 'return', value: 52 }, { type: 'return', value: 62 } ]
    }
  */
  expect(mockCallback.mock.calls).toHaveLength(2);
  expect(mockCallback.mock.calls[0][0]).toBe(10);
  expect(mockCallback.mock.calls[1][0]).toBe(20);
  expect(mockCallback.mock.results[0].value).toBe(52);


const myMock = jest.fn();
console.log(myMock());
// > undefined
myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);
console.log(myMock(), myMock(), myMock(), myMock());
// > 10, 'x', true, true

});