/**
  Copyright (c) 2015, 2016, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/
/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
'use strict';

/**
 * Example of Require.js boostrap javascript
 */

requirejs.config(
{
  baseUrl: 'js',

  // Path mappings for the logical module names
  paths:
  //injector:mainReleasePaths
  {
    'knockout': 'libs/knockout/knockout-3.4.0.debug',
    'jquery': 'libs/jquery/jquery-3.1.0',
    'jqueryui-amd': 'libs/jquery/jqueryui-amd-1.12.0',
    'promise': 'libs/es6-promise/es6-promise',
    'hammerjs': 'libs/hammer/hammer-2.0.8',
    'ojdnd': 'libs/dnd-polyfill/dnd-polyfill-1.0.0',
    'ojs': 'libs/oj/v2.1.0/debug',
    'ojL10n': 'libs/oj/v2.1.0/ojL10n',
    'ojtranslations': 'libs/oj/v2.1.0/resources',
    'text': 'libs/require/text',
    'signals': 'libs/js-signals/signals'
  }
  //endinjector
  ,
  // Shim configurations for modules that do not expose AMD
  shim:
  {
    'jquery':
    {
      exports: ['jQuery', '$']
    }
  }
}
);

require(["nls/MessageBundle", "ojs/ojcore", "knockout", "jquery", "ojs/ojknockout", "ojs/ojprogressbar",
  "ojs/ojinputtext", 'ojs/ojcheckboxset', 'ojs/ojbutton',  'ojs/ojknockout-validation'],
  function(bundle, oj, ko, $)
  {
     function CrossFieldValidator (options) {
      this._options = options;
     };
     
     CrossFieldValidator.prototype.validate = function(valueOnDependent){
      var summary, detail, params, validatorOptions = this._options;
    
      if (validatorOptions){
          var baseObs = validatorOptions['base'];
         if (baseObs){
          var baseValue = ko.utils.unwrapObservable(baseObs);
          var triggerValue = validatorOptions['baseTriggerValue'];

         // if baseValue matches the triggerValue and value on dependent 
         // observable is empty throw error
         if ((triggerValue && baseValue &&
            triggerValue === baseValue) && !valueOnDependent){
             params = {'label': validatorOptions['label']};
             summary = oj.Translations.applyParameters(
                bundle['app']['validator-crossField']['summary'], params);
            detail = oj.Translations.applyParameters(
                bundle['app']['validator-crossField']['detail'], params);
        throw new oj.ValidatorError(summary, detail);
        }
      }
     }

     return true;
    };

    function MainViewModel(){
      // Main view model
      var self = this;
      self.titleLabel = ko.observable("Checkout page");
      self.copyright = ko.observable("TrueValue © 2015");

      self.progressValue = ko.observable(0);
      self.name = ko.observable();
      self.address1 = ko.observable();
      self.address2 = ko.observable();
      self.city = ko.observable();
      self.state = ko.observable();
      self.zipcode = ko.observable();
      self.cardnumber = ko.observable();
      self.cardtype = ko.observable();
      self.cardmonth = ko.observable();
      self.cardyear = ko.observable();
      self.cardcvc = ko.observable();
      self.diffaddress = ko.observable();
      
      self.otheraddress = ko.observable();
      self.othercity = ko.observable();
      self.otherstate = ko.observable();
      self.otherzipcode = ko.observable();
      self.numComponents = ko.observable(10);
      self.numCompletComponents = ko.observable(0);
      self.messages = ko.observableArray();

      self.disableFormControls = ko.observable(true);

      // for invalidComponentTracker attribute
      self.tracker = ko.observable();

      // used for transitions
      self.displayAdvancedOptions = ko.observable(false);

      // CONTACT PREFERENCE/EMAIL/PHONE
      var ContactPref = {'EMAIL': 'email', 'PHONE': 'phone'};    

      self.contactPref = ko.observable(ContactPref['EMAIL']);
      self.cardNumberMessages = ko.observableArray([]);


      self.optionChangeCallback = function (event, data){
       //console.log("callback data: ", data); 
       var trackerObj = ko.utils.unwrapObservable(self.tracker);
       //console.log("Tracker: ",  ko.utils.unwrapObservable(self.tracker));
      
       if(!trackerObj){
        //console.log("we have an issue!!")
       }
      };
      /**
       * Determines when the Submit button will be disabled
       *
      **/
      self.shouldDisableSubmit = function() {
         var trackerObj = ko.utils.unwrapObservable(self.tracker),
          hasInvalidComponents = trackerObj ? trackerObj['invalidShown'] : false;
         
         return hasInvalidComponents;
      };

      // button submision 
      self.submitInfo = function(data, event){
        var trackerObj = ko.utils.unwrapObservable(self.tracker);

        // Step 1
        if (!this._showComponentValidationErrors(trackerObj))
        {
          return;
        }

        // Step 2
        if (!this._runAppLevelValidation(trackerObj))
        {
          return;
        }

        // Step 3:
        return true;
      };
      // Returns false if there are components showing errors. Returns 
      // true if all components are valid.
      self._showComponentValidationErrors = function (trackerObj){

        trackerObj.showMessages();
        if (trackerObj.focusOnFirstInvalid())
          return false;

        return true;
      };

      // Runs app-level validation. Returns false if app-level 
      // validation fails, true otherwise.
      self._runAppLevelValidation = function (trackerObj){
        var valid = true;

        // Validate email address and phoneNumber against the contactPref 
        valid = (this._validateObservable(this.emailAddress,
                                          this.emailAddrCRValidator,
                                          this.emailAddressMessages) &&
                 this._validateObservable(this.phoneNumber,
                                          this.phoneNumCRValidator,
                                          this.phoneNumberMessages));                                  

        if (!valid){
          trackerObj.focusOnFirstInvalid();
          return false;
        }

        return true;
      };
     
     self._validateObservable = function(obs, validator, messages){
        var message, valid = true, msgs = [];
        console.log("obs: ", obs);
        try
        {
          // clear all messages before validating property
          self.messages([]);
          validator.validate(ko.utils.unwrapObservable(obs));
        }
        catch (e)
        {
          if (e instanceof oj.ValidatorError)
          {
            message = e.getMessage();
          }
          else
          {
            var summary =  e.message ? 
                e.message : bundle['app']['validation-failed'];
            message = new oj.Message(summary);
          }

          valid = false;
          msgs.push(message);
          self.messages(msgs);
        }

        return valid;
      };
      ko.bindingHandlers.markComplete = {
         init: function(element, valueAccessor) {
         // initiall calling to show as not complete
           //console.log("calling custom binding : markComplete");

         }, 
         update: function(element, valueAccessor){
           //console.log("calling custom update: markComplete");

         }
      };
      
      // Here's a custom Knockout binding that makes elements shown/hidden via jQuery's fadeIn()/fadeOut() methods
      // Could be stored in a separate utility library
      ko.bindingHandlers.fadeVisible = {
       init: function(element, valueAccessor) {
        // Initially set the element to be instantly visible/hidden depending on the value
        //console.log("calling custom binding!!");
        var value = valueAccessor();
        
        $(element).toggle(ko.unwrap(value)); // Use "unwrapObservable" so we can handle values that may or may not be observable
      },
       update: function(element, valueAccessor) {
        // Whenever the value subsequently changes, slowly fade the element in or out
        console.log("Calling update:");

        var value = valueAccessor();
        ko.unwrap(value) ? $(element).fadeIn() : $(element).fadeOut();
       }
      };


    };

    $(document).ready(function()
    {
      ko.applyBindings(new MainViewModel(), document.getElementById("mainContent"));
    });
  }
);