var Window = function(tabs){
    this.tabs = tabs
}

Window.prototype.join = function(otherWindow){
    this.tabs = this.tabs.concat(otherWindow.tabs)

    return this
}

Window.prototype.tabOpen = function(tab){
    this.tabs.push('New Tab')

    return this
}

Window.prototype.tabClose = function(index){
    var tabBeforeIndex = this.tabs.splice(0, index)
    var tabAfterIndex = this.tabs.splice(1)

    this.tabs = tabBeforeIndex.concat(tabAfterIndex)

    return this
}

var workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']);
var finalTabs = workWindow.tabOpen()
console.log(finalTabs)