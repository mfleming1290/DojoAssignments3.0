import { TestRoutingUPage } from './app.po';

describe('test-routing-u App', () => {
  let page: TestRoutingUPage;

  beforeEach(() => {
    page = new TestRoutingUPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
