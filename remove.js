/*Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples:

// returns 'www.codewars.com'
removeUrlAnchor('www.codewars.com#about')

// returns 'www.codewars.com?page=1' 
removeUrlAnchor('www.codewars.com?page=1') */

function removeUrlAnchor(url){
  // TODO: complete
  if (url.match(/#/gi) !== null) {
  let findHashtag = url.indexOf('#');
  return url.slice(0, findHashtag);
  } else {
    return url;
  }
}




console.log(removeUrlAnchor('www.codewars.com/katas/'));
