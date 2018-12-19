/*
Interface has only a call signature — use `type SearchFunc = (source: string, subString: string) => boolean;` instead. (callable-types)
*/
/*
interface SearchFunc {
    (source: string, subString: string): boolean;
}
*/
// For function types to correctly type-check, the names of the parameters do not need to match.
var mySearch;
mySearch = function (src, subString) {
    var result = src.search(subString);
    return result > -1;
};
