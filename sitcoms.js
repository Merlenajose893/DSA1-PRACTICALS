const sitcoms = [
  { id: 1, name: "Friends", startYear: 1994, endYear: 2004, seasons: 10, episodes: 236, imdb: 8.9, network: "NBC" },
  { id: 2, name: "The Big Bang Theory", startYear: 2007, endYear: 2019, seasons: 12, episodes: 279, imdb: 8.1, network: "CBS" },
  { id: 3, name: "Seinfeld", startYear: 1989, endYear: 1998, seasons: 9, episodes: 180, imdb: 8.8, network: "NBC" },
  { id: 4, name: "The Office (US)", startYear: 2005, endYear: 2013, seasons: 9, episodes: 201, imdb: 8.9, network: "NBC" },
  { id: 5, name: "Parks and Recreation", startYear: 2009, endYear: 2015, seasons: 7, episodes: 125, imdb: 8.6, network: "NBC" },
  { id: 6, name: "Brooklyn Nine-Nine", startYear: 2013, endYear: 2021, seasons: 8, episodes: 153, imdb: 8.4, network: "NBC" },
  { id: 7, name: "How I Met Your Mother", startYear: 2005, endYear: 2014, seasons: 9, episodes: 208, imdb: 8.3, network: "CBS" },
  { id: 8, name: "Community", startYear: 2009, endYear: 2015, seasons: 6, episodes: 110, imdb: 8.5, network: "NBC" },
  { id: 9, name: "Modern Family", startYear: 2009, endYear: 2020, seasons: 11, episodes: 250, imdb: 8.4, network: "ABC" },
  { id: 10, name: "Frasier", startYear: 1993, endYear: 2004, seasons: 11, episodes: 264, imdb: 8.1, network: "NBC" }
];


// Create an array of sitcom names.

// Make an array of objects {name, seasons}.

// Create an array of strings like "Friends ran for 10 seasons".

// Make an array of objects {name, runYears} where runYears = endYear - startYear.

// Create an array of sitcom networks only.

// Make an array of IMDb ratings only.

// Create an array of sitcoms with a classic: true field for shows that ended before 2005.

// Generate an array of sitcoms with longRun: true if runYears > 10.

// Make an array of names with the first letter capitalized (already mostly capitalized, but assume lowercase input).

// Create an array of episode counts doubled.

const ans=sitcoms.filter(p=>p.network==="NBC" && p.episodes>200)
console.log(ans);

