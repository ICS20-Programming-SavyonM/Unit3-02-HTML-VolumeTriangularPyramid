// Copyright (c) 2023 Savyon All rights reserved
//
// Created by: Savyon
// Created on: March 2023
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates area and perimeter of rectangle.
 */
function calcVolume () {
  // get user input
  let side_a = parseFloat(document.getElementById("side-a").value)
	let side_b = parseFloat(document.getElementById("side-b").value)
	let height = parseFloat(document.getElementById("height").value)


  // calculate the volume
  let volume = (1/6) * side_a * side_b * height

  // display the results
  document.getElementById("volume").innerHTML = "The volume is " + volume.toFixed(2) + "m<sup>3</sup>"
}