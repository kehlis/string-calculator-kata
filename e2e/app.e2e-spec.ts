import { SogetiPage } from './app.po';

describe('sogeti App', () => {
  let page: SogetiPage;

  beforeEach(() => {
    page = new SogetiPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
