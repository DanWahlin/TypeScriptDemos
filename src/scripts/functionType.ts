interface SearchFunc {
    (source: string, subString: string): boolean;
}       

var mySearch: SearchFunc = function (source: string, subString: string) {
    var result = source.search(subString);
    if (result == -1) {
        return false;
    }
    else {
        return true;
    }
}