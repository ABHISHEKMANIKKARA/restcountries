import './Filter.css';
let interval;
function Filter(props){
    
    function debounce(event){
        clearTimeout(interval)
        interval=setTimeout(()=>{props.filterBySearch(event)},300)
    }
    return(
        <div className="filterbar">
              <div className="row">
                        <div className="col-12 col-lg-8"><input placeholder="Search for country ..." type="text" id={props.mode?"searchdark":"searchlight"} name="search" onChange={debounce} /></div>
                        <div className="col-12 col-lg-4 mt-3">
                        <div class="dropdown">
                            <button class={props.mode?"btn btn-dark dropdown-toggle":"btn btn-light dropdown-toggle"} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                             Filter by Region
                            </button>
                            <div class={props.mode?"dropdown-menu dropdown-menu-dark":"dropdown-menu dropdown-menu-light"}aria-labelledby="dropdownMenuButton">
                               <a class="dropdown-item" onClick={()=>{props.filterByRegion("all")}} href="#">All</a>
                                <a class="dropdown-item" onClick={()=>{props.filterByRegion("africa")}} href="#">Africa</a>
                                <a class="dropdown-item" onClick={()=>{props.filterByRegion("americas")}} href="#">America</a>
                                <a class="dropdown-item" onClick={()=>{props.filterByRegion("asia")}} href="#">Asia</a>
                                <a class="dropdown-item" onClick={()=>{props.filterByRegion("europe")}} href="#">Europe</a>
                                <a class="dropdown-item" onClick={()=>{props.filterByRegion("oceania")}} href="#">Oceania</a>
                            </div>
                            </div>
                            </div>
                </div>
            </div>
    )
}
export default Filter;