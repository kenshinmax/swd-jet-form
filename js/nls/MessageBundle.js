define({
  'root': 
   {
    'app' : 
    {
      'validation-failed': 'Validation Failed!',
      'validator-crossField': {
        'summary': '{label} Required', 
        'detail': "You must enter a value for field {label}"
      },
      'validator-equalTo': {'summary': 'The passwords must match!'},
      'validator-notAWeekendDay': {'summary': 'The day you chose is a weekend!', 
         'detail' : 'Pick a date that falls on a weekday'},

      'username': {
        'validator-required': {'summary': 'You must enter at least 3 alphanumeric characters'}
      },
      'password': {
        'validator-required': {'summary': 'You must enter a minimum of 6 characters including a' +
          'number, one uppercase and lowercase letter - E.g.: Hello2'}
      },
      'primaryPhone': {
        'validator-regExp': {'summary': 'You must enter 10 numbers.'}
      },
      'state': {
        'validator-required': {'summary': 'You must select a state!'}
      }
    }
    
  }
});