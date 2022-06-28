import MapOptionsItem from "./MapOptionsItem"

const mapOptionsItems = [
    { name: 'Gas wells', id: 'gas-wells-cb' },
    { name: 'Oil wells', id: 'oil-wells-cb'},
    { name: 'Foreign oil wells', id: 'foreign-oil-wells-cb' },
    { name: 'Foreign gas wells', id: 'foreign-gas-wells-cb'},
    { name: 'Gas pipelines', id: 'gas-pipelines-cb' },
    { name: 'Oil pipelines', id: 'oil-pipelines-cb' },
    { name: 'Oil product pipelines', id: 'oil-product-pipelines-cb' },
    { name: 'Oil refineries', id: 'oil-refineries-cb' },
    { name: 'Gas processing', id: 'gas-processing-cb' },
    { name: 'Oil pipelines', id: 'oil-pipelines-cb' },
    { name: 'Oil & gas storage', id: 'oil-and-gas-storage-cb' },
    { name: 'Coal mines', id: 'coal-mines-cb' },
    { name: 'Coal plants', id: 'coal-plants-cb' },
    { name: 'Natural gas plants', id: 'natural-gas-plants-cb' },
    { name: 'Petroleum plants', id: 'petroleum-plants-cb' },
    { name: 'Nuclear plants', id: 'nuclear-plants-cb' },
    { name: 'Hydro power plants', id: 'hydro-power-plants-cb' },
    { name: 'Wind farms', id: 'wind-farms-cb' },
    { name: 'Solar PV', id: 'solar-pv-cb' },
    { name: 'Geo plants', id: 'geo-plants-cb' },
    { name: 'Biofuel', id: 'biofuel-cb' },
    { name: 'AC < 100 kV', id: 'ac-under-100kv-cb' },
    { name: 'AC 100-300 kV', id: 'ac-100-300kv-cb' },
    { name: 'AC 345-735 kV', id: 'ac-345-735kv-cb' },
    { name: 'DC 500-1000 kV', id: 'dc-500-1000kv-cb' },
    { name: 'Electricity dist.', id: 'electricity-dist-cb' },
    { name: 'State boundaries.', id: 'state-boundaries-cb' },
    { name: 'Wind capacity.', id: 'wind-capacity-cb' },
    { name: 'Railroads.', id: 'railroads-cb' },
]

function MapOptionsMenu() {
    return (
        <>
            <h2>Source</h2>
            <p>A Physical Inventory of the U.S. Energy System.<br/>
            Chen, Weisbach, Matteson, Brizius, Moyer, 2020.</p>
            <h1>Map options</h1>
            <MapOptionsItem 
                data={mapOptionsItems}
            />
        </>
        
    )
}

export default MapOptionsMenu