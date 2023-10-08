const fs = require('fs');

const determineQuadrant = (longitude, latitude) => {
  // Define the number of columns and rows on the map
  const columns = 24;
  const rows = 12;

  // Calculate the width and height of each quadrant
  const quadrantWidth = 360 / columns;
  const quadrantHeight = 180 / rows;

  // Calculate the column and row where the coordinate is located
  const column = Math.floor((longitude + 180) / quadrantWidth);
  const row = Math.floor((90 - latitude) / quadrantHeight);

  // Return the quadrant as an object
  return {
    column: column,
    row: row,
  };
}

function loadContactsFromJsonFile(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    const jsonData = JSON.parse(data);
    return jsonData.contacts;
  } catch (error) {
    console.error('Error loading JSON data:', error);
    return [];
  }
}

function getContactsInSameQuadrant(longitude, latitude) {
  const filePath = 'data-base.json';
  const contacts = loadContactsFromJsonFile(filePath);
  const { row: quadrantPointRow, column: qudrantPointColumn } = determineQuadrant(longitude, latitude)
  const matchingContacts = contacts.filter((contact) => {
    const { quadrant } = contact
    const { row, column } = quadrant;
    return (
      row === quadrantPointRow &&
      column === qudrantPointColumn
    );
  });
  return matchingContacts.map((contact) => contact.phone);
}

module.exports = {
  getContactsInSameQuadrant
};