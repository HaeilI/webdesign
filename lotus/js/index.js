$(document).ready(function(){ //////////시작
	
	//왼쪽 하위메뉴 호버
	$("#left li > a").on("mouseenter click" , function(){
		$("#left li > nav").stop().slideUp();
		$(this).next().stop().slideDown();
		
	});//메뉴 호버 끝
	
	//메뉴영역에서 마우스가 멀어질 때
	$("#left > nav").mouseleave(function(){
		$("#left li > nav ").stop().slideUp();
	});
	
	$(".last").blur(function(){
		$("#left li > nav").stop().slideUp();
	});
	
	//페이스 슬라이드 (자동으로 계속 반복된다.)
	const fade = setInterval( fading, 2800);
	let i = 3;    //항목의 개수 (초기 값)
	function fading(){
		i--;
		if( i == 0 ){
			$("#slide a").fadeIn();
			i=3;
		} else {
			$("#slide a").eq(i).fadeOut();   // 처음에 index 2가 서서히 사라진다.
		}
	} //슬라이드 끝
	
	//const x = ["딸기","바나나","키위","파인애플","오렌지"] //배열(Array)
	//console.log(x[1]);
	//console.log( x.length );
	
	
	//공지사항 첫번째 텍스트 클릭시 팝업 모달
	$(".pop").click(function(){
		$("#popup").fadeIn();
		$("#popup button").focus(); //웹접근성 향상
	});
	
	//팝업 모달 '닫기'버튼 클릭시
	$("#popup button").click(function(){
		$("#popup").fadeOut();
	});
	
} );           /////////끝