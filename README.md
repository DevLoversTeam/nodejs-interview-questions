<h1>
  Node.js <img src="./assets/nodejs.svg" width="40" height="40" />
</h1>

<h2>Найпопулярніші запитання та відповіді на співбесіді з Node.js</h2>

<details>
<summary>1. Що таке Node.js і які основні сфери його використання?</summary>

#### Node.js

**Node.js** — це середовище виконання JavaScript поза браузером, побудоване на
V8. Використовується для створення серверних застосунків, REST/GraphQL API,
реального часу (чати, стріми), мікросервісів, CLI-утиліт.

</details>

<details>
<summary>2. Як у Node.js реалізована робота з дочірніми потоками?</summary>

#### Node.js

Node.js за замовчуванням виконує код у одному потоці (event loop), але:

- Для асинхронних I/O операцій використовує пул потоків libuv. Це приховано від
  розробника.

- Для створення дочірніх потоків у самому Node.js є модуль worker_threads —
  дозволяє запускати паралельні обчислення в окремих потоках з можливістю обміну
  пам’яттю.

- Для ізольованих процесів застосовується child_process, але це вже не потоки, а
  окремі процеси.

В реальних проєктах: CPU-bound задачі (наприклад, хешування, обробка зображень)
варто виносити у worker_threads, щоб не блокувати основний потік.

</details>

<details>
<summary>3. Опишіть принцип event-driven програмування в Node.js.</summary>

#### Node.js

Node.js працює за event-driven (подієво-орієнтованою моделлю): основний потік
виконує event loop, який реагує на події (I/O, мережеві запити, таймери).
Замість блокуючих викликів використовуються колбеки, проміси або async/await. Це
дозволяє ефективно обробляти велику кількість одночасних з’єднань без створення
додаткових потоків.

Приклад з практики: HTTP-сервер у Node.js слухає події request і виконує
потрібний обробник кожного запиту.

</details>

<details>
<summary>4. Що таке event loop у Node.js?</summary>

#### Node.js

1. **Принцип:** Event loop — це механізм, який керує виконанням асинхронних
   операцій у Node.js.

2. **Як працює:** Він безперервно перевіряє чергу подій (callback queue) та
   виконує колбеки, коли стек викликів порожній.

3. **Роль:** Забезпечує неблокуюче виконання коду в одному потоці.

4. **Приклад:** HTTP-запит завершується → колбек потрапляє в чергу → event loop
   виконує його, коли готовий.

</details>

<details>
<summary>5. У чому різниця між Node.js та традиційними вебсерверними технологіями?</summary>

#### Node.js

1. **Архітектура:**

- Node.js — однопотокова подієво-орієнтована модель (event loop).

- Традиційні вебсервери (Apache, Tomcat, IIS) — багатопотокові: кожен запит
  обробляється окремим потоком/процесом.

2. **Продуктивність:**

- Node.js краще масштабується при великій кількості одночасних I/O-запитів.

- Традиційні сервери добре працюють із CPU-bound задачами, але витрачають більше
  ресурсів на управління потоками.

3. **Розробка:**

- Node.js дозволяє писати і фронтенд, і бекенд на JavaScript (єдина мова).

- У класичних підходах бекенд реалізується іншими мовами (PHP, Java, C#,
  Python).

**Приклад з практики:**

Node.js підходить для чату або API з великою кількістю клієнтів у реальному
часі, а Java/Tomcat краще для важких транзакційних систем (банкінг, ERP).

</details>

<details>
<summary>6. Поясніть, що означає неблокуюче (non-blocking) у Node.js.</summary>

#### Node.js

- **Принцип:** Неблокуюче означає, що виконання коду не чекає завершення I/O
  операцій (файли, мережа, БД).

- **Як працює:** Node.js запускає I/O асинхронно і реєструє колбек або проміс
  для обробки результату, поки основний потік продовжує виконання іншого коду.

- **Роль:** Забезпечує високу продуктивність при великій кількості одночасних
  запитів без створення додаткових потоків.

#### Приклад з практики:

Читання великого файлу з диску через fs.readFile() не зупиняє сервер — він може
обробляти інші HTTP-запити в цей час.

</details>

<details>
<summary>7. Як оновити Node.js до останньої версії?</summary>

#### Node.js

