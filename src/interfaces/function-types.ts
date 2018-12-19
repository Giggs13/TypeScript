/*
Interface has only a call signature — use `type SearchFunc = (source: string, subString: string) => boolean;` instead. (callable-types)
*/
/*
interface SearchFunc {
    (source: string, subString: string): boolean;
}
*/

type SearchFuncType = (source: string, subString: string) => boolean;

// For function types to correctly type-check, the names of the parameters do not need to match.
let mySearch: SearchFuncType;
mySearch = function (src: string, subString: string): boolean {
    const result = src.search(subString);
    return result > -1;
};
