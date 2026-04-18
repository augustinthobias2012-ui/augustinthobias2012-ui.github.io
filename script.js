function show(type){

let content = "";

/* WELCOME */
if(type === "welcome"){
content = `
<div class="content-box">
<h2>Welcome</h2>
<p>I am a geospatial professional transforming spatial data into actionable intelligence using modern geospatial technologies.</p>
</div>

<div class="content-box">
<button onclick="show('projects')">View Sample Projects →</button>
</div>
`;
}

/* GIS */
if(type === "gis"){
content = `
<div class="content-box">
<h2>GIS Analysis</h2>
<ul>
<li>Spatial overlay analysis</li>
<li>Buffer & proximity analysis</li>
<li>Suitability modeling</li>
<li>Network analysis</li>
<li>Map production</li>
</ul>
</div>

<div class="content-box">
<button onclick="show('projects')">View Sample Projects →</button>
</div>
`;
}

/* RS */
if(type === "rs"){
content = `
<div class="content-box">
<h2>Remote Sensing</h2>
<ul>
<li>Satellite image processing</li>
<li>LULC classification</li>
<li>NDVI analysis</li>
<li>LST mapping</li>
<li>Change detection</li>
</ul>
</div>

<div class="content-box">
<button onclick="show('projects')">View Sample Projects →</button>
</div>
`;
}

/* PHOTO */
if(type === "photo"){
content = `
<div class="content-box">
<h2>Photogrammetry</h2>
<ul>
<li>Drone image processing</li>
<li>Orthomosaic generation</li>
<li>DSM creation</li>
<li>3D modelling</li>
<li>Point cloud processing</li>
</ul>
</div>

<div class="content-box">
<button onclick="show('projects')">View Sample Projects →</button>
</div>
`;
}

/* PROGRAMMING */
if(type === "prog"){
content = `
<div class="content-box">
<h2>Programming</h2>
<ul>
<li>Python GIS automation</li>
<li>Raster/vector processing</li>
<li>Batch geoprocessing</li>
<li>Spatial scripting</li>
<li>API integration</li>
</ul>
</div>

<div class="content-box">
<button onclick="show('projects')">View Sample Projects →</button>
</div>
`;
}

/* DATABASE */
if(type === "db"){
content = `
<div class="content-box">
<h2>Databases</h2>
<ul>
<li>PostGIS management</li>
<li>Spatial SQL queries</li>
<li>Data cleaning</li>
<li>Database design</li>
<li>Index optimization</li>
</ul>
</div>

<div class="content-box">
<button onclick="show('projects')">View Sample Projects →</button>
</div>
`;
}

/* WEB MAPPING */
if(type === "web"){
content = `
<div class="content-box">
<h2>Web Mapping</h2>
<ul>
<li>Leaflet/Mapbox apps</li>
<li>GIS dashboards</li>
<li>Web services (WMS/WFS)</li>
<li>Interactive maps</li>
<li>Online visualization</li>
</ul>
</div>

<div class="content-box">
<button onclick="show('projects')">View Sample Projects →</button>
</div>
`;
}

/* PROJECTS */
if(type === "projects"){
content = `
<div class="content-box">
<h2>Sample Projects</h2>
<ul>
<li>Urban Expansion Mapping</li>
<li>LULC Classification Project</li>
<li>Flood Risk Mapping</li>
<li>NDVI Vegetation Analysis</li>
<li>Web GIS Dashboard</li>
</ul>
</div>
`;
}

document.getElementById("content").innerHTML = content;
document.getElementById("panel").classList.add("active");
}

function closePanel(){
document.getElementById("panel").classList.remove("active");
}
