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
  videoURL: 'https://www.youtube.com/watch?v=PsxbQOnnlBw',
  lyrics: '',
}, {
  id: 2,
  album: 'Bad Vibes Forever',
  thumbnail: 'https://upload.wikimedia.org/wikipedia/ru/9/9e/Bad_Vibes_Forever.jpg',
  author: 'XXXTENTACION',
  name: 'NUMB',
  year: 2018,
  duration: '3:06',
  genre: 'HipHop',
  videoURL: 'https://www.youtube.com/watch?v=UumDgfy6guA',
  lyrics: '[Chorus]\n' +
    'And every single year\n' +
    'I\'m drowning in my tears, I\'m drowning in my tears again\n' +
    'I can\'t seem to forget the pain you seem to give\n' +
    'The pain you seem to give, my friend\n' +
    'And every single year\n' +
    'I\'m drowning in my tears, I\'m drowning in my tears again\n' +
    'I can\'t seem to forget the pain you seem to give\n' +
    'The pain you seem to give, my friend\n' +
    '\n' +
    '[Bridge]\n' +
    'Woah, oh, woah, oh\n' +
    'Woah, oh, woah, oh\n' +
    'Woah, oh, woah, oh\n' +
    'Woah, oh, woah, oh\n' +
    'Woah, oh, woah, oh\n' +
    '[Chorus]\n' +
    'And every single year\n' +
    'I\'m drowning in my tears, I\'m drowning in my tears again\n' +
    'I can\'t seem to forget the pain you seem to give\n' +
    'The pain you seem to give, my friend\n' +
    'Woah, oh\n' +
    'And every single year\n' +
    'I\'m drowning in my tears, I\'m drowning in my tears again\n' +
    'Woah, oh\n' +
    'I can\'t seem to forget the pain you seem to give\n' +
    'The pain you seem to give, my friend\n' +
    'Woah, oh, woah, oh, woah, oh\n' +
    '\n' +
    '[Break]\n' +
    '\n' +
    '[Chorus]\n' +
    'And every single year\n' +
    'I\'m drowning in my tears, I\'m drowning in my tears again\n' +
    'I can\'t seem to forget the pain you seem to give\n' +
    'The pain you seem to give, my friend\n' +
    'Woah, oh',
}, {
  id: 3,
  album: 'Donda 2',
  thumbnail: 'https://upload.wikimedia.org/wikipedia/ru/0/07/True_Love_X_Ye.jpg',
  author: 'XXXTENTACION & YE',
  name: 'True Love',
  year: 2022,
  duration: '2:28',
  genre: 'Rap',
  videoURL: 'https://www.youtube.com/watch?v=k7H2C5L8X7I',
  lyrics: '[Chorus: XXXTENTACION]\n' +
    'True love shouldn\'t be this complicated\n' +
    'I thought I\'d die in your arms, I thought I\'d die in your—\n' +
    'True love shouldn\'t be this complicated\n' +
    'I thought I\'d die in your arms, I thought I\'d die in your—\n' +
    '[Bridge: Kanye West]\n' +
    'No hard feelings, but these feelings harder\n' +
    'No-no hard feelings, but these feelings harder\n' +
    'No-no hard feelings, but these feelings harder\n' +
    '[Verse: Kanye West]\n' +
    'Wait, when you see the kids? I\'ll see y\'all tomorrow\n' +
    'Wait, when the sun set? I see y\'all tomorrow\n' +
    'Wait, when I pick \'em up, I feel like they borrowed\n' +
    'When I gotta return them, scan \'em like a bar code\n' +
    'Wait, no hard feelings, but these feelings hard though\n' +
    'Wait, who got the kids in those "What are thosе?"\n' +
    'Wait, why they can\'t wear Yeezys with the cargos?\n' +
    'Y\'all know Nikе don\'t like me, y\'all take it too far, though\n' +
    'At least have \'em in some Mike\'s, he played for Chicago\n' +
    'I only see three kids, who watchin\' Chicago?\n' +
    'And you know all the nannies they\'re Danny Nesbrasco\n' +
    'Let the kids dig a tunnel to my house like Chapo\n' +
    'Only neighbor in the hood with a door they can knock on\n' +
    'I leave the light on\n' +
    '[Chorus: XXXTENTACION & Kanye West]\n' +
    'True love shouldn\'t be this complicated\n' +
    '(Daddy\'s not gone, you see the light on)\n' +
    'I thought I\'d die in your arms, I thought I\'d die in your—\n' +
    '(Daddy\'s at home, tell Gekyume)\n' +
    'True love shouldn\'t be this complicated\n' +
    '(Daddy\'s not gone, tell Gekyume)\n' +
    'I thought I\'d die in your arms, I thought I\'d die in your—\n' +
    '(Daddy\'s at home)\n' +
    '\n' +
    '[Bridge: Kanye West]\n' +
    'No hard feelings, but these feelings harder\n' +
    'No-no hard feelings, but these feelings harder\n' +
    'No hard feelings, but these feelings harder\n' +
    '[Chorus: XXXTENTACION]\n' +
    'True love shouldn\'t be this complicated\n' +
    'I thought I\'d die in your arms, I thought I\'d die in your—\n' +
    'True love shouldn\'t be this complicated\n' +
    'I thought I\'d die in your arms, I thought I\'d die in your—',
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
  videoURL: 'https://www.youtube.com/watch?v=MwpMEbgC7DA',
  lyrics: '[Verse 1]\n' +
    'I wanna take you somewhere so you know I care\n' +
    'But it\'s so cold and I don\'t know where\n' +
    'I brought you daffodils in a pretty string\n' +
    'But they won\'t flower like they did last spring\n' +
    'And I wanna kiss you, make you feel alright\n' +
    'I\'m just so tired to share my nights\n' +
    'I wanna cry and I wanna love\n' +
    'But all my tears have been used up\n' +
    '\n' +
    '[Chorus]\n' +
    'On another love, another love\n' +
    'All my tears have been used up\n' +
    'On another love, another love\n' +
    'All my tears have been used up\n' +
    'On another love, another love\n' +
    'All my tears have been used up, up\n' +
    '[Verse 2]\n' +
    'And if somebody hurts you, I wanna fight\n' +
    'But my hands been broken one too many times\n' +
    'So I\'ll use my voice, I\'ll be so fucking rude\n' +
    'Words, they always win, but I know I\'ll lose\n' +
    'And I\'d sing a song that\'d be just ours\n' +
    'But I sang \'em all to another heart\n' +
    'And I wanna cry, I wanna learn to love\n' +
    'But all my tears have been used up\n' +
    '\n' +
    '[Chorus]\n' +
    'On another love, another love\n' +
    'All my tears have been used up\n' +
    'On another love, another love\n' +
    'All my tears have been used up\n' +
    'On another love, another love\n' +
    'All my tears have been used up, up\n' +
    '\n' +
    '[Bridge]\n' +
    '(Oh, need a love, now, my heart is thinking of)\n' +
    'I wanna sing a song that\'d be just ours\n' +
    'But I sang \'em all to another heart\n' +
    'And I wanna cry, I wanna fall in love\n' +
    'But all my tears have been used up\n' +
    '\n' +
    '[Chorus]\n' +
    'On another love, another love\n' +
    'All my tears have been used up\n' +
    'On another love, another love\n' +
    'All my tears have been used up\n' +
    'On another love, another love\n' +
    'All my tears have been used up, up',
}, {
  id: 5,
  album: 'Forever',
  thumbnail: 'https://cdns-images.dzcdn.net/images/cover/c757db54fe9dbdb5e50db3aff5dd96ce/500x500.jpg',
  author: 'Haroinfather',
  name: 'Forever',
  year: '2019',
  duration: '5:03',
  genre: 'Pop-music',
  videoURL: 'https://www.youtube.com/watch?v=A3A74a5-Nh8',
  lyrics: '[Intro: Yuna & Sample]\n' +
    'Forever in my mind, only you\n' +
    'The pieces in my life go away with you\n' +
    'Forever in my mind, only you\n' +
    'The pieces in my life run away with you\n' +
    'Forever in my mind\n' +
    'I want you to live. I want that more than anything in this world. I want you to fight like hell to stay with us. But with everybody else gone, I know, it might not be what you want. It might be too hard for you to keep fighting, so... if you wanna go, I want you to know it\'s okay\n' +
    '\n' +
    '[Verse]\n' +
    'I was all alone, on my own, it\'s okay though\n' +
    'Do you really love me, do you really trust me?\n' +
    'I was down bad, feelin\' sad, feelin\' sorry\n' +
    'Now you really gone, and I can\'t get you to call me\n' +
    'Wanna run away, fuck this love and fuck this place\n' +
    'If you was a ghost, I would kiss you anyway\n' +
    'I can\'t fill my lungs, feelin\' like I\'m outer space\n' +
    'You\'re the one I love, but you\'re the one I hate\n' +
    '[Chorus]\n' +
    'I can\'t really see you with anyone else\n' +
    'All these fuckin\' Perce\'s not good for my health\n' +
    'Wanna end it all, I can’t do this again\n' +
    'Tell her that I love her, she do it for him\n' +
    'I can\'t really see you with anyone else\n' +
    'All these fuckin\' Perce\'s not good for my health\n' +
    'Wanna end it all, I can’t do this again\n' +
    'Tell her that I love her, she do it for him\n' +
    '\n' +
    '[Outro: Yuna]\n' +
    'Forever in my mind, only you\n' +
    'The pieces in my life go away with you\n' +
    'Forever in my mind, only you\n' +
    'The pieces in my life run away with you\n' +
    'Forever in...',
}, {
  id: 6,
  album: 'Deadroses',
  thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/85/BlackbearIDFC.jpg',
  author: 'blackbear',
  name: 'idfc',
  year: 2015,
  duration: '3:27',
  genre: 'R&B',
  videoURL: 'https://www.youtube.com/watch?v=PDeTO26fRVQ',
  lyrics: '[Verse 1]\n' +
    'Tell me pretty lies, look me in the face\n' +
    'Tell me that you love me, even if it\'s fake\n' +
    '\'Cause I don\'t fucking care at all\n' +
    'You been out all night, I don\'t know where you been\n' +
    'You\'re slurring all your words, not making any sense\n' +
    'But I don\'t fucking care at all\n' +
    '\n' +
    '[Pre-Chorus]\n' +
    '\'Cause I have hella feelings for you\n' +
    'I act like I don\'t fucking care\n' +
    'Like they ain\'t even there\n' +
    '\'Cause I have hella feelings for you\n' +
    'I act like I don\'t fucking care\n' +
    '\'Cause I\'m so fucking scared\n' +
    '[Chorus]\n' +
    'I\'m only a fool for you\n' +
    'And maybe you\'re too good for me\n' +
    'I\'m only a fool for you\n' +
    'But I don\'t fucking care at all, oh\n' +
    '(Ooh yeah, oh-oh)\n' +
    '\n' +
    '[Verse 2]\n' +
    'Tell me pretty lies, look me in the face\n' +
    'Tell me that you love me, even if it\'s fake\n' +
    '\'Cause I don\'t fucking care at all\n' +
    'You been out all night, I don\'t know where you been\n' +
    'You slurring all your words, not making any sense\n' +
    'But I don\'t fucking care at all\n' +
    '\n' +
    '[Pre-Chorus]\n' +
    '\'Cause I have hella feelings for you\n' +
    'I act like I don\'t fucking care\n' +
    'Like they ain\'t even there\n' +
    '\'Cause I have hella feelings for you\n' +
    'I act like I don\'t fucking care\n' +
    '\'Cause I\'m so fucking scared\n' +
    '\n' +
    '[Chorus]\n' +
    'I\'m only a fool for you\n' +
    'And maybe you\'re too good for me\n' +
    'I\'m only a fool for you\n' +
    'But I don\'t fucking care at all, oh\n' +
    '(Ooh yeah, oh-oh)',
}, {
  id: 7,
  album: 'I Love You',
  thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkKYO6XWZGjP1kSPkuE-tnuErP8iqbUfBLhg&usqp=CAU',
  author: 'The Neighbourhood',
  name: 'Sweater Weather',
  year: 2015,
  duration: '4:00',
  genre: 'Pop-music',
  videoURL: 'https://www.youtube.com/watch?v=GCdwKhTtNNw',
  lyrics: '[Verse 1]\n' +
    'And all I am is a man\n' +
    'I want the world in my hands\n' +
    'I hate the beach but I stand\n' +
    'In California with my toes in the sand\n' +
    'Use the sleeves of my sweater\n' +
    'Let\'s have an adventure\n' +
    'Head in the clouds but my gravity\'s centered\n' +
    'Touch my neck and I\'ll touch yours\n' +
    'You in those little high waisted shorts, oh\n' +
    '[Pre-Chorus]\n' +
    'She knows what I think about\n' +
    'And what I think about\n' +
    'One love, two mouths\n' +
    'One love, one house\n' +
    'No shirt, no blouse\n' +
    'Just us, you find out\n' +
    'Nothing that I wouldn\'t wanna tell you about, no\n' +
    '\n' +
    '[Chorus]\n' +
    '\'Cause it\'s too cold for you here\n' +
    'And now, so let me hold\n' +
    'Both your hands in the holes of my sweater\n' +
    '\n' +
    '[Verse 2]\n' +
    'And if I may just take your breath away\n' +
    'I don\'t mind if there\'s not much to say\n' +
    'Sometimes the silence guides a mind\n' +
    'To move to a place so far away\n' +
    'The goosebumps start to raise\n' +
    'The minute that my left hand meets your waist\n' +
    'And then I watch your face\n' +
    'Put my finger on your tongue\n' +
    '\'Cause you love the taste, yeah\n' +
    'These hearts adore\n' +
    'Everyone the other beats hardest for\n' +
    'Inside this place is warm\n' +
    'Outside it starts to pour\n' +
    '[Pre-Chorus]\n' +
    'Comin\' down\n' +
    'One love, two mouths\n' +
    'One love, one house\n' +
    'No shirt, no blouse\n' +
    'Just us, you find out\n' +
    'Nothing that I wouldn\'t wanna tell you about\n' +
    'No, no, no\n' +
    '\n' +
    '[Chorus]\n' +
    '\'Cause it\'s too cold for you here\n' +
    'And now, so let me hold\n' +
    'Both your hands in the holes of my sweater\n' +
    '\'Cause it\'s too cold for you here\n' +
    'And now, so let me hold\n' +
    'Both your hands in the holes of my sweater, woah\n' +
    '\n' +
    '[Bridge]\n' +
    'Woah, woah, woah\n' +
    'Woah, woah, woah, woah\n' +
    'Woah, woah\n' +
    'Woah, woah, woah, woah\n' +
    'Woah, woah\n' +
    '\n' +
    '[Chorus]\n' +
    '\'Cause it\'s too cold for you here\n' +
    'And now, so let me hold\n' +
    'Both your hands in the holes of my sweater\n' +
    '\'Cause it\'s too cold for you here\n' +
    'Now, let me hold\n' +
    'Both your hands in the holes of my sweater\n' +
    '[Outro]\n' +
    'And it\'s too cold, it\'s too cold\n' +
    'The holes of my sweater',
}, {
  id: 8,
  album: 'Broken Pieces',
  thumbnail: 'https://lastfm.freetls.fastly.net/i/u/ar0/9b5551e31b69c191beacccdfdb99e3f8.jpg',
  author: 'Coldsteeze',
  name: 'Broken Pieces',
  year: 2020,
  duration: '3:04',
  genre: 'Hip-Hop',
  videoURL: 'https://www.youtube.com/watch?v=EWCE2IJ-bks',
  lyrics: 'Chorus:\n' +
    '...of you. Tearing out, tearing out pieces of me to replace the broken pieces of you. Repeat\n' +
    '\n' +
    '\n' +
    'Yeah...\n' +
    'Can\'t believe you left us now I sit an write these letters\n' +
    'And I\'d be lying if I told you I was doing better\n' +
    'Feels like my heart got torn apart and thrown into a blender\n' +
    'And will we ever get to meet again yeah probably never\n' +
    'And it feels like just the other day we were chillin\'\n' +
    'But nowadays depression and the pills they do the killin\'\n' +
    'Cause once we graduate from school we dont know how we\'re living\n' +
    'And then we\'re drinking prolly cuz of someone that we\'re missing\n' +
    'Chorus\n' +
    '\n' +
    'I didn\'t think I\'d have to make a song about this twice\n' +
    'But every year i\'m losing people its not sitting right\n' +
    'So I sit and write I think about you every night\n' +
    'I hope you landed in the clouds maybe somewhere bright\n' +
    'Lifes so unexpected hate that i\'m so disconnected\n' +
    'It took me months to know you passed I act so unaffected\n' +
    'I walk a lonely road and never do I have directions\n' +
    'My anxiety gon\' kill me for my imperfections',
}, {
  id: 9,
  album: 'Interstellar',
  thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIpCBrR-Wi5xcZRqAhc7EK3Twxq6ZN1uIljA&usqp=CAU',
  author: 'Hans Zimmer',
  name: 'Interstellar Theme',
  year: 2013,
  duration: '4:44',
  genre: 'Classical music',
  videoURL: 'https://www.youtube.com/watch?v=AZ2p1dWiFu8',
  lyrics: '',
}, {
  id: 10,
  album: 'Interstellar',
  thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIpCBrR-Wi5xcZRqAhc7EK3Twxq6ZN1uIljA&usqp=CAU',
  author: 'Hans Zimmer',
  name: 'Time',
  year: 2013,
  duration: '5:10',
  genre: 'Classical music',
  videoURL: 'https://www.youtube.com/watch?v=va1oiojnGrA',
  lyrics: '',
}, {
  id: 11,
  album: 'In A Time Lapse',
  thumbnail: 'https://ludovicoeinaudi.com/wp-content/uploads/2016/03/RAY_2207-Edit-3.jpg',
  author: 'Ludovico Einaudi',
  name: 'Experience',
  year: 2014,
  duration: '6:22',
  genre: 'Classical music',
  videoURL: 'https://www.youtube.com/watch?v=hN_q-_nGv4U',
  lyrics: '',
}, {
  id: 12,
  album: 'In A Time Lapse',
  thumbnail: 'https://ludovicoeinaudi.com/wp-content/uploads/2016/03/RAY_2207-Edit-3.jpg',
  author: 'Ludovico Einaudi',
  name: 'Una Mattina',
  year: 2014,
  duration: '6:42',
  genre: 'Classical music',
  videoURL: 'https://www.youtube.com/watch?v=MPlkHxFA-Qg',
  lyrics: '',
}, {
  id: 13,
  album: 'Circles',
  thumbnail: 'https://images.squarespace-cdn.com/content/v1/55a74a5de4b05c6541fb93a9/1604531905781-LWOI6DFCYSYCRUKXY1FW/Captura+de+Pantalla+2020-11-04+a+la%28s%29+4.18.02+p.+m..png',
  author: 'Mac Miller',
  name: 'Good News',
  year: 2020,
  duration: '6:37',
  genre: 'Hip-Hop',
  videoURL: 'https://www.youtube.com/watch?v=aIHF7u9Wwiw',
  lyrics: '[Verse 1]\n' +
    'I spent the whole day in my head\n' +
    'Do a little spring cleanin\'\n' +
    'I\'m always too busy dreamin\'\n' +
    'Well, maybe I should wake up instead\n' +
    'A lot of things I regret, but I just say I forget\n' +
    'Why can\'t it just be easy?\n' +
    'Why does everybody need me to stay?\n' +
    'Oh, I hate the feelin\'\n' +
    'When you\'re high, but you\'re underneath the ceilin\'\n' +
    'Got the cards in my hand, I hate dealin\', yeah\n' +
    'Get everything I need, then I\'m gone, but it ain\'t stealin\'\n' +
    'Can I get a break?\n' +
    'I wish that I could just get out my goddamn way\n' +
    'What is there to say?\n' +
    'There ain\'t a better time than today\n' +
    'Well, maybe I\'ll lay down for a little, yeah\n' +
    'Instead of always tryin\' to figure everything out\n' +
    'And all I do is say sorry\n' +
    'Half the time I don\'t even know what I\'m sayin\' it about\n' +
    '[Chorus]\n' +
    'Good news, good news, good news\n' +
    'That\'s all they wanna hear\n' +
    'No, they don\'t like it when I\'m down\n' +
    'But when I\'m flyin\', oh\n' +
    'It make \'em so uncomfortable\n' +
    'So different, what\'s the difference?\n' +
    '\n' +
    '[Verse 2]\n' +
    'When it ain\'t that bad\n' +
    'It could always be worse\n' +
    'I\'m runnin\' out of gas, hardly anything left\n' +
    'Hope I make it home from work\n' +
    'Well, so tired of bein\' so tired\n' +
    'Why I gotta build somethin\' beautiful just to go set it on fire?\n' +
    'I\'m no liar, but\n' +
    'Sometimes the truth don\'t sound like the truth\n' +
    'Maybe \'cause it ain\'t\n' +
    'I just love the way it sound when I say it, yeah\n' +
    'It\'s what I do\n' +
    'If you know me, it ain\'t anything new\n' +
    'Wake up to the moon, haven\'t seen the sun in a while\n' +
    'But I heard that the sky\'s still blue, yeah\n' +
    'I heard they don\'t talk about me too much no more\n' +
    'And that\'s the problem with a closed door\n' +
    '[Chorus]\n' +
    'Good news, good news, good news\n' +
    'That\'s all they wanna hear\n' +
    'No, they don\'t like it when I\'m down\n' +
    'But when I\'m flyin\', oh\n' +
    'It make \'em so uncomfortable\n' +
    'So different, what\'s the difference?',
}, {
  id: 14,
  album: 'The Search',
  thumbnail: 'https://www.crownnote.com/sites/default/files/nf_1.jpg',
  author: 'NF',
  name: 'When I Grow Up',
  year: 2019,
  duration: '4:00',
  genre: 'Rap',
  videoURL: 'https://www.youtube.com/watch?v=lxRwEPvL-mQ',
  lyrics: '[Verse 1]\n' +
    'Yeah, when I grow up, you know what I wanna be?\n' +
    'Take a seat, let me tell you my ridiculous dreams\n' +
    'I wanna rap, yeah, I know it\'s hard to believe\n' +
    'And I can tell you\'re already thinkin\' I will never succeed\n' +
    'But I\'m okay with it, I admit the lyrics are weak\n' +
    'I\'ve been workin\' on \'em, I\'ll be good eventually\n' +
    'I understand you gotta crawl before you get to your feet\n' +
    'But I been running for a while, they ain\'t ready for me, ahh\n' +
    'I know this prolly isn\'t really realistic\n' +
    'And honestly, I might not ever make a difference\n' +
    'But that don\'t make a difference, I\'ma have to risk it\n' +
    'I\'ve been crunchin\' numbers, you ain\'t gotta be a mathematician\n' +
    'To see the odds ain\'t rootin\' for me\n' +
    'I can\'t lie though, it\'s kinda how I like it to be\n' +
    'The underdog, yeah, you prolly think you know what I mean\n' +
    'But what I\'m saying is they ever push me, I\'m gonna swing, yeah\n' +
    'I could go to college, get in debt like everybody else\n' +
    'Graduate and prolly get a job that doesn\'t pay the bills\n' +
    'That don\'t make a lot of sense to me, forget the Happy Meals\n' +
    'I don\'t like the dollar menu, I would rather make a meal\n' +
    'Huh? Make a mil\'? Nah, I said make a meal\n' +
    'Home-cookin\', get the grill, how you want it? Pretty well?\n' +
    'Everything I see is overdone to me, I\'m not Adele\n' +
    'But I\'ma get a record deal and say hello to mass appeal\n' +
    '[Chorus]\n' +
    'When I grow up, I just want to pay my bills\n' +
    'Rappin\' about the way I feel (Oh, yeah)\n' +
    'I just want to make a couple mil\'\n' +
    'Leave it to the fam in the will (Oh, yeah)\n' +
    'I just want to sign a record deal\n' +
    'Maybe buy a house up in the hills (Oh, yeah)\n' +
    'Might not be the best in my field\n' +
    'But I guarantee that I\'ma die real\n' +
    'When I grow up\n' +
    '\n' +
    '[Post-Chorus]\n' +
    'Yeah, ayy\n' +
    'When I grow up\n' +
    'Yeah, yeah, ayy [Verse 2]\n' +
    'I\'ma make \'em notice me, rhymin\' like it\'s poetry\n' +
    'Everything I oversee, I just like to overthink\n' +
    'Mockin\' me, you pay the fee, no return and no receipts\n' +
    'Those of you that don\'t believe, quiet, you don\'t know a thing\n' +
    'Quiet when I\'m tryna sing, quiet when I\'m making beats\n' +
    'Quiet when I\'m tryna think, sorry, I don\'t mean to scream\n' +
    'I just feel like no one really gets me and it\'s sad to see\n' +
    '\'Cause someday I\'ma grow up and show all of you it\'s meant to be (Yeah)\n' +
    'Anybody wanna hear me rap? "No"\n' +
    'Come on, let me play a couple tracks, "No"\n' +
    'Come on, I can spit it really fast, "No"\n' +
    'You think I should throw this in the trash? "No"\n' +
    'Tricked ya; haters, go away before I hit ya\n' +
    'I am not a beggar or a kiss-up\n' +
    'You don\'t understand? Well, I forgive ya\n' +
    'I am not a quitter, you ain\'t really think that, did ya?\n' +
    'Maybe someday I could even be up on the radio\n' +
    'Have a tour bus and maybe even play a couple shows\n' +
    'Everybody in the crowd singing every word I wrote\n' +
    'Tellin\' me that I am not the only one that feels alone\n' +
    'Huh? You feel alone? Yeah, I kinda feel alone\n' +
    'Wonder if that feelin\' ever goes away when you get old\n' +
    'Will I ever make it as an artist? I don\'t really know\n' +
    'Might not make a lot of dough\n' +
    'I\'ma have to try it, though\n' +
    '[Chorus]\n' +
    'When I grow up\n' +
    'I just wanna pay my bills\n' +
    'Rappin\' about the way I feel (Oh, yeah)\n' +
    'I just wanna make a couple mil\'\n' +
    'Leave it to the fam in the will (Oh, yeah)\n' +
    '(Leave it to the fam in the will)\n' +
    '(Yeah, yeah, yeah, yeah)\n' +
    'I just wanna sign a record deal\n' +
    'Maybe buy a house up in the hills (Okay, oh, yeah)\n' +
    'Might not be the best in my field (Ayy, ayy, yeah)\n' +
    'But I guarantee that I\'ma die real\n' +
    'When I grow up\n' +
    'I just wanna pay my bills (Woo)\n' +
    'Rappin\' about the way I feel (Oh, yeah)\n' +
    '(Yeah, the way I feel)\n' +
    'Yeah, I just wanna make a couple mil\' (Ayy, couple mil\')\n' +
    'Leave it to the fam in the will (Oh, yeah, to the fam in the will)\n' +
    'I just wanna sign a record deal (Woo)\n' +
    'Maybe buy a house up in the hills (Oh, yeah)\n' +
    '(House up in the hills)\n' +
    'Yeah, I might not be the best in my field',
}, {
  id: 15,
  album: 'The Search',
  thumbnail: 'https://i1.sndcdn.com/artworks-CrzRYtHidUZD-0-t500x500.jpg',
  author: 'NF',
  name: 'Leave me alone',
  year: 2019,
  duration: '5:13',
  genre: 'Rap',
  videoURL: 'https://www.youtube.com/watch?v=XGGWhOUYObc',
  lyrics: '[Verse 1]\n' +
    'Panic-stricken, handle business, not a joke, yeah\n' +
    'Manners missin\', travel different, no control, yeah\n' +
    'Time to listen, time to zip it, keep it closed\n' +
    'My description, highly gifted, take some notes, yeah\n' +
    'Lack of interest, why\'d you visit? Hit the road, yeah\n' +
    'I\'m kinda twisted, so keep your distance, be a ghost\n' +
    'Yeah, see I\'m inventive, but quite the menace, you ain\'t know?\n' +
    'Well then I\'m offended, let\'s jog your memories, here we go, yeah\n' +
    'I went from nobody to kinda famous\n' +
    'Hide my plaques inside the closet, I just can\'t explain it\n' +
    'My wife, she tells me that she\'s proud and thinks that I should hang \'em\n' +
    'But I just leave \'em on the ground right next to my self-hatred\n' +
    'Yeah, yeah, mental health, where\'s my mental health?\n' +
    'Diagnosed with OCD, what does that mean? Well, gather \'round\n' +
    'That means I obsessively obsess on things I think about\n' +
    'That means I might take a normal thought and think it\'s so profound (Leave me alone)\n' +
    'Ruminating, fill balloons up full of doubts\n' +
    'Do the same things, if I don\'t, I\'m overwhelmed (Leave me alone)\n' +
    'Thoughts are pacing, they go \'round and \'round and \'round\n' +
    'It\'s so draining, let\'s move onto something else, fine (Oh) (Leave me alone)\n' +
    'Runnin\' the game, but they don\'t even know it\n' +
    'Like I\'m undercover and don\'t wanna blow it\n' +
    'I come out of nowhere, they don\'t even notice\n' +
    'The flow is so cold, you would think it was snowin\' (Oh) (Leave me alone)\n' +
    'I\'m under the weather, but wind isn\'t blowin\'\n' +
    'I got an umbrella for difficult moments\n' +
    'You got to admit it, I\'m very devoted\n' +
    'I\'m out in the rain, but it don\'t always open, so I (I, I)\n' +
    'Hold up my balloons and cover up my face\n' +
    'I can feel them weighin\' on me every day\n' +
    'I should let \'em go and watch \'em float away\n' +
    'But I\'m scared if I do, then I\'ll be more afraid (More afraid)\n' +
    'Tell them how I feel, but they don\'t wanna change (Don\'t wanna change)\n' +
    'Tell them how I feel, but they remain the same (Same)\n' +
    'Loosen up my grip, they say that\'s not okay [Verse 2]\n' +
    'I hate when they debate if we\'re underrated\n' +
    'We\'re so overlooked that they\'re lookin\' over our numbers, Nathan (Leave me alone)\n' +
    'We don\'t do enough interviews or go out in public lately\n' +
    'We don\'t post enough on our socials\n' +
    'To keep the buzz from fading (Leave me alone)\n' +
    'Let it fade, yeah, let it fade\n' +
    'Once it\'s decimated, then you drop a song outta nowhere\n' +
    'And all the fans embrace it (Leave me alone)\n' +
    'Then the buzz will surface again, it\'s part of my operation\n' +
    'I don\'t need advice from my doubts right now\n' +
    'End of conversation (Leave me alone)\n' +
    'Shut your mouth, yeah, shut your mouth\n' +
    'Better tone it down, close it now\n' +
    'If you make a sound, I\'ma change the dial (Leave me alone)\n' +
    'Funny how they be acting loud, comin\' unannounced\n' +
    'It\'s floating \'round\n' +
    'Man, the kid is wild, pretty vile, true (Leave me alone)\n' +
    'I\'m kinda funny but don\'t really show it\n' +
    'I keep it together but have a disorder\n' +
    'I go to my room and I sit in my corner\n' +
    'And talk to myself in a language that\'s foreign (Leave me alone)\n' +
    'I think of a rhyme and I have to record it\n' +
    'But know if I don\'t, I\'ll wake up in the mornin\'\n' +
    'And question my life again, always avoiding\n' +
    'I hate to be different, but hate to be normal, so I (Leave me alone)',
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
    lyrics: { type: GraphQLString },
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
