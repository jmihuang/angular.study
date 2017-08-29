app.directive('cycle', function ($interval) {
    return {
        restrict: 'A',
        template: '<div class="img-cycle"></div>',
        link: function (scope, element, attrs) {
            var i = 0;
            var pics = attrs.imgurls.split(',');
            var alt = attrs.alts.split(',');
            var time = parseInt(attrs.time);
            //create a new img obj to element
            var myImage = new Image();
            myImage.src = pics[0];
            element.children('.img-cycle').append(myImage);

            var adCycle = function () {
                myImage.src = pics[i];
                i = (i + 1) % pics.length;
            }

            var timer;
            timer = $interval(adCycle, 1000);

            element.bind('mouseover', function (e) {
                $interval.cancel(timer);
            });

            element.bind('mouseout', function (e) {
                timer = $interval(adCycle, 1000);
            });
        }
    }
});
