import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";
const { db } = require('./firebase_config'); // Assuming you have a separate file for Firebase initialization

// Function to retrieve items for a specific user from Firestore
async function getItems(userId) {
    try {
        const itemsRef = db.collection('users').doc(userId).collection('items');
        const snapshot = await itemsRef.get();
        const items = [];

        snapshot.forEach(doc => {
            items.push({ id: doc.id, data: doc.data() });
        });

        return items;
    } catch (error) {
        console.error("Error fetching items:", error);
        throw error;
    }
}

// Function to add a new item to a specific user's list of items in Firestore
async function addItem(userId, item) {
    try {
        const itemsRef = db.collection('users').doc(userId).collection('items');
        const newItemRef = await itemsRef.add(item);
        return newItemRef.id;
    } catch (error) {
        console.error("Error adding item:", error);
        throw error;
    }
}

// Example usage
async function exampleUsage() {
    try {
        // Assuming userId and item are already defined
        const userId = 'user123';
        const item = { name: 'New Item', description: 'This is a new item' };

        // Add item
        const newItemId = await addItem(userId, item);
        console.log("New item added with ID:", newItemId);

        // Retrieve items
        const items = await getItems(userId);
        console.log("Items for user:", items);
    } catch (error) {
        console.error("Error in example usage:", error);
    }
}

// Call the example usage function
exampleUsage();
