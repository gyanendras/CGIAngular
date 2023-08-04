import { Note } from './note';

describe('Note', () => {
  it('should create an instance', () => {
    expect(new Note("t1","n1",1)).toBeTruthy();
  });
});
