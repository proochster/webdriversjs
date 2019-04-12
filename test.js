const webdriver = require('selenium-webdriver');
const driver = new webdriver.Builder().forBrowser('chrome').build();

// Open page
driver.get('https://shortcode.dev');

// Wait until the element has loaded
// driver.wait(webdriver.until.elementLocated({xpath:'//*[@id="sc"]/header/div/a'}));
// driver.findElement({xpath:'//*[@id="sc"]/header/div/a'}).click();

// Wait until the element has loaded
driver.wait(webdriver.until.elementLocated({xpath:'//*[@id="sc"]/div/a[1]'}),100);
driver.findElement({xpath:'//*[@id="sc"]/div/a[1]'}).click();

driver.quit();


//*[@id="sc"]/div/a[1]
//*[@id="sc"]/div/a[2]