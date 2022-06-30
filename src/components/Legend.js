import LegendItem from './LegendItem';
import LegendRowHeader from './LegendRowHeader'

const naturalGasData = [
    {name: 'Gas wells'},
    {name: 'Foreign gas wells'},
    {name: 'Gas processing'},
    {name: 'Gas pipelines'},
]

const petroleumData = [
    {name: 'Oil wells'},
    {name: 'Oil & gas storage'},
    {name: 'Oil pipelines'},
    {name: 'Oil product pipelines'},
    {name: 'Foreign oil wells'},
    {name: 'Oil refineries'},
]

const powerPlantsData = [
    {name: 'Natural gas'},
    {name: 'Petroleum'},
    {name: 'Coal'},
    {name: 'Nuclear'},
    {name: 'Hydropower'},
    {name: 'Wind farms'},
    {name: 'Solar'},
    {name: 'Biofuel'},
    {name: 'Geothermal'},
]

const coalMineAndRrData = [
    {name: 'Coal mines'},
    {name: 'Railroads'}
]

const elecTransmissionData = [
    {name: 'Unknown'},
    {name: '< 100'},
    {name: '100-200'},
    {name: '200-300'},
    {name: '345'},
    {name: '500'},
    {name: '735'},
    {name: 'DC'},
]

const windCapacityData = [
    {name: '< 100'},
    {name: '100'},
    {name: '300'},
    {name: '345'},
    {name: '735'},
    {name: '100'},
    {name: '100'},
]

function Legend() {
    return (
        <>
            <h1>Legend</h1>
            <LegendRowHeader name={'Natural gas'}/>
            <LegendItem data={naturalGasData}/>
            <LegendRowHeader name={'Petroleum'}/>
            <LegendItem data={petroleumData}/>
            <LegendRowHeader name={'Power plants'}/>
            <LegendItem data={powerPlantsData}/>
            <br/>
            <LegendItem data={coalMineAndRrData} />
            <LegendRowHeader name={'Elec. transmission (AC kV or DC)'}/>
            <LegendItem data={elecTransmissionData} />
            <LegendRowHeader name={'Wind capacity (m/s)'}/>
            <LegendItem data={windCapacityData} />
        </>
        
    )
}

export default Legend;