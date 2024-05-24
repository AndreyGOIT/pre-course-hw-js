// data
const playlist1 = {
  title: "Hip-Hop Hits",
  coverImageUrl: "./playlist1.png",
  info: {
    totalTrackCount: 4,
    totalTrackDurationInSeconds: 772,
  },
  tracks: [
    {
      coverImageUrl: "./track1.png",
      artistName: "Eminem",
      title: "Rap God",
      fileUrl: "Eminem_-_Rap_God.mp3",
      isHot: false,
    },
    {
      coverImageUrl: "./track2.png",
      artistName: "50 Cent",
      title: "In da Club",
      fileUrl: "50_Cent_-_In_Da_Club_FlexyOkay.com.mp3",
      isHot: true,
    },
  ],
};
const playlist2 = {
  title: "Hip-Hop Hits",
  coverImageUrl: "./playlist1.png",
  info: {
    totalTrackCount: 4,
    totalTrackDurationInSeconds: 772,
  },
  tracks: [
    {
      coverImageUrl: "./track1.png",
      artistName: "Eminem",
      title: "Rap God",
      fileUrl: "Eminem_-_Rap_God.mp3",
      isHot: false,
    },
    {
      coverImageUrl: "./track2.png",
      artistName: "50 Cent",
      title: "In da Club",
      fileUrl: "50_Cent_-_In_Da_Club_FlexyOkay.com.mp3",
      isHot: true,
    },
  ],
};
// render
renderPlaylist(playlist1);
renderPlaylist(playlist2);

function renderPlaylist(playlistForRendering) {
  renderPlaylistHeader(playlistForRendering);
  
  renderTrack(playlistForRendering.tracks[0]);
  renderTrack(playlistForRendering.tracks[1]);
  
}

function renderPlaylistHeader(playlistForRendering){
  let playlistImageElement = document.createElement("img");
  playlistImageElement.src = playlistForRendering.coverImageUrl;
  document.body.append(playlistImageElement);

  let playlistTitleElement = document.createElement("h1");
  playlistTitleElement.append(playlistForRendering.title);
  document.body.append(playlistTitleElement);
} 

function renderTrack(inputTrackForRendering){
  let track1Element = document.createElement("div");
  track1Element.append(
    inputTrackForRendering.artistName + " - " + inputTrackForRendering.title
  );
  document.body.append(track1Element);
} 
