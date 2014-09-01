function jsonTest() {
    var amt = 50000;
    kony.print("a value is " + amt);
}
var myObject = {
    "first": "John",
    "last": "Doe",
    "age": 39,
    "sex": "M",
    "salary": "15000",
    "registered": true,
    "interests": ["Reading", "Mountain Biking", "Hacking"],
    "favorites": {
        "color": "Blue",
        "sport": "Soccer",
        "food": "Spaghetti"
    },
    "skills": [{
        "category": "JavaScript",
        "tests": [{
            "name": "One",
            "score": 90
        }, {
            "name": "Two",
            "score": 96
        }]
    }, {
        "category": "CouchDB",
        "tests": [{
            "name": "One",
            "score": 79
        }, {
            "name": "Two",
            "score": 84
        }]
    }, {
        "category": "Node.js",
        "tests": [{
            "name": "One",
            "score": 97
        }, {
            "name": "Two",
            "score": 93
        }]
    }]
};
postMessage(myObject);