import { RoutingTestPage } from './app.po';

describe('routing-test App', () => {
  let page: RoutingTestPage;

  beforeEach(() => {
    page = new RoutingTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
