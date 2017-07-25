import { TimezoneDisplayPage } from './app.po';

describe('timezone-display App', () => {
  let page: TimezoneDisplayPage;

  beforeEach(() => {
    page = new TimezoneDisplayPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
