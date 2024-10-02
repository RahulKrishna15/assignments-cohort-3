/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const totals = [];
  transactions.forEach(transaction => {
    const { category, price } = transaction;
    if (!totals[category]) {

      totals[category] = 0;
    }
    totals[category] += price;
  });

  return Object.keys(totals).map(category => ({
    category: category,
    totalSpent: totals[category]
  }));
  
}


// function calculateTotalSpentByCategory(transactions) {
//   const totals = {};

//   // Iterate over each transaction
//   transactions.forEach(transaction => {
//     const { category, price } = transaction;

//     // If the category doesn't exist in totals, initialize it
//     if (!totals[category]) {
//       totals[category] = 0;
//     }

//     // Add the price to the total for this category
//     totals[category] += price;
//   });

//   // Convert the totals object into an array of objects
//   return Object.keys(totals).map(category => ({
//     category: category,
//     totalSpent: totals[category]
//   }));
// }

// module.exports = calculateTotalSpentByCategory;
module.exports = calculateTotalSpentByCategory;
