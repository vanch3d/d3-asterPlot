/* global d3 */
export default function () {

    let chartWidth = 960;
    let chartHeight = 960;

    let radius = Math.min(chartWidth, chartHeight) / 2,
        innerRadius = 0.3 * radius;

    let pieFill = function(d) {
        return d.data.color;
    };

    let pieClass = function() {
        return null;
    };

    let score = function(data)
    {
        return data.reduce(
            function (a, b) {
                return a + (b.score * b.width);
            }
            , 0
        ) / data.reduce(
            function (a, b) {
                return a + b.width;
            }
            , 0
        );
    };

    function updateRadius()
    {
        radius = Math.min(chartWidth, chartHeight) / 2;
        innerRadius = 0.3 * radius;
    }

    function chart(selection) {

        //let tip = d3.tip()
        //    .attr('class', 'd3-tip')
        //    .offset([0, 0])
        //    .html(function(d) {
        //        return d.data.label + ": <span style='color:orangered'>" + d.data.score + "</span>";
        //    });

        selection.each(function (dataSet) {
            let pie = d3.pie()
                .sort(null)
                .value(function (d) {
                    return d.width;
                });

            let arc = d3.arc()
                .innerRadius(innerRadius)
                .outerRadius(function (d) {
                    return (radius - innerRadius) * (d.data.score / 100.0) + innerRadius;
                });

            let outlineArc = d3.arc()
                .innerRadius(innerRadius)
                .outerRadius(radius);

            let svg = d3.select(this).append("svg")
                .attr("width", chartWidth)
                .attr("height", chartHeight)
                .append("g")
                .attr("transform", "translate(" + chartWidth / 2 + "," + chartHeight / 2 + ")");

            //svg.call(tip);

            // path
            svg.selectAll(".solidArc")
                .data(pie(dataSet))
                .enter()
                .append("path")
                .attr("fill", pieFill)
                .attr("class", function(d){
                    let cls = "solidArc";
                    if (pieClass) cls += " " + pieClass(d);
                    return cls;
                })
                .attr("stroke", "gray")
                .attr("d", arc);
            //.on('mouseover', tip.show)
            //.on('mouseout', tip.hide);

            // outerpath
            svg.selectAll(".outlineArc")
                .data(pie(dataSet))
                .enter().append("path")
                .attr("fill", "none")
                .attr("stroke", "gray")
                .attr("class", "outlineArc")
                .attr("d", outlineArc);

            svg.append("svg:text")
                .attr("class", "aster-score")
                .attr("dy", ".35em")
                .attr("text-anchor", "middle") // text-align: right
                .text(Math.round(score(dataSet)));

        });
    }

    chart.width = function (value) {
        if (!arguments.length) return chartWidth;
        chartWidth = value;
        updateRadius();
        return chart;
    };

    chart.height = function (value) {
        if (!arguments.length) return chartHeight;
        chartHeight = value;
        updateRadius();
        return chart;
    };

    chart.pieFill = function(fct) {
        if (typeof (fct) !== 'function') throw new Error("Not a function");
        pieFill = fct || pieFill;
        return chart;
    };

    chart.pieClass = function(fct) {
        if (typeof (fct) !== 'function') throw new Error("Not a function");
        pieClass = fct || pieClass;
        return chart;
    };

    chart.score = function(fct) {
        if (typeof (fct) !== 'function') throw new Error("Not a function");
        score = fct || score;
        return chart;
    };

    return chart;
}
