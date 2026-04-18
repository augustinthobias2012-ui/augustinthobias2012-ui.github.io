function showCard(type){
    let content = "";

    if(type === "gis"){
        content = `
        <h2>GIS Analysis</h2>
        <ul>
        <li>Spatial overlay analysis</li>
        <li>Buffer & proximity analysis</li>
        <li>Suitability modeling</li>
        <li>Network analysis</li>
        <li>Cartographic map production</li>
        </ul>`;
    }

    if(type === "rs"){
        content = `
        <h2>Remote Sensing</h2>
        <ul>
        <li>Satellite image preprocessing</li>
        <li>LULC classification</li>
        <li>NDVI analysis</li>
        <li>LST mapping</li>
        <li>Change detection</li>
        </ul>`;
    }

    if(type === "photo"){
        content = `
        <h2>Photogrammetry</h2>
        <ul>
        <li>Drone image processing</li>
        <li>Orthomosaic generation</li>
        <li>DSM creation</li>
        <li>3D modelling</li>
        <li>Point cloud processing</li>
        </ul>`;
    }

    if(type === "prog"){
        content = `
        <h2>Programming</h2>
        <ul>
        <li>Python GIS automation</li>
        <li>Raster & vector processing</li>
        <li>Batch geoprocessing</li>
        <li>Spatial scripting</li>
        <li>API geospatial tools</li>
        </ul>`;
    }

    if(type === "db"){
        content = `
        <h2>Databases</h2>
        <ul>
        <li>PostGIS spatial databases</li>
        <li>Spatial SQL queries</li>
        <li>Data cleaning</li>
        <li>Database design</li>
        <li>Index optimization</li>
        </ul>`;
    }

    if(type === "web"){
        content = `
        <h2>Web Mapping</h2>
        <ul>
        <li>Leaflet / Mapbox apps</li>
        <li>GIS dashboards</li>
        <li>Web feature services</li>
        <li>Interactive maps</li>
        <li>Online visualization</li>
        </ul>`;
    }

    if(type === "welcome"){
        content = `
        <h2>Welcome</h2>
        <p>I am a geospatial professional transforming spatial data into actionable intelligence using modern geospatial technologies.</p>`;
    }

    document.getElementById("content").innerHTML = content;
    document.getElementById("panel").classList.add("active");
}

function closePanel(){
    document.getElementById("panel").classList.remove("active");
}
