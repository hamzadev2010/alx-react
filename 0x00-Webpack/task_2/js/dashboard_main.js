import '../css/main.css';
import $ from 'jquery';
import _ from 'lodash';

let cnt = 0;

$('body').append('<div id="logo"></div>');
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

function updateCounter() {
  cnt++;
  $("#count").html(`${cnt} clicks on the button`);
};

$('button').on('click', _.debounce(updateCounter, 500));
