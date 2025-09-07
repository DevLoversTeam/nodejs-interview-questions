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
<summary>19. Як у Node.js керувати операціями з файловими шляхами?</summary>

#### Node.js

- У Node.js для цього є вбудований модуль path, який забезпечує кросплатформену
  роботу з шляхами.

#### Основні методи:

- `path.join([...paths])` — об’єднання шляхів у правильному форматі.

- `path.resolve([...paths])` — повертає абсолютний шлях.

- `path.basename(path)` — отримати ім’я файлу.

- `path.dirname(path)` — отримати директорію.

- `path.extname(path)` — отримати розширення файлу.

#### Приклад:

```JavaScript
const path = require('path');

const filePath = '/users/viktor/docs/file.txt';

console.log(path.basename(filePath)); // file.txt
console.log(path.dirname(filePath));  // /users/viktor/docs
console.log(path.extname(filePath));  // .txt
console.log(path.join('users', 'viktor', 'docs')); // users/viktor/docs
```

Практика: path застосовується для роботи з файлами у різних ОС (Windows → \,
Linux/macOS → /).

</details>

<details>
<summary>20. Що таке колбеки (callbacks) у Node.js?</summary>

#### Node.js

**Колбек** — це функція, яка передається як аргумент іншій функції і
викликається після завершення асинхронної операції.

- У Node.js вони широко застосовуються для роботи з I/O (файли, мережа, база
  даних).

- Стандартний підхід: error-first callback — перший аргумент `err`, другий —
  результат.

#### Приклад:

```JavaScript
const fs = require('fs');

fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Помилка:', err);
    return;
  }
  console.log('Вміст файлу:', data);
});
```

Практика: Колбеки — основа асинхронності у Node.js. Але через проблему "callback
hell" у сучасних проєктах переважно використовують Promises та async/await.

</details>

<details>
<summary>21. Що таке callback hell і як його уникнути?</summary>

#### Node.js

**Callback hell** — це ситуація, коли в коді є багато вкладених колбеків, що
ускладнює читання, відлагодження та підтримку.

#### Приклад:

```JavaScript
fs.readFile('a.txt', (err, dataA) => {
  fs.readFile('b.txt', (err, dataB) => {
    fs.readFile('c.txt', (err, dataC) => {
      console.log(dataA, dataB, dataC);
    });
  });
});
```

#### Як уникнути:

1. Використовувати Promises — ланцюжки .then().

2. Застосовувати async/await — більш лаконічний та зрозумілий синтаксис.

3. Розбивати код на менші функції (modularization).

4. Використовувати готові бібліотеки для керування асинхронністю (async,
   bluebird).

Сучасна практика: майже всюди застосовують async/await, бо це найчитабельніший
спосіб писати асинхронний код у Node.js.

</details>

<details>
<summary>22. Поясніть, що таке проміси (Promises) у Node.js.</summary>

#### Node.js

**Promise** — це об’єкт, який представляє результат асинхронної операції:
успішний (`resolved`) або з помилкою (`rejected`).

- Дозволяє уникнути вкладених колбеків і писати асинхронний код більш
  структуровано.

- Стани проміса:

1. `pending` (очікування)

2. `fulfilled` (успішно виконано)

3. `rejected` (помилка)

#### Приклад:

```JavaScript
const fs = require('fs').promises;

fs.readFile('data.txt', 'utf8')
  .then(data => console.log('Вміст:', data))
  .catch(err => console.error('Помилка:', err));
```

#### Практика:

- Використовуються для роботи з асинхронними API (fetch, fs.promises, БД).

- У сучасному коді зазвичай поєднуються з async/await, що робить код ще
  чистішим.

</details>

<details>
<summary>23. Як працюють функції async/await у Node.js?</summary>

#### Node.js

- `async` — позначає функцію, яка завжди повертає Promise.

- `await` — зупиняє виконання всередині async-функції, поки Promise не буде
  виконано (`resolved` або `rejected`).

- Це синтаксичний цукор над Promises, що робить асинхронний код схожим на
  синхронний.

Приклад:

```JavaScript
const fs = require('fs').promises;

async function readFile() {
  try {
    const data = await fs.readFile('data.txt', 'utf8');
    console.log('Вміст:', data);
  } catch (err) {
    console.error('Помилка:', err);
  }
}

readFile();
```

#### Практика:

- Використовується у більшості сучасних проєктів для роботи з асинхронним кодом.

- Полегшує обробку помилок через `try/catch`.

- Уникає “callback hell” і довгих ланцюжків `.then()`.

</details>

<details>
<summary>24. У чому різниця між синхронними та асинхронними методами в модулі fs?</summary>

#### Node.js

**Синхронні методи** (`fs.readFileSync`, `fs.writeFileSync`):

- Блокують event loop, поки операція не завершиться.

- Простий код, але погано для серверних застосунків з багатьма запитами.

**Асинхронні методи** (`fs.readFile`, `fs.writeFile`):

- Виконуються неблокуюче.

- Результат обробляється через callback, Promise або async/await.

- Рекомендовані для продакшн-коду.

#### Приклад:

```JavaScript
const fs = require('fs');

// Асинхронно
fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('Async:', data);
});

// Синхронно
const data = fs.readFileSync('data.txt', 'utf8');
console.log('Sync:', data);
```

#### Практика:

- Синхронні методи підходять для скриптів або ініціалізації під час старту
  програми.

- Асинхронні — для роботи сервера, щоб не блокувати інші запити.

</details>

<details>
<summary>25. Як Node.js обробляє HTTP-запити та відповіді?</summary>

#### Node.js

**Node.js** використовує вбудований модуль http для створення серверів.

- Сервер працює в подієво-орієнтованій моделі: на кожен запит генерується подія,
  яку можна обробити у callback.

- Об’єкт req (request) містить дані запиту (метод, заголовки, тіло).

- Об’єкт res (response) використовується для формування та відправки відповіді
  клієнту.

#### Приклад:

```JavaScript
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from Node.js server!');
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
```

#### Практика:

- Node.js може обробляти велику кількість одночасних HTTP-запитів завдяки
  неблокуючій архітектурі.

- Для складніших застосунків використовуються фреймворки на базі http, наприклад
  Express.js.

</details>

<details>
<summary>26. Що таке Express.js і чому він важливий для Node.js?</summary>

#### Node.js

**Express.js** — це мінімалістичний і гнучкий веб-фреймворк для Node.js.

- Дає простіший спосіб роботи з HTTP-запитами, відповідями, маршрутизацією,
  middleware.

- Значно спрощує розробку REST API та веб-додатків.

#### Чому важливий:

- Зменшує кількість “ручного коду” порівняно з нативним модулем `http`.

- Має велику екосистему middleware для авторизації, логування, обробки JSON,
  статичних файлів тощо.

- Де-факто стандарт у Node.js-середовищі для побудови серверних застосунків.

#### Приклад:

