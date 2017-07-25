import { PlayerManagerPage } from './app.po';

describe('player-manager App', () => {
  let page: PlayerManagerPage;

  beforeEach(() => {
    page = new PlayerManagerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
