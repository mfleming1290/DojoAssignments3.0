import { BookItPage } from './app.po';

describe('book-it App', () => {
  let page: BookItPage;

  beforeEach(() => {
    page = new BookItPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
