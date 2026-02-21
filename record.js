var collection = {
    "2548": {
        "album": "Slippery when wet",
        "artist": "Bon javi",
        "tracks": [
           "Let it rock",
           "You give love a bad name" 
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "prince",
        "tracks": [
            "1999",
            "Little red corvette"
        ]
    },
    "1245": {
        "artist": "robert palmer",
        "tracks": [ ]
    },
    "5439": {
        "album": "ABBA GOLD"
    }
}
// Keep a copy of the collection for tests 
var collectioncopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line 
function updateRecords(id,prop, value) {
    if(value === "") {
        delete collection[id][prop]
    } else if (prop === "tracks") {
        collection[id][prop]
        collection[id][prop].push(value)
    } else {
        collection[id][prop] = value
    }

        return collection
}

// Alter values below to test your code 
console.log(updateRecords(5439, "artist", "ABBA"))