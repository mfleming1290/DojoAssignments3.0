import { MyExpressAppPage } from './app.po';

describe('my-express-app App', () => {
  let page: MyExpressAppPage;

  beforeEach(() => {
    page = new MyExpressAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
