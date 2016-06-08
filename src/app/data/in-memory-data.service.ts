export class InMemoryDataService {
  createDb() {
    const employees = [
      {"id": 11, "name": "Jhon Doe", salary: 1900, city: "OL"},
      {"id": 12, "name": "Marco Polo", salary: 15000, city: "GD"},
      {"id": 13, "name": "Bombasto", salary: 1500, city: "GD"},
      {"id": 14, "name": "Celeritas", salary: 1500, city: "OL"},
      {"id": 15, "name": "Magneta", salary: 1500, city: "GD"},
      {"id": 16, "name": "RubberMan", salary: 1700, city: "OL"},
      {"id": 17, "name": "Dynama", salary: 1500, city: "GD"},
      {"id": 18, "name": "Dr IQ", salary: 1500, city: "GD"},
      {"id": 19, "name": "Magma", salary: 7400, city: "WR"},
      {"id": 20, "name": "Tornado", salary: 1500, city: "WR"}
    ];

    const cities = [
      {id: "GD", name: "Gdansk"},
      {id: "OL", name: "Olsztyn"},
      {id: "WR", name: "Wroclaw"}
    ];

    return {
      employees,
      cities
    };
  }
}
