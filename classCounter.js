var classes = {
  list: [],
  compression: 0
},
_find = function (arr, name) {
  if (!name) {
    return null;
  }

  for (var i = 0, n = arr.length; i < n; i++) {
    if (arr[i].name === name) {
      return arr[i];
    }
  }

  return null;
};

Array.from(document.querySelectorAll('[class]')).forEach(function (elem) {
  var elemClasses = (elem.getAttribute('class') || '').split(' '),
    found = null;

  for (var i = 0, n = elemClasses.length; i < n; i++) {
    found = _find(classes.list, elemClasses[i]);

    if (found) {
      found.count = found.count + 1;
    } else if (elemClasses[i]) {
      classes.list.push({name: elemClasses[i], count: 1});
    }
  }
});

classes.list.sort(function (a, b) {
  return b.count * b.name.length - a.count * a.name.length;
});

classes.list.forEach(function (classItem) {
  classes.compression += (classItem.name.length - 2) * classItem.count;
});

classes;
