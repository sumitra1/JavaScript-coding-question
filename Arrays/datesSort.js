var dates = [
    '03/03/2014',
    '01/03/2014',
    '02/03/2014',
    '04/03/2014'
];
dates.sort(function (a, b) {
    a = a.toString().split('/');
    b = b.toString().split('/');
    return a[2] - b[2] || a[1] - b[1] || a[0] - b[0];
});
console.log(dates)