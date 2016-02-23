var classesList = [], compression = 0,
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
  var classes = (elem.getAttribute('class') || '').split(' ');
  var found = null;

  for (var i = 0, n = classes.length; i < n; i++) {
    found = _find(classesList, classes[i]);

    if (found) {
      found.count = found.count + 1;
    } else if (classes[i]) {
      classesList.push({name: classes[i], count: 1});
    }
  }
});

classesList.sort(function (a, b) {
  return b.count * b.name.length - a.count * a.name.length;
});

classesList.forEach(function (classItem) {
  compression += (classItem.name.length - 2) * classItem.count;
});

classesList
compression;