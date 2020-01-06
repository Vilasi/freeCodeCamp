function convertHTML(str) {
    let regex = /"/;
    let regex2 = /'/;
    let array = str.split("");
    let newArray = array.map((x) => {
        if (x == "&") {
            x = "&amp;";
            return x;
        } else if (x == "<") {
            x = "&lt;";
            return x;
        } else if (x == ">") {
            x = "&gt;";
            return x;
        } else if (regex.test(x)) {
            x = "&quot;";
            return x;
        } else if (regex2.test(x)) {
            x = "&apos;";
            return x;
        }
        return x;


    });
    let joinedArray = newArray.join("");;
    return joinedArray;
}



//    &, <, >, " (double quote), and '


/*   


< 	less than 	&lt; 	&#60;
> 	greater than 	&gt; 	&#62;
& 	ampersand 	&amp; 	&#38;
" 	double quotation mark 	&quot; 	&#34;
' 	single quotation mark (apostrophe) 	 */