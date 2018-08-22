// var nextImages = ""; //empty global variable that onReady and pagination functions can access
// var maxIndex;
//
// //run function when window opens, loads the first 20 images.
//
// $(document).ready(function() {
//     //Start with the most recent photo
//     var currentindex = 0;
//     maxIndex = 20;
//     //Load 20 photos at a time.
//     // the hashtag you wish to load from on Instagram
//     var tagName = 'rikapthemoment';
//     //Access token needed for
//     var apiToken = document.location.href.split("accessToken=")[1];
//     while (currentindex < maxIndex){
//         //grab JSON data from Instagram API
//         $.getJSON("https://api.instagram.com/v1/tags/" + tagName +"/media/recent?access_token=" + apiToken +"&callback=?", function(instagramJSON){
//             //Loop through each JSON entry
//             $(instagramJSON.photos).each(function(index, temp){
//                 //Add each image HTML to the Image div.
//                 $('#images').append('<img class="instagram" src="'+temp.url+'"></img>');
//             });
//             //load more images via pagination function, pass in the pagination URL
//             nextImages = String(instagramJSON.pagination.next_url);
//         });
//     }
// });
//
//
// /** The pagination method grabs the next oldest 20 photos for a particular tag, then  adds those images to the correct div.
//     @param {String} url The pagination url given to us by the Instagram API, which will load the next number of pages automatically.
// */
// function pagination(url) {
//     //increment the indicies to load next twenty photos.
//     currentindex += 20;
//     maxindex += 40
//     //Load the new JSON
//     $.getJSON(temp, function(instagramJSON){
//         //Loop through the JSON data
//         $(instagramJSON.data).each(function(index, temp){
//             $('#images').append('<img class="instagram" src="'+temp.url+'"></img>');
//         });
//             //reset the pagination script
//         nextImages = String(instagramJSON.pagination.next_url);
//     });
// }
