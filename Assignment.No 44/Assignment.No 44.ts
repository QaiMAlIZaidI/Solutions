function orderSandwich(...items: string[]): void {
    console.log("Sandwich Order Summary:");
    if (items.length === 0) {
        console.log("No items selected.");
    } else {
        console.log("Items selected:");
        for (let item of items) {
            console.log("- " + item);
        }
    }
    console.log("\n");
}

orderSandwich("Turkey", "Lettuce", "Tomato");
orderSandwich("Ham", "Cheese");
orderSandwich("Chicken", "Mayonnaise", "Lettuce", "Pickles");
