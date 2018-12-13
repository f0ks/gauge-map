$(function () {

    let gaugeForMap = {};

    for (let i = 0; i < gaugeData.length; i++) {
        console.log(i);
        gaugeForMap[gaugeData[i].countryCode] = gaugeData[i].gauge + '';
    }

    const colorData = {
        "1676": "#bbdf94",
        "1668": "#83dc76",
        "1600": "#83dc76",
        "1524": "#305c31",
        "1520": "#305c31",
        "1435": "#568dd0",
        "1372": "#3e3d97",
        "1067": "#6a51b7",
        "1000": "#c55e8d",
        "914": "#e1392f",
        "762": "#ff82cb",
        "600": "#e5c4a1",
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
            el.html(`${el.html()} (${gaugeForMap[code]} mm.)`);
        }
    });
});

/*


@TODO
 - colours same as pic
 - pic hilight on hover

 - put result to codepen or something
 */


