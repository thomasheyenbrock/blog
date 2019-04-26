---
title: UNION in SQL...with a pitfall
date: "2018-04-16T10:48:00.000Z"
description: About I learned the hard way how UNION really works.
---

If you known SQL, you probably also know the `UNION`-statement. Seems quite easy, doesn't i? Just take two tables and combine them, right?

Wrong!

## Let's set this up

I give you a simple example. We'll use MySQL here. Let's create a table with only one column called `id`:

```sql
CREATE TABLE testTable (
  id INT(11)
);
```

Let's put some values in the table:

```sql
INSERT INTO testTable VALUES (1), (1);
```

Let's select the whole table:

```sql
SELECT * FROM testTable;
```

This is what we get, no surprises yet:

| id  |
| --- |
| 1   |
| 1   |

Now what do you think happens if you do this?

```sql
SELECT * from testTable
UNION
SELECT * FROM testTable;
```

If you think it's four rows each containing the number `1` then you're just as wrong as I was! It's just one row:

| id  |
| --- |
| 1   |

## What the documentation tells us

Well, this behavious might seem unintuitive, but it is intended. If we take a look at the [documentation](https://dev.mysql.com/doc/refman/8.0/en/union.html) we can find the following:

> The default behavior for UNION is that duplicate rows are removed from the result.

However, not all is lost! You can explicitely change the default behaviour by adding the keyword `ALL` after the `UNION` keyword:

```sql{2}
SELECT * from testTable
UNION ALL
SELECT * FROM testTable;
```

Now we get four rows in the resulting table:

| id  |
| --- |
| 1   |
| 1   |
| 1   |
| 1   |

You could also use `UNION DISTINCT` which behaves exactly like the default.

## Going deeper

If you keep on reading the documentation, you will find out that we can even mix `UNION ALL` and `UNION DISTINCT` in the same query. However the behaviour get's even more complicated if you do so:

> You can mix UNION ALL and UNION DISTINCT in the same query. Mixed UNION types are treated such that a DISTINCT union overrides any ALL union to its left.

Let's try this out with the following query:

```sql
SELECT * FROM testTable
UNION ALL
SELECT * FROM testTable
UNION DISTINCT
SELECT * FROM testTable;
```

What we expect is just one row, since the `UNION DISTINCT` overrides the `UNION ALL` before it. In fact that is exactly what we get:

| id  |
| --- |
| 1   |

Let's switch the `UNION ALL` and `UNION DISTINCT` statements:

```sql
SELECT * FROM testTable
UNION DISTINCT
SELECT * FROM testTable
UNION ALL
SELECT * FROM testTable;
```

This query returns three rows.

| id  |
| --- |
| 1   |
| 1   |
| 1   |

That is because the first two `SELECT` statements are unified into just one line. Then we unify this with the two rows of the original table again, but this time using `UNION ALL`. Hence we end up with `1 + 2 = 3` rows.

## The lession(s) learned

The obvious message lession learned is how `UNION` works in MySQL. In fact, it also behaves exactly the same in all other major database systems like [PostgreSQL](https://www.postgresql.org/docs/8.3/queries-union.html), [Oracle](https://docs.oracle.com/cd/B19306_01/server.102/b14200/queries004.htm) or [SQL Server](https://docs.microsoft.com/de-de/sql/t-sql/language-elements/set-operators-union-transact-sql?view=sql-server-2017).

Maybe there also is a second lession: Don't always trust your knowledge! Stuff doesn't always behave like you would expect. I made this mistake, and I'm pretty sure I'll make it again. But after all, isn't that just the way we learn?
