let commands = document.getElementById("commands");
let searchbar = document.getElementById("searchbar");
let allcommands = [];
let allcommandnames = []
for(var i = 0; i < commands.childElementCount; i++)
{
    let item = commands.children.item(i);
    let attr = item.getAttribute("data");
    allcommands.push({ 
        "command": attr
    });
    allcommandnames.push(attr)
}

console.log(allcommands);

var options = {
    shouldSort: true,
    threshold: 0.8,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: [
      "command"
    ],
    id: "command"
  };

let fuse = new Fuse(allcommands, options); 

console.log("wack");


searchbar.oninput = (ev) => {
    console.log(searchbar.value);
    let results = fuse.search(searchbar.value);
    if(searchbar.value == "")
    {
        results = allcommandnames;
    }
    console.log(results);

    for(let i = 0; i < commands.children.length; i++)
    {
        let item = commands.children.item(i);
        if(results.includes(item.getAttribute("data")))
        {
            console.log("remove");
            item.classList.remove("is-hidden");

        }
        else
        {
            console.log("add");
            item.classList.add("is-hidden");
        }
    }

    for(let i = results.length - 1; i >= 0; i--)
    {
        let item = findElementByAttribute(commands.children, "data", results[i]);
        commands.insertBefore(item, commands.children[0]);
    }
};

function findElementByAttribute(elements : HTMLCollection, attributename, value: string): HtmlElement {
    for(var i = 0; i < elements.length; i++)
    {
        var elem = elements.item(i);
        if(elem.getAttribute(attributename) == value)
        {
            return elem;
        }
    }
    return null;
}