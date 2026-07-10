var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_LatestNairobiRegionItinerary_1 = new ol.format.GeoJSON();
var features_LatestNairobiRegionItinerary_1 = format_LatestNairobiRegionItinerary_1.readFeatures(json_LatestNairobiRegionItinerary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LatestNairobiRegionItinerary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LatestNairobiRegionItinerary_1.addFeatures(features_LatestNairobiRegionItinerary_1);
var lyr_LatestNairobiRegionItinerary_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LatestNairobiRegionItinerary_1, 
                style: style_LatestNairobiRegionItinerary_1,
                popuplayertitle: 'Latest Nairobi Region Itinerary',
                interactive: true,
                title: '<img src="styles/legend/LatestNairobiRegionItinerary_1.png" /> Latest Nairobi Region Itinerary'
            });
var format_LPITIN_2 = new ol.format.GeoJSON();
var features_LPITIN_2 = format_LPITIN_2.readFeatures(json_LPITIN_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LPITIN_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LPITIN_2.addFeatures(features_LPITIN_2);
var lyr_LPITIN_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LPITIN_2, 
                style: style_LPITIN_2,
                popuplayertitle: 'LP ITIN',
                interactive: true,
                title: '<img src="styles/legend/LPITIN_2.png" /> LP ITIN'
            });
