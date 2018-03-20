$(function () {

    let gaugeForMap = {};

    for (let i = 0; i < gaugeData.length; i++) {
        console.log(i);
        gaugeForMap[gaugeData[i].countryCode] = gaugeData[i].gauge + '';
    }

    const colorData = {
        "1676": "#a6522d",
        "1668": "#424fd6",
        "1524": "#7faf25",
        "1520": "#079011",
        "1435": "#81ba73",
        "1067": "#ffaf14",
        "1000": "#fdff52",
        "950": "#ffbeba",
        "760": "#ff82cb",
    };

    $('#world-map-gdp').vectorMap({
        map: 'world_mill',
        series: {
            regions: [{
                values: gaugeForMap,
                scale: colorData,
                normalizeFunction: 'polynomial'
            }]
        },
        onRegionTipShow: function (e, el, code) {
            el.html(`${el.html()} (Gauge: ${gaugeForMap[code]} mm.)`);
        }
    });
});