```JavaScript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Express.js!');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
```

У реальних проєктах Express — це "каркас" для швидкої розробки, тоді як чистий
http модуль використовують рідко.

</details>

<details>
<summary>27. Як створити RESTful API за допомогою Node.js?</summary>

#### Node.js

1. Використати Express.js (спрощує маршрутизацію та обробку запитів).

2. Визначити ендпоінти для CRUD-операцій (Create, Read, Update, Delete).

3. Використовувати JSON як формат обміну даними.

4. Опціонально: підключити базу даних (MongoDB, PostgreSQL, MySQL).

#### Приклад REST API (Express.js):

```JavaScript
const express = require('express');
const app = express();

app.use(express.json());

// Read (GET)
app.get('/users', (req, res) => {
  res.json([{ id: 1, name: 'Alice' }]);
});

// Create (POST)
app.post('/users', (req, res) => {
  const newUser = req.body;
  res.status(201).json(newUser);
});

// Update (PUT)
app.put('/users/:id', (req, res) => {
  res.json({ id: req.params.id, ...req.body });
});

// Delete (DELETE)
app.delete('/users/:id', (req, res) => {
  res.status(204).send();
});

app.listen(3000, () => console.log('API running on http://localhost:3000'));
```

#### Ключові моменти:

- Кожен ендпоінт відповідає певній операції над ресурсом.

- Дані передаються у форматі JSON.

- Легко масштабувати та інтегрувати з базами даних і фронтендом.

</details>

<details>
<summary>28. Що таке middleware у контексті Node.js?</summary>

#### Node.js

**Middleware** — це функція, яка виконується між отриманням HTTP-запиту і
відправкою відповіді в Express.js або іншому Node.js-фреймворку.

- Вона може змінювати `req` і `res`, виконувати логіку (логування,
  аутентифікація, валідація, обробка помилок) і викликати `next()` для передачі
  керування далі.

#### Приклад middleware в Express.js:

```JavaScript
const express = require('express');
const app = express();

// Кастомне middleware для логування
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // передати керування наступному middleware/роуту
});

app.get('/', (req, res) => {
  res.send('Hello, Middleware!');
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
```

#### Ключові приклади middleware:

- Вбудовані (`express.json()`, `express.urlencoded()`)

- Сторонні (наприклад, `morgan`, `cors`)

- Кастомні (написані вручну під бізнес-логіку)

</details>

<details>
<summary>29. Як забезпечити безпеку HTTP-заголовків у Node.js?</summary>

#### Node.js

1. Використати `helmet` — популярний middleware для Express.js, який автоматично
   додає та налаштовує безпечні HTTP-заголовки.

```JavaScript
const express = require('express');
const helmet = require('helmet');
const app = express();

app.use(helmet()); // додає набір захисних заголовків
```

2. Основні заголовки для безпеки:

- Content-Security-Policy (CSP) → захист від XSS.

- X-Frame-Options → запобігає clickjacking.

- X-Content-Type-Options → блокує MIME sniffing.

- Strict-Transport-Security (HSTS) → примусове використання HTTPS.

- Referrer-Policy → контроль витоку інформації у реферері.

**Ключова ідея:** у Node.js зазвичай не пишуть заголовки вручну — helmet робить
це централізовано та безпечно.

</details>

<details>
<summary>30. Як у Node.js обробляються помилки?</summary>

#### Node.js

1. **Синхронний код** → через `try/catch`:

```JavaScript
try {
  throw new Error("Something went wrong");
} catch (err) {
  console.error(err.message);
}
```

2. **Асинхронний код з callback** → помилка передається першим аргументом:

```JavaScript
fs.readFile('file.txt', (err, data) => {
  if (err) {
    return console.error("Помилка:", err);
  }
  console.log("Дані:", data.toString());
});
```

3. **Promises** → через `.catch()`:

```JavaScript
someAsyncTask()
  .then(result => console.log(result))
  .catch(err => console.error("Помилка:", err));
```

4. `async/await` → з `try/catch`:

```JavaScript
async function run() {
  try {
    const data = await someAsyncTask();
    console.log(data);
  } catch (err) {
    console.error("Помилка:", err);
  }
}
run();
```

5. **Глобальна обробка (як крайній захід):**

```JavaScript
process.on('uncaughtException', err => {
  console.error('Невловлена помилка:', err);
});

process.on('unhandledRejection', err => {
  console.error('Невловлене відхилення Promise:', err);
});
```

Головний принцип: завжди обробляти помилки на місці, а глобальні хендлери
використовувати тільки як резервний варіант.

</details>

<details>
<summary>31. Опишіть патерн error-first callback у Node.js.</summary>

#### Node.js

- **Суть:** у Node.js колбеки зазвичай реалізовані у форматі error-first, тобто
  перший аргумент завжди призначений для помилки, а другий — для результату.

- **Причина:** це дозволяє уніфікувати обробку помилок і результатів у
  асинхронних функціях.

#### Приклад (чтення файлу):

```JavaScript
const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error("Сталася помилка:", err);
    return;
  }
  console.log("Файл прочитано:", data);
});
```

#### Переваги патерну:

1. Єдиний стандарт для обробки помилок.

2. Проста перевірка: if (err) → зупиняємо виконання.

3. Сумісність із багатьма бібліотеками Node.js.

Недолік: при вкладених колбеках → виникає callback hell, який вирішується
Promises або async/await.

</details>

<details>
<summary>32. Які є поширені техніки дебагінгу Node.js застосунків?</summary>

#### Node.js

1. **Консольні логи** – console.log, console.error, console.table для швидкого
   відстеження.

2. **Вбудований інспектор** – запуск з node --inspect або node --inspect-brk і
   підключення Chrome DevTools / VS Code Debugger.

3. **Debugger statement** – додавання debugger; у код, щоб зупинити виконання і
   проаналізувати змінні.

4. **Логування** – використання бібліотек (winston, pino) для структурованих
   логів.

5. **unit/integration тести** – з jest, mocha, chai для відлову багів на ранніх
   етапах.

6. **Аналіз стек-трейсів** – читання помилок і використання Error.stack.

7. **Performance профайлінг** – node --prof, clinic.js для аналізу
   продуктивності та memory leaks.

8. **Лінтери та статичний аналіз** – eslint, typescript для запобігання
   помилкам.

Коротко: найшвидший старт – console.log та node --inspect, більш системний
підхід – логери й тести.

</details>

<details>
<summary>33. Поясніть, що таке process.nextTick() у Node.js.</summary>

#### Node.js

- process.nextTick() ставить callback у чергу next tick queue, яка виконується
  перед переходом до наступної фази event loop.

- Це означає, що він виконується раніше за setImmediate та setTimeout(0).

- Використовується для відкладення виконання функції, але без виходу з поточного
  циклу подій.

#### Приклад:

```JavaScript
console.log("start");

process.nextTick(() => {
  console.log("nextTick callback");
});

console.log("end");
```

