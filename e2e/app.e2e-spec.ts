import { AlissahartenbaumPage } from './app.po';

describe('alissahartenbaum App', () => {
  let page: AlissahartenbaumPage;

  beforeEach(() => {
    page = new AlissahartenbaumPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
