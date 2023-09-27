function findMatching(drivers, name) {
    return drivers.filter((driver) => driver.toLowerCase() === name.toLowerCase());
  }

  function fuzzyMatch(drivers, query) {
    return drivers.filter((driver) =>
      driver.toLowerCase().startsWith(query.toLowerCase())
    );
  }

  function matchName(drivers, name) {
    return drivers.filter((driver) => driver.name.toLowerCase() === name.toLowerCase());
  }

  const drivers = [
    { name: "John", hometown: "New York" },
    { name: "Jane", hometown: "Los Angeles" },
    { name: "Steve", hometown: "Chicago" },
    { name: "Mike", hometown: "Miami" },
  ];
  
  console.log(findMatching(drivers, "john")); // Output: [{ name: "John", hometown: "New York" }]
  console.log(fuzzyMatch(drivers, "jane")); // Output: [{ name: "Jane", hometown: "Los Angeles" }]
  console.log(matchName(drivers, "Mike")); // Output: [{ name: "Mike", hometown: "Miami" }]


