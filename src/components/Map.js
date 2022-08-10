import * as d3 from 'd3'
import states from '../data/json/states-10m.json'
import * as globals from '../helpers/globals'
import { drawLand } from '../helpers/funcs'

function Map() {    

    const baseMap = states;
    const baseMapClass = 'map';

    const baseCanvas = d3
    .select(baseMapClass)
    .append('canvas')
    .attr('id', 'mapcanvas')
    .attr('width', globals.width)
    .attr('height', globals.height);

    const ctx = baseCanvas.node().getContext('2d');
    ctx.LineCap = 'round';

    const drawBaseMap = function draw_base_map(transform) {
        Promise.all(
          [d3.json(baseMap)]
        ).then(function(files) {
          globals.draw_land(ctx, files, transform, false, false);
        });
      };

    return(
        <>
            <h1>Map</h1>
            {baseCanvas}
            {drawBaseMap()}
        </>
        
    )
}

export default Map;