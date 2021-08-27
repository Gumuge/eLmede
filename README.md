eLmede 홈페이지 제작    

2021-08-24
----------
기초적인 틀 마련 gh-pages에 deploy가 잘 되는지 확인하였으며        
4페이지로 구성되는 nav를 만듦    
https://www.image-map.net/    
을 참고하여 image-map을 사용해 Target 페이지에서 링크를 구성하였다.   
https://npm.io/package/image-map   
을 이용하여 image-map을 반응형으로 이용하려 하였으나 tsx에서는 오류가 발생하여  Target 컴포넌트를   jsx로 바꿨다
https://waifu2x.me/   
을 이용하여 이미지의 해상도를 높여 사용하였다.   

2021-08-25
----------
gh page에서는 SPA를 지원하지 않아 새로고침을 하면 404에러가 발생하였고    
https://iamsjy17.github.io/react/2018/11/04/githubpage-SPA.html     

해당 사이트를 참고하여 수정하였다.    
https://velog.io/@ricale/Create-React-App-%EC%9C%BC%EB%A1%9C-GitHub-Pages-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0    
를 참고하여 도메인을 연결하였다. 하지만 도메인 연결후 위에서 언급했던 새로고침이 안되는 상황이    
발생하였다.    
https://github.com/rafgraph/spa-github-pages    
해당 사이트에서 404.html의 segmentCount의 값을 도메인을 사용할땐 0, 그렇지 않으면 1로    
설정한다는 것을 알았으며 0으로 설정하니 잘 작동하였다.   

2021-08-27
----------
모바일 화면에서 보기 쉽게끔 각페이지의 display 속성을 grid로 하였다.    


