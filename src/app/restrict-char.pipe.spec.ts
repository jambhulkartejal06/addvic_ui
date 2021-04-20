import { RestrictCharPipe } from './restrict-char.pipe';

describe('RestrictCharPipe', () => {
  it('create an instance', () => {
    const pipe = new RestrictCharPipe();
    expect(pipe).toBeTruthy();
  });
});
