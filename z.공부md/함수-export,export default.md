# 모듈 내보내고 가져오기
### 1. 선언부 앞에 export 붙이디
- 변수나 함수, 클래스를 선언할 때 맨 앞에 export를 붙이면 내보내기가 가능하다.
- 전부 유효한 내보내기
  ```js
  // 배열 내보내기
  export let months = ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  // 상수 내보내기
  export const MODULES_BECAME_STANDARD_YEAR = 2015;

  // 클래스 내보내기
  export class User {
    constructor(name) {
      this.name = name;
    }
  }
  ```

***클래스나 함수를 내보낼 땐 세미콜론을 붙이지 말자***
- 클래스나 함수 선언 시, 선언부 앞에 `export`를 붙인다고 해서 함수 선언 방식이 함수 선언문에서 함수 표현식(function expression)으로 바뀌지 않는다. 내보내지긴 했지만, **여전히 함수 선언문이다.**
  ```js
  export function sayHi(user){
    alert(`Hello, ${user}!`);
  } // 끝에 ;(세미콜론)을 붙이지 않는다.
  ```
### 2. 선언부와 떨어진 곳에 export 붙이기
- 선언부와 export가 떨어져 있어도 내보내기가 가능하다.
  ```js
  // say.js
  function sayHi(user){
    alret(`Hello, ${user}!`);
  }
  function sayBye(user){
    alert(`Bye, ${user}!`);
  }

  export {sayHi, sayBye}; // 두 함수를 내보냄.
  ```
  - 참고로 export문을 함수 선언부 위에 적어주는것도 동일하게 동작한다.

### 3. import *
- 무언갈 가져오고 싶다면 그에 대한 목록을 import{...}안에 적어주면 된다.
  ```js
  // main.js
  import {sayHi, sayBye} from './say.js';

  sayHi('John'); // Hello, John!
  sayBye('John'); // Bye, John!
  ```
- 가져올 것이 많으면 `import * as <obj>` 처럼 객체 형태로 원하는 것들을 가지고 올 수 있다.
  ```js
  // main.js
  import * as say from './say.js';

  say.sayHi('John'); // Hello, John!
  say.sayBye('John'); // Bye, John!
  ```
- '한꺼번에 모든 걸 가져오는 방식'을 사용하면 코드가 짧아진다. 그럼에도 **어떤 걸 가져올땐 그 대상을 구체적으로 명시하는게 좋다.**

### 4. import 'as'
- `as`를 사용하면 이름을 바꿔서 모듈을 가져올 수 있다.
- `sayHi`를 `hi`로, `sayBye`를 `bye`로 이름을 바꿔서 가져오자.
  ```js
  // main.js
  import {sayHi as hi, sayBye as bye} from './say.js';

  hi('John'); // Hello, John!
  bye('John'); // Bye, John!
  ```
### 5. Export 'as'
- export에도 `as`를 사용할 수 있다.
- `sayHi`와 `sayBye`를 각각 `hi`와 `bye`로 이름을 바꿔서 내보내자.
  ```js
  // say.js
  ...
  export {sayHi as hi, sayBye as bye}
  ```
  - 이제 다른 모듈에서 이 함수들을 가져올 때 이름은 `hi`와 `bye`가 된다.
    ```js
    import * as say from './say.js';

    say.hi('John'); // Hello, John!
    say.bye('John'); // Bye, John!
    ```
### 6. export default
- 모듈은 크게 두 종류로 나뉜다.
  1. 복수의 함수가 있는 라이브러리 형태의 모듈(위 예시의 say.js)
  1. 개체 하나만 선언되어있는 모듈(아래의 user.js, class User 하나만 내보내기 함)
- 대개는 두 번째 방식으로 모듈을 만드는걸 선호하기때문에 함수, 클래스, 변수 등의 개체는 전용 모듈안에 구현된다.
- 모듈은 `export default`라는 특별한 문법을 지원한다. `export default`를 사용하면 '해당 모듈엔 개체가 하나만 있다'는 사실을 명확히 나타낼 수 있다.
  ```js
  // user.js
  export default class User{ // export 옆에 'default'를 추가했다.
    constructor(name){
      this.name = name;
    }
  }
  ```
  - 파일 하나엔 대게 `export default`가 하나만 있다. 이렇게 `default`를 붙여서 모듈을 내보내면 중괄호 {} 없이 모듈을 가져올 수 있다.
    ```js
    // main.js
    import User from './user.js'; // {User}가 아닌 User로 클래스를 가져왔다.
    new User('John');
    ```
  |named export | default export|
  |---|---|
  |export class User {...}| export default class User {...}|
  |import {User} from ...| import User from ...|

