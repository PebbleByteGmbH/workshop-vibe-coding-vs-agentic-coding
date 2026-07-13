---
name: indexdb-database-developer
description: "Use this skill whenever workshop code stores, reads, updates, deletes, lists, migrates, resets, or validates local app data. This is the database skill: all local persistence must use the browser's IndexedDB API. Do not use localStorage, sessionStorage, cookies, remote databases, servers, Node.js, npm, Docker, installed databases, frameworks, build steps, or installed runtimes."
---

# IndexDB Database Developer

## When To Use

Use this skill when the task involves local data:

- saving records;
- loading records;
- listing records;
- updating records;
- deleting records;
- clearing all records;
- designing a local schema;
- changing an IndexedDB version;
- debugging persistence;
- reviewing whether data storage follows the workshop rules.

Use `frontend-developer` together with this skill when the data is shown or edited in the UI.

## Why To Use

IndexedDB is built into modern browsers. It lets the workshop store structured local data without requiring any installed database, backend server, package manager, build system, Docker image, or language runtime.

Use this skill to keep persistence:

- browser-only;
- local-first;
- available offline;
- structured enough for CRUD exercises;
- portable across Windows, Linux, and macOS;
- consistent across workshop examples.

## Ground Rules

- Use IndexedDB for all app persistence.
- Do not use `localStorage`, `sessionStorage`, cookies, remote databases, hosted backends, cloud sync, analytics storage, or server persistence.
- Do not require Node.js, npm, Docker, server processes, CLIs, native database installs, or language runtimes.
- The app must work with only a modern browser installed.
- Prefer direct IndexedDB APIs over libraries.
- If a library is truly needed, it must be a browser-ready file under `src/vendor/` or an explicitly accepted CDN script.
- Keep schema constants in one place.
- Validate stored records after reading them.
- Provide a visible reset or clear-data path when persistence affects a demo.
- Never store secrets, passwords, private API keys, or tokens in IndexedDB for workshop demos.

## How To Use

1. Define constants for database name, database version, and object store names.
2. Open the database with `indexedDB.open(name, version)`.
3. Create or update object stores only in `onupgradeneeded`.
4. Wrap database requests in Promise-based helper functions.
5. Keep database helpers separate from UI rendering once the code grows.
6. Write CRUD helpers: create, read/list, update, delete, and clear.
7. Update the database first, then refresh UI state from IndexedDB.
8. Handle request failures and empty databases.
9. Test by adding data, refreshing the page, editing data, deleting data, and clearing site data.

## Schema Example

```js
const DB_NAME = "workshop-app";
const DB_VERSION = 1;
const TASK_STORE = "tasks";
```

## Open Database Example

```js
function openDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = () => {
      const database = request.result;

      if (!database.objectStoreNames.contains(TASK_STORE)) {
        database.createObjectStore(TASK_STORE, { keyPath: "id" });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}
```

## CRUD Example

```js
async function getTasks() {
  const database = await openDatabase();

  return new Promise((resolve, reject) => {
    const transaction = database.transaction(TASK_STORE, "readonly");
    const store = transaction.objectStore(TASK_STORE);
    const request = store.getAll();

    request.onsuccess = () => {
      const tasks = request.result.filter(isTask);
      tasks.sort((first, second) => first.createdAt - second.createdAt);
      resolve(tasks);
    };

    request.onerror = () => reject(request.error);
    transaction.oncomplete = () => database.close();
    transaction.onerror = () => reject(transaction.error);
  });
}

async function addTask(text) {
  const task = {
    id: crypto.randomUUID(),
    text,
    completed: false,
    createdAt: Date.now()
  };

  await writeRecord("add", task);
  return task;
}

async function updateTask(task) {
  await writeRecord("put", task);
}

async function deleteTask(id) {
  const database = await openDatabase();

  return new Promise((resolve, reject) => {
    const transaction = database.transaction(TASK_STORE, "readwrite");
    const store = transaction.objectStore(TASK_STORE);

    store.delete(id);

    transaction.oncomplete = () => {
      database.close();
      resolve();
    };

    transaction.onerror = () => {
      database.close();
      reject(transaction.error);
    };
  });
}

async function clearTasks() {
  const database = await openDatabase();

  return new Promise((resolve, reject) => {
    const transaction = database.transaction(TASK_STORE, "readwrite");
    const store = transaction.objectStore(TASK_STORE);

    store.clear();

    transaction.oncomplete = () => {
      database.close();
      resolve();
    };

    transaction.onerror = () => {
      database.close();
      reject(transaction.error);
    };
  });
}

async function writeRecord(method, record) {
  const database = await openDatabase();

  return new Promise((resolve, reject) => {
    const transaction = database.transaction(TASK_STORE, "readwrite");
    const store = transaction.objectStore(TASK_STORE);

    store[method](record);

    transaction.oncomplete = () => {
      database.close();
      resolve();
    };

    transaction.onerror = () => {
      database.close();
      reject(transaction.error);
    };
  });
}

function isTask(value) {
  return Boolean(
    value &&
      typeof value.id === "string" &&
      typeof value.text === "string" &&
      typeof value.completed === "boolean" &&
      Number.isFinite(value.createdAt)
  );
}
```

## UI Integration Example

```js
async function refreshTasks() {
  try {
    tasks = await getTasks();
    renderTasks();
  } catch {
    renderError("Could not load tasks.");
  }
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const text = input.value.trim();
  if (!text) return;

  try {
    await addTask(text);
    input.value = "";
    await refreshTasks();
  } catch {
    renderError("Could not save task.");
  }
});
```

## Review Checklist

- Persistence uses IndexedDB only.
- No `localStorage`, `sessionStorage`, cookie persistence, remote persistence, server, or installed database was introduced.
- Database constants are clear and versioned.
- Object stores are created in `onupgradeneeded`.
- CRUD helpers return Promises.
- Reads validate stored records before rendering.
- Request failures are handled or shown in the UI.
- The app still starts after clearing site data.
