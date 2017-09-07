import { Ng4OandaPage } from './app.po';

describe('ng4-oanda App', () => {
  let page: Ng4OandaPage;

  beforeEach(() => {
    page = new Ng4OandaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