#### Вивід:

```sql
start
end
nextTick callback
```

#### Ключові моменти:

Добре для асинхронних дій, які потрібно виконати після поточної операції, але
перед будь-якими I/O.

Надмірне використання може "заблокувати" event loop, якщо в nextTick постійно
ставити нові колбеки.

</details>

<details>
<summary>34. Що таке глобальний об’єкт у Node.js?</summary>

#### Node.js

- У Node.js глобальний об’єкт — це global, аналогічний до window у браузері.

- Він доступний у будь-якій частині застосунку без require.

- Містить вбудовані об’єкти та функції:

  - `process` – інформація про процес

  - `Buffer` – робота з бінарними даними

  - `setTimeout`, `setInterval`, `setImmediate` – таймери

  - `console` – логування

#### Приклад:

```JavaScript
console.log(global.process.platform);
// Виведе платформу (наприклад, 'darwin' або 'linux')
```

Важливо: краще уникати створення власних глобальних змінних через global, щоб не
було конфліктів у коді.

</details>

<details>
<summary>35. Які фреймворки доступні для тестування застосунків на Node.js?</summary>

#### Node.js

У Node.js існує багато фреймворків і бібліотек для тестування, найпопулярніші:

- **Mocha** – гнучкий тестовий фреймворк (часто разом з Chai для assertions).

- **Jest** – all-in-one фреймворк від Facebook (асерти, мокінг, coverage).

- **Jasmine** – behavior-driven testing, без додаткових бібліотек.

- **AVA** – мінімалістичний, паралельне виконання тестів.

- **Supertest** – спеціально для тестування REST API (часто з Mocha або Jest).

На практиці найчастіше обирають Jest (через простоту та інтеграцію), або Mocha +
Chai + Supertest для більшої гнучкості.

</details>

<details>
<summary>36. Поясніть концепцію мокінгу (mocking) у Node.js.</summary>

#### Node.js

- **Mocking** — це техніка тестування, коли ми імітуємо поведінку залежностей
  (наприклад, бази даних, API, файлової системи), щоб ізолювати й протестувати
  лише потрібний модуль.

- Використовується, коли реальні залежності:

  - повільні (запити до БД чи API),

  - нестабільні (зовнішні сервіси),

  - або не потрібні для конкретного юніт-тесту.

#### Приклад (Jest):

```JavaScript
// userService.js
const db = require("./db");
exports.getUser = (id) => db.findUser(id);

// userService.test.js
const db = require("./db");
jest.mock("./db");

test("getUser returns mocked user", () => {
  db.findUser.mockReturnValue({ id: 1, name: "Test" });

  const userService = require("./userService");
  expect(userService.getUser(1)).toEqual({ id: 1, name: "Test" });
});
```

#### Ключові моменти:

- Моки допомагають писати швидкі та ізольовані юніт-тести.

- Для мокінгу у Node.js найчастіше використовують Jest (вбудовано) або Sinon.js.

</details>

<details>
<summary>37. Чому бенчмаркінг важливий у Node.js?</summary>

#### Node.js

- **Бенчмаркінг** — це вимірювання продуктивності коду (швидкість виконання,
  споживання пам’яті, latency).

- У Node.js це особливо важливо, бо він працює на однопоточному event loop, і
  будь-яка повільна операція може заблокувати виконання всієї програми.

#### Допомагає:

- виявляти вузькі місця (bottlenecks);

- порівнювати різні реалізації функцій/алгоритмів;

- прогнозувати масштабованість при рості навантаження;

- оптимізувати використання CPU та пам’яті.

#### На практиці застосовують:

- модуль benchmark або perf_hooks у Node.js,

- зовнішні інструменти (наприклад, Apache Bench, autocannon, Artillery).

</details>

<details>
<summary>38. Як протестувати HTTP-сервер у Node.js?</summary>

#### Node.js

- Тестування HTTP-сервера зазвичай роблять за допомогою інтеграційних тестів,
  які перевіряють відповіді на реальні запити.

- **Основні підходи:**

1. Використати вбудований модуль http + бібліотеки для запитів (supertest,
   axios, node-fetch).

2. Писати тести через фреймворки — Mocha, Jest, Jasmine.

3. Перевіряти статус-код, заголовки, тіло відповіді.

#### Приклад із supertest + Jest:

```JavaScript
// app.js
const express = require("express");
const app = express();

app.get("/hello", (req, res) => {
  res.status(200).json({ message: "Hello World" });
});

module.exports = app;

// app.test.js
const request = require("supertest");
const app = require("./app");

test("GET /hello should return Hello World", async () => {
  const res = await request(app).get("/hello");
  expect(res.statusCode).toBe(200);
  expect(res.body.message).toBe("Hello World");
});
```

Такий підхід дозволяє запускати сервер у тестовому середовищі, робити
HTTP-запити й перевіряти реальні відповіді.

</details>

<details>
<summary>39. Як підключити базу даних MySQL до Node.js?</summary>

#### Node.js

- Для роботи з MySQL у Node.js використовують клієнтські бібліотеки,
  найпопулярніші: mysql2 або sequelize (ORM).

- Підключення відбувається через створення з’єднання (connection) або пулу
  з’єднань (connection pool).

- Далі можна виконувати SQL-запити або працювати через ORM.

#### Приклад із mysql2:

```JavaScript
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "testdb"
});

connection.connect((err) => {
  if (err) {
    console.error("Помилка підключення:", err);
    return;
  }
  console.log("MySQL підключено!");
});

// Виконання запиту
connection.query("SELECT * FROM users", (err, results) => {
  if (err) throw err;
  console.log(results);
});

connection.end();
```

У продакшні зазвичай використовують пул з’єднань для ефективності й ORM
(Sequelize, TypeORM, Prisma) для зручності.

</details>

<details>
<summary>40. Поясніть, як NoSQL бази даних, наприклад MongoDB, можна використовувати з Node.js.</summary>

#### Node.js

- **MongoDB** — документно-орієнтована база даних, яка зберігає дані у форматі
  JSON-подібних документів (BSON).

- У Node.js найчастіше використовують бібліотеки:

  - mongodb — офіційний драйвер для роботи з MongoDB.

  - Mongoose — ODM (Object Data Modeling), що додає схеми, валідацію та методи
    моделі.

#### Приклад із mongodb (raw driver):

```JavaScript
const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function run() {
  try {
    await client.connect();
    console.log("MongoDB підключено!");
    const db = client.db("testdb");
    const users = db.collection("users");

    // Створення документа
    await users.insertOne({ name: "Alice", age: 30 });

    // Читання документів
    const result = await users.find({}).toArray();
    console.log(result);
  } finally {
    await client.close();
  }
}

run().catch(console.error);
```

#### Приклад із Mongoose:

