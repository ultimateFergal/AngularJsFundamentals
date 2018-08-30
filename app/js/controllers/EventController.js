'use strict';

eventsApp.controller('EventController',
    function EventController($scope) {

        $scope.snippet = "<span style='corlor:red'>hi there</span>";
        $scope.boolValue = true;
        $scope.mystyle = { color:'red' };
        $scope.myclass = "blue";
        $scope.buttonDisabled = true;
        $scope.event = {
            name: 'Angular Boot Camp',
            date: 1359781015626,
            time: '10:30 am',
            location: {
                address: 'Google Headquartes',
                city: 'Mountain View',
                province: 'CA'
            },
            imageUrl: '/img/angularjs-logo.png',
            sessions: [
                {
                    name: "Directives MasterClass",
                    creatorName: "Creator name1",
                    duration: "1 hr",
                    level: "Advanced",
                    abstract: "nlanlasdnfasdfhalskdflasdfasdfasdf",
                    upVoteCount: 0
                },
                {
                    name: "Scope for fun and profit",
                    creatorName: "Creator name2",
                    duration: "30 min",
                    level: "Introductory",
                    abstract: "nlanlasdnfasdfhalskdflasdfasdfasdf",
                    upVoteCount: 0
                },
                {
                    name: "Well behaved Controllers",
                    creatorName: "Creator name2",
                    duration: "2 hr",
                    level: "Intermediate",
                    abstract: "nlanlasdnfasdfhalskdflasdfasdfasdf",
                    upVoteCount: 0
                },
            ]
        }

        $scope.upVoteSession = function(session){
            session.upVoteCount++;
        }
        
        $scope.downVoteSession = function(session){
            session.upVoteCount--;
        }  
    }  
);