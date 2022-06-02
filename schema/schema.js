const graphql = require('graphql');
const { GraphQLSchema } = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
} = graphql;

const songs = [
  {
    id: 1,
    album: "Particles E.P",
    thumbnail: 'test',
    author: "MOON",
    name: "Plus Four",
    year: 2012,
    duration: 320,
    genre: 'Electronic',
  },
  {
    id: 1,
    album: "Bad Vibes Forever",
    thumbnail: 'test',
    author: "XXXTENTACION",
    name: "NUMB",
    year: 2018,
    duration: 140,
    genre: 'HipHop',
  },
];

const SongType = new GraphQLObjectType({
  name: 'Song',
  fields: () => ({
    id: { type: GraphQLID },
    album: { type: GraphQLString },
    thumbnail: { type: GraphQLString },
    author: { type: GraphQLString },
    name: { type: GraphQLString },
    year: { type: GraphQLInt },
    duration: { type: GraphQLInt },
    genre: { type: GraphQLString },
  })
});

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
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
