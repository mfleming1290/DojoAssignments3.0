import { QuotePage } from './app.po';

describe('quote App', () => {
  let page: QuotePage;

  beforeEach(() => {
    page = new QuotePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