- named export와 default export를 같은 모듈에서 사용해도 문제는 없지만, 실무에서는 이렇게 섞어 쓰는 사례가 흔치 않다. 한 파일엔 named export나 default export 둘 중 하나만 사용한다.
- 파일당 최대 하나의 default export 가 있을 수 있으므로 내보낼 개체엔 *이름이 없어도 괜찮다.*
  ```js
  export default class { // 클래스 이름이 없음
    constructor(){...}
  }
  export default function(user) { // 함수 이름이 없음
    alert(`Hello, ${user}!`);
  }

  // 이름 없이 배열 형태의 값을 내보냄
  export default ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  ```
- default 를 붙이지 않았다면 개체에 이름이 없는경우 에러가 발생한다.
  ```js
  export class { // 에러! (default export가 아닌 경우엔 이름이 꼭 필요하다.)
    constructor() {}
  }
  ```
### 7. 'default' name
- `defualt`키워드는 기본 내보내기를 참조하는 용도로 종종 사용된다.
- 함수를 내보낼땐 함수 선언부와 떨어진 곳에서 `default`키워드를 사용하면, 해당 함수를 기본 내보내기 할 수 있다.
- 흔치 않지만 `user.js`라는 모듈에서 `default` export하나와 다수의 named export가 있다고 가정해보자
  ```js
  // user.js
  export default class User {
    constructor(name) {
      this.name = name;
    }
  }

  export function sayHi(user) {
    alert(`Hello, ${user}!`);
  }
  ```
  - 아래와 같은 방식을 사용하면 default export와 named export를 동시에 가져올 수 있다. (권장X)
    ```js
    // main.js
    import {default as User, sayHi} from './user.js';

    new User('John');
    ```
  - `*`를 사용해서 모든 것을 객체 형태로 가져오는 방법도 있는데, 이 경우에는 `default`프로피틑 **정확히** default export를 가리킨다.
    ```js
    // main.js
    import * as user from './user.js';

    let User = user.default; // default export
    new User('John');
    ```

### 8. default export의 이름에 관한 규칙
- named export는 내보냈을 때 사용한 이름 그대로 가져오므로 관련 정보를 파악하기 쉽다. 그러나 *내보내기 할 때 쓴 이름*과 가*져오기 할 때 쓸 이름*이 **동일해야한다는 제약**이 있다.
  ```js
  import {User} from './user.js';
  // import {MyUser}은 사용할 수 없다. 반드시 {User}이어야한다.
  ```
- named export와는 다르게 default export는 가져오기할 때 개발자가 원하는 대로 이름을 지정할 수 있다.
  ```js
  // 어떤 이름이든 에러 없이 동작함.
  import User from './user.js'; // 동작
  import MyUser from './user.js'; // 동작
  ```
- 자유롭게 이름을 짓는게 가능해서 가져올때 이름이 달라 혼란의 여지가 생길 수 있다. 그러기위해 파일이름과 동일한 이름을 사용하는 등의 컨벤션을 정해야한다.
  ```js
  // 컨벤션 예
  import User from './user.js';
  import LoginForm from './loginForm.js';
  import func from '/path/to/func.js';
  ...
  ```

### 9. 모듈 다시 내보내기 (권장X)
- `export ... from ...` 문법을 사용하면, 가져온 객체를 즉시 **'다시 내보내기(re-export)'** 할 수 있다. = 이름을 바꿔서 다시 내보낼 수 있다.
  ```js
  export {sayHi} from './say.js'; // sayHi를 다시 내보내기 함

  export {default as User} from './user.js'; // default export를 다시 내보내기 함
  ```

### 10. default export 다시 내보내기 (권장X)
- 기본 내보내기를 다시 내보낼 때 주의해야할 점들이 있다.
- 아래 코드를 보면서 주의점을 알아보자
  ```js
  // user.js내의 클래스 User를 다시 내보낸다고 가정.

  // user.js
  export default class User{
    // ...

  }
  ```
  1. `User`를 `export User from './user.js'`로 다시 내보내기 할 때 문법 에러가 발생한다.
        -  default export를 다시 내보내려면 `export {default as User}를 사용해야한다.
  1. `export * from './user.js`를 사용해 모든걸 한번에 다시 내보내려면 default export는 무시되고, named export만 다시 내보내진다.
        - 두 가지를 동시에 내보내고 싶다면 두 문을 동시에 사용해야한다.
          ```js
          export * from './user.js'; // named export를 다시 내보내기
          export {default} from './user.js'; // default export를 다시 내보내기
          ```