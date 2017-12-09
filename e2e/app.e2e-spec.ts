import { AzureTrainingHydPage } from './app.po';

describe('azure-training-hyd App', () => {
  let page: AzureTrainingHydPage;

  beforeEach(() => {
    page = new AzureTrainingHydPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
