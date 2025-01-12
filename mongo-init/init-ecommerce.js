db = db.getSiblingDB('ecommerce'); // Switch to the specified database
db.createUser({
  user: "root",
  pwd: "example",
  roles: [
    {
      role: "readWrite",
      db: "ecommerce",
    },
  ],
});
// db.createCollection('dummyCollection'); // Optionally create a collection to initialize the database