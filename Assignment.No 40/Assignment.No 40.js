"use strict";
function makeAlbum(artist, title, tracks) {
    const album = { artist, title };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Creating albums using the function
const album1 = makeAlbum('Artist 1', 'Album Title 1');
const album2 = makeAlbum('Artist 2', 'Album Title 2', 10);
const album3 = makeAlbum('Artist 3', 'Album Title 3', 8);
// Printing the album objects
console.log(album1);
console.log(album2);
console.log(album3);
