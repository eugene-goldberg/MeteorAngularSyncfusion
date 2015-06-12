Parties = new Mongo.Collection("parties");

if(Meteor.isClient){
  angular.module('socially',['angular-meteor','ejangular']);
  angular.module('socially')
  .controller('PartiesListCtrl',['$scope','$meteor',
   function($scope, $meteor){
    $scope.parties = $meteor.collection(Parties, false);

    $scope.remove = function(party){
      $scope.parties.remove(party);
    };
  }])
      .controller('EditorsCtrl', function ($scope) {
          $scope.nvalue = 600;
          $scope.pvalue = 400;
          $scope.cvalue = 400;
          $scope.mvalue = "";
      })
      .controller('PhoneListCtrl', function ($scope) {

          var obj = [
              { "EmployeeID": 1, "LastName": "Davolio", "FirstName": "Nancy", "Title": "Sales Representative", "City": "Seattle", "Country": "USA" },
              { "EmployeeID": 2, "LastName": "Fuller", "FirstName": "Andrew", "Title": "Vice President, Sales", "City": "Tacoma", "Country": "USA" },
              { "EmployeeID": 3, "LastName": "Leverling", "FirstName": "Janet", "Title": "Sales Representative", "City": "Kirkland", "Country": "USA" },
              { "EmployeeID": 4, "LastName": "Peacock", "FirstName": "Margaret", "Title": "Sales Representative", "City": "Redmond", "Country": "USA" },
              { "EmployeeID": 5, "LastName": "Buchanan", "FirstName": "Steven", "Title": "Sales Manager", "City": "London", "Country": "UK" },
              { "EmployeeID": 6, "LastName": "Suyama", "FirstName": "Michael", "Title": "Sales Representative", "City": "London", "Country": "UK" },
              { "EmployeeID": 7, "LastName": "King", "FirstName": "Robert", "Title": "Sales Representative", "City": "London", "Country": "UK" },
              { "EmployeeID": 8, "LastName": "Callahan", "FirstName": "Laura", "Title": "Inside Sales Coordinator", "City": "Seattle", "Country": "USA" },
              { "EmployeeID": 9, "LastName": "Dodsworth", "FirstName": "Anne", "Title": "Sales Representative", "City": "London", "Country": "UK" },
              { "EmployeeID": 4, "LastName": "Peacock", "FirstName": "Margaret", "Title": "Sales Representative", "City": "Redmond", "Country": "USA" },
              { "EmployeeID": 5, "LastName": "Buchanan", "FirstName": "Steven", "Title": "Sales Manager", "City": "London", "Country": "UK" },
              { "EmployeeID": 6, "LastName": "Suyama", "FirstName": "Michael", "Title": "Sales Representative", "City": "London", "Country": "UK" },
              { "EmployeeID": 7, "LastName": "King", "FirstName": "Robert", "Title": "Sales Representative", "City": "London", "Country": "UK" },
              { "EmployeeID": 8, "LastName": "Callahan", "FirstName": "Laura", "Title": "Inside Sales Coordinator", "City": "Seattle", "Country": "USA" },
              { "EmployeeID": 9, "LastName": "Dodsworth", "FirstName": "Anne", "Title": "Sales Representative", "City": "London", "Country": "UK" },
              { "EmployeeID": 10, "LastName": "Suyama", "FirstName": "Margaret", "Title": "Sales Representative", "City": "London", "Country": "UK" }
          ];

          $scope.selectedRow = 2;
          $scope.page = 2;
          $scope.data = obj;
          $scope.actionBegin = function (args) {
              if (args.requestType == "grouping")
                  $("#selectedRow").ejNumericTextbox("option", { value: -1 });
          }
      })
      .controller('DropDownCtrl', function ($scope) {
          var list = [
              { empid: "cr1", text: "Dodge Avenger", value: "Dodge Avenger" },
              { empid: "cr2", text: "Chrysler 200", value: "Chrysler 200" },
              { empid: "cr3", text: "Ford Focus", value: "Ford Focus" },
              { empid: "cr4", text: "Ford Taurus", value: "Ford Taurus" },
              { empid: "cr5", text: "Dazzler", value: "Dazzler" },
              { empid: "cr6", text: "Chevy Spark", value: "Chevy Spark" },
              { empid: "cr7", text: "Chevy Volt", value: "Chevy Volt" },
              { empid: "cr8", text: "Honda Fit", value: "Honda Fit" },
              { empid: "cr9", text: "Honda Crosstour", value: "Honda Crosstour" },
              { empid: "cr10", text: "Acura RL", value: "Acura RL" },
              { empid: "cr11", text: "Hyundai Elantra", value: "Hyundai Elantra" },
              { empid: "cr12", text: "Mazda3", value: "Mazda3" }
          ];
          $scope.dataList = list;
          $scope.value = "Ford Focus";
      })
      .controller('DatePickerCtrl', function ($scope) {
          $scope.dateValue = "2/3/2013";
      })
      .controller('ListBoxCtrl', function ($scope) {
          var list = [
              { empid: "cr1", text: "Dodge Avenger" },
              { empid: "cr2", text: "Chrysler 200" },
              { empid: "cr3", text: "Ford Focus" },
              { empid: "cr4", text: "Ford Taurus", },
              { empid: "cr5", text: "Dazzler", },
              { empid: "cr6", text: "Chevy Spark", },
              { empid: "cr7", text: "Chevy Volt", },
              { empid: "cr8", text: "Honda Fit", },
              { empid: "cr9", text: "Honda Crosstour", },
              { empid: "cr10", text: "Acura RL", },
              { empid: "cr11", text: "Hyundai Elantra", },
              { empid: "cr12", text: "Mazda3", }
          ];
          $scope.dataList = list;
          $scope.value = "Ford Taurus";
      })
      .controller('MenuCtrl', function ($scope) {
          var data = [
              { id: 1, text: "Mail", parentId: null },
              { id: 2, text: "Calender", parentId: null },
              { id: 3, text: "Notes", parentId: null },
              { id: 4, text: "Contacts", parentId: null },
              //first level child
              { id: 11, parentId: 1, text: "Inbox", sprite: "mailicon sprite-inbox" },
              { id: 12, parentId: 1, text: "Drafts", sprite: "mailicon sprite-drafts" },
              { id: 13, parentId: 1, text: "Sent items", sprite: "mailicon sprite-sentitems" },
              { id: 14, parentId: 1, text: "Deleted", sprite: "mailicon sprite-deleted" },
              { id: 15, parentId: 1, text: "Junk mails", sprite: "mailicon sprite-junk" },
              { id: 16, parentId: 1, text: "Personal", sprite: "mailicon sprite-folders" },
              { id: 17, parentId: 2, text: "My Calender", sprite: "mailicon sprite-calendar" },
              { id: 18, parentId: 2, text: "Team", sprite: "mailicon sprite-calendar" },
              { id: 19, parentId: 2, text: "Others", sprite: "mailicon sprite-calendar" },
              { id: 20, parentId: 3, text: "My Reference", sprite: "mailicon sprite-folder" },
              { id: 21, parentId: 3, text: "Team Meeting", sprite: "mailicon sprite-folder" },
              { id: 22, parentId: 3, text: "Others", sprite: "mailicon sprite-folder" },
              { id: 23, parentId: 4, text: "Suggested", sprite: "mailicon sprite-contacts" },
              { id: 24, parentId: 4, text: "My Team", sprite: "mailicon sprite-contacts" },
              { id: 25, parentId: 4, text: "Others", sprite: "mailicon sprite-contacts" },
              //second level child
              { id: 111, parentId: 11, text: "Development", sprite: "mailicon sprite-folders" },
              { id: 111, parentId: 11, text: "Supports", sprite: "mailicon sprite-folders" },
              { id: 111, parentId: 11, text: "HR Team", sprite: "mailicon sprite-folders" },
              { id: 112, parentId: 12, text: "Support Template", sprite: "mailicon sprite-folders" },
              { id: 112, parentId: 12, text: "Personal", sprite: "mailicon sprite-folders" }
          ];
          $scope.dataList = data;
      });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    if (Parties.find().count() === 0) {

      var parties = [
        {'name': 'Dubstep-Free Zone',
          'description': 'Can we please just for an evening not listen to dubstep.'},
        {'name': 'All dubstep all the time',
          'description': 'Get it on!'},
        {'name': 'Savage lounging',
          'description': 'Leisure suit required. And only fiercest manners.'}
      ];

      for (var i = 0; i < parties.length; i++)
        Parties.insert(parties[i]);

    }
   });
}
