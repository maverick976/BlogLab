import { BlogLabUIPage } from './app.po';

describe('blog-lab-ui App', () => {
  let page: BlogLabUIPage;

  beforeEach(() => {
    page = new BlogLabUIPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