```JavaScript
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/testdb");

const userSchema = new mongoose.Schema({ name: String, age: Number });
const User = mongoose.model("User", userSchema);

async function run() {
  const alice = new User({ name: "Alice", age: 30 });
  await alice.save();
  const users = await User.find();
  console.log(users);
}
run();
```

#### Переваги NoSQL + Node.js:

- JSON-подібна структура зручно інтегрується з JavaScript.

- Висока масштабованість та швидке прототипування.

- Легка робота з динамічною схемою даних.

</details>

<details>
<summary>41. Яка роль ORM у Node.js?</summary>

#### Node.js

- ORM (Object-Relational Mapping) — це шар між Node.js і базою даних, який
  дозволяє працювати з даними як з JavaScript-об’єктами, а не писати чисті
  SQL-запити.

#### Основні ролі:

1. Абстрагування SQL – розробник маніпулює об’єктами, а ORM генерує SQL-запити.

2. Валідація та схема даних – багато ORM підтримують схеми, типи даних і
   валідацію.

3. Міграції – керування змінами у структурі бази.

4. Взаємозв’язки – легко працювати з зв’язками між таблицями (One-to-Many,
   Many-to-Many).

#### Популярні ORM у Node.js:

- **Sequelize** – для SQL баз (MySQL, PostgreSQL, SQLite).

- **TypeORM** – підтримує TypeScript, SQL та NoSQL (MongoDB).

- **Prisma** – сучасний ORM з генерацією типів TypeScript.

#### Приклад (Sequelize):

```JavaScript
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql://user:pass@localhost:3306/testdb');

const User = sequelize.define('User', {
  name: DataTypes.STRING,
  age: DataTypes.INTEGER
});

(async () => {
  await sequelize.sync();
  await User.create({ name: 'Alice', age: 30 });
  const users = await User.findAll();
  console.log(users);
})();
```

Ключова ідея: ORM спрощує роботу з базами даних, підвищує безпеку (захист від
SQL injection) і робить код більш читабельним.

</details>

<details>
<summary>42. Як можна моніторити продуктивність Node.js застосунку?</summary>

#### Node.js

1. **Вбудовані інструменти:**

- `process.memoryUsage()`, `process.cpuUsage()` — перевірка використання
  ресурсів.

- `console.time()` / `console.timeEnd()` — заміри виконання коду.

2. **Node.js профайлінг:**

- `node --inspect` + Chrome DevTools → профайлінг CPU/heap.

- `clinic.js` (Clinic Doctor, Flame, Bubbleprof).

3. **Моніторинг у продакшн:**

- APM (Application Performance Monitoring): New Relic, Datadog, AppDynamics.

- Метрики через Prometheus + Grafana.

- Логування (Winston, Pino) + централізація логів (ELK stack).

Практика: у великих продакшн-застосунках зазвичай ставлять Prometheus для метрик
і Grafana для дашбордів, плюс APM для глибинного трейсингу.

</details>

<details>
<summary>43. Що таке кластеризація (clustering) у Node.js і як вона працює?</summary>

#### Node.js

- Призначення: Кластеризація дозволяє Node.js використовувати всі CPU-ядра для
  масштабування серверних застосунків.

- Як працює:

1. Node.js за замовчуванням однопотоковий.

2. Модуль cluster створює кілька воркер-процесів, що виконують той самий код.

3. Майстер-процес розподіляє вхідні з’єднання між воркерами.

Практика: дає можливість обробляти більше запитів паралельно без ручного
керування процесами.

#### Приклад:

```JavaScript
const cluster = require('cluster');
const http = require('http');
const os = require('os');

if (cluster.isMaster) {
  const numCPUs = os.cpus().length;
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  http.createServer((req, res) => {
    res.end(`Handled by worker ${process.pid}`);
  }).listen(3000);
}
```

Важливо: кожен воркер має власну пам’ять, тому для обміну даними потрібен IPC
або зовнішнє сховище (Redis, DB).

</details>

<details>
<summary>44. Як запобігти витокам пам’яті (memory leaks) у Node.js застосунку?</summary>

#### Node.js

1. **Правильне управління подіями:**

- Видаляти непотрібні listeners (emitter.removeListener / emitter.off).

- Уникати нескінченної кількості підписок.

2. **Оптимізація замикань:**

- Не тримати посилання на змінні, які більше не потрібні.

- Очищати таймери/інтервали (clearTimeout, clearInterval).

3. **Обмеження кешування:**

- Використовувати LRU Cache або встановлювати ліміти на збережені дані.

4. **Моніторинг та профайлінг:**

- --inspect, Chrome DevTools, clinic.js для перевірки heap snapshots.

- APM (New Relic, Datadog) у продакшн.

5. **Робота зі стрімами:**

- Завжди використовувати .pipe() замість ручного буферизації.

- Закривати стріми після використання.

Практика: У великому застосунку ми виявили memory leak через невидалені
listeners. Вирішили — використали .once() замість .on для одноразових подій і
додали моніторинг heap у продакшн.

</details>

<details>
<summary>45. Поясніть призначення прапорця --inspect у Node.js.</summary>

#### Node.js

- Призначення: прапорець --inspect запускає Node.js у режимі налагодження (debug
  mode).

- Як працює:

  - відкриває віддалений debug-порт (за замовчуванням 127.0.0.1:9229),

  - дозволяє підключати інструменти для відлагодження (Chrome DevTools, VS Code
    Debugger).

- Варіанти:

  - `node --inspect app.js` — стандартний режим.

  - `node --inspect-brk app.js` — запускає в debug і одразу ставить breakpoint
    на першому рядку.

#### Приклад використання:

```bash
node --inspect index.js
```

- відкриває chrome://inspect у Chrome для налагодження.

Практика: зручно для пошуку memory leaks, профайлінгу CPU, покрокового виконання
коду.

</details>

<details>
<summary>46. Як Node.js обробляє багатозадачність (concurrency)?</summary>

#### Node.js

- **Однопоточна модель:** Node.js працює в одному потоці для виконання JS-коду.

- **Event Loop:** використовується подієвий цикл для асинхронних операцій (I/O,
  таймери, мережеві запити).

- **Non-blocking I/O:** важкі операції (читання файлів, запити до БД, HTTP)
  виконуються асинхронно, без блокування головного потоку.

- **libuv thread pool:** під капотом Node.js має пул робочих потоків (4 за
  замовчуванням) для обробки дорогих операцій (наприклад, криптографія, робота з
  файловою системою).

- **Масштабування:** для багатоядерних CPU використовують Cluster API або Worker
  Threads, щоб запускати кілька процесів/потоків паралельно.

Ключова ідея: Node.js досягає concurrency не через багатопоточність у JS-коді, а
завдяки event loop + async I/O + thread pool.

</details>

<details>
<summary>47. У чому різниця між модулями process та child_process у Node.js?</summary>

#### Node.js

