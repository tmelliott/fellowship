import * as d3 from "d3";

// generate data from normal distribution
const data = d3.range(1000).map(d3.randomNormal(0, 1));

function makeHistogram(data: number[], bins: number) {
  const histogram = d3
    .bin()
    // .domain(d3.extent(data) as [number, number])
    .thresholds(bins);

  return histogram(data).map((d) => d.length);
}

export default function ShadedHistogram() {
  const hist = makeHistogram(data, 20);
  console.log(hist);

  return (
    <div className="size-96 bg-pink-50">
      <h1>ShadedHistogram</h1>
    </div>
  );
}
