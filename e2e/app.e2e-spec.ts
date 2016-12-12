import { COMP2112ProjectTwoPage } from './app.po';

describe('comp2112-project-two App', function() {
  let page: COMP2112ProjectTwoPage;

  beforeEach(() => {
    page = new COMP2112ProjectTwoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
