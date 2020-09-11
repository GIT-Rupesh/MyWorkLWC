public with sharing class BoatDataService {
    @AuraEnabled(cacheable=true)
    public static List<BoatType__c> getAllBoatTypes() {
        return [select Id,Name from BoatType__c];
    }
}
