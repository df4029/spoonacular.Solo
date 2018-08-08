let pageObject = {}

module.exports = {
    before: function(browser){
        pageObject = browser.page.pageObject()
        pageObject.navigate()
    },
    after: function(browser) {
        browser.end
    },
    'test even odd': function(browser) {
        pageObject
            //Even Odd Field
            .setValue('@evenOddIn','4')
            console.log('even')
        pageObject
            //Even odd results
            .click('@evenOddBut')
            .verify.containsText('@evenResults','Evens: [4]')
            console.log('evenresults')},
       
    'test filter title': function(browser) {
       pageObject
            // filter name
            .setValue('input[name="objectFilterInput"]','title')
            .click('@obFilterBut')
            .expect.element('@obFilterRes').text.to.equal('Filtered: [ { "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, { "name": "Carly Armstrong", "title": "CEO" } ]')
            console.log('filter object')},
        
    'test Blake ': function(browser){
        pageObject
            //next
            .setValue('@namFilterIn','Blake')
            .click('@namFilterBut')
            .expect.element('@namFilterRes').text.to.equal('Filtered Names: [ "Blake" ]')
            console.log('blake')},

    'Palindrome' : function(browser){
        pageObject    
        //test palindrome
            .setValue('@palinInput','racecar')
            .click('@palinButt',)
            .expect.element('@palinRes').text.to.equal('Palindrome: true')
            
        },
    'test sum' : function(browser){
        pageObject
        //test sum
        .setValue('@sumIn1','123456789')
        .setValue('@sumIn2','987654321')
        .click('@sumBut')
        .expect.element('@sumRes').text.to.equal('Sum: 1111111110')
    }       

    }



    