- `process`

  - Глобальний об’єкт, що представляє поточний процес Node.js.

  - Дозволяє працювати з аргументами (`process.argv`), середовищем
    (`process.env`), виходами (`stdout`, `stderr`), завершенням
    (`process.exit()`), ресурсами (`process.memoryUsage()`).

  - Використовується для керування поточним середовищем виконання.

- `child_process`

  - Модуль для створення нових процесів із поточного.

  - Методи: `spawn`, `exec`, `fork`, `execFile`.

  - Використовується для виконання зовнішніх команд, скриптів чи створення
    окремих Node.js-процесів.

  - Дає можливість організувати паралельну роботу через окремі процеси.

#### Коротко:

`process` = керування поточним процесом.

`child_process` = створення й керування новими процесами.

</details>

<details>
<summary>48. Як працюють Worker Threads у Node.js?</summary>

#### Node.js

- **Призначення:** Worker Threads дозволяють виконувати JavaScript-код у
  паралельних потоках в межах одного процесу Node.js. Це вирішує проблему
  обмежень однопоточного Event Loop для CPU-інтенсивних задач.

- **Як працює:**

  - Кожен Worker має власний Event Loop, пам’ять та виконання.

  - Обмін даними відбувається через message passing (postMessage /
    on('message')) або SharedArrayBuffer для спільної пам’яті.

  - Основний потік (main thread) створює робітників через модуль
    `worker_threads`.

#### Приклад:

```JavaScript
const { Worker } = require('worker_threads');

const worker = new Worker('./worker.js');
worker.on('message', msg => console.log(`Message: ${msg}`));
worker.postMessage('start');
```

Ключова ідея: Worker Threads = багатопоточність у Node.js для CPU-heavy задач
(наприклад, хешування, обчислення), тоді як I/O краще віддавати Event Loop +
async I/O.

</details>

<details>
<summary>49. Як Node.js використовується в мікросервісній архітектурі?</summary>

#### Node.js

- **Легка вага та швидкість:** завдяки асинхронній подієвій моделі Node.js
  ідеально підходить для побудови сервісів із високою кількістю одночасних
  з’єднань.

- **API Gateway:** часто використовується для створення шлюзів, що агрегують
  запити до різних мікросервісів.

- **Комунікація між сервісами:** реалізація через REST, GraphQL або асинхронні
  шини повідомлень (Kafka, RabbitMQ, NATS).

- **Docker + Kubernetes:** Node.js-сервіси добре контейнеризуються й
  масштабуються в Kubernetes чи іншому оркестраторі.

- **Інтеграція з базами даних:** кожен мікросервіс може мати свою базу
  (PostgreSQL, MongoDB, Redis), і Node.js забезпечує швидке підключення через
  драйвери.

- **Практика:** Node.js часто застосовують для BFF (Backend For Frontend) —
  легких API для мобільних і веб-додатків, які взаємодіють із мікросервісами.

Ключова ідея: Node.js у мікросервісах = швидке, асинхронне API, яке добре
масштабується й легко деплоїться у хмарі.

</details>

<details>
<summary>50. Поясніть, як відбувається міжпроцесна комунікація (Inter-Process Communication, IPC) у мікросервісній архітектурі на Node.js.</summary>

#### Node.js

- **Що таке IPC:** механізми обміну даними між незалежними процесами/сервісами.
  У мікросервісах це критично, бо кожен сервіс ізольований.

- **Основні підходи в Node.js:**

1. HTTP/REST API – найпростіший спосіб (сервіси спілкуються через HTTP-запити).

2. gRPC – швидша двійкова комунікація з автогенерацією клієнтів і контрактами.

3. Message Brokers (async IPC):

- RabbitMQ, Kafka, NATS, Redis Pub/Sub.

- Сервіси публікують/споживають події → loosely coupled архітектура.

4. Вбудований IPC у Node.js (child_process, worker_threads, cluster):

- для комунікації між процесами в межах одного хоста через `.send()` і `message`
  events.

5. WebSockets / Socket.IO: для real-time зв’язку між сервісами чи клієнтом і
   мікросервісами.

- **Практичний приклад:**

  - API Gateway (Node.js) приймає запит → кладе подію в Kafka → сервіс-обробник
    підписаний на цю подію → після обробки повертає результат у базу/чергу.

👉 Ключова ідея: у Node.js мікросервісах IPC реалізується або синхронно
(HTTP/gRPC), або асинхронно (message broker, pub/sub). Вибір залежить від вимог
до швидкості, надійності й масштабованості.

</details>

<details>
<summary>51. Які є поширені практики безпеки для Node.js застосунків?</summary>

#### Node.js

1. **Управління залежностями:**

- Використовувати npm audit, snyk для перевірки вразливостей.

- Мінімізувати кількість сторонніх пакетів.

2. **Валідація даних:**

- Використовувати бібліотеки (наприклад, Joi, zod) для перевірки вводу.

- Захист від SQL/NoSQL інʼєкцій.

3. **Аутентифікація та авторизація:**

- Використовувати JWT або OAuth2.

- Реалізувати role-based доступ (RBAC).

4. **Безпека HTTP:**

- Використовувати helmet для встановлення безпечних заголовків.

- Примусовий HTTPS (HSTS).

5. **Захист від XSS/CSRF:**

- Екранування даних перед рендерингом.

- CSRF-токени (csurf).

6. **Секрети та конфіг:**

- Зберігати ключі у Vault/Secret Manager, а не в коді.

- Використовувати змінні оточення (dotenv тільки для dev).

7. **Rate limiting & захист від brute-force:**

- Використовувати express-rate-limit, slow-down.

8. **Моніторинг та логування:**

- Централізоване логування (Winston, Pino).

- APM/IDS для відстеження аномалій.

Ключова ідея: головне — мінімізувати вразливості у залежностях, захистити дані
користувача й контролювати доступ.

</details>

<details>
<summary>52. Як ви захистите Node.js застосунок від XSS-атак?</summary>

#### Node.js

1. **Екранування (escaping) виводу:**

- Завжди екранувати динамічний контент перед рендерингом у HTML.

- Використовувати шаблонізатори, які автоматично це роблять (наприклад,
  Handlebars, Pug).

2. **Content Security Policy (CSP):**

- Додавати CSP-заголовки через helmet.

- Забороняти inline-скрипти й дозволяти лише whitelist джерела.

3. **Валідація вводу:**

- Використовувати бібліотеки (validator, Joi, zod) для перевірки даних
  користувача.

4. **HTTP-заголовки:**

- X-XSS-Protection, X-Content-Type-Options, X-Frame-Options.

5. **Escaping JSON:**

- При передачі JSON у HTML завжди конвертувати спецсимволи (<, >, /).

6. **Уникати eval, new Function():**

- Вони можуть дати змогу виконати шкідливий код.

7. **Для SPA/React/Vue:**

- Використовувати безпечні API (dangerouslySetInnerHTML у React тільки з
  довірою).

Ключова ідея: захист від XSS = валідація вводу + escaping + CSP + безпечні
заголовки.

