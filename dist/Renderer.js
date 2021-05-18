function Render(template, args) {
    var mustache = new RegExp('([{}])', 'g'); //RegEx for just the { }
    var allMustache = new RegExp('{([^{}]*)}'); //RegEx for the whole word with {}
    var NewTemplate;
    var Strings = template.match(allMustache); //Get all {words} returns the {} also
    var NewStrings = []; //Create a new array where we will remove the {} from the words
    Strings.forEach(function (data) {
        var NewString = data.replace(mustache, " ").trim(); //Remove the {}
        NewStrings.push(NewString);
        console.log("New Strings array: ", NewStrings);
    });
    console.log("Old Array:", Strings);
    Strings.forEach(function (data) {
        Object.keys(args).forEach(function (key) {
            NewStrings.forEach(function (_string) {
                if (_string === key) { //if the word in the array matches the object key we have a match
                    console.log("Match", _string, key);
                    NewTemplate = template.replace(data, args[key]); //Replace the words in the Template with the words in the Object
                    NewStrings.splice(NewStrings[key]);
                    console.log("Object Key Value", args[key]);
                }
                else {
                    console.log("MATCH FAILED", "Object Key:", key, "String array:", _string);
                }
            });
        });
    });
    console.log(NewTemplate); //Log the New template
}
var data = {
    name: "BOB"
};
Render('Hello World My Name is {name}', data);
