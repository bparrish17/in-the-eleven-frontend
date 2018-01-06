
//Images
export const images = {
    bvbImage: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Borussia_Dortmund_logo.svg',
    hsvImage: 'https://i.eurosport.com/_iss_/sport/football/club/logo/small/4202.png',
    nufcImage: 'https://cdn.thenovinatorcloud.com/Production/newcastle/WebImages/badges/club/128x128/62.png',
    nyrbImage: 'https://78.media.tumblr.com/avatar_3c2a542f43c3_128.png',
    aufcImage: 'aufc.png',
    mcfcImage: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg',
    manuImage: 'manutd.png',
    wfcImage: 'watford.png',
    cfcImage: 'chelsea.png',
    efcImage: 'everton.png',
    afcImage: 'arsenal.png',
    lfcImage: 'liverpool.png',
    blkImage: 'bayerlev.png',
    s04Image: 'schalke04.png',
    bmunImage: 'bayern.png',
    blgmImage: 'https://upload.wikimedia.org/wikipedia/en/f/f5/Belgium_urbsfa.png'
}

//Matchday Players 
export const players = [
    { id: 1, name: 'Christian Pulisic', team: "Borussia Dortmund", teamImage: images.bvbImage, opp: 'Hertha Berlin', gametime: '9:30 AM', status: 'Starting' },
    { id: 2, name: 'Bobby Wood', team: "Hamburger SV", teamImage: images.hsvImage, opp: 'Bayern Munich', gametime: '12:30 PM', status: 'On Bench' }, 
    { id: 3, name: 'DeAndre Yedlin', team: "Newcastle United FC", teamImage: images.nufcImage, opp: 'Manchester City', gametime: '10:00 AM', status: 'Starting' },
    { id: 4, name: 'Jonjo Shelvey', team: "Newcastle United FC", teamImage: images.nufcImage, opp: 'Manchester City', gametime: '10:00 AM', status: 'Not in Lineup' },
    { id: 5, name: 'Christian Atsu', team: "Newcastle United FC", teamImage: images.nufcImage, opp: 'Manchester City', gametime: '10:00 AM', status: 'Starting' },
    { id: 6, name: 'Tyler Adams', team: "New York Red Bulls", teamImage: images.nyrbImage, opp: 'Columbus Crew', gametime: '8:30 PM', status: 'Not in Lineup'}
]

//League Players
export const leaguePlayers = [
    { id: 0, name: 'DeAndre Yedlin', team: "Newcastle United", clubImg: images.nufcImage, natImg: 'usmnt.png', goals: 0, assists: 2, teamId: 67 },
    { id: 1, name: 'Kevin De Bruyne', team: "Manchester City", clubImg: images.mcfcImage, natImg: images.blgmImage, goals: 12, assists: 9, teamId: 65 }
]

const getLineup = (team) => players.filter(player => player.team === team)

//Leagues
export const leagues = ['All Leagues', 'Premier League', 'Bundesliga', 'Serie A', 'Major League Soccer', 'Liga MX', 'Championship', 'Champions League', 'Europa League']

//Scroller Matches
export const matches = [
    {   id: 1,
        league: 'Bundesliga',
        home: { name: 'Dortmund', img: images.bvbImage, goals: 2, lineup: getLineup('Borussia Dortmund') },
        away: { name: 'Hamburg', img: images.hsvImage, goals: 1, lineup: getLineup('Hamburger SV') },
        played: true,
        time: 'FT'
    }, 
    {
        id: 2,
        league: 'Premier League',
        home: { name: 'Newcastle', img: images.nufcImage, goals: 0, lineup: getLineup('Newcastle United FC') },
        away: { name: 'Watford', img: images.wfcImage, goals: 0 },
        played: false,
        time: '10:00 am'
    },
    {
        id: 3,
        league: 'Major League Soccer',
        home: { name: 'NY Red Bulls', img: images.nyrbImage, goals: 2, lineup: getLineup('New York Red Bulls') },
        away: { name: 'Atlanta United', img: images.aufcImage, goals: 3 },
        played: false,
        time: '9:30 pm'
    },
    {
        id: 4,
        league: 'Premier League',
        home: { name: 'Manchester City', img: images.mcfcImage, goals: 0 },
        away: { name: 'Manchester Utd', img: images.manuImage, goals: 0 },
        played: false,
        time: '12:30 pm'
    },
    {
        id: 5,
        league: 'Premier League',
        home: { name: 'Arsenal', img: images.afcImage, goals: 1 },
        away: { name: 'Chelsea', img: images.cfcImage, goals: 4 },
        played: true,
        time: 'FT'
    },
    {
        id: 6,
        league: 'Premier League',
        home: { name: 'Everton', img: images.efcImage, goals: 2 },
        away: { name: 'Liverpool', img: images.lfcImage, goals: 2 },
        played: false,
        time: '9:45 am'
    },
    {
        id: 7,
        league: 'Bundesliga',
        home: { name: 'Schalke 04', img: images.s04Image, goals: 1 },
        away: { name: 'Bayern Munich', img: images.bmunImage, goals: 2 },
        played: false,
        time: '9:30 am'
    }
]
export const matchdayMatches = [
    { 
      id: 1,
      homeTeam: 'Borussia Dortmund', 
      awayTeam: 'Hamburger SV', 
      homeTeamImage: images.bvbImage,
      awayTeamImage: images.hsvImage,
      homeTeamLineup: getLineup('Borussia Dortmund'),
      awayTeamLineup: getLineup('Hamburger SV'),
      time: '9:30',
    },
    { 
      id: 2,
      homeTeam: 'Newcastle United', 
      awayTeam: 'Watford', 
      homeTeamImage: images.nufcImage,
      awayTeamImage: images.wfcImage,
      homeTeamLineup: getLineup('Newcastle United FC'),
      awayTeamLineup: getLineup('Watford'),
      time: '10:00',
    }
  ]