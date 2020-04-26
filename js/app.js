/* App.js */
var substringMatcher = function(strs) {
    return function findMatches(q, cb) {
        var matches;
        matches = [];
        substrRegex = new RegExp(q, 'i');
        $.each(strs, function(i, str) {
            if (substrRegex.test(str)) {
                matches.push(str);
            }
        });
        cb(matches);
    };
};

var fruits = ['Apples', 'Avocado', 'Bananas', 'Blackberries', 'Blueberries', 
                'Cherries', 'Cranberries', 'Durian', 'Grapefruit', 'Grapes', 
                'Guava', 'Lemons', 'Mango', 'Olives', 'Oranges', 'Papaya', 
                'Pineapple', 'Pomegranate', 'Strawberries', 'Watermelon'];

$('#fruits').tagsinput({
    typeaheadjs:({
        hint: true,
        highlight: true,
        minLength: 1
    }, {
        name: 'fruits',
        source: substringMatcher(fruits)
    })
});