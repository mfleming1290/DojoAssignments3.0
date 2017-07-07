import { IntegAppPage } from './app.po';

describe('integ-app App', () => {
  let page: IntegAppPage;

  beforeEach(() => {
    page = new IntegAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
