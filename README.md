# d3-asterPlot

A d3-module (version 4) implementation of the Aster plot.

The Aster plot displays pie slices as lengths extending outward to the edge 
(0 at inner to 100 at outer). Widths of the pie slices represent the weight 
of each pie, which gets used to arrive at a weighted mean of the length scores 
in the center.

> TODO

The module has been created on the basis of Mike Bostock's [guidelines](https://bost.ocks.org/mike/d3-plugin/).
It is a refactoring of the [original work](http://bl.ocks.org/bbest/2de0e25d4840c68f2db1) created by 
Ben Best, Jim Regetz and Parker Abercrombie. 

## Installing

If you use NPM, `npm install d3-asterPlot`. Otherwise, download the [latest release](https://github.com/vanch3d/d3-asterPlot/releases/latest). 

## Usage

Make sure to include both d3 (version 4, not included) and the module, in this order.
```html
<script src="d3.min.js"></script>
<script src="/dist/d3-asterPlot.min.js"></script>
```

Check the [examples](https://github.com/vanch3d/d3-asterPlot/tree/master/examples) 
for mode detailed instructions.

## API Reference

<a href="#d3_asterPlot" name="d3_asterPlot">#</a> d3.<b>asterPlot</b>()

Constructs a new Aster Plot.
