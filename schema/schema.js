const graphql = require('graphql');
const { GraphQLSchema } = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
} = graphql;

const songs = [{
  id: 1,
  album: 'Particles E.P',
  thumbnail: 'https://i.ytimg.com/vi/PsxbQOnnlBw/maxresdefault.jpg',
  author: 'MOON',
  name: 'Plus Four',
  year: 2019,
  duration: '7:59',
  genre: 'Electronic',
}, {
  id: 2,
  album: 'Bad Vibes Forever',
  thumbnail: 'https://upload.wikimedia.org/wikipedia/ru/9/9e/Bad_Vibes_Forever.jpg',
  author: 'XXXTENTACION',
  name: 'NUMB',
  year: 2018,
  duration: '3:06',
  genre: 'HipHop',
}, {
  id: 3,
  album: 'Donda 2',
  thumbnail: 'https://upload.wikimedia.org/wikipedia/ru/0/07/True_Love_X_Ye.jpg',
  author: 'XXXTENTACION & YE',
  name: 'True Love',
  year: 2022,
  duration: '2:28',
  genre: 'Rap',
}, {
  id: 4,
  album: 'Long',
  Way: 'Down',
  thumbnail: 'https://i.ytimg.com/vi/DgiKpKy1CTs/maxresdefault.jpg',
  author: 'Tom Odell',
  name: 'Another Love',
  year: 2013,
  duration: '4:07',
  genre: 'Pop-music',
}, {
  id: 5,
  album: 'Forever',
  thumbnail: 'https://cdns-images.dzcdn.net/images/cover/c757db54fe9dbdb5e50db3aff5dd96ce/500x500.jpg',
  author: 'Haroinfather',
  name: 'Forever',
  year: '2019',
  duration: '5:03',
  genre: 'Pop-music',
}, {
  id: 6,
  album: 'Deadroses',
  thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/85/BlackbearIDFC.jpg',
  author: 'blackbear',
  name: 'idfc',
  year: 2015,
  duration: '3:27',
  genre: 'R&B',
}, {
  id: 7,
  album: 'I Love You',
  thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkKYO6XWZGjP1kSPkuE-tnuErP8iqbUfBLhg&usqp=CAU',
  author: 'The Neighbourhood',
  name: 'Sweater Weather',
  year: 2015,
  duration: '4:00',
  genre: 'Pop-music',
}, {
  id: 8,
  album: 'Broken Pieces',
  thumbnail: 'https://lastfm.freetls.fastly.net/i/u/ar0/9b5551e31b69c191beacccdfdb99e3f8.jpg',
  author: 'Coldsteeze',
  name: 'Broken Pieces',
  year: 2020,
  duration: '3:04',
  genre: 'Hip-Hop',
}, {
  id: 9,
  album: 'Interstellar',
  thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIpCBrR-Wi5xcZRqAhc7EK3Twxq6ZN1uIljA&usqp=CAU',
  author: 'Hans Zimmer',
  name: 'Interstellar Theme',
  year: 2013,
  duration: '4:44',
  genre: 'Classical music',
}, {
  id: 10,
  album: 'Interstellar',
  thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIpCBrR-Wi5xcZRqAhc7EK3Twxq6ZN1uIljA&usqp=CAU',
  author: 'Hans Zimmer',
  name: 'Time',
  year: 2013,
  duration: '5:10',
  genre: 'Classical music'
}, {
  id: 11,
  album: 'In A Time Lapse',
  thumbnail: 'https://ludovicoeinaudi.com/wp-content/uploads/2016/03/RAY_2207-Edit-3.jpg',
  author: 'Ludovico Einaudi',
  name: 'Experience',
  year: 2014,
  duration: '6:22',
  genre: 'Classical music',
}, {
  id: 12,
  album: 'In A Time Lapse',
  thumbnail: 'https://ludovicoeinaudi.com/wp-content/uploads/2016/03/RAY_2207-Edit-3.jpg',
  author: 'Ludovico Einaudi',
  name: 'Una Mattina',
  year: 2014,
  duration: '6:42',
  genre: 'Classical music',
}, {
  id: 13,
  album: 'Circles',
  thumbnail: 'https://images.squarespace-cdn.com/content/v1/55a74a5de4b05c6541fb93a9/1604531905781-LWOI6DFCYSYCRUKXY1FW/Captura+de+Pantalla+2020-11-04+a+la%28s%29+4.18.02+p.+m..png',
  author: 'Mac Miller',
  name: 'Good News',
  year: 2020,
  duration: '6:37',
  genre: 'Hip-Hop',
}, {
  id: 14,
  album: 'The Search',
  thumbnail: 'https://www.crownnote.com/sites/default/files/nf_1.jpg',
  author: 'NF',
  name: 'When I Grow Up',
  year: 2019,
  duration: '4:00',
  genre: 'Rap',
}, {
  id: 15,
  album: 'The Search',
  thumbnail: 'https://i1.sndcdn.com/artworks-CrzRYtHidUZD-0-t500x500.jpg',
  author: 'NF',
  name: 'Leave me alone',
  year: 2019,
  duration: '5:13',
  genre: 'Rap',
}];

const SongType = new GraphQLObjectType({
  name: 'Song',
  fields: () => ({
    id: { type: GraphQLID },
    album: { type: GraphQLString },
    thumbnail: { type: GraphQLString },
    author: { type: GraphQLString },
    name: { type: GraphQLString },
    year: { type: GraphQLInt },
    duration: { type: GraphQLString },
    genre: { type: GraphQLString },
    videoURL: { type: GraphQLString },
  })
});

const Query = new GraphQLObjectType({
  name: 'Catalog',
  fields: {
    songs: {
      type: new GraphQLList(SongType),
      args: {},
      resolve(parent, args) {
        return songs;
      }
    },
    song: {
      type: SongType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return songs.find((song) => song.id == args.id);
      }
    },
  }
});

module.exports = new GraphQLSchema({
  query: Query
});
