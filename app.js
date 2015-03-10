var win1 = Titanium.UI.createWindow({
title:'Select Color',
backgroundColor:'fff'
});

//functions


function getVerdict(colour) {
var indicator = colour.charAt(1);
var msg;
switch(indicator) {
case 'F': msg = 'Milky'; break;
case 'D': msg = 'Nice'; break;
case 'C': msg = 'Perfect'; break;
case '9': msg = 'A bit strong'; break;
case '8': msg = 'Builders tea'; break;
case '6': msg = 'Send it back'; break;
case '3': msg = 'No milk here'; break;
}
return msg;
};


function showTeaVerdict(_args) {
var teaVerdict =
Ti.UI.createWindow({layout:'vertical'});
teaVerdict.backgroundColor = _args;
teaVerdict.msg = getVerdict(_args);
var judgement = Ti.UI.createLabel({text:teaVerdict.msg, top:'50%'});
var close = Ti.UI.createButton({title:'Choose again', top:'25%'});
close.addEventListener('click', function (e)
{teaVerdict.close();
teaVerdict = null;
});

teaVerdict.add(judgement);
teaVerdict.add(close);
teaVerdict.open();
}



var Teas = ['#F5F5DC', '#FFE4B5', '#FFE4C4', '#D2B48C', '#C3b091',
'#c3b091', '#926F5B', '#804000', '#654321', '#3D2B1F'];

allRows = [];
var theColours = Ti.UI.createTableView({});

for (var i=0; i<Teas.length; i++){
theRow = Ti.UI.createTableViewRow({backgroundColor:Teas[i], height:50, TeaColour:Teas[i]});
allRows.push(theRow);
}

theColours.setData(allRows);
win1.add(theColours);


//button 1

var NavButton1 = Ti.UI.createButton({
	title: 'Click for Camera',
	color: '#66A3FF’,
	width: '50%',
	bottom: 0,
	height: 30,
	backgroundColor: ‘#000000’,
	font: {
			fontSize: '30sp',
			fontWeight: 'bold'
},


});


win1.add(NavButton1);


NavButton1.addEventListener('click', function() {

win2.open();

});



var win2 = Titanium.UI.createWindow({ 
		backgroundColor:'#fff'

});

//button 2

var NavButton2 = Ti.UI.createButton({
	title: ‘Back to the Tea Selection’,
	color: '#66A3FF’,
	width: '75%',
	bottom: 10,
	height: 40,
	backgroundColor: ‘#000000’,
	font: {
			fontSize: '30sp',
			fontWeight: 'bold'
},

});



NavButton2.addEventListener('click', function() {
Ti.API.info('Clicked Home Button');
win2.close();
});


theColours.addEventListener('click', function(e) {showTeaVerdict(e.source.TeaColour);});
win1.add(theColours);

var options = Ti.UI.createView({layout: 'vertical'});

//Camera

var showCamera = Ti.UI.createButton({title: 'Show Camera'});
function showPhoto(_args) {
thePhoto.setImage(_args.media);
}
var thePhoto = Ti.UI.createImageView({height: '30%', width: '30%'});
showCamera.addEventListener('click', function (e) {
Ti.Media.showCamera({animated: true,
autoHide: true,
saveToPhotoGallery: true,
showControls: true,
mediaTypes: [Ti.Media.MEDIA_TYPE_PHOTO],
success: function(e) {showPhoto(e);}
});
});
options.add(showCamera);
options.add(thePhoto);
win2.add(options);

win1.open();
