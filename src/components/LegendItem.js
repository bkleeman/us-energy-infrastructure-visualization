import LegendItemIcon from "./LegendItemIcon";

function LegendItem({data}) {
    return (
        <>
            {data.map((item) => 
                (
                    <>
                        <span><LegendItemIcon/><span> {item.name}</span></span>
                        <br/>
                    </>
                ))}
            
        </>
        
    )
}

export default LegendItem;