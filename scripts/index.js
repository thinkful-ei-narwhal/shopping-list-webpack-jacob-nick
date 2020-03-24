import shoppingList from './shopping-list';
import $ from 'jquery';

const main = function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
