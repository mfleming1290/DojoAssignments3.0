import { BicyclePage } from './app.po';

describe('bicycle App', () => {
  let page: BicyclePage;

  beforeEach(() => {
    page = new BicyclePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
