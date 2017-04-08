
var mvs = {
    "models": {
        "fourinarow": {
            "plazza": "true",
            "title-en": "Four In A Row",
            "module": "fourinarow",
            "js": [
                "fiarbase-model.js"
            ],
            "summary": "Four In A Row game",
            "thumbnail": "fiar-thumb.png",
            "rules": {
                "en": "rules.html",
                "fr": "rules-fr.html"
            },
            "description": {
                "en": "description.html",
                "fr": "description-fr.html"
            },
            "credits": {
                "en": "credits.html",
                "fr": "credits-fr.html"
            },
            "gameOptions": {
                "width": 7,
                "height": 6,
                "lines": 4,
                "remove": false,
                "levelOptions": {
                    "evalTuple1": 1,
                    "evalTuple2": 2,
                    "evalTuple3": 4,
                    "evalTuple4": 8,
                    "evalTuple5": 16,
                    "evalTuple6": 32
                },
                "uctTransposition": "state"
            },
            "levels": [
                {
                    "ai": "uct",
                    "playoutDepth": 0,
                    "minVisitsExpand": 1,
                    "c": 0.55,
                    "ignoreLeaf": false,
                    "name": "easy",
                    "label": "Easy",
                    "maxNodes": 1000,
                    "isDefault": true
                },
                {
                    "ai": "uct",
                    "playoutDepth": 0,
                    "minVisitsExpand": 1,
                    "c": 0.55,
                    "ignoreLeaf": false,
                    "name": "fast",
                    "label": "Fast [1sec]",
                    "maxDuration": 1
                },
                {
                    "ai": "uct",
                    "playoutDepth": 0,
                    "minVisitsExpand": 1,
                    "c": 0.55,
                    "ignoreLeaf": false,
                    "name": "strong",
                    "label": "Strong",
                    "maxNodes": 10000
                }
            ]
        },
        "fourinarow96": {
            "plazza": "true",
            "title-en": "Four In A Row 9x6",
            "module": "fourinarow",
            "js": [
                "fiarbase-model.js"
            ],
            "summary": "Four In A Row on a 9x6 board",
            "thumbnail": "fiar-thumb.png",
            "rules": {
                "en": "rules.html",
                "fr": "rules-fr.html"
            },
            "description": {
                "en": "description.html",
                "fr": "description-fr.html"
            },
            "credits": {
                "en": "credits.html",
                "fr": "credits-fr.html"
            },
            "gameOptions": {
                "width": 9,
                "height": 6,
                "lines": 4,
                "remove": false,
                "levelOptions": {
                    "evalTuple1": 1,
                    "evalTuple2": 2,
                    "evalTuple3": 4,
                    "evalTuple4": 8,
                    "evalTuple5": 16,
                    "evalTuple6": 32
                },
                "uctTransposition": "state"
            },
            "levels": [
                {
                    "ai": "uct",
                    "playoutDepth": 0,
                    "minVisitsExpand": 1,
                    "c": 0.55,
                    "ignoreLeaf": false,
                    "name": "easy",
                    "label": "Easy",
                    "maxNodes": 1000,
                    "isDefault": true
                },
                {
                    "ai": "uct",
                    "playoutDepth": 0,
                    "minVisitsExpand": 1,
                    "c": 0.55,
                    "ignoreLeaf": false,
                    "name": "fast",
                    "label": "Fast [1sec]",
                    "maxDuration": 1
                },
                {
                    "ai": "uct",
                    "playoutDepth": 0,
                    "minVisitsExpand": 1,
                    "c": 0.55,
                    "ignoreLeaf": false,
                    "name": "strong",
                    "label": "Strong",
                    "maxNodes": 10000
                }
            ]
        },
        "fiarpopout": {
            "plazza": "true",
            "title-en": "Popout",
            "module": "fourinarow",
            "js": [
                "fiarbase-model.js"
            ],
            "summary": "Four In A Row with removals",
            "thumbnail": "fiar-thumb.png",
            "rules": {
                "en": "rules.html",
                "fr": "rules-fr.html"
            },
            "description": {
                "en": "description.html",
                "fr": "description-fr.html"
            },
            "credits": {
                "en": "credits.html",
                "fr": "credits-fr.html"
            },
            "gameOptions": {
                "width": 7,
                "height": 6,
                "lines": 4,
                "remove": true,
                "levelOptions": {
                    "evalTuple1": 1,
                    "evalTuple2": 2,
                    "evalTuple3": 4,
                    "evalTuple4": 8,
                    "evalTuple5": 16,
                    "evalTuple6": 32
                },
                "uctTransposition": "state",
                "preventRepeat": true
            },
            "levels": [
                {
                    "ai": "uct",
                    "playoutDepth": 0,
                    "minVisitsExpand": 1,
                    "c": 0.55,
                    "ignoreLeaf": false,
                    "name": "easy",
                    "label": "Easy",
                    "maxNodes": 1000,
                    "isDefault": true
                },
                {
                    "ai": "uct",
                    "playoutDepth": 0,
                    "minVisitsExpand": 1,
                    "c": 0.55,
                    "ignoreLeaf": false,
                    "name": "fast",
                    "label": "Fast [1sec]",
                    "maxDuration": 1
                },
                {
                    "ai": "uct",
                    "playoutDepth": 0,
                    "minVisitsExpand": 1,
                    "c": 0.55,
                    "ignoreLeaf": false,
                    "name": "strong",
                    "label": "Strong",
                    "maxNodes": 10000
                }
            ]
        },
        "fiveinarow": {
            "plazza": "true",
            "title-en": "Five In A Row",
            "module": "fourinarow",
            "js": [
                "fiarbase-model.js"
            ],
            "summary": "Variant of Four In A Row",
            "thumbnail": "fiar-thumb.png",
            "rules": {
                "en": "rules.html",
                "fr": "rules-fr.html"
            },
            "description": {
                "en": "description.html",
                "fr": "description-fr.html"
            },
            "credits": {
                "en": "credits.html",
                "fr": "credits-fr.html"
            },
            "gameOptions": {
                "width": 9,
                "height": 6,
                "lines": 5,
                "remove": false,
                "levelOptions": {
                    "evalTuple1": 1,
                    "evalTuple2": 2,
                    "evalTuple3": 4,
                    "evalTuple4": 8,
                    "evalTuple5": 16,
                    "evalTuple6": 32
                },
                "uctTransposition": "state",
                "fillSides": true
            },
            "levels": [
                {
                    "ai": "uct",
                    "playoutDepth": 0,
                    "minVisitsExpand": 1,
                    "c": 0.55,
                    "ignoreLeaf": false,
                    "name": "easy",
                    "label": "Easy",
                    "maxNodes": 1000,
                    "isDefault": true
                },
                {
                    "ai": "uct",
                    "playoutDepth": 0,
                    "minVisitsExpand": 1,
                    "c": 0.55,
                    "ignoreLeaf": false,
                    "name": "fast",
                    "label": "Fast [1sec]",
                    "maxDuration": 1
                },
                {
                    "ai": "uct",
                    "playoutDepth": 0,
                    "minVisitsExpand": 1,
                    "c": 0.55,
                    "ignoreLeaf": false,
                    "name": "strong",
                    "label": "Strong",
                    "maxNodes": 10000
                }
            ]
        },
        "torus4": {
            "plazza": "true",
            "title-en": "Torus 4",
            "module": "fourinarow",
            "js": [
                "fiarbase-model.js"
            ],
            "summary": "Four In A Row on a cylinder",
            "thumbnail": "fiar-torus-thumb.png",
            "rules": {
                "en": "rules.html",
                "fr": "rules-fr.html"
            },
            "description": {
                "en": "description.html",
                "fr": "description-fr.html"
            },
            "credits": {
                "en": "credits.html",
                "fr": "credits-fr.html"
            },
            "gameOptions": {
                "width": 9,
                "height": 6,
                "lines": 4,
                "remove": false,
                "levelOptions": {
                    "evalTuple1": 1,
                    "evalTuple2": 2,
                    "evalTuple3": 4,
                    "evalTuple4": 8,
                    "evalTuple5": 16,
                    "evalTuple6": 32
                },
                "uctTransposition": "state",
                "torus": true
            },
            "levels": [
                {
                    "ai": "uct",
                    "playoutDepth": 0,
                    "minVisitsExpand": 1,
                    "c": 0.55,
                    "ignoreLeaf": false,
                    "name": "easy",
                    "label": "Easy",
                    "maxNodes": 1000,
                    "isDefault": true
                },
                {
                    "ai": "uct",
                    "playoutDepth": 0,
                    "minVisitsExpand": 1,
                    "c": 0.55,
                    "ignoreLeaf": false,
                    "name": "fast",
                    "label": "Fast [1sec]",
                    "maxDuration": 1
                },
                {
                    "ai": "uct",
                    "playoutDepth": 0,
                    "minVisitsExpand": 1,
                    "c": 0.55,
                    "ignoreLeaf": false,
                    "name": "strong",
                    "label": "Strong",
                    "maxNodes": 10000
                }
            ]
        }
    },
    "views": {
        "fourinarow": {
            "title-en": "Four In A Row View",
            "module": "fourinarow",
            "js": [
                "fiarbase-xd-view.js"
            ],
            "xdView": true,
            "css": [
                "fiarbase.css"
            ],
            "preferredRatio": 1,
            "useShowMoves": false,
            "useNotation": true,
            "sounds": {
                "sound1": "sound1",
                "sound2": "sound2"
            },
            "defaultOptions": {
                "sounds": true,
                "moves": true,
                "notation": false
            },
            "skins": [
                {
                    "name": "fiar3d",
                    "title": "3D Classic",
                    "3d": true,
                    "camera": {
                        "radius": 20,
                        "limitCamMoves": true,
                        "rotationAngle": 180,
                        "elevationAngle": 0,
                        "elevationMin": -89,
                        "elevationMax": 89,
                        "distMax": 30
                    },
                    "world": {
                        "lightIntensity": 0.2,
                        "skyLightIntensity": 0.2,
                        "lightCastShadow": false,
                        "fog": true,
                        "color": 0,
                        "lightPosition": {
                            "x": 10,
                            "y": 5,
                            "z": 0
                        },
                        "lightShadowDarkness": 0.55,
                        "ambientLightColor": 2236996
                    },
                    "preload": [
                        "map|/res/xd-view/meshes/connect4-red-star.png",
                        "map|/res/xd-view/meshes/connect4-red.png",
                        "map|/res/xd-view/meshes/connect4-yellow-star.png",
                        "map|/res/xd-view/meshes/connect4-yellow.png",
                        "smoothedfilegeo|0|/res/xd-view/meshes/connect4cell.js",
                        "smoothedfilegeo|0|/res/xd-view/meshes/connect4cell-ring-smoothed.js",
                        "smoothedfilegeo|0|/res/xd-view/meshes/connect4-token.js",
                        "smoothedfilegeo|0|/res/xd-view/meshes/connect4cell-foot.js"
                    ]
                },
                {
                    "name": "fiar2d",
                    "title": "2D Classic",
                    "3d": false,
                    "preload": [
                        "image|/res/sprites2d.png"
                    ]
                }
            ],
            "animateSelfMoves": false,
            "visuals": {
                "600x600": [
                    "res/visuals/fourinarow-600x600-3d.jpg",
                    "res/visuals/fourinarow-600x600-2d.jpg"
                ]
            }
        },
        "fourinarow96": {
            "title-en": "Four In A Row View",
            "module": "fourinarow",
            "js": [
                "fiarbase-xd-view.js"
            ],
            "xdView": true,
            "css": [
                "fiarbase.css"
            ],
            "preferredRatio": 1,
            "useShowMoves": false,
            "useNotation": true,
            "sounds": {
                "sound1": "sound1",
                "sound2": "sound2"
            },
            "defaultOptions": {
                "sounds": true,
                "moves": true,
                "notation": false
            },
            "skins": [
                {
                    "name": "fiar3d",
                    "title": "3D Classic",
                    "3d": true,
                    "camera": {
                        "radius": 20,
                        "limitCamMoves": true,
                        "rotationAngle": 180,
                        "elevationAngle": 0,
                        "elevationMin": -89,
                        "elevationMax": 89,
                        "distMax": 30
                    },
                    "world": {
                        "lightIntensity": 0.2,
                        "skyLightIntensity": 0.2,
                        "lightCastShadow": false,
                        "fog": true,
                        "color": 0,
                        "lightPosition": {
                            "x": 10,
                            "y": 5,
                            "z": 0
                        },
                        "lightShadowDarkness": 0.55,
                        "ambientLightColor": 2236996
                    },
                    "preload": [
                        "map|/res/xd-view/meshes/connect4-red-star.png",
                        "map|/res/xd-view/meshes/connect4-red.png",
                        "map|/res/xd-view/meshes/connect4-yellow-star.png",
                        "map|/res/xd-view/meshes/connect4-yellow.png",
                        "smoothedfilegeo|0|/res/xd-view/meshes/connect4cell.js",
                        "smoothedfilegeo|0|/res/xd-view/meshes/connect4cell-ring-smoothed.js",
                        "smoothedfilegeo|0|/res/xd-view/meshes/connect4-token.js",
                        "smoothedfilegeo|0|/res/xd-view/meshes/connect4cell-foot.js"
                    ]
                },
                {
                    "name": "fiar2d",
                    "title": "2D Classic",
                    "3d": false,
                    "preload": [
                        "image|/res/sprites2d.png"
                    ]
                }
            ],
            "animateSelfMoves": false,
            "visuals": {
                "600x600": [
                    "res/visuals/fourinarow-9x6-600x600-3d.jpg",
                    "res/visuals/fourinarow-9x6-600x600-2d.jpg"
                ]
            }
        },
        "fiarpopout": {
            "title-en": "Four In A Row View",
            "module": "fourinarow",
            "js": [
                "fiarbase-xd-view.js"
            ],
            "xdView": true,
            "css": [
                "fiarbase.css"
            ],
            "preferredRatio": 1,
            "useShowMoves": false,
            "useNotation": true,
            "sounds": {
                "sound1": "sound1",
                "sound2": "sound2"
            },
            "defaultOptions": {
                "sounds": true,
                "moves": true,
                "notation": false
            },
            "skins": [
                {
                    "name": "fiar3d",
                    "title": "3D Classic",
                    "3d": true,
                    "camera": {
                        "radius": 20,
                        "limitCamMoves": true,
                        "rotationAngle": 180,
                        "elevationAngle": 0,
                        "elevationMin": -89,
                        "elevationMax": 89,
                        "distMax": 30
                    },
                    "world": {
                        "lightIntensity": 0.2,
                        "skyLightIntensity": 0.2,
                        "lightCastShadow": false,
                        "fog": true,
                        "color": 0,
                        "lightPosition": {
                            "x": 10,
                            "y": 5,
                            "z": 0
                        },
                        "lightShadowDarkness": 0.55,
                        "ambientLightColor": 2236996
                    },
                    "preload": [
                        "map|/res/xd-view/meshes/connect4-red-star.png",
                        "map|/res/xd-view/meshes/connect4-red.png",
                        "map|/res/xd-view/meshes/connect4-yellow-star.png",
                        "map|/res/xd-view/meshes/connect4-yellow.png",
                        "smoothedfilegeo|0|/res/xd-view/meshes/connect4cell.js",
                        "smoothedfilegeo|0|/res/xd-view/meshes/connect4cell-ring-smoothed.js",
                        "smoothedfilegeo|0|/res/xd-view/meshes/connect4-token.js",
                        "smoothedfilegeo|0|/res/xd-view/meshes/connect4cell-foot.js"
                    ]
                },
                {
                    "name": "fiar2d",
                    "title": "2D Classic",
                    "3d": false,
                    "preload": [
                        "image|/res/sprites2d.png"
                    ]
                }
            ],
            "animateSelfMoves": false,
            "visuals": {
                "600x600": [
                    "res/visuals/popout-600x600-3d.jpg",
                    "res/visuals/popout-600x600-2d.jpg"
                ]
            }
        },
        "fiveinarow": {
            "title-en": "Four In A Row View",
            "module": "fourinarow",
            "js": [
                "fiarbase-xd-view.js"
            ],
            "xdView": true,
            "css": [
                "fiarbase.css"
            ],
            "preferredRatio": 1,
            "useShowMoves": false,
            "useNotation": true,
            "sounds": {
                "sound1": "sound1",
                "sound2": "sound2"
            },
            "defaultOptions": {
                "sounds": true,
                "moves": true,
                "notation": false
            },
            "skins": [
                {
                    "name": "fiar3d",
                    "title": "3D Classic",
                    "3d": true,
                    "camera": {
                        "radius": 20,
                        "limitCamMoves": true,
                        "rotationAngle": 180,
                        "elevationAngle": 0,
                        "elevationMin": -89,
                        "elevationMax": 89,
                        "distMax": 30
                    },
                    "world": {
                        "lightIntensity": 0.2,
                        "skyLightIntensity": 0.2,
                        "lightCastShadow": false,
                        "fog": true,
                        "color": 0,
                        "lightPosition": {
                            "x": 10,
                            "y": 5,
                            "z": 0
                        },
                        "lightShadowDarkness": 0.55,
                        "ambientLightColor": 2236996
                    },
                    "preload": [
                        "map|/res/xd-view/meshes/connect4-red-star.png",
                        "map|/res/xd-view/meshes/connect4-red.png",
                        "map|/res/xd-view/meshes/connect4-yellow-star.png",
                        "map|/res/xd-view/meshes/connect4-yellow.png",
                        "smoothedfilegeo|0|/res/xd-view/meshes/connect4cell.js",
                        "smoothedfilegeo|0|/res/xd-view/meshes/connect4cell-ring-smoothed.js",
                        "smoothedfilegeo|0|/res/xd-view/meshes/connect4-token.js",
                        "smoothedfilegeo|0|/res/xd-view/meshes/connect4cell-foot.js"
                    ]
                },
                {
                    "name": "fiar2d",
                    "title": "2D Classic",
                    "3d": false,
                    "preload": [
                        "image|/res/sprites2d.png"
                    ]
                }
            ],
            "animateSelfMoves": false,
            "visuals": {
                "600x600": [
                    "res/visuals/fiveinarow-600x600-3d.jpg",
                    "res/visuals/fiveinarow-600x600-2d.jpg"
                ]
            }
        },
        "torus4": {
            "title-en": "Four In A Row View",
            "module": "fourinarow",
            "js": [
                "fiarbase-xd-view.js"
            ],
            "xdView": true,
            "css": [
                "fiarbase.css"
            ],
            "preferredRatio": 1,
            "useShowMoves": false,
            "useNotation": true,
            "sounds": {
                "sound1": "sound1",
                "sound2": "sound2"
            },
            "defaultOptions": {
                "sounds": true,
                "moves": true,
                "notation": false
            },
            "skins": [
                {
                    "name": "fiar3d",
                    "title": "3D Classic",
                    "3d": true,
                    "camera": {
                        "radius": 20,
                        "limitCamMoves": true,
                        "rotationAngle": 180,
                        "elevationAngle": 0,
                        "elevationMin": -89,
                        "elevationMax": 89,
                        "distMax": 30
                    },
                    "world": {
                        "lightIntensity": 0.2,
                        "skyLightIntensity": 0.2,
                        "lightCastShadow": false,
                        "fog": true,
                        "color": 0,
                        "lightPosition": {
                            "x": 10,
                            "y": 5,
                            "z": 0
                        },
                        "lightShadowDarkness": 0.55,
                        "ambientLightColor": 2236996
                    },
                    "preload": [
                        "map|/res/xd-view/meshes/connect4-red-star.png",
                        "map|/res/xd-view/meshes/connect4-red.png",
                        "map|/res/xd-view/meshes/connect4-yellow-star.png",
                        "map|/res/xd-view/meshes/connect4-yellow.png",
                        "smoothedfilegeo|0|/res/xd-view/meshes/connect4cell.js",
                        "smoothedfilegeo|0|/res/xd-view/meshes/connect4cell-ring-smoothed.js",
                        "smoothedfilegeo|0|/res/xd-view/meshes/connect4-token.js",
                        "smoothedfilegeo|0|/res/xd-view/meshes/connect4cell-foot.js"
                    ]
                },
                {
                    "name": "fiar2d",
                    "title": "2D Classic",
                    "3d": false,
                    "preload": [
                        "image|/res/sprites2d.png"
                    ]
                }
            ],
            "animateSelfMoves": false,
            "visuals": {
                "600x600": [
                    "res/visuals/torus4-600x600-3d.jpg",
                    "res/visuals/torus4-600x600-2d.jpg"
                ]
            }
        }
    }
};

var games = {};

for(var name in mvs.models) {
    games[name] = {
        name: name,
        modelScripts: mvs.models[name].js,
        config: {
            status: true,
            model: mvs.models[name]
        }
    }
}

for(var name in mvs.views) {
    if(games[name]) {
        games[name].viewScripts = mvs.views[name].js;
        games[name].config.view = mvs.views[name];
    }
}

exports.games = Object.keys(games).map((name)=>{
    return games[name];
});
