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
<summary>5. ???</summary>

#### Node.js

- Coming soon...😎

</details>

<details>
<summary>6. ???</summary>

#### Node.js

- Coming soon...😎

</details>

<details>
<summary>7. ???</summary>

#### Node.js

- Coming soon...😎

</details>

<details>
<summary>8. ???</summary>

#### Node.js

- Coming soon...😎

</details>

<details>
<summary>9. ???</summary>

#### Node.js

- Coming soon...😎

</details>

<details>
<summary>10. ???</summary>

#### Node.js

- Coming soon...😎

</details>

<details>
<summary>11. ???</summary>

#### Node.js

- Coming soon...😎

</details>
