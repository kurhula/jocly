exports.config = {"status":true,"model":{"levels":[{"c":0.6,"name":"easy","playoutDepth":0,"maxNodes":1000,"uncertaintyFactor":3,"label":"Easy","ai":"uct","minVisitsExpand":1,"ignoreLeaf":false},{"uncertaintyFactor":3,"label":"Fast [1sec]","ignoreLeaf":false,"maxDuration":1,"ai":"uct","minVisitsExpand":1,"isDefault":true,"c":0.6,"name":"fast","playoutDepth":0},{"uncertaintyFactor":3,"maxNodes":10000,"ignoreLeaf":false,"ai":"uct","maxDuration":10,"minVisitsExpand":1,"label":"Medium","c":0.6,"playoutDepth":0,"name":"medium"},{"c":0.6,"playoutDepth":0,"name":"strong","maxNodes":20000,"uncertaintyFactor":3,"ai":"uct","maxDuration":15,"minVisitsExpand":1,"ignoreLeaf":false,"label":"Strong"}],"released":1398178578,"rules":{"en":"gardner-rules.html"},"credits":{"en":"gardner-credits.html"},"title-en":"Gardner MiniChess","obsolete":false,"summary":"Gardner 5x5 minichess (1969)","js":["base-model.js","grid-geo-model.js","gardner-model.js"],"description":{"en":"gardner-description.html"},"plazza":"true","module":"chessbase","gameOptions":{"preventRepeat":true,"uctTransposition":"state","uctIgnoreLoop":false,"levelOptions":{"pieceValueFactor":1,"checkFactor":0.2,"endingDistKingFactor":0.05,"posValueFactor":0.1,"minorPiecesMovedFactor":0.1,"pieceValueRatioFactor":1,"averageDistKingFactor":-0.01,"endingKingFreedomFactor":0.01,"distKingCornerFactor":0.1,"castleFactor":0.1}},"thumbnail":"gardner-thumb.png"},"view":{"defaultOptions":{"notation":false,"autocomplete":false,"moves":true,"sounds":true},"useAutoComplete":true,"useNotation":true,"switchable":true,"visuals":{"600x600":["res/visuals/gardner-600x600-3d.jpg","res/visuals/gardner-600x600-2d.jpg"]},"module":"chessbase","sounds":{"usermove":null,"move4":"alq_move2","tac3":"alq_tac1","tac1":"alq_tac1","move3":"alq_move3","move2":"alq_move2","tac2":"alq_tac2","move1":"alq_move1","promo":"promo"},"js":["base-view.js","grid-board-view.js","staunton-set-view.js","gardner-view.js"],"skins":[{"preload":["smoothedfilegeo|0|/res/ring-target.js","image|/res/images/cancel.png","image|/res/images/wikipedia.png","smoothedfilegeo|0|/res/staunton/pawn/pawn-classic.js","image|/res/staunton/pawn/pawn-diffusemap.jpg","image|/res/staunton/pawn/pawn-normalmap.jpg","smoothedfilegeo|0|/res/staunton/knight/knight.js","image|/res/staunton/knight/knight-diffusemap.jpg","image|/res/staunton/knight/knight-normalmap.jpg","smoothedfilegeo|0|/res/staunton/bishop/bishop.js","image|/res/staunton/bishop/bishop-diffusemap.jpg","image|/res/staunton/bishop/bishop-normalmap.jpg","smoothedfilegeo|0|/res/staunton/rook/rook.js","image|/res/staunton/rook/rook-diffusemap.jpg","image|/res/staunton/rook/rook-normalmap.jpg","smoothedfilegeo|0|/res/staunton/queen/queen.js","image|/res/staunton/queen/queen-diffusemap.jpg","image|/res/staunton/queen/queen-normalmap.jpg","smoothedfilegeo|0|/res/staunton/king/king.js","image|/res/staunton/king/king-diffusemap.jpg","image|/res/staunton/king/king-normalmap.jpg"],"world":{"lightPosition":{"z":9,"x":-9,"y":9},"lightIntensity":1.3,"skyLightPosition":{"z":9,"x":9,"y":9},"lightShadowDarkness":0.55,"fog":false,"ambientLightColor":2236962,"lightCastShadow":true,"skyLightIntensity":1.2,"color":4686804},"title":"3D Classic","camera":{"fov":45,"elevationAngle":60,"distMax":50,"elevationMin":0,"radius":18},"name":"skin3d","3d":true},{"preload":["image|/res/images/cancel.png","image|/res/images/whitebg.png","image|/res/images/wikipedia.png"],"title":"2D Classic","name":"skin2d","3d":false}],"title-en":"Chessbase view","useShowMoves":true,"css":["chessbase.css"],"xdView":true,"preferredRatio":1,"animateSelfMoves":false}}