var format_Ipacsmapping_3 = new ol.format.GeoJSON();
var features_Ipacsmapping_3 = format_Ipacsmapping_3.readFeatures(json_Ipacsmapping_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ipacsmapping_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ipacsmapping_3.addFeatures(features_Ipacsmapping_3);
var lyr_Ipacsmapping_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ipacsmapping_3, 
                style: style_Ipacsmapping_3,
                popuplayertitle: 'Ip acs mapping',
                interactive: true,
    title: 'Ip acs mapping<br />\
    <img src="styles/legend/Ipacsmapping_3_0.png" /> COLLINS MAINA<br />\
    <img src="styles/legend/Ipacsmapping_3_1.png" /> Daniel Malel<br />\
    <img src="styles/legend/Ipacsmapping_3_2.png" /> David Kipkorir Kirui<br />\
    <img src="styles/legend/Ipacsmapping_3_3.png" /> DAVID NJARAMBA<br />\
    <img src="styles/legend/Ipacsmapping_3_4.png" /> Elijah<br />\
    <img src="styles/legend/Ipacsmapping_3_5.png" /> ELIZABETH WARINGA<br />\
    <img src="styles/legend/Ipacsmapping_3_6.png" /> Emilly Ndunge<br />\
    <img src="styles/legend/Ipacsmapping_3_7.png" /> Emmanuel Kuria Karatu<br />\
    <img src="styles/legend/Ipacsmapping_3_8.png" /> Esther Kiiru<br />\
    <img src="styles/legend/Ipacsmapping_3_9.png" /> FLORENCE SOMPOIKA<br />\
    <img src="styles/legend/Ipacsmapping_3_10.png" /> Gabriel Mwaka Mbithi<br />\
    <img src="styles/legend/Ipacsmapping_3_11.png" /> Gathimba<br />\
    <img src="styles/legend/Ipacsmapping_3_12.png" /> George<br />\
    <img src="styles/legend/Ipacsmapping_3_13.png" /> James<br />\
    <img src="styles/legend/Ipacsmapping_3_14.png" /> JANET ONGERA<br />\
    <img src="styles/legend/Ipacsmapping_3_15.png" /> JOHN MUGO<br />\
    <img src="styles/legend/Ipacsmapping_3_16.png" /> Joram<br />\
    <img src="styles/legend/Ipacsmapping_3_17.png" /> JOSEPH LIMO<br />\
    <img src="styles/legend/Ipacsmapping_3_18.png" /> Justus<br />\
    <img src="styles/legend/Ipacsmapping_3_19.png" /> JUSTUS MUGWE<br />\
    <img src="styles/legend/Ipacsmapping_3_20.png" /> Karanja<br />\
    <img src="styles/legend/Ipacsmapping_3_21.png" /> karatu<br />\
    <img src="styles/legend/Ipacsmapping_3_22.png" /> Karatu<br />\
    <img src="styles/legend/Ipacsmapping_3_23.png" /> KEEN PARTIMO<br />\
    <img src="styles/legend/Ipacsmapping_3_24.png" /> KENNETH OTUDE<br />\
    <img src="styles/legend/Ipacsmapping_3_25.png" /> Kevin Omondi Okuna<br />\
    <img src="styles/legend/Ipacsmapping_3_26.png" /> kirui<br />\
    <img src="styles/legend/Ipacsmapping_3_27.png" /> Kirui<br />\
    <img src="styles/legend/Ipacsmapping_3_28.png" /> KIRUI<br />\
    <img src="styles/legend/Ipacsmapping_3_29.png" /> Magdalene<br />\
    <img src="styles/legend/Ipacsmapping_3_30.png" /> Malel<br />\
    <img src="styles/legend/Ipacsmapping_3_31.png" /> Maurice Musakue<br />\
    <img src="styles/legend/Ipacsmapping_3_32.png" /> Mwaka<br />\
    <img src="styles/legend/Ipacsmapping_3_33.png" /> NASHON MANDE<br />\
    <img src="styles/legend/Ipacsmapping_3_34.png" /> Nyandiko<br />\
    <img src="styles/legend/Ipacsmapping_3_35.png" /> ONESMUS MWANGI<br />\
    <img src="styles/legend/Ipacsmapping_3_36.png" /> Oroko<br />\
    <img src="styles/legend/Ipacsmapping_3_37.png" /> Patrick<br />\
    <img src="styles/legend/Ipacsmapping_3_38.png" /> PATRICK MULWA<br />\
    <img src="styles/legend/Ipacsmapping_3_39.png" /> Peter<br />\
    <img src="styles/legend/Ipacsmapping_3_40.png" /> Rodgers Oroko<br />\
    <img src="styles/legend/Ipacsmapping_3_41.png" /> Samuel Weru<br />\
    <img src="styles/legend/Ipacsmapping_3_42.png" /> Thuo<br />\
    <img src="styles/legend/Ipacsmapping_3_43.png" /> Wesley Kirui<br />\
    <img src="styles/legend/Ipacsmapping_3_44.png" /> <br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_LatestNairobiRegionItinerary_1.setVisible(true);lyr_LPITIN_2.setVisible(true);lyr_Ipacsmapping_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_LatestNairobiRegionItinerary_1,lyr_LPITIN_2,lyr_Ipacsmapping_3];
lyr_LatestNairobiRegionItinerary_1.set('fieldAliases', {'FID': 'FID', 'Itins': 'Itins', 'Zone': 'Zone', 'Sector': 'Sector', 'County': 'County', 'Region': 'Region', 'Feeder': 'Feeder', });
lyr_LPITIN_2.set('fieldAliases', {'FID': 'FID', 'Itins': 'Itins', 'Zone': 'Zone', 'Sector': 'Sector', 'County': 'County', 'Region': 'Region', 'Feeder': 'Feeder', });
lyr_Ipacsmapping_3.set('fieldAliases', {'Region': 'Region', 'County': 'County', 'New Account No.': 'New Account No.', 'Old Account No.': 'Old Account No.', 'Meter No.': 'Meter No.', 'Customer Name': 'Customer Name', 'Tariff': 'Tariff', 'Contract Status': 'Contract Status', 'Route Ref': 'Route Ref', 'Responsible Staff': 'Responsible Staff', 'Liaison Officer': 'Liaison Officer', 'Y Coords': 'Y Coords', 'X Coords': 'X Coords', 'Recent Communication Time': 'Recent Communication Time', 'Communication Time Interval (DAYS)': 'Communication Time Interval (DAYS)', 'COMM STATUS': 'COMM STATUS', });
lyr_LatestNairobiRegionItinerary_1.set('fieldImages', {'FID': 'TextEdit', 'Itins': 'TextEdit', 'Zone': 'TextEdit', 'Sector': 'TextEdit', 'County': 'TextEdit', 'Region': 'TextEdit', 'Feeder': 'TextEdit', });
lyr_LPITIN_2.set('fieldImages', {'FID': '', 'Itins': '', 'Zone': '', 'Sector': '', 'County': '', 'Region': '', 'Feeder': '', });
lyr_Ipacsmapping_3.set('fieldImages', {'Region': 'TextEdit', 'County': 'TextEdit', 'New Account No.': 'Range', 'Old Account No.': 'Range', 'Meter No.': 'TextEdit', 'Customer Name': 'TextEdit', 'Tariff': 'TextEdit', 'Contract Status': 'TextEdit', 'Route Ref': 'TextEdit', 'Responsible Staff': 'TextEdit', 'Liaison Officer': 'TextEdit', 'Y Coords': 'TextEdit', 'X Coords': 'TextEdit', 'Recent Communication Time': 'TextEdit', 'Communication Time Interval (DAYS)': 'TextEdit', 'COMM STATUS': 'TextEdit', });
lyr_LatestNairobiRegionItinerary_1.set('fieldLabels', {'FID': 'no label', 'Itins': 'no label', 'Zone': 'no label', 'Sector': 'inline label - always visible', 'County': 'inline label - always visible', 'Region': 'no label', 'Feeder': 'no label', });
lyr_LPITIN_2.set('fieldLabels', {'FID': 'no label', 'Itins': 'no label', 'Zone': 'no label', 'Sector': 'inline label - always visible', 'County': 'inline label - always visible', 'Region': 'no label', 'Feeder': 'no label', });
lyr_Ipacsmapping_3.set('fieldLabels', {'Region': 'inline label - visible with data', 'County': 'inline label - always visible', 'New Account No.': 'no label', 'Old Account No.': 'no label', 'Meter No.': 'inline label - visible with data', 'Customer Name': 'no label', 'Tariff': 'no label', 'Contract Status': 'no label', 'Route Ref': 'inline label - always visible', 'Responsible Staff': 'inline label - always visible', 'Liaison Officer': 'no label', 'Y Coords': 'no label', 'X Coords': 'no label', 'Recent Communication Time': 'no label', 'Communication Time Interval (DAYS)': 'no label', 'COMM STATUS': 'no label', });
lyr_Ipacsmapping_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});