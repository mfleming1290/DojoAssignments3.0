import { AnonNotesPage } from './app.po';

describe('anon-notes App', () => {
  let page: AnonNotesPage;

  beforeEach(() => {
    page = new AnonNotesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
