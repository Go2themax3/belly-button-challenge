Overview
This interactive dashboard explores the Belly Button Biodiversity dataset, which catalogs microbes colonizing human navels, revealing insights into microbial species present in humans.

Repository Structure
belly-button-challenge
│   README.md
│   index.html
└───static
    ├───js
    │   │   app.js
    └───data
        │   samples.json

Instructions

Interactive Dashboard Development
Setup Repository: Clone the belly-button-challenge repo and copy the provided files into the local git repository.
Reading JSON File: Use the D3 library to read in samples.json from the provided URL.

Create Charts:
Develop a horizontal bar chart displaying the top 10 OTUs found in individuals, with sample_values as values, otu_ids as labels, and otu_labels as hovertext.

Develop a bubble chart to display each sample using otu_ids for the x-values, sample_values for y-values, marker size, and otu_labels for text values.

Display Metadata: Showcase an individual's demographic information, reflecting every key-value pair from the metadata JSON object on the page.

Dashboard Update: Ensure that all plots and metadata update when a new sample is selected.

Technologies

D3.js
Plotly.js
JavaScript
HTML
CSS
