const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://ajaysingh493:TB0oqNfqpfe9fLKJ@issuetracker01.prpez3e.mongodb.net/?retryWrites=true&w=majority&appName=IssueTracker01';

async function getEmpData() {
    let client = await MongoClient.connect(url);
    let connection = client.db('issueTracker'); // Establish connection
    return connection.collection('IssueTracker2023'); // creating a collection and naming it also
}

module.exports = getEmpData;