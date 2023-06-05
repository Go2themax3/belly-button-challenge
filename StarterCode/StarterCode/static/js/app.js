// Load the data from samples.json
d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json")
  .then(function(data) {

    var samples = data.samples;
    var names = data.names;

    // Populate the dropdown menu
    var dropdown = d3.select("#selDataset");
    dropdown.selectAll("option")
      .data(names)
      .enter()
      .append("option")
      .text(function(d) { return d; });

    function updateChart(sampleName) {
      var selectedSample = samples.find(function(sample) {
        return sample.id === sampleName;
      });

      // Get the top 10 OTUs
      var top10OTUs = selectedSample.otu_ids.slice(0, 10).map(function(otu) {
        return "OTU " + otu;
      });

      // Descending order
      var reversedSampleValues = selectedSample.sample_values.slice(0, 10).reverse();
      var reversedOTULabels = selectedSample.otu_labels.slice(0, 10).reverse();

      // Horizontal bar chart
      var trace = {
        x: reversedSampleValues,
        y: top10OTUs,
        text: reversedOTULabels,
        type: "bar",
        orientation: "h"
      };

      var data = [trace];

      var layout = {
        title: "Top 10 OTUs",
        xaxis: { title: "Sample Values" },
        yaxis: { title: "OTU IDs" }
      };

      Plotly.newPlot("bar", data, layout);
    }

    updateChart(names[0]);

    dropdown.on("change", function() {
      var selectedSample = dropdown.property("value");
      updateChart(selectedSample);
    });

    // Extract arrays 
    var xValues = [];
    var yValues = [];
    var markerSizes = [];
    var markerColors = [];
    var textValues = [];

    samples.forEach(function(sample) {
      xValues.push(sample.otu_ids);
      yValues.push(sample.sample_values);
      markerSizes.push(sample.sample_values);
      markerColors.push(sample.otu_ids);
      textValues.push(sample.otu_labels);
    });


    var traceBubble = {
      x: xValues.flat(),
      y: yValues.flat(),
      text: textValues.flat(),
      mode: 'markers',
      marker: {
        size: markerSizes.flat(),
        color: markerColors.flat(),
        colorscale: 'Viridis'
      }
    };

    var dataBubble = [traceBubble];

    var layoutBubble = {
      title: 'Bubble Chart',
      xaxis: { title: 'OTU IDs' },
      yaxis: { title: 'Sample Values' }
    };

    Plotly.newPlot('bubble', dataBubble, layoutBubble);
  })
  .catch(function(error) {
    console.error("Error loading the JSON file:", error);
  });



  updateDashboard(names[0]);

 
dropdown.on("change", function() {
    var selectedSample = dropdown.property("value");
    updateDashboard(selectedSample);
  });