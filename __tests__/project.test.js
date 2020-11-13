import Player from '../src/project.js'; 

describe('Player', () => {
  let player1;
  beforeEach(() => {
    player1 = new Player('Samwise', 'hobbit');
  });

  test('should correctly create player object with name and type', () => {

    expect(player1.name).toEqual('Samwise');
    expect(player1.type).toEqual('hobbit')
  })
  
  test('should correctly check hunger level and return appropriate response' , () => {
    expect(player1.hungerLevel()).toBe('stupid fat hobbit!')
  })  
});