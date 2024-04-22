const { MongoClient } = require('mongodb');
const fs = require('fs'); // Node.js file system module
require('dotenv').config(); // Load environment variables from .env file

// MongoDB URI from environment variables
const uri = process.env.MONGODB_URI;

// Database Name
const dbName = 'myDatabase'; // Replace with your database name

// Output JSON file path
const jsonFilePath = './output.json'; // Specify the path for the output JSON file

// Create a new MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Function to connect to the MongoDB database, retrieve documents from a collection, and write them to a JSON file
async function retrieveAndWriteToJson() {
  try {
    // Connect to the MongoDB server
    await client.connect();
    console.log('Connected to MongoDB');

    // Access the database
    const db = client.db(dbName);

    // Access the collection
    const collection = db.collection('myCollection'); // Replace with your collection name

    
    // Retrieve documents from the collection
    const documents = await collection.find({}).toArray();

    // Write documents to a JSON file
    fs.writeFileSync(jsonFilePath, JSON.stringify(documents, null, 2));

    console.log('Documents written to JSON file successfully:', jsonFilePath);

  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  } finally {
    // Close the connection
    await client.close();
    console.log('Disconnected from MongoDB');
  }
} 

// Call the function to connect to the database, retrieve documents, and write them to a JSON file
retrieveAndWriteToJson();
