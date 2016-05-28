import { Ng2EmployeeEssentialsPage } from './app.po';

describe('ng2-employee-essentials App', function() {
  let page: Ng2EmployeeEssentialsPage;

  beforeEach(() => {
    page = new Ng2EmployeeEssentialsPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ng2-employee-essentials works!');
  });
});
