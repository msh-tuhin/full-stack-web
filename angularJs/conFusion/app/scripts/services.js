'use strict';

angular.module('confusionApp')

        .constant('baseUrl', 'http://localhost:3000/')
        .service('menuFactory', ['$resource', 'baseUrl', function($resource, baseUrl) {
    
    
                this.getDishes = function(){
                    return $resource(baseUrl+"dishes/:id", null, {'update':{method:'PUT'}});
                    
                };
    
                // implement a function named getPromotion
                // that returns a selected promotion.
                this.getPromotion = function(){
                    return $resource(baseUrl+"promotions/:id", null, {'update':{method:'PUT'}}) ;//promotions[index];
                    
                };
    
                        
        }])

        .factory('corporateFactory', ['$resource', 'baseUrl', function($resource, baseUrl) {
    
            var corpfac = {};
            
            corpfac.getLeaders = function(){
                return $resource(baseUrl+"leadership/:id", null, {'update':{method:'PUT'}});
            };
            return corpfac;
        }])

    .service('feedbackFactory', ['$resource', 'baseUrl', function($resource, baseUrl){
        this.getFeedback = function(){
             return $resource(baseUrl + "feedback/:id", null, {'update':{method:'PUT'}});
        };
        
    }])

;
