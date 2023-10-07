// Define the data to be used for the chart
const data = [
  { country: "United States", population: 332 },
  { country: "China", population: 1444 },
  { country: "India", population: 1392 },
  { country: "Indonesia", population: 276 },
  { country: "Pakistan", population: 225 },
  { country: "Brazil", population: 213 },
  { country: "Nigeria", population: 211 },
  { country: "Bangladesh", population: 166 },
  { country: "Russia", population: 146 },
  { country: "Mexico", population: 130 },
  { country: "Venezuela", population: 28 },
];

// Define variables for the chart dimensions and scales
const margin = { top: 20, right: 20, bottom: 60, left: 60 };
const width = 800 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;

// Create a band scale for the x-axis
const x = d3
  .scaleBand()
  .domain(data.map((d) => d.country))
  .range([0, width])
  .padding(0.2);
