public with sharing class ReturnAccount {

    @AuraEnabled(cacheable=true)
    public static list<Account> getAccounts(){
        return [SELECT Id, Name FROM Account LIMIT 10];
    }

    /*@AuraEnabled
    public static string methodName(){
        try {
            return [SELECT Id, Name FROM Account LIMIT 10]
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }*/
}