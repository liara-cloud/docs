Original link: https://docs.liara.ir/paas/nodejs/how-tos/connect-to-db/drizzle/todo-project/

# ساخت برنامه Todo با Drizzle و PostgreSQL , MySQL و SQLite در NextJS

برای ساخت یک برنامه Todo با استفاده از فریم‌ورک  
[NextJS](https://docs.liara.ir/paas/nextjs/getting-started) و Drizzle ORM، در  
ابتدا، بایستی با اجرای دستور زیر، برنامه NextJS خود را ایجاد کنید:

```bash
npx create-next-app@latest drizzle-todo-app
```

در ادامه، وارد دایرکتوری پروژه شوید و متناسب با دیتابیس انتخابی خود، مراحل ساخت برنامه را جلو ببرید.

## PostgreSQL

با اجرای دستورات زیر، وابستگی‌های  
برنامه را نصب کنید:

```bash
npm update --save
npm install drizzle-orm dotenv pg
npm install -D drizzle-kit
```

در ادامه، برای به خطا نخوردن برنامه، قطعه کد زیر را به  
`compilerOptions` در فایل  
`tsconfig.json` اضافه کنید:

```bash
"target": "es2017",
```

در مسیر اصلی پروژه، یک فایل به نام `env.`  
ایجاد کنید و URI مربوط به دیتابیس خود را در آنجا در متغیر  
`DATABASE_URL` قرار دهید، به عنوان مثال:

```bash
DATABASE_URL=postgresql://root:XkYgSzHmMAf9chdgp2OXOtlb@bromo.liara.cloud:32308/test_db
```

در دایرکتوری src یک فایل به نام `db.ts` ایجاد  
کنید و قطعه کد زیر را در آن، قرار دهید:

```ts
import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";
import { config } from 'dotenv';

config({ path: '.env' });

const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });


await client.connect();
export const db = drizzle(client);

```

مجدداً در دایرکتوری src، یک فایل دیگر به نام  
`schema.ts` قرار دهید و قطعه کد زیر را در آن،  
وارد کنید:

```ts
import { boolean, integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const todoTable = pgTable('todo_table', {
  id: serial('id').primaryKey(),
  text: text('text').notNull(),
  done: boolean('done').default(false),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export type TodoType = typeof todoTable.$inferSelect;

```

سپس، در مسیر اصلی پروژه، یک فایل به نام  
`drizzle.config.ts` ایجاد کنید و قطعه کد زیر  
را در آن، قرار دهید:


```ts
import { config } from 'dotenv';
import { defineConfig } from 'drizzle-kit';

config({ path: '.env' });

export default defineConfig({
  schema: './src/schema.ts',
  out: './migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
```

در نظر داشته باشید که کار با Drizzle در سه مرحله می‌تواند خلاصه شود:  
۱. تعریف Schema

۲. ایجاد فایل‌های migration از schema

۳. اجرای migrationها در دیتابیس

اکنون، می‌توانید با اجرای دو دستور زیر در ترمینال پروژه اصلی خود، مرحله  
دوم و سوم را نیز انجام دهید:

```bash
npx drizzle-kit generate
npx drizzle-kit migrate
```

## MySQL

با اجرای دستورات زیر، وابستگی‌های  
برنامه را نصب کنید:

```bash
npm update --save
npm install drizzle-orm dotenv mysql2
npm install -D drizzle-kit
```

در ادامه، برای به خطا نخوردن برنامه، قطعه کد زیر را به  
`compilerOptions` در فایل  
`tsconfig.json` اضافه کنید:

```bash
"target": "es2017",
```

در مسیر اصلی پروژه، یک فایل به نام `env.`  
ایجاد کنید و URI مربوط به دیتابیس خود را در آنجا در متغیر  
`DATABASE_URL` قرار دهید، به عنوان مثال:

```bash
DATABASE_URL=mysql://root:H8SEXjqVJruODzgbyW74baa1@bromo.liara.cloud:31384/priceless_sanderson
DB_HOST=bromo.liara.cloud
DB_PORT=31384
DB_USER=root
DB_NAME=priceless_sanderson
DB_PASS=H8SEXjqVJruODzgbyW74baa1
```

در دایرکتوری src یک فایل به نام `db.ts` ایجاد  
کنید و قطعه کد زیر را در آن، قرار دهید:

```ts
import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import { config } from 'dotenv';

config({ path: '.env' });

const poolConnection = mysql.createPool({
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT ?? "3306", 10),
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS
  });
  
export const db = drizzle(poolConnection);
```

مجدداً در دایرکتوری src، یک فایل دیگر به نام  
`schema.ts` قرار دهید و قطعه کد زیر را در آن،  
وارد کنید:

```ts
import { boolean, int, mysqlTable, serial, text, timestamp } from 'drizzle-orm/mysql-core';

export const todoTable = mysqlTable('todo_table', {
  id: serial('id').primaryKey(),
  text: text('text').notNull(),
  done: boolean('done').default(false),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export type TodoType = typeof todoTable.$inferSelect;
```

سپس، در مسیر اصلی پروژه، یک فایل به نام  
`drizzle.config.ts` ایجاد کنید و قطعه کد زیر  
را در آن، قرار دهید:


```ts
import { config } from 'dotenv';
import { defineConfig } from 'drizzle-kit';

config({ path: '.env' });

export default defineConfig({
  schema: './src/schema.ts',
  out: './migrations',
  dialect: 'mysql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
```

در نظر داشته باشید که کار با Drizzle در سه مرحله می‌تواند خلاصه شود:  
۱. تعریف Schema

۲. ایجاد فایل‌های migration از schema

۳. اجرای migrationها در دیتابیس

اکنون، می‌توانید با اجرای دو دستور زیر در ترمینال پروژه اصلی خود، مرحله  
دوم و سوم را نیز انجام دهید:

```bash
npx drizzle-kit generate
npx drizzle-kit migrate
```

## SQLite

با اجرای دستورات زیر، وابستگی‌های  
برنامه را نصب کنید:

```bash
npm update --save
npm install drizzle-orm dotenv better-sqlite3
npm install --save-dev @types/better-sqlite3
npm install -D drizzle-kit
```

در ادامه، برای به خطا نخوردن برنامه، قطعه کد زیر را به  
`compilerOptions` در فایل  
`tsconfig.json` اضافه کنید:

```bash
"target": "es2017",
```

در دایرکتوری src یک فایل به نام `db.ts` ایجاد  
کنید و قطعه کد زیر را در آن، قرار دهید:

```ts
import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3'

const sqlite = new Database('./src/database/sqlite.db');
export const db = drizzle(sqlite);

```

مجدداً در دایرکتوری src، یک دایرکتوری به نام `database` و یک فایل دیگر به نام  
`schema.ts` قرار دهید و  درون این فایل، قطعه کد زیر را،  
وارد کنید:

```ts
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { sql } from "drizzle-orm";

export const todoTable = sqliteTable ('todo_table', {
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  text: text('text').notNull(),
  done: integer('done', {mode: 'boolean'}).default(false),
  createdAt: text('created_at').default(sql`(CURRENT_TIMESTAMP)`).notNull(),
});

export type TodoType = typeof todoTable.$inferSelect;
```

سپس، در مسیر اصلی پروژه، یک فایل به نام  
`drizzle.config.ts` ایجاد کنید و قطعه کد زیر  
را در آن، قرار دهید:


```ts
import { config } from 'dotenv';
import { defineConfig } from 'drizzle-kit';

config({ path: '.env' });

export default defineConfig({
  schema: './src/schema.ts',
  out: './migrations',
  dialect: 'sqlite',
  dbCredentials: {
    url: './src/database/sqlite.db',
  },
});
```

در نظر داشته باشید که کار با Drizzle در سه مرحله می‌تواند خلاصه شود:  
۱. تعریف Schema

۲. ایجاد فایل‌های migration از schema

۳. اجرای migrationها در دیتابیس

اکنون، می‌توانید با اجرای دو دستور زیر در ترمینال پروژه اصلی خود، مرحله  
دوم و سوم را نیز انجام دهید:

```bash
npx drizzle-kit generate
npx drizzle-kit migrate
```

سپس، بایستی در مسیر `src/pages/api` یک فایل  
به نام `todos.ts` ایجاد کنید و قطعه کد زیر را،  
در آن، قرار دهید:

```ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/db';
import { todoTable, TodoType } from '@/schema';
import { eq } from 'drizzle-orm';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case 'POST':
      const { text } = req.body;
      await db.insert(todoTable).values({ text });
      res.status(201).end();
      break;

    case 'GET':
      const todos: TodoType[] = await db.select().from(todoTable);
      res.status(200).json(todos);
      break;

    case 'PUT':
      const { id, text: newText, done } = req.body;
      await db.update(todoTable).set({ text: newText, done: done ? true : false }).where(eq(todoTable.id, id));
      res.status(200).end();
      break;

    case 'DELETE':
      const { id: deleteId } = req.body;
      await db.delete(todoTable).where(eq(todoTable.id, deleteId));
      res.status(200).end();
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

```

اکنون می‌توانید componentهای مربوط به front-end را نیز ایجاد کنید. برای  
این‌کار می‌توانید در دایرکتوری src، یک دایرکتوری به نام  
`components` ایجاد کنید و درون این دایرکتوری،  
یک فایل به نام `AddTodo.tsx` ایجاد کنید و قطعه  
کد زیر را، در آن، قرار دهید:

```ts
import { useState, FormEvent } from 'react';

interface AddTodoProps {
  onAdd: () => void;
}

const AddTodo = ({ onAdd }: AddTodoProps) => {
  const [text, setText] = useState<string>('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;

    const res = await fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });

    if (res.ok) {
      onAdd();
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Add a new task" 
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
```

همچنین، در همین مسیر، بایستی یک فایل به نام  
`Todo.tsx` ایجاد کرده و قطعه کد زیر را، در آن،  
قرار دهید:

```ts
import { useState } from 'react';
import { TodoType } from '@/schema';

interface TodoProps {
  todo: TodoType;
  onUpdate: () => void;
  onDelete: () => void;
}

const Todo = ({ todo, onUpdate, onDelete }: TodoProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleEdit = async () => {
    await fetch('/api/todos', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: todo.id, text, done: todo.done }),
    });
    setIsEditing(false);
    onUpdate();
  };

  const handleToggle = async () => {
    await fetch('/api/todos', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: todo.id, text: todo.text, done: !todo.done }),
    });
    onUpdate();
  };

  const handleDelete = async () => {
    await fetch('/api/todos', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: todo.id }),
    });
    onDelete();
  };

  return (
    <div className="todo-item">
      {isEditing ? (
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      ) : (
        <span className={`todo-text ${todo.done ? 'done' : ''}`}>
          {todo.text}
        </span>
      )}
      <div className="todo-actions">
        {isEditing ? (
          <button onClick={handleEdit}>Save</button>
        ) : (
          <>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={handleToggle}>
              {todo.done ? 'Undone' : 'Done'}
            </button>
            <button onClick={handleDelete}>Delete</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Todo;
```

در نهایت، بایستی یک component دیگر به نام  
`Todos.tsx` ایجاد کنید و قطعه کد زیر را، در آن  
قرار دهید:

```ts
// src/components/Todos.tsx
import { useState, useEffect } from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';
import { TodoType } from '@/schema';

const Todos = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const fetchTodos = async () => {
    const res = await fetch('/api/todos');
    const data: TodoType[] = await res.json();
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const activeTodos = todos.filter(todo => !todo.done);
  const doneTodos = todos.filter(todo => todo.done);

  return (
    <div>
      <AddTodo onAdd={fetchTodos} />
      ## Active Todos
      <div>
        {activeTodos.map((todo) => (
          <Todo key={todo.id} todo={todo} onUpdate={fetchTodos} onDelete={fetchTodos} />
        ))}
      </div>
      ## Done Todos
      <div>
        {doneTodos.map((todo) => (
          <Todo key={todo.id} todo={todo} onUpdate={fetchTodos} onDelete={fetchTodos} />
        ))}
      </div>
    </div>
  );
};

export default Todos;
```

در انتها، بایستی در فایل `src/pages/index.tsx`  
قطعه کد زیر را، قرار دهید:

```tsx
import Todos from '@/components/Todos';

export default function Home() {
  return (
    <div>
      <h1>Todo List</h1>
      <Todos />
    </div>
  );
}
```

تمامی کارها انجام شده است و می‌توانید برنامه خود را با دستور زیر، اجرا  
کرده و از آن، استفاده کنید:

```bash
npm run dev
```

> یک نمونه کامل از پروژه‌ فوق که آماده مستقر شدن در لیارا است را می‌توانید در [اینجا](https://github.com/liara-cloud/drizzle-getting-started) مشاهده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