</details>

<details>
<summary>53. Що таке змінні оточення (environment variables) і як їх можна використовувати у Node.js?</summary>

#### Node.js

**Змінні оточення** — це ключ-значення, які зберігають конфігурацію додатку поза
кодом.

Приклади: PORT, DB_HOST, JWT_SECRET.

**Використання у Node.js:**

- Доступ через process.env:

```JavaScript
const port = process.env.PORT || 3000;
```

- Для локальної розробки часто використовують пакет dotenv:

```JavaScript
require('dotenv').config();
console.log(process.env.DB_HOST);
```

**Навіщо потрібні:**

- Відокремлення конфігурації від коду (12-factor principle).

- Безпечне зберігання секретів (API keys, tokens).

- Різні значення для dev / staging / production середовищ.

Ключова ідея: змінні оточення = спосіб зробити застосунок гнучким, безпечним і
конфігурованим без змін у коді.

</details>

<details>
<summary>54. Що таке WebSockets і як вони працюють у Node.js?</summary>

#### Node.js

**WebSockets** — це протокол для встановлення постійного двонаправленого
з’єднання між клієнтом і сервером поверх TCP.

**Як працює:**

1. Клієнт надсилає HTTP-запит із заголовком Upgrade: websocket.

2. Сервер відповідає підтвердженням, після чого канал "оновлюється" з HTTP →
   WebSocket.

3. Встановлюється full-duplex з’єднання, де і клієнт, і сервер можуть надсилати
   повідомлення у будь-який момент.

**Node.js реалізація:**

- Вбудованого WebSocket-сервера немає, але використовуються пакети:

  - ws (найпопулярніший lightweight-пакет).

  - socket.io (більш високорівневий, з fallback на long-polling).

**Приклад із ws:**

```JavaScript
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', ws => {
  ws.on('message', msg => console.log(`Received: ${msg}`));
  ws.send('Hello from server!');
});
```

Ключова ідея: WebSockets у Node.js дають можливість будувати real-time
застосунки (чати, ігри, live-нотифікації) з постійним з’єднанням замість
постійних HTTP-запитів.

</details>

<details>
<summary>55. Як налаштувати WebSocket-сервер у Node.js?</summary>

#### Node.js

1. **Використати пакет ws:**

- Це найпопулярніший і легковаговий модуль для WebSocket у Node.js.

2. **Код прикладу:**

```JavaScript
// Встановити: npm install ws
const WebSocket = require('ws');

// Створюємо WebSocket-сервер на порту 8080
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', ws => {
  console.log('Клієнт підключився');

  // Отримання повідомлень від клієнта
  ws.on('message', msg => {
    console.log(`Отримано: ${msg}`);
  });

  // Відправлення повідомлення клієнту
  ws.send('Привіт від сервера!');
});
```

3. **Підключення клієнта (у браузері):**

```JavaScript
const socket = new WebSocket('ws://localhost:8080');

socket.onopen = () => socket.send('Hello Server');
socket.onmessage = event => console.log(event.data);
```

Ключова ідея: налаштування WebSocket-сервера в Node.js = підключаємо ws,
створюємо сервер і слухаємо події connection, message, close.

</details>

<details>
<summary>56. Як задеплоїти Node.js застосунок у продакшн?</summary>

#### Node.js

1. **Підготовка застосунку:**

- Оптимізувати код, мінімізувати залежності.

- Використати process.env для конфігурації (порти, БД, ключі).

2. **Вибір середовища виконання:**

- PM2 або forever для керування процесами.

- Docker для контейнеризації.

3. **Інфраструктура:**

- Хмарні сервіси: AWS, GCP, Azure, DigitalOcean, Heroku, Render.

- Операційна система: Linux (Ubuntu, Debian).

4. **Зворотний проксі (reverse proxy):**

- Використати NGINX або Apache для:

  - HTTPS (TLS-термінація).

  - Балансування навантаження.

  - Сервісу статичних файлів.

5. **Масштабування:**

- Використати Cluster API або PM2 cluster mode для багатоядерних CPU.

- У хмарі — Kubernetes чи Docker Swarm.

6. **Моніторинг і логування:**

- PM2 monit, Winston, Pino, APM (Datadog, New Relic).

Ключова ідея: продакшн-деплой Node.js = керування процесами (PM2), проксі
(NGINX), контейнеризація (Docker), моніторинг і масштабування.

</details>

<details>
<summary>57. Що таке PM2 і як його використовують у Node.js?</summary>

#### Node.js

- **PM2** — це менеджер процесів для Node.js, який допомагає запускати
  застосунки в продакшн.

#### Основні можливості:

1. **Автоматичний рестарт** при падінні застосунку.

2. **Cluster mode** — запуск кількох інстансів Node.js для використання всіх
   ядер CPU.

3. **Моніторинг:** pm2 monit для CPU, пам’яті, логів.

4. **Логування:** збереження stdout/stderr у файли.

5. **Зручне керування:** запуск, зупинка, перезапуск процесів.

6. **Startup scripts:** автостарт після перезавантаження сервера.

#### Приклад використання:

```bash
# Встановлення глобально
npm install -g pm2

# Запуск застосунку
pm2 start app.js

# Запуск у кластерному режимі на всіх ядрах
pm2 start app.js -i max

# Перегляд статусу
pm2 list

# Моніторинг
pm2 monit
```

Ключова ідея: PM2 = production-ready process manager для Node.js, що спрощує
деплой, масштабування та моніторинг.

</details>

<details>
<summary>58. Поясніть, як ви б використали Docker із Node.js застосунком.</summary>

#### Node.js

**Навіщо Docker:**

- Створює ізольоване середовище з усіма залежностями.

- Гарантує однакову роботу застосунку на dev/staging/production.

- Спрощує деплой та масштабування (Kubernetes, Docker Swarm).

**Кроки використання:**

1. Створити Dockerfile:

```Dockerfile
# Базовий образ
FROM node:18-alpine

# Робоча директорія
WORKDIR /usr/src/app

# Копіюємо package.json та встановлюємо залежності
COPY package*.json ./
RUN npm install --production

# Копіюємо код застосунку
COPY . .

# Виставляємо порт
EXPOSE 3000

# Команда запуску
CMD ["node", "app.js"]
```

2. Зібрати образ:

```bash
docker build -t my-node-app .
```

3. Запустити контейнер:

```bash
docker run -p 3000:3000 my-node-app
```

4. (Опційно) Docker Compose:

- Використати для підняття Node.js + база даних + кеш разом.

#### Приклад docker-compose.yml:

```yaml
version: '3'
services:
  app:
    build: .
    ports:
      - '3000:3000'
    depends_on:
      - db
  db:
    image: postgres:15
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass
      POSTGRES_DB: mydb
```

Ключова ідея: Docker із Node.js = ізоляція середовища + легкий деплой +
масштабування у хмарі.

</details>

