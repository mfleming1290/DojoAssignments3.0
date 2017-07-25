import { RegFormPage } from './app.po';

describe('reg-form App', () => {
  let page: RegFormPage;

  beforeEach(() => {
    page = new RegFormPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
