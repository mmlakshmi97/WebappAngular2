import { WebappAngular2Page } from './app.po';

describe('webapp-angular2 App', function() {
  let page: WebappAngular2Page;

  beforeEach(() => {
    page = new WebappAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
