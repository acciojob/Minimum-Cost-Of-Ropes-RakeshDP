function calculateMinCost() {
  //your code here
  const inputElement = document.getElementById('rope-lengths');
  const resultElement = document.getElementById('result');
  
  // Get the comma-separated lengths of ropes from the input element
  const lengths = inputElement.value;
  
  // Convert the comma-separated string of lengths to an array of integers
  const ropes = lengths.split(',').map(Number);

  // Create a priority queue to store the lengths of ropes
  const priorityQueue = new MinPriorityQueue();

  // Insert all the ropes into the priority queue
  ropes.forEach((rope) => {
    priorityQueue.enqueue(rope, rope);
  });

  let cost = 0;

  // Keep connecting ropes until only one rope is left in the priority queue
  while (priorityQueue.size() > 1) {
    // Extract the two smallest ropes from the priority queue
    const smallestRope1 = priorityQueue.dequeue().element;
    const smallestRope2 = priorityQueue.dequeue().element;

    // Calculate the cost of connecting the two smallest ropes
    const currentCost = smallestRope1 + smallestRope2;

    // Add the current cost to the total cost
    cost += currentCost;

    // Insert the connected rope back into the priority queue
    priorityQueue.enqueue(currentCost, currentCost);
  }

  // Display the minimum cost inside the result element
  resultElement.textContent = cost;
}
}  
