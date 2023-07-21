class Hotel {
  Address;
  NumberOfRooms;
  #minFloor;
  #MaxFloor;
  Room;

  constructor(Address, NumberOfRooms, minFloor, maxFloor, Room) {
    this.Address = Address;
    this.NumberOfRooms = NumberOfRooms;
    this.#minFloor = minFloor;
    this.#MaxFloor = maxFloor;
    this.Room = Room;
  }

  printAdvertisement() {
    console.log("Hello, our hotel Address: " + this.Address + ", Number Of Rooms is: " + this.NumberOfRooms);
  }

  listBookedRooms() {
    for (let i = 0; i < this.Room.length; i++) {
      if (this.Room[i].isBooked()) {
        console.log("Floor Number is: " + this.Room[i].floorNum + ", Room Number is: " + this.Room[i].roomNum);
      }
    }
  }
}

class Room {
  floorNum;
  roomNum;
  price;
  #isBooked = false;

  constructor(floorNum, roomNum, price, isBooked) {
    this.floorNum = floorNum;
    this.roomNum = roomNum;
    this.price = price;
    this.#isBooked = isBooked;
  }

  printRoom() {
    console.log(
      "Floor Number is: " + this.floorNum + ", Room Number is: " + this.roomNum + ", price is: " + this.price + ", isBooked: " + this.isBooked()
    );
  }

  book() {
    this.#isBooked = true;
  }

  isBooked() {
    return this.#isBooked;
  }
}

class RoomWithView extends Room {
  view;
  numberOfBeds;

  constructor(floorNum, roomNum, price, isBooked, view, numberOfBeds) {
    super(floorNum, roomNum, price, isBooked);
    this.view = view;
    this.numberOfBeds = numberOfBeds;
  }
}

class SleepingRoom extends Room {
  personCapacity;

  constructor(floorNum, roomNum, price, isBooked, personCapacity) {
    super(floorNum, roomNum, price, isBooked);
    this.personCapacity = personCapacity;
  }
}

const r1 = new RoomWithView(2, 112, "200$", false, "City view", 2);
const r2 = new RoomWithView(3, 113, "250$", false, "sea view", 3);
const r3 = new SleepingRoom(4, 114, "300$", false, 3);
const r4 = new SleepingRoom(5, 115, "350$", false, 4);
const h1 = new Hotel("123 Main Street", 3, 1, 10, [r1, r2, r3,r4]);
h1.listBookedRooms();
h1.Room[1].book();
h1.Room[2].book();
h1.listBookedRooms();
