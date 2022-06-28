function MapOptionsItem({data}) {
    return (
        <>
            {data.map((item) => 
                    (
                        <>
                            <input type="checkbox" id={item.id} key={item.id}/>
                            <label for={item.id} key={item.id}>
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