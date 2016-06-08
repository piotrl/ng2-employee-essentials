export class InMemoryDataService {
  createDb() {
    const employees = [
      {"id": 11, age: 21, "name": "Jhon Doe", salary: 1900, city: "OL"},
      {"id": 12, age: 42, "name": "Marco Polo", salary: 15000, city: "GD"},
      {"id": 13, age: 22, "name": "Pawel", salary: 1500, city: "GD"},
      {"id": 14, age: 23, "name": "Celeritas", salary: 1500, city: "OL"},
      {"id": 15, age: 28, "name": "Jadwika Dyzon", salary: 1500, city: "GD"},
      {"id": 16, age: 18, "name": "RubberMan", salary: 1700, city: "OL"},
      {"id": 17, age: 19, "name": "Dynama", salary: 1500, city: "GD"},
      {"id": 18, age: 28, "name": "Dr IQ", salary: 1500, city: "GD"},
      {"id": 19, age: 33, "name": "Magma", salary: 7400, city: "WR"},
      {"id": 20, age: 39, "name": "Tornado", salary: 1500, city: "WR"}
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
