import {Selector} from 'testcafe'

// prettier-ignore
fixture `Getting started with TestCafe`
    .page `https://devexpress.github.io/testcafe/example/`

    // Test Hooks
    .before(async t => {
        // Test setup goes here
        // await runDatabaseReset()
        // await seedTestData()
    })
    .beforeEach(async t => {
        // Runs before each test
        await t.setTestSpeed(1)
        await t.setPageLoadTimeout(1) // Helps load mutiple test pages as well
    })
    .after(async t => {
        // Cleaning test data
        // Logging and sending data to monitoring systems 
    })
    .afterEach(async t => {
        // Runs after each test
    })


test('My first testcafe test', async t => {
    // Selector used to create object/variable to store values. 
    // It can be stored in external files
    // Used if not as complex, without needing to use Page Object Model
    const developer_name_input = Selector('#developer-name')
    const submit_button = Selector('#submit-button')
    const articleText = Selector('#article-header').innerText

    // Take screenshots
    // await t.takeScreenshot({ fullPage: true})
    // await t.takeElementScreenshot(submit_button)

    // Page input actions
    await t.typeText(developer_name_input,'John')
    await t.wait(1000) // dont use during production testing
    await t.click(submit_button)

    // Assertions
    await t.expect(articleText).contains('John')
    
    //Explore API actions - {Options} can be used in all selectors
    await t.click('selector', {options})
    await t.doubleClick('selector', {options})
    await t.rightClick('selector', {options})
    await t.drag('selector', 200, 0, {options}) //drag elements
    await t.hover('selector', {options})
    await t.selectText('selector', {options})
    await t.typeText('selector', 'text', {options})
    await t.pressKey('key') // put name of key you want to action
    await t.navigateTo('url')
    await t.takeScreenshot()
    await t.takeElementScreenshot()
    await t.resizeWindow(800, 600)

    // Expore Assertion API
    await t.expect('foo').eql('foo', 'message', options)
    await t.expect('foo').notEql('foo')
    await t.expect(true).ok()
    await t.expect(true).notOk()
    await t.expect('foo').contains('o')
    await t.expect('foo').notContains('hey')
    await t.expect(10).gt(10)  // greater
    await t.expect(10).gte(10)  // greater or equal
    await t.expect(10).lt(10)  // less
    await t.expect(10).lte(10)  // less or equal
    await t.expect(10).within(1, 100)  // range
    await t.expect(10).notWithin(5, 50)  // not in range
})
