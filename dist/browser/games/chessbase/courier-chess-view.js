exports.view=View={Game:{},Board:{},Move:{}},function(){var e,a,i;View.Game.cbTargetMesh="/res/ring-target.js",View.Game.cbTargetSelectColor=16777215,View.Game.cbTargetCancelColor=16746496,View.Game.cbPromoSize=2e3,View.Game.xdInit=function(i){this.g.fullPath=this.mViewOptions.fullPath,this.cbPieceByType={},e=this.cbVar,a=this.cbDefineView(),this.cbView=a,this.cbClearPieces(),this.cbCreateLights(i),this.cbCreateScreens(i),this.cbCreateBoard(i),this.cbCreatePromo(i),this.cbCreatePieces(i),this.cbCreateCells(i)},View.Game.cbMakeDummyMesh=function(e){return"undefined"!=typeof THREE?new THREE.Mesh(new THREE.CubeGeometry(1e-4,1e-4,1e-4),new THREE.MeshLambertMaterial):null},View.Game.cbCurrentGame=function(){return i},View.Game.cbCreatePieces=function(e){for(var a=this.cbMakeDummyMesh(e),i=0;i<this.cbPiecesCount;i++)e.createGadget("piece#"+i,{base:{},"2d":{type:"sprite"},"3d":{type:"custommesh3d",create:function(e,i,t){return a}}})},View.Game.cbCreateBoard=function(e){var a=this.cbMakeDummyMesh(e);e.createGadget("board",{base:{},"2d":{type:"canvas",width:12e3,height:12e3,draw:function(e){console.warn("board draw must be overridden")}},"3d":{type:"custommesh3d",receiveShadow:!0,create:function(e,i,t){return a}}})},View.Game.cbCreateCells=function(e){for(var a=this,i=0;i<this.g.boardSize;i++)!function(i){e.createGadget("cell#"+i,{"2d":{z:101,type:"element",initialClasses:a.cbCellClass(e,i),width:1300,height:1300}}),e.createGadget("clicker#"+i,$.extend(!0,{"2d":{z:103,type:"element",initialClasses:"cb-clicker"},"3d":{type:"meshfile",file:a.g.fullPath+a.cbTargetMesh,flatShading:!0,castShadow:!0,smooth:0,scale:[.9,.9,.9],materials:{square:{transparent:!0,opacity:0},ring:{color:a.cbTargetSelectColor,opacity:1}}}},a.cbView.clicker))}(i)},View.Game.cbCreatePromo=function(e){e.createGadget("promo-board",{base:{type:"element",x:0,y:0,width:2e3,height:2e3,z:108,css:{"background-color":"White"}}}),e.createGadget("promo-cancel",{base:{type:"image",file:this.g.fullPath+"/res/images/cancel.png",x:0,y:0,width:800,height:800,z:109}});for(var a=0;a<this.g.pTypes.length;a++)e.createGadget("promo#"+a,{base:{y:0,z:109,type:"sprite",clipwidth:100,clipheight:100,width:1200,height:1200}})},View.Game.xdBuildScene=function(t){i=this,e=this.cbVar,a=this.cbDefineView(),this.cbView=a;for(var c=0;c<this.cbExtraLights.length;c++)t.updateGadget("extralights#"+c,{"3d":{visible:!0}});t.updateGadget("board",$.extend({base:{visible:!0}},this.cbView.board));for(var r=0;r<this.g.boardSize;r++)!function(e){var a=i.cbMakeDisplaySpec(e,0),c=$.extend(!0,{},a,{base:{visible:!0}},i.cbView.clicker,i.cbView.cell);t.updateGadget("cell#"+e,c),$.extend(!0,a,i.cbView.clicker),t.updateGadget("clicker#"+e,a)}(r);t.updateGadget("videoa",{"3d":{visible:!0,playerSide:1,z:3e3,y:1==this.mViewAs?1e4:-1e4,rotate:1==this.mViewAs?-180:-0,rotateX:1==this.mViewAs?25:-25,scale:[3,3,3]}}),t.updateGadget("videoabis",{"3d":{visible:!0,playerSide:-1,z:1500,x:1==this.mViewAs?-5500:5500,y:1==this.mViewAs?8900:-8900,rotate:1==this.mViewAs?-180:-0,rotateX:1==this.mViewAs?25:-25,scale:[.75,.75,.75]}}),t.updateGadget("videob",{"3d":{visible:!0,playerSide:-1,z:3e3,y:1==this.mViewAs?-1e4:1e4,rotate:1==this.mViewAs?-0:-180,rotateX:1==this.mViewAs?-25:25,scale:[3,3,3]}}),t.updateGadget("videobbis",{"3d":{visible:!0,playerSide:1,z:1500,x:1==this.mViewAs?5500:-5500,y:1==this.mViewAs?-8900:8900,rotate:1==this.mViewAs?-0:-180,rotateX:1==this.mViewAs?-25:25,scale:[.75,.75,.75]}}),t.updateGadget("promo-board",{base:{visible:!1}}),t.updateGadget("promo-cancel",{base:{visible:!1}});for(var c=0;c<this.g.pTypes.length;c++)t.updateGadget("promo#"+c,{base:{visible:!1}})},View.Game.cbDisplayBoardFn=function(e){var a=this;return function(t,c,r){var s=e.style+"_"+e.margins.x+"_"+e.margins.y+"_"+a.mNotation+"_"+a.mViewAs,n=this;s!=this._cbKey&&(this._cbKey=s,e.display.call(i,e,n,function(e){n.replaceMesh(e,c,r)}))}},View.Game.cbDrawBoardFn=function(e){return function(a){e.draw.call(i,e,this,a)}},View.Game.cbMakeDisplaySpec=function(e,a){var i={};for(var t in this.cbView.coords){var c=this.cbView.coords[t],r=c.call(this,e);i[t]={x:r.x||0,y:r.y||0,z:r.z||0,rotateX:r.rx||0,rotateY:(r.ry||0)*("3d"==t?this.mViewAs*a<0?-1:1:0),rotate:(r.rz||0)+("3d"==t&&this.mViewAs*a<0?180:0)}}return i},View.Game.cbMakeDisplaySpecForPiece=function(i,t,c){function r(e,a,i){return a?$.extend(!0,e,a.default,a[i]):{}}var s=this.cbMakeDisplaySpec(t,c.s);if(void 0===e.pieceTypes[c.t])return void console.warn("Piece type",c.t,"not defined in model");var n=e.pieceTypes[c.t].aspect||e.pieceTypes[c.t].name;return n?(a.pieces&&(s=r(s,a.pieces,n),a.pieces[c.s]&&(s=r(s,a.pieces[c.s],n))),s):void console.warn("Piece type",c.t,"has no aspect defined")},View.Board.xdDisplay=function(e,a){for(var i=0;i<this.pieces.length;i++){var t=this.pieces[i];if(t.p<0)e.updateGadget("piece#"+i,{base:{visible:!1}});else{var c=a.cbMakeDisplaySpecForPiece(a,t.p,t);c=$.extend(!0,{base:{visible:!0},"2d":{opacity:1},"3d":{positionEasingUpdate:null}},c),e.updateGadget("piece#"+i,c)}}for(;i<a.cbPiecesCount;i++)e.updateGadget("piece#"+i,{base:{visible:!1}})},View.Game.cbExtraLights=[{color:16777215,intensity:.8,position:[9,14,-9],props:{shadowCameraNear:10,shadowCameraFar:25,castShadow:!0,shadowMapWidth:2048,shadowMapHeight:2048}}],View.Game.cbCreateLights=function(e){for(var a=0;a<this.cbExtraLights.length;a++)!function(a,i){e.createGadget("extralights#"+i,{"3d":{type:"custommesh3d",create:function(e){var i=new THREE.SpotLight(a.color,a.intensity);i.shadow.camera.far=a.props.shadowCameraFar,i.shadow.camera.near=a.props.shadowCameraNear,i.shadow.mapSize.width=a.props.shadowMapWidth,i.shadow.mapSize.height=a.props.shadowMapHeight,i.position.set.apply(i.position,a.position);var t=new THREE.Mesh;t.add(i);var c=new THREE.Object3D;t.add(c),i.target=c,e(t)}}})}(this.cbExtraLights[a],a)},View.Game.cbCreateScreen=function(e){var a=new THREE.PlaneGeometry(4,3,1,1),i=new THREE.MeshPhongMaterial({color:16777215,map:e,shading:THREE.FlatShading,emissive:{r:1,g:1,b:1}}),t=new THREE.Mesh(a,i);return this.objectReady(t),null},View.Game.cbCreateScreens=function(e){var a=this;e.createGadget("videoa",{"3d":{type:"video3d",makeMesh:function(e){return a.cbCreateScreen.call(this,e)}}}),e.createGadget("videoabis",{"3d":{type:"video3d",makeMesh:function(e){return a.cbCreateScreen.call(this,e)}}}),e.createGadget("videob",{"3d":{type:"video3d",makeMesh:function(e){return a.cbCreateScreen.call(this,e)}}}),e.createGadget("videobbis",{"3d":{type:"video3d",makeMesh:function(e){return a.cbCreateScreen.call(this,e)}}})},View.Board.xdInput=function(a,i){function t(){a.updateGadget("promo-board",{base:{visible:!1}}),a.updateGadget("promo-cancel",{base:{visible:!1}})}return{initial:{f:null,t:null,pr:null},getActions:function(c,r){var s={};if(null==r.f)c.forEach(function(e){void 0===s[e.f]&&(s[e.f]={f:e.f,moves:[],click:["piece#"+this.board[e.f],"clicker#"+e.f],view:["clicker#"+e.f],highlight:function(t){a.updateGadget("cell#"+e.f,{"2d":{classes:"select"==t?"cb-cell-select":"cb-cell-cancel",opacity:i.mShowMoves||"cancel"==t?1:0}}),a.updateGadget("clicker#"+e.f,{"3d":{materials:{ring:{color:"select"==t?i.cbTargetSelectColor:i.cbTargetCancelColor,opacity:i.mShowMoves||"cancel"==t?1:0,transparent:!i.mShowMoves&&"cancel"!=t}},castShadow:i.mShowMoves||"cancel"==t}})},unhighlight:function(){a.updateGadget("cell#"+e.f,{"2d":{classes:""}})},validate:{f:e.f}}),s[e.f].moves.push(e)},this);else if(null==r.t)c.forEach(function(c){var r=void 0===c.cg?c.t:c.cg;void 0===s[r]&&(s[r]={t:c.t,moves:[],click:["piece#"+this.board[r],"clicker#"+r],view:["clicker#"+r],highlight:function(e){a.updateGadget("cell#"+r,{"2d":{classes:"select"==e?"cb-cell-select":"cb-cell-cancel",opacity:i.mShowMoves||"cancel"==e?1:0}}),a.updateGadget("clicker#"+r,{"3d":{materials:{ring:{color:"select"==e?i.cbTargetSelectColor:i.cbTargetCancelColor,opacity:i.mShowMoves||"cancel"==e?1:0,transparent:!i.mShowMoves&&"cancel"!=e}},castShadow:i.mShowMoves||"cancel"==e}})},unhighlight:function(e){a.updateGadget("cell#"+r,{"2d":{classes:""}})},validate:{t:c.t},execute:function(t){var r=this;this.cbAnimate(a,i,c,function(){var n=s[c.t].moves;n.length>1&&(a.updateGadget("promo-board",{base:{visible:!0,width:i.cbPromoSize*(n.length+1)}}),a.updateGadget("promo-cancel",{base:{visible:!0,x:n.length*i.cbPromoSize/2}}),n.forEach(function(t,c){var r=e.pieceTypes[t.pr].aspect||e.pieceTypes[t.pr].name,s=$.extend(!0,{},i.cbView.pieces.default,i.cbView.pieces[r]);i.cbView.pieces[this.mWho]&&(s=$.extend(!0,s,i.cbView.pieces[this.mWho].default,i.cbView.pieces[this.mWho][r])),a.updateGadget("promo#"+t.pr,{base:$.extend(s["2d"],{x:(c-n.length/2)*i.cbPromoSize})})},r)),t()})},unexecute:function(){if(null!=c.c){var e=this.pieces[c.c],r=i.cbMakeDisplaySpecForPiece(i,e.p,e);r=$.extend(!0,{base:{visible:!0},"2d":{opacity:1},"3d":{positionEasingUpdate:null}},r),a.updateGadget("piece#"+c.c,r)}var s=this.pieces[this.board[c.f]],n=i.cbMakeDisplaySpecForPiece(i,s.p,s);a.updateGadget("piece#"+s.i,n),t()}}),void 0!==c.cg&&(s[r].validate.cg=c.cg,s[r].execute=function(e){this.cbAnimate(a,i,c,function(){e()})}),s[r].moves.push(c)},this);else if(null==r.pr){var n=[];c.forEach(function(e){void 0!==e.pr&&(void 0===s[e.pr]&&(s[e.pr]={pr:e.pr,moves:[],click:["promo#"+e.pr],validate:{pr:e.pr},cancel:["promo-cancel"],post:t,skipable:!0},n.push(e.pr)),s[e.pr].moves.push(e))},this),n.length>1&&n.forEach(function(e){s[e].view=["promo#"+e]})}return s}}},View.Game.cbCellClass=function(e,a){return"classic-cell "+((a+(a-a%this.g.NBCOLS)/this.g.ROWS)%2?"classic-cell-black":"classic-cell-white")},View.Board.xdPlayedMove=function(e,a,i){a.mOldBoard.cbAnimate(e,a,i,function(){a.MoveShown()})},View.Board.cbAnimate=function(e,a,i,t){function c(){0==--s&&(n&&a.PlaySound("tac"+(1+Math.floor(3*Math.random()))),t())}var r=this,s=1,n=!1,o=this.pieces[this.board[i.f]],l=a.cbMakeDisplaySpec(i.f,o.s),h=a.cbMakeDisplaySpecForPiece(a,i.t,o);for(var d in l){var m=l[d];void 0!==m.z&&function(e){var t=m.z,c=h[e].z,s=r.cbMoveMidZ(a,i,t,c,e),o=t,l=o-s,d=o-c;s!=(t+c)/2&&(n=!0);var u=4*l-2*d,p=-d*d,f=Math.abs(u*u- -4*p),g=(-u-Math.sqrt(f))/-2,b=(-u+Math.sqrt(f))/-2,w=g,v=-w-d;(0==w||-v/(2*w)<0||-v/(2*w)>1)&&(w=b,v=-w-d),h[e].positionEasingUpdate=function(e){var a=(w*e*e+v*e+o)*this.SCALE3D;this.object3d.position.y=a}}(d)}if(n||a.PlaySound("move"+(1+Math.floor(4*Math.random()))),e.updateGadget("piece#"+o.i,h,600,function(){c()}),null!=i.c){s++;var u={positionEasingUpdate:null};switch(a.cbView.captureAnim3d||"movedown"){case"movedown":u.z=-2e3;break;case"scaledown":u.scale=[0,0,0]}var p=this.pieces[i.c];e.updateGadget("piece#"+p.i,{"2d":{opacity:0},"3d":u},600,c)}if(void 0!==i.cg){var m=a.cbVar.castle[i.f+"/"+i.cg],f=m.r[m.r.length-1],o=this.pieces[this.board[i.cg]],h=a.cbMakeDisplaySpecForPiece(a,f,o);s++,e.updateGadget("piece#"+o.i,h,600,function(){c()})}},View.Board.cbMoveMidZ=function(e,a,i,t){return(i+t)/2}}(),function(){View.Game.cbBaseBoard={TEXTURE_CANVAS_CX:1024,TEXTURE_CANVAS_CY:1024,display:function(e,a,i){var t=this;e.getResource=a.getResource,e.createGeometry.call(this,e,function(a){e.createTextureImages.call(t,e,function(c){var r=["diffuse"].concat(e.extraChannels||[]),s={};r.forEach(function(a){var i=document.createElement("canvas");i.width=e.TEXTURE_CANVAS_CX,i.height=e.TEXTURE_CANVAS_CY,s[a]=i}),e.createMaterial.call(t,e,s,function(r){var n=new THREE.Mesh(a,r);e.modifyMesh.call(t,e,n,function(a){e.paint.call(t,e,s,c,function(){i(a)})})})})})},createTextureImages:function(e,a){var i=this,t={},c=0,r=e.texturesImg||{};for(var s in r)c++;if(0==c)a(t);else for(var s in r)!function(s){e.getResource("image|"+i.g.fullPath+r[s],function(e){t[s]=e,0==--c&&a(t)})}(s)},createMaterial:function(e,a,i){var t=new THREE.Texture(a.diffuse);t.needsUpdate=!0;var c={specular:"#050505",shininess:30,map:t};if(a.bump){var r=new THREE.Texture(a.bump);r.needsUpdate=!0,c.bumpMap=r,c.bumpScale=.05}i(new THREE.MeshPhongMaterial(c))},modifyMesh:function(e,a,i){i(a)},prePaint:function(e,a,i,t,c){c()},paint:function(e,a,i,t,c){c()},postPaint:function(e,a,i,t,c){c()},paintChannel:function(e,a,i,t){},draw:function(e,a,i){var t=this;e.getResource=a.getResource,e.createTextureImages.call(this,e,function(a){e.paintChannel.call(t,e,i,a,"diffuse")})}}}(),function(){function e(e){for(var a=JSON.stringify(e),i=0,t=0;t<a.length;t++)i=(i<<5)-i+a.charCodeAt(t),i&=i;return i}var a,i={};View.Game.cbDisplayPieceFn=function(i){var t=this,c=e(i);return function(e,r,s){a=this.getResource;var n=/^piece#([0-9]+)$/.exec(this.gadget.id);if(!n)return null;var o=parseInt(n[1]),l=t.cbCurrentGame();if(o>=l.mBoard.pieces.length)return null;var h=l.mBoard.pieces[o],d=l.cbVar.pieceTypes[h.t].aspect||l.cbVar.pieceTypes[h.t].name,m=d+"_"+c+"_"+h.s,u=this;m!=this._cbKey&&(this._cbKey=m,u.options=r,l.cbMakePiece(i,d,h.s,function(e){u.replaceMesh(e,u.options,s)}))}},View.Game.cbMakePiece=function(a,t,c,r){function s(e,a,i){return a?$.extend(!0,e,a.default,a[i]):{}}if(!a)return void console.error("piece-view: style is not defined");var n=s({},a,t);a[c]&&(n=s(n,a[c],t));var o=e(n),l=i[o];Array.isArray(l)?l.push(r):l?r(new THREE.Mesh(l.geometry,l.material)):(i[o]=[r],n.loadResources.call(this,n,function(e){n.displayPiece.call(this,n,e,function(){var a=i[o];i[o]={geometry:e.geometry,material:e.material},a.forEach(function(a){a(new THREE.Mesh(e.geometry,e.material))})})}))},View.Game.cbClearPieces=function(){i={}},View.Game.cbBasePieceStyle={default:{mesh:{jsFile:function(e,a){a(new THREE.CubeGeometry(1,1,1),new THREE.MeshPhongMaterial({}))},smooth:0,rotateZ:0},loadMesh:function(e,i){"function"==typeof e.mesh.jsFile?e.mesh.jsFile(e,i):a("smoothedfilegeo|"+e.mesh.smooth+"|"+this.g.fullPath+e.mesh.jsFile,i)},loadImages:function(e,i){function t(){0==--r&&i(s)}var c=this,r=1,s={};for(var n in e.materials){var o=e.materials[n].channels;for(var l in o)if(o[l].texturesImg)for(var h in o[l].texturesImg)!function(e,i){r++,a("image|"+c.g.fullPath+i,function(a){s[e]=a,t()})}(h,o[l].texturesImg[h])}t()},loadResources:function(e,a){function i(){0==--s&&a({geometry:c,images:t,textures:{},loadedMaterials:r})}var t,c,r,s=2;e.loadMesh.call(this,e,function(a,t){if(!a._cbZRotated){var s=new THREE.Matrix4;s.makeRotationY(e.mesh.rotateZ*Math.PI/180),a.applyMatrix(s),a._cbZRotated=!0}c=a,r=t,i()}),e.loadImages.call(this,e,function(e){t=e,i()})},displayPiece:function(e,a,i){e.makeMaterials.call(this,e,a),i()},paintTextureImageClip:function(e,a,i,t,c,r,s,n,o){var l=a.canvas.width,h=a.canvas.height;if(c.patternFill&&c.patternFill[r]){var d=c.patternFill[r];a.save();var m=document.createElement("canvas");m.width=l,m.height=h,ctxTmp=m.getContext("2d"),ctxTmp.fillStyle=d,ctxTmp.fillRect(0,0,l,h),ctxTmp.globalCompositeOperation="destination-in",ctxTmp.drawImage(s,n.x,n.y,n.cx,n.cy,0,0,l,h),a.drawImage(m,0,0,l,h,0,0,l,h),a.restore()}else a.drawImage(s,n.x,n.y,n.cx,n.cy,0,0,l,h)},paintTextureImage:function(e,a,i,t,c,r,s,n){var o;o=c.clipping&&c.clipping[r]?c.clipping[r]:{x:0,y:0,cx:s.width,cy:s.height},e.paintTextureImageClip.call(this,e,a,i,t,c,r,s,o,n)},paintTexture:function(e,a,i,t,c){var r=e.materials[i].channels[t];for(var s in r.texturesImg){var n=c.images[s];e.paintTextureImage.call(this,e,a,i,t,r,s,n,c)}},makeMaterialTextures:function(e,a,i){for(var t in e.materials[a].channels){var c=e.materials[a].channels[t],r=document.createElement("canvas");r.width=c.size.cx,r.height=c.size.cy;var s=r.getContext("2d");e.paintTexture.call(this,e,s,a,t,i);var n=new THREE.Texture(r);n.needsUpdate=!0,i.textures[a][t]=n}},makeMaterials:function(e,a){a.textures={};for(var i in e.materials)a.textures[i]={},e.makeMaterialTextures.call(this,e,i,a),e.makeMaterial.call(this,e,i,a)}}},View.Game.cbTokenPieceStyle3D=$.extend(!0,{},View.Game.cbBasePieceStyle,{default:{makeMaterials:function(e,a){a.textures={};for(var i in e.materials)a.textures[i]={},e.makeMaterialTextures.call(this,e,i,a);var t=[];for(var c in a.loadedMaterials){var r=a.loadedMaterials[c].clone(),s=r.name;if(e.materials[s]){$.extend(!0,r,e.materials[s].params);for(var n in e.materials[s].channels)switch(n){case"diffuse":r.map=a.textures[s][n];break;case"bump":r.bumpMap=a.textures[s][n]}}t.push(r)}var o=new THREE.MultiMaterial(t);a.material=o}}}),View.Game.cbUniformPieceStyle3D=$.extend(!0,{},View.Game.cbBasePieceStyle,{default:{makeMaterial:function(e,a,i){var t=e.materials[a].params;t.map=i.textures[a].diffuse,t.normalMap=i.textures[a].normal;var c=e.materials[a].channels.normal.normalScale||1;t.normalScale=new THREE.Vector2(c,c);var r=new THREE.MeshPhongMaterial(t);i.material=r,i.geometry.mergeVertices(),i.geometry.computeVertexNormals()}}}),View.Game.cbPhongPieceStyle3D=$.extend(!0,{},View.Game.cbBasePieceStyle,{default:{phongProperties:{color:"#ffffff",shininess:300,specular:"#ffffff",emissive:"#222222",shading:"undefined"!=typeof THREE?THREE.FlatShading:0},makeMaterials:function(e,a){var i=new THREE.MeshPhongMaterial(e.phongProperties);a.material=i}}})}(),function(){var e=0,a=0,i={};View.Game.cbEnsureConstants=function(){a||(a=this.cbVar.geometry.height,e=this.cbVar.geometry.width)},View.Game.cbCSize=function(t){this.cbEnsureConstants();var c=i[t.margins.x+"_"+t.margins.y];if(!c){var r,s,n,o,l=e+2*t.margins.x,h=a+2*t.margins.y;r=l/h,o=r<1?12e3*r/l:12e3/r/h,s=(e+2*t.margins.x)*o,n=(a+2*t.margins.y)*o,c={cx:o,cy:o,pieceCx:o,pieceCy:o,ratio:r,width:s,height:n},i[t.margins.x+"_"+t.margins.y]=c}return c},View.Game.cbGridBoard=$.extend({},View.Game.cbBaseBoard,{notationMode:"out",coordsFn:function(i){return i=i||{},i.margins=i.margins||{x:0,y:0},function(t){var c=this.cbCSize(i),r=t%e,s=(t-r)/e;return 1==this.mViewAs&&(s=a-1-s),this.mViewAs==-1&&(r=e-1-r),{x:(r-(e-1)/2)*c.cx,y:(s-(a-1)/2)*c.cy,z:0}}},createGeometry:function(e,a){var i=this.cbCSize(e),t=i.width/1e3,c=i.height/1e3,r=new THREE.PlaneGeometry(t,c),s=new THREE.Matrix4;s.makeRotationX(-Math.PI/2),r.applyMatrix(s);for(var n=r.faceVertexUvs[0],o=0;o<n.length;o++)for(var l=0;l<n[o].length;l++)i.ratio<1&&(n[o][l].x=n[o][l].x*i.ratio+(1-i.ratio)/2),i.ratio>1&&(n[o][l].y=n[o][l].y/i.ratio+(1-1/i.ratio)/2);a(r)},paintBackground:function(e,a,i,t,c,r){i.boardBG&&a.drawImage(i.boardBG,-c/2,-r/2,c,r)},paintChannel:function(e,a,i,t){var c=this.cbCSize(e);e.paintBackground.call(this,e,a,i,t,c.width,c.height)},paint:function(e,a,i,t){for(var c in a){var r=a[c].getContext("2d");r.save(),r.scale(e.TEXTURE_CANVAS_CX/12e3,e.TEXTURE_CANVAS_CY/12e3),r.translate(6e3,6e3),e.paintChannel.call(this,e,r,i,c),r.restore()}t()}}),View.Game.cbGridBoardClassic=$.extend({},View.Game.cbGridBoard,{colorFill:{".":"rgba(160,150,150,0.9)","#":"rgba(0,0,0,1)"," ":"rgba(0,0,0,0)"},texturesImg:{boardBG:"/res/images/wood.jpg"},modifyMesh:function(e,a,i){function t(e,a){var i=new THREE.Shape;return i.moveTo(-e/2,-a/2),i.lineTo(e/2,-a/2),i.lineTo(e/2,a/2),i.lineTo(-e/2,a/2),i}var c=this.cbCSize(e),r=c.width/1e3,s=c.height/1e3,n=t(r+.5+.1,s+.5+.1),o=t(r+.1,s+.1);n.holes.push(o);var l={amount:.4,steps:1,bevelSize:.1,bevelThickness:.04,bevelSegments:1},h=new THREE.ExtrudeGeometry(n,l),d=new THREE.Matrix4;d.makeRotationX(-Math.PI/2),h.applyMatrix(d),blackMat=new THREE.MeshPhongMaterial({color:"#000000",shininess:500,specular:"#888888",emissive:"#000000"});var m=new THREE.Mesh(h,blackMat);m.position.y=-l.amount-.01,a.add(m);var u=new THREE.Mesh(new THREE.BoxGeometry(r,s,.1),blackMat);u.rotation.x=Math.PI/2,u.position.y=-.1,a.add(u),i(a)},paintCell:function(e,a,i,t,c,r,s,n,o){a.strokeStyle="rgba(0,0,0,1)",a.lineWidth=15,a.fillStyle="bump"==t?"#ffffff":e.colorFill[c],a.fillRect(r-n/2,s-o/2,n,o),a.rect(r-n/2,s-o/2,n,o)},paintCells:function(i,t,c,r){for(var s=this.cbCSize(i),n=i.coordsFn(i),o=0;o<a;o++)for(var l=0;l<e;l++){var h=1==this.mViewAs?l+o*e:e*a-(1+l+o*e),d=n.call(this,h),m=this.cbView.boardLayout[a-o-1][l],u=d.x,p=d.y,f=s.cx,g=s.cy;i.paintCell.call(this,i,t,c,r,m,u,p,f,g)}},paintLines:function(i,t,c,r){var s=this.cbCSize(i);t.strokeStyle="#000000",t.lineWidth=40,t.strokeRect(-e*s.cx/2,-a*s.cy/2,e*s.cx,a*s.cy)},paintChannel:function(e,a,i,t){var c=this.cbCSize(e);e.paintBackground.call(this,e,a,i,t,c.width,c.height),e.paintCells.call(this,e,a,i,t),e.paintLines.call(this,e,a,i,t),this.mNotation&&e.paintNotation.call(this,e,a,t)},paintNotation:function(e,a,i){var t=this.cbCSize(e);switch(a.textAlign="center",a.textBaseline="middle",a.fillStyle="#000000",a.font=Math.ceil(t.cx/3)+"px Monospace",e.notationMode){case"out":e.paintOutNotation.apply(this,arguments);break;case"in":e.paintInNotation.apply(this,arguments)}},paintOutNotation:function(i,t,c){for(var r=this.cbCSize(i),s=0;s<a;s++){var n=a-s;this.mViewAs<0&&(n=s+1);var o=-(e/2+i.margins.x/2)*r.cx,l=(s-a/2+.5)*r.cy;t.fillText(n,o,l)}for(var h=0;h<e;h++){var d=h;this.mViewAs<0&&(d=e-h-1);var o=(h-e/2+.5)*r.cx,l=(a/2+i.margins.y/2)*r.cy;t.fillText(String.fromCharCode(97+d),o,l)}},paintInNotation:function(i,t,c){var r=this.cbCSize(i),s=i.coordsFn(i),n=i.colorFill;t.font=Math.ceil(r.cx/5)+"px Monospace";for(var o=0;o<a;o++)for(var l=0;l<e;l++){var h=a-o,d=l;this.mViewAs<0?d=e-l-1:h=o+1;var m=1==this.mViewAs?l+o*e:e*a-(1+l+o*e),u=s.call(this,m);switch(t.fillStyle="rgba(0,0,0,0)","bump"==c&&(t.fillStyle=n["."]),this.cbView.boardLayout[a-o-1][l]){case".":t.fillStyle="bump"==c?n["."]:n["#"];break;case"#":t.fillStyle=n["."]}var p=u.x-r.cx/3,f=u.y-r.cy/3;i.notationDebug?t.fillText(m,p,f):t.fillText(String.fromCharCode(97+d)+h,p,f)}}}),View.Board.cbMoveMidZ=function(e,a,i,t){var c=e.cbVar.geometry,r=c.C(a.f),s=c.C(a.t),n=c.R(a.f),o=c.R(a.t);return s-r==0||o-n==0||Math.abs(s-r)==Math.abs(o-n)?(i+t)/2:Math.max(i,t)+1500},View.Game.cbGridBoardClassic2D=$.extend({},View.Game.cbGridBoardClassic,{colorFill:{".":"#F1D9B3","#":"#C7885D"," ":"rgba(0,0,0,0)"}}),View.Game.cbGridBoardClassic3DMargin=$.extend({},View.Game.cbGridBoardClassic,{margins:{x:.67,y:.67},extraChannels:["bump"]}),View.Game.cbGridBoardClassic2DMargin=$.extend({},View.Game.cbGridBoardClassic2D,{margins:{x:.67,y:.67}}),View.Game.cbGridBoardClassic2DNoMargin=$.extend({},View.Game.cbGridBoardClassic2D,{margins:{x:0,y:0},notationMode:"in",texturesImg:{boardBG:"/res/images/whitebg.png"}})}(),function(){function e(e,a,i,t,c,r,s){var n=document.createElement("canvas");n.width=e,n.height=a;var o=n.getContext("2d"),l=(r.width,r.height,i.width),h=i.height,d=document.createElement("canvas");o.globalCompositeOperation="or";for(var m=0,u=0;m<=a+c/2;u++){for(var p=0,f=0;p<=e+t/2;f++)d.width=t,d.height=c,ctxTmp=d.getContext("2d"),ctxTmp.globalCompositeOperation="xor",ctxTmp.drawImage(i,Math.random()*(l-t),Math.random()*(h-c),t,c,0,0,t,c),ctxTmp.drawImage(r,0,0,t,c),o.drawImage(d,p-t/2,m-c/2,t,c),p+=t-s*t;m+=c-s*c}return n}View.Game.cbCourierBoard=$.extend({},View.Game.cbGridBoardClassic,{colorFill:{".":"rgba(204,40,0,1)","#":"rgba(180,180,0,1)"}}),View.Game.cbCourierBoard3DMargin=$.extend({},View.Game.cbCourierBoard,{texturesImg:{crackles:"/res/images/crackles.jpg",tiler:"/res/images/tileralpha.png"},"3D":!0,margins:{x:.47,y:.47},extraChannels:["bump"],paintCell:function(e,a,i,t,c,r,s,n,o){var l=i.crackles.width,h=i.crackles.height;a.fillStyle="#000000",a.fillRect(r-n/2,s-o/2,n,o),"bump"!=t&&(n*=.98,o*=.98,a.save(),a.strokeStyle="rgba(0,0,0,1)",a.lineWidth=50,a.fillStyle="diffuse"==t?e.colorFill[c]:16777215,a.fillRect(r-n/2,s-o/2,n,o),a.globalCompositeOperation="multiply",a.drawImage(i.crackles,Math.random()*(l-200),Math.random()*(h-200),200,200,r-n/2,s-o/2,n,o),a.restore())},paintBackground:function(a,i,t,c,r,s){i.save(),i.fillStyle="#ffffff","diffuse"==c&&(i.fillStyle="#BA784A");this.cbCSize(a);i.fillRect(-r/2,-s/2,r,s);var n=e(1200,800,t.crackles,200,200,t.tiler,.3);i.globalCompositeOperation="multiply",i.drawImage(n,-r/2,-s/2,r,s),i.restore()}}),View.Game.cbCourierBoard2DMargin=$.extend({},View.Game.cbCourierBoard,{texturesImg:{},margins:{x:.47,y:.47},colorFill:{".":"rgba(224,50,0,1)","#":"rgba(220,220,0,1)"}})}(),function(){var e={cx:512,cy:512};View.Game.cbCourierChessPieceStyle=function(e){return $.extend(!0,{1:{default:{"2d":{clipy:0}}},"-1":{default:{"2d":{clipy:100}}},default:{"3d":{display:this.cbDisplayPieceFn(this.cbCourierChessPieceStyle3D)},"2d":{file:this.mViewOptions.fullPath+"/res/courierchess/wikipedia-courier-sprites.png",clipwidth:100,clipheight:100}},"cc-pawn":{"2d":{clipx:0}},"cc-knight":{"2d":{clipx:100}},"cc-archer":{"2d":{clipx:200}},"cc-rook":{"2d":{clipx:300}},"cc-queen":{"2d":{clipx:400}},"cc-king":{"2d":{clipx:500}},"cc-courier":{"2d":{clipx:700}},"cc-schleich":{"2d":{clipx:600}},"cc-man":{"2d":{clipx:800}}},e)},View.Game.cbCourierChessPieceStyle3D=$.extend(!0,{},View.Game.cbUniformPieceStyle3D,{default:{mesh:{normalScale:1,rotateZ:180},materials:{mat0:{channels:{diffuse:{size:e},normal:{size:e}}}}},1:{default:{materials:{mat0:{params:{specular:2236962,shininess:150}}}}},"-1":{default:{materials:{mat0:{params:{specular:2236962,shininess:100}}},paintTextureImageClip:function(e,a,i,t,c,r,s,n,o){var l=a.canvas.width,h=a.canvas.height;"diffuse"==t?(a.globalCompositeOperation="normal",a.drawImage(s,n.x,n.y,n.cx,n.cy,0,0,l,h),a.globalCompositeOperation="multiply",a.drawImage(s,n.x,n.y,n.cx,n.cy,0,0,l,h),a.drawImage(s,n.x,n.y,n.cx,n.cy,0,0,l,h),a.globalCompositeOperation="hue",a.fillStyle="rgba(0,0,0,0.7)",a.fillRect(0,0,512,512)):a.drawImage(s,n.x,n.y,n.cx,n.cy,0,0,l,h)}}},"cc-pawn":{mesh:{jsFile:"/res/courierchess/cc-pawn/cc-pawn.js"},materials:{mat0:{channels:{diffuse:{texturesImg:{diffImg:"/res/courierchess/cc-pawn/cc-pawn-diffuse.jpg"}},normal:{texturesImg:{normalImg:"/res/courierchess/cc-pawn/cc-pawn-normal.jpg"}}}}}},"cc-knight":{mesh:{jsFile:"/res/courierchess/cc-knight/cc-knight.js"},materials:{mat0:{channels:{diffuse:{texturesImg:{diffImg:"/res/courierchess/cc-knight/cc-knight-diffuse.jpg"}},normal:{texturesImg:{normalImg:"/res/courierchess/cc-knight/cc-knight-normal.jpg"}}}}}},"cc-archer":{mesh:{jsFile:"/res/courierchess/cc-archer/cc-archer.js"},materials:{mat0:{channels:{diffuse:{texturesImg:{diffImg:"/res/courierchess/cc-archer/cc-archer-diffuse.jpg"}},normal:{texturesImg:{normalImg:"/res/courierchess/cc-archer/cc-archer-normal.jpg"}}}}}},"cc-rook":{mesh:{jsFile:"/res/courierchess/cc-rook/cc-rook.js"},materials:{mat0:{channels:{diffuse:{texturesImg:{diffImg:"/res/courierchess/cc-rook/cc-rook-diffuse.jpg"}},normal:{texturesImg:{normalImg:"/res/courierchess/cc-rook/cc-rook-normal.jpg"}}}}}},"cc-queen":{mesh:{jsFile:"/res/courierchess/cc-queen/cc-queen.js"},materials:{mat0:{channels:{diffuse:{texturesImg:{diffImg:"/res/courierchess/cc-queen/cc-queen-diffuse.jpg"}},normal:{texturesImg:{normalImg:"/res/courierchess/cc-queen/cc-queen-normal.jpg"}}}}}},"cc-king":{mesh:{jsFile:"/res/courierchess/cc-king/cc-king.js"},materials:{mat0:{channels:{diffuse:{texturesImg:{diffImg:"/res/courierchess/cc-king/cc-king-diffuse.jpg"}},normal:{texturesImg:{normalImg:"/res/courierchess/cc-king/cc-king-normal.jpg"}}}}}},"cc-man":{mesh:{jsFile:"/res/courierchess/cc-man/cc-man.js"},materials:{mat0:{channels:{diffuse:{texturesImg:{diffImg:"/res/courierchess/cc-man/cc-man-diffuse.jpg"}},normal:{texturesImg:{normalImg:"/res/courierchess/cc-man/cc-man-normal.jpg"}}}}}},"cc-schleich":{mesh:{jsFile:"/res/courierchess/cc-schleich/cc-schleich.js"},materials:{mat0:{channels:{diffuse:{texturesImg:{diffImg:"/res/courierchess/cc-schleich/cc-schleich-diffuse.jpg"}},normal:{texturesImg:{normalImg:"/res/courierchess/cc-schleich/cc-schleich-normal.jpg"}}}}}},"cc-courier":{mesh:{jsFile:"/res/courierchess/cc-courier/cc-courier.js"},materials:{mat0:{channels:{diffuse:{texturesImg:{diffImg:"/res/courierchess/cc-courier/cc-courier-diffuse.jpg"}},normal:{texturesImg:{normalImg:"/res/courierchess/cc-courier/cc-courier-normal.jpg"}}}}}}})}(),function(){View.Game.cbDefineView=function(){return{coords:{"2d":this.cbGridBoard.coordsFn.call(this,this.cbCourierBoard2DMargin),"3d":this.cbGridBoard.coordsFn.call(this,this.cbCourierBoard3DMargin)},boardLayout:["#.#.#.#.#.#.",".#.#.#.#.#.#","#.#.#.#.#.#.",".#.#.#.#.#.#","#.#.#.#.#.#.",".#.#.#.#.#.#","#.#.#.#.#.#.",".#.#.#.#.#.#"],board:{"2d":{draw:this.cbDrawBoardFn(this.cbCourierBoard2DMargin)},"3d":{display:this.cbDisplayBoardFn(this.cbCourierBoard3DMargin)}},clicker:{"2d":{width:900,height:900},"3d":{scale:[.6,.6,.6]}},pieces:this.cbCourierChessPieceStyle({default:{"2d":{width:800,height:800},"3d":{scale:[.33,.33,.33]}},"cc-rook":{"3d":{scale:[.28,.28,.28]}}})}},View.Board.cbMoveMidZ=function(e,a,i,t){return"N"==a.a||"B"==a.a?Math.max(i,t)+1500:(i+t)/2}}();