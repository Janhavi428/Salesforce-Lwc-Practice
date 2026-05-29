public class AccountBatch implements Database.Batchable<SObject>,database.stateful{  // these are interfaces we have taken..second interface is for 
                                                                  // the variable we initialize to get count of processed records with use of this
                                                                  // interface we get count of total processed record
                                                                  // database.stateful - maintain the state 
   /* // Aim is to add sfdx as a postfix
    public static Integer totalNoOfRecords=0;  // here i define a variable and increase the count of this var in execute method so that when my 
                                               // execute method will execute last time it will shows count of records i have proccessed.
    public List<Account> start(Database.BatchableContext Bc){  
        System.debug('Value in start method' + Bc);
        
        List<Account> accList = [SELECT Id, Name, Phone FROM Account];  
        return accList;
    }
    
    
    public void execute(Database.BatchableContext Bc, List<Account> accList){ // return type of start method is list of account here....the same
                                                                             // list of acc will be divide into chunks and will given to execute                                                                      
                                                            // method..thats why execute has two parameter one is reference and other one is list 
        System.debug('Value in Execute method' + Bc);
        
        List<Account> AccountsToUpdate = new List<Account>();
        
        for(Account ac: accList){
            totalNoOfRecords = totalNoOfRecords + 1;
            ac.Name = ac.Name + 'SFDX';
            
            // validation rule Added Phone null check
            if(ac.Phone == null){
                ac.Phone = '2222222222';
            }
            
            AccountsToUpdate.add(ac);
        }
        
        if(AccountsToUpdate.size()>0){
            update AccountsToUpdate;
            System.debug('Value in  totalNoOfRecords' + totalNoOfRecords);
        }
    }
    
    
    public void finish(Database.BatchableContext Bc){
        System.debug('Value in Finish method' + Bc);
        
        Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();  // this is for to send the email after completion of the 
                                                                                 // execute method
        mail.setToAddresses(new String[]{'kjanhavi463@gmail.com'});
        mail.setSubject('Batch Completed');
        mail.setPlainTextBody('Batch job finished successfully');
        
        Messaging.sendEmail(new Messaging.SingleEmailMessage[] {mail});
    }*/
    
   
    /// to remove the multiple sfdx from account
    
    /*public list<Account> start(Database.BatchableContext AB){
       List<Account> accList = [SELECT Id, Name, Phone FROM Account];  
        return accList; 
    }
    
    public void execute(Database.BatchableContext Bc, List<Account> accList){
        List<Account> AccountsToUpdate = new List<Account>();
        for(Account ac : accList){
    
    if(ac.Name != null){
        
        // Remove all existing SFDX
        String cleanedName = ac.Name.replace('SFDX', '').trim();
        
        // Add only one SFDX at end
        ac.Name = cleanedName + ' SFDX';
        
        AccountsToUpdate.add(ac);
    }
}
    }
    
    public void finish(Database.BatchableContext Bc){
        System.debug('Value in Finish method' + Bc);
    }*/
    
    
    //HOMEWORK
    //Update Account Rating Based on Annual Revenue
    public Integer totalNoOfRecords=0;
    public list<Account> start(Database.BatchableContext AB){
       List<Account> accList = [SELECT Id, Name, Phone,AnnualRevenue,Rating FROM Account];  
        return accList; 
    }
    
    public void execute(Database.BatchableContext Bc, List<Account> accList){
        list<Account> accToUpdate = new list<Account>();
        for(Account ac: accList){
            totalNoOfRecords=totalNoOfRecords+1;
            if(ac.AnnualRevenue != null && ac.AnnualRevenue > 1000000){
                ac.Rating = 'Hot';
                accToUpdate.add(ac);
            }
        }
        if(!accToUpdate.isEmpty()){
            update accToUpdate;
            system.debug(accToUpdate);
        }
        
}

    
    public void finish(Database.BatchableContext Bc){
        System.debug('Value in Finish method' + Bc);
        System.debug('Total Records Processed: ' + totalNoOfRecords);
    }
    
    // batch apex example
    /*public Database.QueryLocator start(Database.BatchableContext bc){
        return Database.getQueryLocator('SELECT Id, Name FROM Account');
    }
    public void execute(Database.BatchableContext bc, List<Account> accList){
        for(Account acc : accList){
            system.debug('My name is :- '+ acc.Name);
        }        
    }
    public void finish(Database.BatchableContext bc){
        system.debug('Done');
    }*/
    
}


/* public class batcclass implements ineteface{       
public static database.queryLocator start(){     //when you use database.querylocator your soql limit will increase from 50000 to 50 million records  

return database.getQueryLocator('select id,name from account where amount_c>10000');

}*/  // we can also called one batch from another batch



// Here new concept used like DATABASE.INSERT, DATABASE.QUERYLOCATOR, DATABASE.SAVERESULT
/*public class BatchApex implements Database.Batchable<sObject> {

    public Database.Querylocator start(Database.BatchableContext bc){
        
        return Database.getQuerylocator('SELECT Id FROM Account');
    }
    public void execute(Database.BatchableContext bc, List<Account> accList){
        
        List<Contact> conToInsert = new List<Contact>();
        for(Account acc : accList){
            Contact con = new Contact(AccountId = acc.Id);
            conToInsert.add(con);
        }
        
        Database.SaveResult[] dsr = Database.insert(conToInsert, false);
        
        for(Database.SaveResult sr : dsr){
            if(sr.isSuccess()){
               // system.debug('Inserted Contact: '+ sr.getId());
                system.debug(sr);
            }else{
                for(Database.Error er : sr.getErrors()){
                   // system.debug('Error: '+ er.getMessage());
                    system.debug(sr.getErrors());                 
                }
            }
          //  system.debug(dsr);
        }
    }
    public void finish(Database.BatchableContext bc){
        system.debug('Batch Finished');
    }
}*/