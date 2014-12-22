$(function(){
	$.fn.narabekae = function(){
		var element = $('#sample01'); //対象を指定
		var arr = []; //配列の入れ物を作成
		
		$("div",element).each(function() { //指定のものを見つけるたびに
			arr.push($(this).html()); //配列に中身をがつがつ入れて行く
		});
	
		// 配列に入れたものに0始まりで採番したいから、総数取得して-1する   
		var el_all = $(element).children('div').length - 1;
	
		var selectnum = Math.floor(Math.random() * el_all + 1 ); //最初の1個目をランダムで選ぶ（ここでは総数そのものが欲しいのでさっきのマイナス1を埋め合わせる）
		
		element.empty(); //対象の中身を一旦空にする
	 
		for (var i=selectnum ; i<=el_all; i++){ //最初の1個目から順番に貼っていく
			element.append('<div>' + arr[i] + '</div>');
			if ( i == el_all ){ //最後まで来たら
				for (var j=0 ; j<selectnum ; j++){ //頭に戻って順番に貼っていく
					element.append('<div>' + arr[j] + '</div>');
				}
			}
		}
	}
});