<details>
<summary>59. Як ви керуєте версіонуванням Node.js API?</summary>

#### Node.js

1. URL-версіонування (найпоширеніше):

- Додавання версії в endpoint:

```bash
GET /api/v1/users
GET /api/v2/users
```

- Простий спосіб паралельно підтримувати старі та нові версії.

2. Заголовки (Header versioning):

- Версія API передається в HTTP-заголовку:

```bash
Accept: application/vnd.myapp.v2+json
```

- Дає більше контролю, але складніше для клієнтів.

3. Query parameters (рідше):

```postgres
GET /api/users?version=2
```

- Легко реалізувати, але не RESTful.

4. Практики:

- Використовувати Semantic Versioning (semver) для змін у контрактах.

- Документувати API (Swagger / OpenAPI).

- Забезпечити deprecation strategy: попереджати клієнтів про застарілі версії.

Ключова ідея: найкраща практика — версія в URL (v1, v2), бо це просто, зрозуміло
й легко підтримувати.

</details>

<details>
<summary>60. Що таке семантичне версіонування (semver) і чому воно важливе у Node.js розробці?</summary>

#### Node.js

**Semantic Versioning (semver)** — це система нумерації версій у форматі:

```
MAJOR.MINOR.PATCH
```

- **MAJOR** – несумісні зміни (breaking changes).

- **MINOR** – новий функціонал без порушення сумісності.

- **PATCH** – виправлення багів і невеликі зміни без впливу на API.

Приклад:

```
2.5.3
↑   ↑   ↑
│   │   └─ PATCH (bugfix)
│   └───── MINOR (new feature, backward-compatible)
└───────── MAJOR (breaking changes)
```

**Важливість у Node.js:**

1. Керування залежностями: npm використовує semver для автоматичного визначення,
   які версії пакетів можна безпечно оновити.

- `^1.2.3` → оновлює до останньої MINOR/ PATCH (але не до 2.0.0).

- `~1.2.3` → оновлює тільки PATCH.

2. Прогнозованість: розробники знають, чи зміни можуть зламати застосунок.

3. Командна робота: полегшує оновлення бібліотек у великих проєктах.

4. Довіра до пакетів: чітке версіонування = надійність екосистеми npm.

Ключова ідея: semver = прозорість і безпечність оновлень. Це стандарт, який
робить Node.js екосистему стабільною.

</details>

<details>
<summary>61. У чому різниця між exports і module.exports у Node.js?</summary>

#### Node.js

`module.exports` — це реальний об’єкт, який повертається при require().
`exports` — це лише посилання на module.exports. Якщо ми змінюємо властивості
через `exports.prop = ...`, усе працює. Але якщо ми робимо `exports = ...`,
зв’язок рветься, і експортуватись буде лише `module.exports`.

Коротко: завжди використовуйте `module.exports` для експорту цілого
об’єкта/класу/функції, а `exports` — лише для додавання властивостей.

</details>

<details>
<summary>62. Як створити простий TCP-сервер у Node.js?</summary>

#### Node.js

У Node.js для цього використовується вбудований модуль `net`.

- Створюємо сервер через `net.createServer()`.

- Підписуємось на подію `connection`, щоб обробляти клієнтів.

- Викликаємо `server.listen(port)` для запуску.

#### Приклад:

```JavaScript
const net = require('net');

const server = net.createServer((socket) => {
  console.log('Client connected');
  socket.write('Hello from server!\n');

  socket.on('data', (data) => {
    console.log('Received:', data.toString());
  });

  socket.on('end', () => {
    console.log('Client disconnected');
  });
});

server.listen(3000, () => {
  console.log('TCP server listening on port 3000');
});
```

</details>

<details>
<summary>63. Що таке REPL у Node.js?</summary>

#### Node.js

REPL (Read–Eval–Print–Loop) — це інтерактивне середовище Node.js, яке дозволяє
писати й одразу виконувати JavaScript-код у консолі.

- **Read:** зчитує введений код.

- **Eval:** виконує його.

- **Print:** показує результат.

- **Loop:** чекає наступне введення.

Використовується для швидкого тестування коду, відладки, роботи з API.
Запускається командою node у терміналі без параметрів.

</details>

<details>
<summary>64. Поясніть роль реверс-проксі у Node.js застосунках.</summary>

#### Node.js

Реверс-проксі (наприклад, Nginx або HAProxy) стоїть перед Node.js-сервером і
виконує роль посередника між клієнтом та додатком. Основні функції:

- Балансування навантаження між кількома інстансами Node.js.

- SSL/TLS термінація — обробка HTTPS, щоб зняти цю відповідальність із Node.js.

- Кешування та стиснення для зменшення навантаження.

- Безпека — приховує прямий доступ до Node.js, додає фільтрацію запитів.

- Маршрутизація — перенаправлення запитів на різні сервіси чи мікросервіси.

Коротко: реверс-проксі робить Node.js-додатки більш продуктивними, безпечними й
масштабованими.

</details>

<details>
<summary>65. Як стріми (streams) у Node.js підвищують продуктивність?</summary>

#### Node.js

Streams дозволяють працювати з даними по частинах (chunk-ами), не завантажуючи
весь файл чи відповідь у пам’ять. Це:

- Економія пам’яті — дані обробляються поступово.

- Швидший респонс — клієнт може почати отримувати результат ще до завершення
  всього процесу.

- Пайплайнінг — можна передавати дані з одного стріму в інший
  (readable.pipe(writable)), зменшуючи оверхед.

- Зручна робота з великими файлами/HTTP-запитами.

Коротко: стріми підвищують ефективність і масштабованість, дозволяючи обробляти
великі обсяги даних без перевантаження пам’яті.

</details>

<details>
<summary>66. Опишіть деякі популярні фреймворки та бібліотеки в екосистемі Node.js.</summary>

#### Node.js

- **Express.js** — мінімалістичний фреймворк для веб-додатків та API.

- **NestJS** — модульний фреймворк з архітектурою, схожою на Angular (TypeScript
  first).

- **Koa.js** — створений командою Express, більш легковаговий і сучасний.

- **Socket.io** — для реалізації WebSockets і реального часу (чат, нотифікації).

- **Mongoose** — ODM для MongoDB.

- **Sequelize** / **Prisma** — ORM для SQL-баз.

- **Jest** / **Mocha** / **Chai** — для тестування.

- **Passport.js** — аутентифікація та авторизація.

Коротко: Express — дефолт для REST, NestJS — для масштабних проєктів, Socket.io
— для real-time, Mongoose/Prisma — для роботи з БД.

</details>

<details>
<summary>67. Чим Koa відрізняється від Express.js?</summary>

#### Node.js

- **Розробники:** Koa створили ті самі автори, що й Express.

- **Архітектура:** Koa більш мінімалістичний, ядро маленьке, більшість функцій
  підключаються як middleware.

