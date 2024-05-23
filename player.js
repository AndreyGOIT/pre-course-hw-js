// data
const playlist1 = {
    title: 'Hip-Hop Hits',
    coverImageUrl: './playlist1.png',
    info: {
        totalTrackCount: 4,
        totalTrackDurationInSeconds: 772
    },
    tracks: [
        {
            coverImageUrl: './track1.png',
            artistName: 'Eminem',
            title: 'Rap God',
            fileUrl: 'Eminem_-_Rap_God.mp3',
            isHot: false
        },
        {
            coverImageUrl: './track2.png',
            artistName: '50 Cent',
            title: 'In da Club',
            fileUrl: '50_Cent_-_In_Da_Club_FlexyOkay.com.mp3',
            isHot: true
        }
    ]
  }
  // render
let playlistTitleElement = document.createElement('h1');
playlistTitleElement.append(playlist1.title);
document.body.append(playlistTitleElement);

let playlistImageElement = document.createElement('img');
playlistImageElement.src = playlist1.coverImageUrl;
document.body.append(playlistImageElement);