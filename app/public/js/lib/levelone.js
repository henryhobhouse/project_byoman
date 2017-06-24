
var levelone = {
  tiles: [[140,40], [140,80], [140,120], [140, 160], [180,40], [180,80], [180, 120], [180,160], [220,40], [220,80], [220,120], [220,160], [260,40],
    [260,80], [260, 120], [260,160]],
  foodPos: [[-250,-310], [-230,-310],[-210,-310],[-190,-310],[-170,-310],[-150,-310],[-130,-310],[-110,-310],[-90,-310],[-70,-310],[-50,-310],[-30,-310], // TOP line Left
    [30,-310], [50,-310], [70,-310], [90,-310], [110,-310], [130,-310], [150,-310], [170,-310], [190,-310], [210,-310], [230,-310], [250,-310], // TOP line Right
    [-250,-290],[-250,-270],[-250,-250],[-250,-230],[-250,-210],[-250,-190],[-250,-170], // left most collumn
    [-150,-290],[-150,-270],[-150,-250],[-150,-230],[-150,-210],[-150,-190],[-150,-170],[-150,-150],[-150,-130],[-150,-110],[-150,-90],[-150,-70], //Large Second Column
    [-150,-50],[-150,-30],[-150,-10],[-150,10],[-150,30],[-150,50],[-150,70],[-150,90],[-150,110],[-150,130],[-150,150],[-150,170],[-150,190],//Large Second Column Cont
    [-230,-170],[-210,-170],[-190,-170],[-170,-170],[-90,-170],[-70,-170],[-50,-170],[-30,-170],[30,-170],[50,-170],[70,-170],[90,-170], // Upper Joiner Rows
    [170,-170], [190,-170],[210,-170],[230,-170],//Upper Joiner Rows Cont
    [-90,-190],[-90,-210],[90,-190],[90,-210], //Joiner Collumns
    [-230,-230],[-210,-230], [-190,-230], [-170,-230],[-130,-230], [-110,-230], [-90,-230], [-70,-230], [-50,-230], [-30,-230], [-10,-230], //Second Row
    [10,-230],[30,-230],[50,-230],[70,-230],[90,-230],[110,-230],[130,-230],[150,-230],[170,-230],[190,-230],[210,-230],[230,-230],[250,-230], //Second Row Cont
    [-30,-250],[-30,-270],[-30,-290],[30,-250],[30,-270],[30,-290], // Third Upper Right Short Row
    [150,-290], [150,-270],[150,-250],[150,-210],[150,-190],[150,-170],[150,-150],[150,-130],[150,-110],[150,-90],// Large Third Collumn
    [150,-70],[150,-50],[150,-30],[150,-10],[150,10],[150,30],[150,50],[150,70],[150,90],[150,110],[150,130],[150,150],[150,170],
    [150,190],// Large Third Collumn Cont
    [250,-290], [250,-270], [250,-250],[250,-230],[250,-210],[250,-190],[250,-170], // Right most collumn
    //BOTTOM HALF OF GRID
    [170,190],[190,190],[210,190],[230,190],[250,190],[250,210],[250,230],[210,170],[210,150],
    [-250,70],[-230,70],[-210,70],[-190,70],[-170,70], // Top Row
    [-250,90],[-250,110],[-250,130],[-250,190],[-250,210],[-250,230],[-250,250],[-230,190],//Left most collumn
    [-230,130],[-210,130],[-130,130],[-210,150],[-210,170],[-210,190], // Short Joiner Collumn left
    [-190,190],[-170,190],[-110,130],[-90,130],[-70,130],[-50,130],[-30,130],[-10,130],[10,130],[30,130],[50,130],[70,130],[90,130],
    [110,130],[130,130],[150,130],[210,130],[230,130],[250,130],[250,110],[250,90],[250,70],[230,70],[210,70],[190,70],[170,70],
    [130,70],[110,70],[90,70],[70,70],[50,70],[30,70],[-30,70],[-50,70],[-70,70],[-90,70],[-110,70],[-130,70],
    [-230,250],[-210,250],[-190,250],[-170,250],[-150,250],[-130,250],[-110,250],[-90,250],[-70,250],[-50,250],[-30,250],[-10,250],[10,250],[30,250],
    [50,250],[70,250],[90,250],[110,250],[130,250],[150,250],[170,250],[190,250],[210,250],[230,250],[250,250]], // Bottom Row
  wallPos: [[-250,-250], [-230,-250],[-210,-250]],
  pacmanPos: [100, 100],
  scorePos: [-260,-340]
};