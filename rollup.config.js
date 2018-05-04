export default {
    input: "index",
    external: ['d3-tip'],
    output: {
        extend: true,
        globals: {'d3-tip': 'd3'},
        file: "dist/d3-asterPlot.js",
        format: "umd",
        name: "d3"
    }
};