1. **Через офіційний сайт:** завантажити останній інсталятор з nodejs.org і
   встановити.

2. **Через пакетний менеджер:**

- Windows/macOS: `nvm` (Node Version Manager) — `nvm install node` або
  `nvm install <version>`

- Linux: `nvm` або системний пакетний менеджер (`apt`, `yum`)

3. **Перевірка версії:** `node -v`

Практика: для проєктів з різними версіями Node.js краще використовувати `nvm` —
легко перемикатися між версіями без конфліктів.

</details>

<details>
<summary>8. Що таке npm і для чого його використовують?</summary>

#### Node.js

- **npm (Node Package Manager)** — менеджер пакетів для Node.js.

- **Призначення:** встановлення, оновлення та управління бібліотеками/модулями у
  проєкті.

- **Приклади команд:**

  - `npm install <package>` — встановити пакет

  - `npm update` — оновити пакети

  - `npm init` — створити package.json

Практика: використовується для підключення сторонніх бібліотек (Express, Axios,
Lodash) і управління залежностями проєкту.

</details>

<details>
<summary>9. Як керувати пакетами у проєкті на Node.js?</summary>

#### Node.js

1. **Ініціалізація проєкту:** `npm init` або `npm init -y` створює
   `package.json`.

2. **Встановлення пакетів:**

- `npm install <package>` — додає пакет і записує у dependencies

- `npm install <package> --save-dev` — додає у devDependencies

3. **Оновлення та видалення:**

- `npm update` — оновлення пакетів

- `npm uninstall <package>` — видалення пакета

4. **Фіксація версій:** `package-lock.json` гарантує однакові версії для всіх
   учасників проєкту.

Практика: завжди використовуй package-lock.json і розділяй залежності на runtime
та dev, щоб уникнути конфліктів і зайвого коду на продакшні.

</details>

<details>
<summary>10. Що таке файл package.json?</summary>

#### Node.js

- **Призначення:** `package.json` описує Node.js проєкт і його залежності.

- **Що містить:**

  - Назву, версію проєкту

  - Залежності (`dependencies` і `devDependencies`)

  - Скрипти (`scripts`) для запуску команд (`start`, `test`, `build`)

  - Метадані про автора, ліцензію, сумісність Node.js

**Практика:** Використовується npm/yarn для встановлення потрібних пакетів і
запуску команд через `npm run <script>`.

</details>

<details>
<summary>11. Опишіть деякі з основних модулів Node.js</summary>

#### Node.js

У Node.js є вбудовані модулі, які не потребують встановлення через npm:

- `fs (File System):` робота з файлами (читання, запис, стрімінг).

- `http / https:` створення вебсерверів та робота з HTTP(S)-запитами.

- `path:` робота з файловими шляхами, кросплатформене вирівнювання.

- `os:` інформація про операційну систему (CPU, пам’ять, мережа).

- `events:` реалізація подієвої моделі через EventEmitter.

- `crypto:` шифрування, хешування, генерація ключів.

</details>

<details>
<summary>12. Як створити простий сервер у Node.js за допомогою модуля HTTP?</summary>

#### Node.js

1. Імпортувати модуль: `const http = require('http');`

2. Створити сервер через `http.createServer()`.

3. Визначити обробку запитів (`req`, `res`).

4. Запустити сервер на вказаному порту (`server.listen(3000)`).

#### Код-приклад:

```JavaScript
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, Node.js server!');
});

server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
```

Практика: такий підхід підходить для демо чи дуже простих API. У реальних
проєктах зазвичай використовують Express.js для зручності.

</details>

<details>
<summary>13. Поясніть призначення модуля File System (fs).</summary>

#### Node.js

- Призначення: модуль `fs` дозволяє працювати з файловою системою напряму з
  Node.js.

- Можливості:

  - читання (`fs.readFile`, `fs.createReadStream`)

  - запис (`fs.writeFile`, `fs.createWriteStream`)

  - створення/видалення файлів і директорій

  - робота в синхронному й асинхронному режимі

- Практика: використовується для завантаження/збереження файлів користувача,
  логування, роботи з конфігами.

#### Приклад:

