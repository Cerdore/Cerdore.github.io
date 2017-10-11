//window.resize = function(){
function pageResize(){
	var winWidth = window.innerWidth;
	var winHeight = window.innerHeight;
	//原图大小 4256 2832
	//计算后的图片大小
	var imgWidth = winWidth;
	var imgHeight = winHeight;
	//计算后的图片偏移位置
	var posLeft = 0;
	var posTop = 0;
	if(winWidth / winHeight > (4256.0 / 2832.0)){
		//以宽作为标准缩放 高会超出屏幕 调整top偏移
		imgHeight = winWidth * 2831.0 / 4256.0;
		posTop = -1 * (imgHeight - winHeight) / 2;
		max.style.height = "" + winHeight + "px";
		//alert("height");
	}
	else{
		//以高作为标准缩放 宽会超出屏幕 调整left偏移
		imgWidth = imgHeight * 4256.0 / 2831.0;
		posLeft = -1 * (imgWidth - winWidth) / 2;
		max.style.height = "" + imgHeight + "px";
		//alert("width");
	}
	//设置图片大小
	bgImg.style.width = "" + imgWidth + "px";
	bgImg.style.height = "" + imgHeight + "px";
	//设置图片偏移位置
	bgImg.style.marginLeft = "" + posLeft + "px";
	bgImg.style.marginTop = "" + posTop + "px";
	//alert(bgImg.style.width + " = " + bgImg.style.height )
	//alert("Edit Finished");
}
