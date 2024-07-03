import Head from "next/head";
import Link from "next/link";
import Highlight from "react-highlight";
import Layout from "../../components/Layout";
import PlatformIcon from "../../components/PlatformIcon";
import Notice from "../../components/Notice";
import Asciinema from "../../components/Asciinema";

export default () => (
  <Layout>
    <Head>
      <title>استفاده از Drizzle ORM در برنامه‌های TypeScript - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="drizzle" />
      <div className="page-title">
        <h1>استفاده از Drizzle ORM در برنامه‌های TypeScript</h1>
        <span className="page-description">(Drizzle ORM)</span>
      </div>
    </div>

    <p>
      <a href="https://orm.drizzle.team/docs/overview">Drizzle</a> یک headless
      ORM برای TypeScript است که امروزه بخاطر سرعت بسیار بالا، سادگی و بهینگی
      بیشتر نسبت به <a href="../prisma">Prisma ORM</a>، مورد توجه قرار گرفته
      است. شما می‌توانید در برنامه‌های TypeScript خود در لیارا، از این ORM سبک و
      استثنایی استفاده کنید. در ادامه مستندات مربوط به Drizzle برایتان قرار
      گرفته است.
    </p>
    <ul className="mt-0">
      <li>
        <a href="#nextjs-drizzle-orm-app">
          ساخت برنامه ToDo با استفاده از NextJS و Drizzle ORM
        </a>
      </li>
      <li>
        <a href="#deploy-typescript-drizzle-apps">
          استقرار برنامه‌های TypeScript با Drizzle در لیارا
        </a>
      </li>
    </ul>

    <h3 id="nextjs-drizzle-orm-app">
      ساخت برنامه ToDo با استفاده از NextJS و Drizzle ORM
    </h3>
    <p>
      برای ساخت یک برنامه Todo با استفاده از فریم‌ورک{" "}
      <a href="/app-deploy/nextjs/getting-started">NextJS</a> و Drizzle ORM، در
      ابتدا، بایستی با اجرای دستور زیر، برنامه NextJS خود را ایجاد کنید:
    </p>
    <Highlight className="bash">{`npx create-next-app@latest drizzle-todo-app`}</Highlight>
    <Asciinema id="create-drizzle-app" />

    <p>
      در ادامه، وارد دایرکتوری پروژه شوید و با اجرای دستورات زیر، وابستگی‌های
      برنامه را نصب کنید:
    </p>
    <Highlight className="bash">{`npm update --save
npm install drizzle-orm dotenv pg
npm install -D drizzle-kit
`}</Highlight>
    <Notice variant="info">
      در نظر داشته باشید که در برنامه، از دیتابیس{" "}
      <a href="/databases/postgresql/install">PostgreSQL</a> استفاده خواهد شد،
      اما شما می‌توانید از دیتابیس‌های دیگری مثل{" "}
      <a href="/databases/mysql/install">MySQL</a> (با نصب ماژول{" "}
      <span className="code">mysql2</span> به جای pg) یا SQLite (با نصب ماژول{" "}
      <span className="code">better-sqlite3</span> به جای pg و اجرای دستور{" "}
      <span className="code">npm i --save-dev @types/better-sqlite3</span>)
      استفاده کنید.
    </Notice>

    <p>
      در ادامه، برای به خطا نخوردن برنامه، قطعه کد زیر را به{" "}
      <span className="code">compilerOptions</span> در فایل{" "}
      <span className="code">tsconfig.json</span> اضافه کنید:
    </p>
    <Highlight className="bash">{`"target": "es2017",`}</Highlight>

    <p>
      در مسیر اصلی پروژه، یک فایل به نام <span className="code">.env</span>{" "}
      ایجاد کنید و URI مربوط به دیتابیس خود را در آنجا در متغیر{" "}
      <span className="code">DATABASE_URL</span> قرار دهید، به عنوان مثال:
    </p>
    <Highlight className="bash">{`DATABASE_URL=postgresql://root:XkYgSzHmMAf9chdgp2OXOtlb@bromo.liara.cloud:32308/test_db`}</Highlight>
    <p>
      اگر که از دیتابیس MySQL استفاده می‌کنید؛ بایستی متغیرهای زیر را مقداردهی
      کنید:
    </p>
    <Highlight className="bash">{`DATABASE_URL=mysql://root:H8SEXjqVJruODzgbyW74baa1@bromo.liara.cloud:31384/priceless_sanderson
DB_HOST=bromo.liara.cloud
DB_PORT=31384
DB_USER=root
DB_NAME=priceless_sanderson
DB_PASS=H8SEXjqVJruODzgbyW74baa1`}</Highlight>

    <p>
      در دایرکتوری src یک فایل به نام <span className="code">db.ts</span> ایجاد
      کنید و قطعه کد زیر را در آن، قرار دهید:
    </p>
    <Highlight className="ts">{`import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";
import { config } from 'dotenv';

config({ path: '.env' });

const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });


await client.connect();
export const db = drizzle(client);
`}</Highlight>

    <p>
      اما اگر که قصد دارید از دیتابیس MySQL استفاده کنید، قطعه کد زیر را، قرار
      دهید:
    </p>
    <Highlight className="ts">{`import { drizzle } from "drizzle-orm/mysql2";
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
  
export const db = drizzle(poolConnection);`}</Highlight>

    <p>
      برای دیتابیس SQLite هم می‌توانید از قطعه کد زیر استفاده کنید. در نظر داشته
      باشید که باید درون دایرکتوری src یک دایرکتوری به نام{" "}
      <span className="code">database</span> ایجاد کنید:
    </p>

    <Highlight className="ts">{`import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3'

const sqlite = new Database('./src/database/sqlite.db');
export const db = drizzle(sqlite);
`}</Highlight>

    <Highlight className="ts">{``}</Highlight>

    <p>
      مجدداً در دایرکتوری src، یک فایل دیگر به نام{" "}
      <span className="code">schema.ts</span> قرار دهید و قطعه کد زیر را در آن،
      وارد کنید:
    </p>

    <Highlight className="ts">{`import { boolean, integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const todoTable = pgTable('todo_table', {
  id: serial('id').primaryKey(),
  text: text('text').notNull(),
  done: boolean('done').default(false),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export type TodoType = typeof todoTable.$inferSelect;
`}</Highlight>

    <p>برای دیتابیس mysql، قطعه کد زیر را قرار دهید:</p>
    <Highlight className="ts">{`import { boolean, int, mysqlTable, serial, text, timestamp } from 'drizzle-orm/mysql-core';

export const todoTable = mysqlTable('todo_table', {
  id: serial('id').primaryKey(),
  text: text('text').notNull(),
  done: boolean('done').default(false),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export type TodoType = typeof todoTable.$inferSelect;`}</Highlight>

    <p>برای دیتابیس SQLite نیز می‌توانید قطعه کد زیر را قرار دهید:</p>
    <Highlight className="ts">{`import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { sql } from "drizzle-orm";

export const todoTable = sqliteTable ('todo_table', {
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  text: text('text').notNull(),
  done: integer('done', {mode: 'boolean'}).default(false),
  createdAt: text('created_at').default(sql\`(CURRENT_TIMESTAMP)\`).notNull(),
});

export type TodoType = typeof todoTable.$inferSelect;`}</Highlight>

    <p>
      سپس، در مسیر اصلی پروژه، یک فایل به نام{" "}
      <span className="code">drizzle.config.ts</span> ایجاد کنید و قطعه کد زیر
      را در آن، قرار دهید:
    </p>

    <Highlight className="ts">{`import { config } from 'dotenv';
import { defineConfig } from 'drizzle-kit';

config({ path: '.env' });

export default defineConfig({
  schema: './src/schema.ts',
  out: './migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});`}</Highlight>
    <Notice variant="info">
      اگر که از دیتابیس MySQL استفاده می‌کنید؛ باید در فیلد{" "}
      <span className="code">dialect</span>، به جای postgresql، مقدار{" "}
      <span className="code">mysql</span> را قرار دهید.
    </Notice>
    <Notice variant="info">
      اگر که از دیتابیس SQLite استفاده می‌کنید؛ باید در فیلد dialect، به جای
      postgresql، مقدار <span className="code">sqlite</span> را قرار دهید؛
      همچنین مقدار فیلد <span className="code">url</span> در{" "}
      <span className="code">dbCredentials</span> را باید برابر با{" "}
      <span className="code">'./src/database/sqlite.db'</span> قرار دهید.
    </Notice>

    <p>در نظر داشته باشید که کار با Drizzle در سه مرحله می‌تواند خلاصه شود:</p>
    <ul>
      <li>مرحله اول: تعریف schema</li>
      <li>مرحله دوم: ایجاد فایل‌های migration از schema</li>
      <li>مرحله سوم: اجرای migrationها در دیتابیس</li>
    </ul>
    <p>
      اکنون، می‌توانید با اجرای دو دستور زیر در ترمینال پروژه اصلی خود، مرحله
      دوم و سوم را نیز طی کنید:
    </p>
    <Highlight className="bash">{`npx drizzle-kit generate
npx drizzle-kit migrate`}</Highlight>

    <p>
      اکنون، بایستی در مسیر <span className="code">src/pages/api</span> یک فایل
      به نام <span className="code">todos.ts</span> ایجاد کنید و قطعه کد زیر را،
      در آن، قرار دهید:
    </p>

    <Highlight className="ts">{`import type { NextApiRequest, NextApiResponse } from 'next';
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
      res.status(405).end(\`Method \${method} Not Allowed\`);
  }
}
`}</Highlight>
    <p>
      اکنون می‌توانید componentهای مربوط به front-end را نیز ایجاد کنید. برای
      این‌کار می‌توانید در دایرکتوری src، یک دایرکتوری به نام{" "}
      <span className="code">components</span> ایجاد کنید و درون این دایرکتوری،
      یک فایل به نام <span className="code">AddTodo.tsx</span> ایجاد کنید و قطعه
      کد زیر را، در آن، قرار دهید:
    </p>
    <Highlight className="ts">{`import { useState, FormEvent } from 'react';

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

export default AddTodo;`}</Highlight>

    <p>
      همچنین، در همین مسیر، بایستی یک فایل به نام{" "}
      <span className="code">Todo.tsx</span> ایجاد کرده و قطعه کد زیر را، در آن،
      قرار دهید:
    </p>

    <Highlight className="bash">{`import { useState } from 'react';
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
        <span className={\`todo-text \${todo.done ? 'done' : ''}\`}>
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
`}</Highlight>

    <p>
      در نهایت، بایستی یک component دیگر به نام{" "}
      <span className="code">Todos.tsx</span> ایجاد کنید و قطعه کد زیر را، در آن
      قرار دهید:
    </p>
    <Highlight className="ts">{`// src/components/Todos.tsx
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
      <h2>Active Todos</h2>
      <div>
        {activeTodos.map((todo) => (
          <Todo key={todo.id} todo={todo} onUpdate={fetchTodos} onDelete={fetchTodos} />
        ))}
      </div>
      <h2>Done Todos</h2>
      <div>
        {doneTodos.map((todo) => (
          <Todo key={todo.id} todo={todo} onUpdate={fetchTodos} onDelete={fetchTodos} />
        ))}
      </div>
    </div>
  );
};

export default Todos;
`}</Highlight>

    <p>
      در انتها، بایستی در فایل <span className="code">src/pages/index.tsx</span>{" "}
      قطعه کد زیر را، قرار دهید:
    </p>
    <Highlight className="tsx">{`import Todos from '@/components/Todos';

export default function Home() {
  return (
    <div>
      <h1>Todo List</h1>
      <Todos />
    </div>
  );
}
`}</Highlight>

    <p>
      تمامی کارها انجام شده است و می‌توانید برنامه خود را با دستور زیر، اجرا
      کرده و از آن، استفاده کنید:{" "}
    </p>
    <Highlight className="bash">{`npm run dev`}</Highlight>

    <Notice variant="info">
      یک نمونه کامل از پروژه‌ فوق که آماده مستقر شدن در لیارا است را می‌توانید
      در{" "}
      <Link href="https://github.com/liara-cloud/drizzle-getting-started">
        اینجا
      </Link>{" "}
      مشاهده کنید.{" "}
    </Notice>

    <h3 id="deploy-typescript-drizzle-apps">
      استقرار برنامه‌های TypeScript با Drizzle در لیارا
    </h3>
    <p>
      برای استقرار برنامه‌های وابسته به Drizzle ORM نیاز به انجام کاری نیست. فقط
      کافیست تا قبل از دیپلوی، متغیرهای محیطی مورد نیاز دیتابیس را طبق مستندات{" "}
      <a href="/app-features/environment-variables">متغیرهای محیطی</a> به برنامه
      اضافه کنید و دستور زیر را اجرا کنید تا فایل‌های migration برای‌تان ایجاد
      شوند:
    </p>
    <Highlight className="bash">{`npx drizzle-kit generate`}</Highlight>
    <p>
      اگر که از دیتابیس SQLite استفاده می‌کنید، باید برای آن یک دیسک ایجاد کنید
      و طبق مستندات مربوط به <a href="/disks/about">دیسک‌ها</a>، یک دیسک ایجاد و
      به مسیر دیتابیس، متصل کنید.
    </p>
    <p>
      سپس، بایستی در فایل <span className="code">package.json</span> یک اسکریپت
      به نام <span className="code">migrate</span> با دستور زیر، اضافه کنید:
    </p>
    <Highlight className="json">
      {`{
    "scripts": {
        "dev": "next dev",
        "build": "next build",
        "start": "next start",
        "lint": "next lint",
        "migrate": "drizzle-kit migrate --config drizzle.config.ts"
  },
}`}
    </Highlight>
    <p>
      در ادامه، طبق مستندات مربوط به Hookها، باید در مسیر اصلی پروژه، یک فایل به
      نام <span className="code">liara_pre_build.sh</span> ایجاد کنید و قطعه کد
      زیر را در آن قرار دهید:
    </p>
    <Highlight className="bash">
      {`npm install drizzle-orm;
npm install -D drizzle-kit;
npm run migrate;`}
    </Highlight>
    <p>
      در نهایت، کافیست تا دستور <span className="code">liara deploy</span> را
      اجرا کنید تا برنامه‌تان در لیارا مستقر شود. پس از استقرار موفق، می‌توانید
      از برنامه خود استفاده کنید.
    </p>
  </Layout>
);
