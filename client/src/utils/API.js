import axios from "axios";

export default {
  // Gets all drivers
  getDrivers: function() {
    return axios.get("/api/drivers");
  },
  // Gets the drivers with the given id
  getDriver: function(id) {
    return axios.get("/api/drivers/" + id);
  },
  // Deletes the drivers with the given id
  deleteDriver: function(id) {
    return axios.delete("/api/drivers/" + id);
  },
  // Saves a drivers to the database
  saveDriver: function(driverData) {
    return axios.post("/api/drivers", driverData);
  },

  // Riders
  getRiders: function() {
    return axios.get("/api/riders");
  },
  getRider: function(id) {
    return axios.get("/api/riders/" + id);
  },
  deleteRider: function(id) {
    return axios.delete("/api/riders/" + id);
  },
  saveRider: function(riderData) {
    return axios.post("/api/riders", riderData);
  } 
};
