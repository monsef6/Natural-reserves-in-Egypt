
  require([
    "esri/config",
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/FeatureLayer",
    "esri/widgets/ScaleBar",
    "esri/widgets/Legend",
    "esri/widgets/Compass"

  ], function(esriConfig,Map, MapView, FeatureLayer,ScaleBar, Legend,Compass) {

 
    esriConfig.apiKey = "AAPKca36406a19614d6a8b993af9b63b1a5flfGDbfgddA5VWPVHDbriX0fFXbef7DAH6qkwZKCLv802m5Lq2o5RMsGQTamIw-OM";

  const map = new Map({
    basemap: "arcgis-topographic"
  });

  const view = new MapView({
    container: "viewDiv",
    map: map,
    center: [31,27],
    zoom: 6
  });

//Trailheads feature layer (points)
const trailheadsLayer = new FeatureLayer({
    
    url: "https://services7.arcgis.com/9GZ8sdnIZzY3N4EV/arcgis/rest/services/egypt/FeatureServer/1"
  });
  map.add(trailheadsLayer);
  const scalebar = new ScaleBar({
        view: view
      });
      view.ui.add(scalebar, "bottom-left");
      
      const legend = new Legend ({
        view: view
      });
      view.ui.add(legend, "bottom-right");
      
      let compass = new Compass({
        view: view
      });
      
      
      view.ui.add(compass, "top-right");

  });

  


  
 