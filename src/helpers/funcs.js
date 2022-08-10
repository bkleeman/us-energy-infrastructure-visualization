import * as globals from './globals.js'
import * as d3 from 'd3'

const drawLand = function draw_land(ctx, queued_data,
    transform,
    border_only,
    simple) {
    ctx.save()
    ctx.clearRect(0,0, globals.width, globals.height);
    d3.path.context(ctx);
    let output_geojson;

    if (simple) {
    // If simple is True, we're looking only for a low res map so return
    // simple_map_bkgd. This is used for pan/zoom.
    output_geojson = globals.simple_map_bkgd;
    } else {
    let presimplified_data = queued_data[0];

    // Scale map detail based on zoom level
    output_geojson = d3.feature(
    queued_data[0].objects.nation)

    // If no simple_map_bkgd object exists, make a low resolution
    // map to us as simple_map_bkgd
    if (!globals.simple_map_bkgd) {
    globals.simple_map_bkgd = d3.feature(
    queued_data[0].objects.nation);
    }
    }

    if (!border_only) {

    // Land boundaries fill
    ctx.fillStyle = globals.viz.map.fill;
    ctx.beginPath();
    d3.path(output_geojson);
    ctx.fill();
    } else {
    ctx.strokeStyle = globals.viz.map.stroke;
    ctx.lineWidth = globals.viz.map.width;
    ctx.beginPath();
    d3.path(output_geojson);
    ctx.stroke();
    }

    ctx.restore();

};