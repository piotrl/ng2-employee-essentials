export class Ng2EmployeeEssentialsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng2-employee-essentials-app h1')).getText();
  }
}
