//Animation Logic

let step = 0;

function openCard(card){
    step = 0;
    showContent(card);
}

function showContent(card){
    const data = {
        rs: [
            "Satellite image preprocessing",
            "LULC classification",
            "NDVI analysis",
            "LST mapping",
            "Change detection"
        ],
        gis: [
            "Spatial overlay analysis",
            "Buffer & proximity analysis",
            "Suitability modeling",
            "Network analysis",
            "Map production"
        ]
    };

    alert(card.toUpperCase() + "\n\n" + data[card].join("\n"));

    step++;

    if(step < 2){
        setTimeout(() => {
            if(confirm("Go to next category?")){
                alert("Next card opens...");
            } else {
                alert("Go to Sample Projects");
            }
        }, 500);
    }
}