```JavaScript
const fs = require('fs');

fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

</details>

<details>
<summary>14. Що таке клас Buffer у Node.js?</summary>

#### Node.js

- Призначення: `Buffer` — це клас у Node.js для роботи з двійковими даними (raw
  data).

- Особливості:

  - зберігає дані у вигляді байтів (подібно до масиву байтів у C).

  - використовується для обробки файлів, мережевих потоків, зображень тощо.

  - працює поза V8 heap, напряму в пам’яті.

- Практика: корисний для читання/запису файлів (`fs`), роботи з TCP/UDP
  сокетами, обробки даних у потоках.

#### Приклад:

```JavaScript
const buf = Buffer.from('Hello');
console.log(buf);        // <Buffer 48 65 6c 6c 6f>
console.log(buf.toString()); // Hello
```

</details>

<details>
<summary>15. Що таке стріми (streams) у Node.js і які їхні типи?</summary>

#### Node.js

- Призначення: Стріми — це інтерфейс для роботи з потоковими даними по частинах,
  без завантаження всього в пам’ять. Використовуються для файлів,
  HTTP-запитів/відповідей, сокетів.

- Перевага: ефективна робота з великими обсягами даних.

#### Типи стрімів у Node.js:

1. Readable — джерело даних (читання файлів, вхідні HTTP-запити).

2. Writable — приймач даних (запис у файл, вихідні HTTP-відповіді).

3. Duplex — одночасно читання і запис (TCP-сокети).

4. Transform — Duplex із можливістю трансформації даних під час потоку
   (наприклад, стиснення через zlib).

#### Приклад з практики:

```JavaScript
const fs = require('fs');

const readStream = fs.createReadStream('input.txt');
const writeStream = fs.createWriteStream('output.txt');

readStream.pipe(writeStream); // копіює файл через стріми
```

</details>

<details>
<summary>16. Як у Node.js читати та записувати файли?</summary>

#### Node.js

У Node.js для цього використовується модуль fs (File System).

1. Асинхронне читання/запис (рекомендовано):

```JavaScript
const fs = require('fs');

// Читання
fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Запис
fs.writeFile('output.txt', 'Hello Node.js', (err) => {
  if (err) throw err;
  console.log('Файл збережено!');
});
```

2. Синхронні методи (блокують event loop, краще не використовувати у продакшн):

```JavaScript
const data = fs.readFileSync('input.txt', 'utf8');
fs.writeFileSync('output.txt', 'Hello Sync');
```

#### Практика:

- асинхронні методи застосовуються в більшості сценаріїв (вебсервери, API).

- синхронні зручні для скриптів або ініціалізації конфігів при старті.

</details>

<details>
<summary>17. Як використовувати EventEmitter у Node.js?</summary>

#### Node.js

- EventEmitter — це клас із модуля events, який реалізує подієву модель у
  Node.js.

- Дозволяє створювати власні події та підписників (listeners).

#### Приклад використання:

```JavaScript
const EventEmitter = require('events'); const emitter = new EventEmitter();

// підписка на подію emitter.on('greet', (name) => {
console.log(`Hello, ${name}!`); });

// виклик події emitter.emit('greet', 'Viktor');
```

#### Практика:

- Використовується у внутрішніх механізмах Node.js (наприклад, стріми побудовані
  на EventEmitter).

- У проєктах застосовується для кастомних івентів — наприклад, логування,
  повідомлення між модулями.

</details>

<details>
<summary>18. Що таке модуль QueryString у Node.js?</summary>

#### Node.js

- Призначення: модуль querystring використовується для роботи з рядками запитів
  (URL query strings).

- Можливості:

  - перетворює query string у JavaScript-об’єкт

  - формує query string з об’єкта

#### Приклад:

```js
const querystring = require('querystring');

const parsed = querystring.parse('name=Viktor&age=30'); console.log(parsed); //
{ name: 'Viktor', age: '30' }

const str = querystring.stringify({ city: 'Kyiv', lang: 'ua' });
console.log(str); // city=Kyiv&lang=ua
```

Практика: у сучасних застосунках частіше використовують URLSearchParams
(стандартний Web API у Node.js 10+), але querystring усе ще застосовують у
легасі-коді.

</details>

<details>
<summary>19. ???</summary>

#### Node.js

- Coming soon...😎

</details>

<details>
<summary>20. ???</summary>

#### Node.js

- Coming soon...😎

</details>