- **Async/await:** Koa з самого початку спроєктований для роботи з async/await,
  тому код виглядає чистіше, ніж у Express з callback-ами.

- **Контекст:** у Koa є єдиний ctx (context), що поєднує req та res.

- **Middleware:** у Koa middleware працює за принципом «洋 цибулини» (onion
  model), де можна виконати код до і після наступного middleware.

Коротко: Express простіший і з коробки дає більше, Koa — легший, сучасніший і
більш гнучкий, але вимагає більше налаштувань.

</details>

<details>
<summary>68. Що таке NestJS і коли ви б обрали його для свого Node.js проєкту?</summary>

#### Node.js

**NestJS** — це прогресивний фреймворк для Node.js, побудований на TypeScript.
Він базується на модульній архітектурі та використовує концепції з Angular:
декоратори, DI (dependency injection), модулі, контролери, сервіси.

#### Коли обрати NestJS:

- Для великих корпоративних проєктів з чіткою структурою.

- Коли потрібна масштабованість і зрозумілий поділ на модулі.

- Якщо команда працює з TypeScript і знайома з Angular підходами.

- Для мікросервісної архітектури (NestJS має готові модулі для RabbitMQ, Kafka
  тощо).

- Коли важливі тестованість і підтримуваність.

Коротко: NestJS — це вибір для середніх і великих проєктів, де важлива
структура, модульність і strong typing.

</details>

<details>
<summary>69. Які переваги використання TypeScript із Node.js?</summary>

#### Node.js

- **Статична типізація** — помилки ловляться ще на етапі компіляції.

- **Кращий автокомпліт і рефакторинг** у IDE.

- **Модульність та архітектурна дисципліна** — код стає більш структурованим.

- **Сумісність з сучасним JS** — TS компілюється у чистий JavaScript.

- **Легше масштабування** — великі команди працюють з кодом без хаосу.

- **Інтеграція з популярними фреймворками** (NestJS, Angular, React).

Коротко: TypeScript робить Node.js код більш безпечним, зрозумілим і придатним
для масштабування.

</details>

<details>
<summary>70. Як ви інтегруєте Node.js застосунок зі стороннім API?</summary>

#### Node.js

- Використати HTTP-клієнт: fetch, axios, node-fetch.

- Організувати сервісний шар (service), який відповідає за виклики до API.

- Обробити автентифікацію (API keys, OAuth2, JWT).

- Додати error handling (timeouts, retries, rate limits).

- Використати кешування для зменшення кількості викликів (наприклад, Redis).

- Захистити секрети через env-змінні або Vault.

Коротко: робимо окремий сервісний модуль для API, захищаємо ключі, додаємо
обробку помилок і кешування для продуктивності.

</details>

<details>
<summary>71. Що таке Socket.IO і як він працює з Node.js?</summary>

#### Node.js

**Socket.IO** — це бібліотека для Node.js, яка забезпечує реальний час
(real-time) між сервером і клієнтом через WebSockets або fallback механізми.

#### Як працює:

- Сервер піднімається через const io = require('socket.io')(server).

- Клієнт підключається через io.connect().

- Використовуються події (emit / on) для обміну даними у реальному часі.

- Підтримує rooms, namespaces, broadcasting, що зручно для чатів, ігор,
  нотифікацій.

Коротко: Socket.IO додає двосторонній зв’язок real-time поверх Node.js сервера,
спрощує WebSocket-роботу і автоматично обробляє fallback.

</details>

<details>
<summary>72. Як можна використовувати GraphQL з Node.js?</summary>

#### Node.js

**GraphQL** — це мова запитів і runtime для API, яка дозволяє клієнту запитувати
тільки потрібні дані.

#### Як інтегрувати з Node.js:

- Використати бібліотеки: graphql, apollo-server, express-graphql.

- Визначити схему (type definitions) та резолвери для обробки запитів.

- Сервер отримує запит від клієнта, викликає резолвери і повертає точні дані.

- Підтримує запити, мутації, підписки (subscriptions) для real-time.

Коротко: GraphQL у Node.js замінює REST API, дозволяє гнучкі запити, мінімізує
передачу зайвих даних і спрощує роботу з клієнтом.

</details>

<details>
<summary>73. Як Node.js взаємодіє з фронтенд-фреймворками, такими як Angular або React?</summary>

#### Node.js

Node.js виступає бекендом, а Angular/React — фронтендом. Взаємодія відбувається
через:

- HTTP API (REST) — фронтенд робить запити (fetch / axios) до Node.js сервера.

- GraphQL API — фронтенд отримує точні дані за запитом.

- WebSockets / Socket.IO — для real-time оновлень.

- Node.js також може бути сервером збірки фронтенду (наприклад, через
  express.static) або запускати SSR (Server-Side Rendering) для React/Nuxt.

Коротко: Node.js обробляє запити, бізнес-логіку і дані, а фронтенд через
HTTP/GraphQL/WebSocket взаємодіє з сервером.

</details>

<details>
<summary>74. Що таке server-side rendering (SSR) і як його реалізувати з Node.js?</summary>

#### Node.js

Server-Side Rendering — це процес, коли HTML генерується на сервері, а не в
браузері, і відправляється готовим клієнту. Це покращує SEO, швидкість
первинного рендеру і UX.

#### Як реалізувати з Node.js:

- React SSR: використати ReactDOMServer.renderToString() у Node.js
  (Express/NestJS).

- Next.js: фреймворк на Node.js для React з готовим SSR і SSG (Static Site
  Generation).

- Angular Universal: для Angular-проєктів SSR через Node.js.

- Сервер отримує запит, рендерить HTML, відправляє клієнту, а React/Angular
  потім «гідрує» сторінку.

Коротко: SSR на Node.js робить сторінки швидкими та SEO-дружніми, генерує HTML
на сервері замість клієнта.

</details>

<details>
<summary>75. ???</summary>

#### Node.js

- Coming soon...😎

</details>

<details>
<summary>76. ???</summary>

#### Node.js

- Coming soon...😎

</details>

<details>
<summary>77. ???</summary>

#### Node.js

- Coming soon...😎

</details>

<details>
<summary>78. ???</summary>

#### Node.js

- Coming soon...😎

</details>

<details>
<summary>79. ???</summary>

#### Node.js

- Coming soon...😎

</details>

<details>
<summary>80. ???</summary>

#### Node.js

- Coming soon...😎

</details>

<details>
<summary>81. ???</summary>

#### Node.js

- Coming soon...😎

</details>

<details>
<summary>82. ???</summary>

#### Node.js

- Coming soon...😎

</details>

<details>
<summary>83. ???</summary>

#### Node.js

- Coming soon...😎

</details>

<details>
<summary>84. ???</summary>

#### Node.js

- Coming soon...😎

</details>

<details>
<summary>85. ???</summary>

#### Node.js

- Coming soon...😎

</details>

<details>
<summary>86. ???</summary>

#### Node.js

- Coming soon...😎

</details>
