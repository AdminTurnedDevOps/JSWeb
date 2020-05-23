'use strict'

var today = new Date()
var date = today.toDateString()
var element = document.getElementById('date')

var hour = today.getHours()
var minute = today.getMinutes()

var time = document.getElementById('time').innerHTML = hour + ":" + minute

element.innerHTML = time
element.innerHTML = date