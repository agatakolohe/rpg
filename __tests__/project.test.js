import Player from '../src/project.js'; 

describe('Player', () => {

  test('should correctly create player object with name and type', () => {
    const player1 = new Player('Samwise', 'hobbit');
    expect(player1.name).toEqual('Samwise');
    expect(player1.type).toEqual('hobbit')
  })
});