import { DemoAngular2MaterialPage } from './app.po';

describe('demo-angular2-material App', function() {
  let page: DemoAngular2MaterialPage;

  beforeEach(() => {
    page = new DemoAngular2MaterialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
