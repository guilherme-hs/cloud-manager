import { CloudManagerPage } from './app.po';

describe('cloud-manager App', function() {
  let page: CloudManagerPage;

  beforeEach(() => {
    page = new CloudManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
