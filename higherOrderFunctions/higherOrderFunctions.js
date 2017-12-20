/*
	Resources :
		1. https://www.youtube.com/playlist?list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84
*/


// Example array to show the usages of each higher order function
const lolChampionLane = [
	{"name" : "Ahri", "lane": "mid", "spells": ["flash", "ignite"]},
	{"name" : "Syndra", "lane": "mid", "spells": ["flash", "ignite"]},
	{"name" : "Malphite", "lane": "top", "spells": ["flash", "ignite"]},
	{"name" : "Jhin", "lane": "adc", "spells": ["flash", "heal"]},
	{"name" : "Leona", "lane": "support", "spells": ["flash", "exhaust"]},
	{"name" : "Nocturne", "lane": "jungle", "spells": ["flash", "smite"]},
];

/*
	Filter() : transforms an array into something smaller given filter requirements

	Goal : grab all champions in the mid lane 
*/

let midChampions = lolChampionLane.filter(champ => champ.lane === 'mid');

/*
	Map() : Transforms an array into another array of same length, but with individual index values transformed

	Goal : create an array of all the champion names available
*/

let championNames = lolChampionLane.map(champ => champ.name);

/*
	Reduce() : the multi tool for list transformations. The reduce function takes in two parameters : (1) a callback with a prev and
	curr value, (2) an initial object 

	Goal: count the number of flash spells being used this game
*/
let flashCount = lolChampionLane.reduce((count, champ) => {
	return count + (champ.spells.includes("flash") ? 1 : 0);
}, 0);

