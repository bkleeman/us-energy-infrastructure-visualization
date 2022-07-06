function MapOptionsItem({data}) {
    return (
        <>
            {data.map((item) => 
                    (
                        <>
                            <label key={item.id}>
                                <input type="checkbox" id={item.id} key={item.id}/>
                                {item.name}
                            </label>
                            <br/>    
                        </>  
                    )
                )
            }
        </>
    )
}

export default MapOptionsItem