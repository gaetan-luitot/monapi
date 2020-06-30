# Deploy database

1. Install _MariaDB_.
2. Use `./server/db_files/create_db.SQL` to create the database and user.
3. Run `use forandrabdd` to load the freshly created database.
4. Use `./server/db_files/init_db.SQL` to create tables.
5. Enjoy.

# Use project

- start server : `cd server && npm run serve`
- start client service : `cd client && npm start`

Connect to `localhost:8080`.