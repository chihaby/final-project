import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import Map from "../components/Map"
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";


var map;
function initMap() {
  var directionsDisplay = new google.maps.DirectionsRenderer();
  var directionsService = new google.maps.DirectionsService();
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: new google.maps.LatLng(37.87, -122.27),
    mapTypeId: "roadmap"
  });
  directionsDisplay.setMap(map);
  directionsDisplay.setPanel(document.getElementById("right-panel"));

  var control = document.getElementById("floating-panel");
  control.style.display = "block";
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(control);

  var onChangeHandler = function() {
    calculateAndDisplayRoute(directionsService, directionsDisplay);
  };
  document.getElementById("start").addEventListener("change", onChangeHandler);
  document.getElementById("end").addEventListener("change", onChangeHandler);

  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(37.87, -122.27),
    map: map,
    title: "Berkeley, CA"
  });

  var contentString = "<div id='content'>" + "Berkeley, CA" + "</div>";

  marker.addListener("click", function() {
    infowindow.open(map, marker);
    map.setZoom(14);
    map.setCenter(marker.getPosition());
  });

  var infowindow = new google.maps.InfoWindow({
    content: contentString,
    maxWidth: 200
  });

  // Create a <script> tag and set the USGS URL as the source.
  var script = document.createElement("script");
  // This example uses a local copy of the GeoJSON stored at
  // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
  script.src =
    "https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js";
  document.getElementsByTagName("head")[0].appendChild(script);

  // Loop through the results array and place a marker for each
  // set of coordinates.
  window.eqfeed_callback = function(results) {
    for (var i = 0; i < results.features.length; i++) {
      var coords = results.features[i].geometry.coordinates;
      var latLng = new google.maps.LatLng(coords[1], coords[0]);
      var marker = new google.maps.Marker({
        position: latLng,
        map: map
      });
    }
  };
  // Create the search box and link it to the UI element.
  var input = document.getElementById("pac-input");
  var searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener("bounds_changed", function() {
    searchBox.setBounds(map.getBounds());
  });

  var markers = [];
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener("places_changed", function() {
    var places = searchBox.getPlaces();

    if (places.length === 0) {
      return;
    }
    console.log($("#pac-input").val());
    $("#start").val($("#pac-input").val());

    // Clear out the old markers.
    markers.forEach(function(marker) {
      marker.setMap(null);
    });
    markers = [];

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
      }
      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      markers.push(
        new google.maps.Marker({
          map: map,
          icon: icon,
          title: place.name,
          position: place.geometry.location
        })
      );

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });
}
function calculateAndDisplayRoute(directionsService, directionsDisplay) {
  var start = document.getElementById("start").value;
  var end = document.getElementById("end").value;
  directionsService.route(
    {
      origin: start,
      destination: end,
      travelMode: "DRIVING"
    },
    function(response, status) {
      if (status === "OK") {
        directionsDisplay.setDirections(response);
      } else {
        window.alert(
          "Please enter or select valid addresses." +
            "Directions request failed due to " +
            status
        );
      }
    }
  );
}
Collapse




// Adan12:31 PM
// google API key for our project
// 12:31 PM
// AIzaSyBeqo2n7AdcySDv5daWC-gO8QBAnRXFWOY

// Adan12:38 PM
// https://developers.google.com/maps/documentation/embed/start
// Google Developers
// Quick Start Build a Map  |  Maps Embed API        |  Google Developers(39 kB)
// https://developers.google.com/_static/7926607e43/images/share/devsite-white.png

// Adan12:55 PM
// for getting the map search features
// Untitled 
// app.get("/maps", (req, res) => {
//     graphql(
//       Schema,
//       `
//         {
//           posts {
//             quantity
//             title
//             instructions
//             address
//             city
//             state
//             date
//             startTime
//             endTime
//             postedBy {
//               username
//               email
//             }
//           }
//         }
//       `,
//       (root, args) => {
//         return db.sequelize.models.Post.findAll({ where: args });
//       }
//     ).then(response => {
//       res.render("searchMaps", {
//         layout: "searchMaps-layout",
//         posts: response.data.posts,
//         googleKey: process.env.GOOGLE_API_KEY
//       });
//     });
//   });