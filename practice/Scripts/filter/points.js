app.filter('numberpoints', function () {
    return function (number) {
        var pattern = /(\d+)(\d{3})/;
        var stringNum = number.toString();
        while (pattern.test(stringNum)) {
            stringNum = stringNum.replace(pattern, "$1,$2");
        }
        return stringNum;
    }
});
