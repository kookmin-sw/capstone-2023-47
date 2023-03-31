## 관리자들을 위한 내용

#### Native vs Cross-Platform
    1. Native : Android의 경우 Kotlin(Java)를 이용해 Android Studio로 제작 && iOS의 경우 Swift(Objective-C)를 이용해 XCode로 제작
    2. Cross-Platform : Flutter나 React Native를 이용해 동시 제작  
    3. Flutter : Dart라는 언어를 사용하며 팀원 중 XCode를 사용할 수 있는 애플 기기가 없으면 제작 불가(초기 설정 어려움) (→ 1-1의 Android용으로만 제작 가능) 
    4. React Native : Javascript를 사용하며 Expo라는 플랫폼을 사용하면 Xcode가 없더라도 제작 가능 (단, 라이브러리 제한 있음, Expo 미사용시 Flutter랑 유사함)  
    5. Native와 Cross-Platform의 장단점은 이미 잘 알고 있으니 성능 vs 제작속도 중 더 중요한 부분이 무엇인지 판단하고 결정

#### Server and Client  
    1. Server : 졸업프로젝트용으로 만드는 어플리케이션이긴 하지만, 국민대학교 구성원들이 쓴다고 가정해야 하므로 (이하 페르미 추정에 의해 계산)  
			  재학생+교직원 총원을 2만명으로 가정하고, 이 중 대중교통으로 등하교/출퇴근을 하는 사람의 비율을 80%로 가정  
			  모든 재학생이 주 4회 등하교를 갖는다고 가정하면 1.6만 x 4 / 5 = 1.2만명이 어플 사용 가능  
			  퇴근 시간대에는 택시를 거의 이용하지 않는다고 가정하고, 9시 등교 시간대에 대부분 몰린다고 가정하면,  
			  9시 등교 인원 && (셔틀)버스를 놓쳐 지각할 위험이 있는 인원 1.2만명 x 10% = 1200명  
			  + 그 이외 시간대에서 지각할 가능성이 있는 인원,  
			    제3의 지역으로 출발/도착하는 인원 (ex. 집이 비슷한 수강생들끼리 야외(집중)수업을 받으러 갈 때)
			  = 하루 실제 이용자 수를 1000~1500명으로 추정하고 이에 맞춰 서버를 구축  
			  실제 개인정보를 수집하는 것은 불가능에 가까우므로, 팀원 3명을 제외한 나머지 개인정보는 가상으로 생성  
			  그 외 서버 이용 계획은 추후 논의
    2. Client : 모든 개인정보는 Client에서 Server로 (실제로 1000개를 일일이 다 넣을 수 없으므로 시범적으로 5개만 넣고 나머지는 바로 서버로)  
 

2023년 47조  https://kookmin-sw.github.io/capstone-2023-47

## Markdown을 사용하여 내용꾸미기

Markdown은 작문을 스타일링하기위한 가볍고 사용하기 쉬운 구문입니다. 여기에는 다음을위한 규칙이 포함됩니다.

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

자세한 내용은 [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Support or Contact

readme 파일 생성에 추가적인 도움이 필요하면 [도움말](https://help.github.com/articles/about-readmes/) 이나 [contact support](https://github.com/contact) 을 이용하세요.
