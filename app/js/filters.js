'use strict';

eventsApp.filter('durations', function(){
    return function(duration){
        switch (duration) {
            case 1:
                return "Half hour";
                break;
            case 2:
                return "1 hour";
                break;
            case 3:
                return "1 day";
                break;
            case 4:
                return "full day";
                break;
            
        }
    }
})