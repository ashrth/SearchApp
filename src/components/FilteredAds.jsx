const FilteredAds=(props)=>{
const filteredAds= props.data
console.log(props)
return(
    filteredAds.length ? 
    filteredAds.length && filteredAds.map((item)=>
    <div className="card-deck col-sm-5 mb-3 card-space ">
  <div className="card">
    <img src="..." className="card-img-top" alt="image"></img>
    <div className="card-body">
      <h5 className="card-title">{item.name}</h5>
      <p className="card-text">{item.headline}</p>
      
    </div>
  </div>
</div>
      
     )
     :<h2>No Result Found</h2>
    )

}

export default FilteredAds