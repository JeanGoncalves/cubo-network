import { CuboNetworkPage } from './app.po';

describe('cubo-network App', () => {
  let page: CuboNetworkPage;

  beforeEach(() => {
    page = new CuboNetworkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
