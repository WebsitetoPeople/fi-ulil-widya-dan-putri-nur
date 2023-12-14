var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_pl2013_1 = new ol.format.GeoJSON();
var features_pl2013_1 = format_pl2013_1.readFeatures(json_pl2013_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pl2013_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pl2013_1.addFeatures(features_pl2013_1);
var lyr_pl2013_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pl2013_1, 
                style: style_pl2013_1,
                interactive: true,
    title: 'pl 2013<br />\
    <img src="styles/legend/pl2013_1_0.png" /> Balai Kota<br />\
    <img src="styles/legend/pl2013_1_1.png" /> Gedung Negara<br />\
    <img src="styles/legend/pl2013_1_2.png" /> Industri<br />\
    <img src="styles/legend/pl2013_1_3.png" /> Lahan Kosong<br />\
    <img src="styles/legend/pl2013_1_4.png" /> Monumen<br />\
    <img src="styles/legend/pl2013_1_5.png" /> Pemakaman<br />\
    <img src="styles/legend/pl2013_1_6.png" /> Pemkiman Tidak Tertata<br />\
    <img src="styles/legend/pl2013_1_7.png" /> Pemukiman Tidak Tertata<br />\
    <img src="styles/legend/pl2013_1_8.png" /> Penginapan<br />\
    <img src="styles/legend/pl2013_1_9.png" /> Peumikan Tertata<br />\
    <img src="styles/legend/pl2013_1_10.png" /> Pusat Perbelanjaan<br />\
    <img src="styles/legend/pl2013_1_11.png" /> Rumah Sakit <br />\
    <img src="styles/legend/pl2013_1_12.png" /> Sekolah<br />\
    <img src="styles/legend/pl2013_1_13.png" /> Stasiun kereta Api<br />'
        });
var format_jalan_2 = new ol.format.GeoJSON();
var features_jalan_2 = format_jalan_2.readFeatures(json_jalan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_2.addFeatures(features_jalan_2);
var lyr_jalan_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jalan_2, 
                style: style_jalan_2,
                interactive: true,
                title: '<img src="styles/legend/jalan_2.png" /> jalan'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_pl2013_1.setVisible(true);lyr_jalan_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_pl2013_1,lyr_jalan_2];
lyr_pl2013_1.set('fieldAliases', {'id': 'id', 'PL_2019': 'PL_2019', 'Luas': 'Luas', 'pl_19': 'pl_19', 'pl_23': 'pl_23', 'Keterangan': 'Keterangan', 'luas_1': 'luas_1', 'LUAS_2': 'LUAS_2', });
lyr_jalan_2.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_pl2013_1.set('fieldImages', {'id': 'TextEdit', 'PL_2019': 'TextEdit', 'Luas': 'TextEdit', 'pl_19': 'TextEdit', 'pl_23': 'TextEdit', 'Keterangan': 'TextEdit', 'luas_1': 'TextEdit', 'LUAS_2': 'TextEdit', });
lyr_jalan_2.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_pl2013_1.set('fieldLabels', {'id': 'inline label', 'PL_2019': 'inline label', 'Luas': 'inline label', 'pl_19': 'inline label', 'pl_23': 'inline label', 'Keterangan': 'inline label', 'luas_1': 'inline label', 'LUAS_2': 'inline label', });
lyr_jalan_2.set('fieldLabels', {'NAMRJL': 'inline label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_jalan_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});