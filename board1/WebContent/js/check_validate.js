/**
 * 유효성 검증
 */

	$(function(){
				$('#regForm').submit(function(){
					
					var uid = $('input[name=uid]').val();
					var pw1 = $('input[name=pw1]').val();
					var pw2 = $('input[name=pw2]').val();
					var name = $('input[name=name]').val();
					var regul = /^[가-힣]{2,6}$/;
					
					if(!isUidOk){
						alert('아이디가 이미 사용중 입니다');
						return false;
					}
					
					if(!isNickOk){
						alert('별명이 이미 사용중 입니다');
						return false;
					}
					
					if(!isEmailOk){
						alert('이메일이 이미 사용중 입니다');
						return false;
					}
					
					if(!isHpOk){
						alert('휴대폰번호가 이미 사용중 입니다');
						return false;
					}
					
					//아이디 자리수 체크
					if(uid.length < 4){
						alert("아이디는 최소 4자 이상이어야 합니다.");
						return false;	
					}
				 	//비번 일치여부 확인
				 	if(pw1 !=pw2){
				 		alert("비밀번호가 서로 일치하지 않습니다.");
				 		return false;
				 	}
				 	//이름 영문 숫자 포함 여부 체크
				 	if(name.match(regul) == null){
				 		alert("이름에 한글을 써 주세요");
				 		return false;
				 	}
				 	return true;
				});
				
			});
		