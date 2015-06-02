'use strict';

angular.module('angularAddresses', []).controller('Main', function () {
  var vm = this;

  vm.people = [{ name: 'Ben', twitter: '@ben123', phone: '+1 615 234 5678' }, { name: 'Dan', twitter: '@dandan', phone: '(615) 234-5678' }, { name: 'Elsa', twitter: '@letitgo', phone: '615-234-5678' }, { name: 'Amanda', twitter: '@princessamanda', phone: '1 615 234 5678' }, { name: 'Charity', twitter: '@nonprofit', phone: '615.234.5678' }];

  vm.newPerson = {};

  vm.addNewAddress = function () {
    vm.people.push(vm.newPerson);
    vm.newPerson = {};
  };

  vm.removeAddress = function (person) {
    var index = vm.people.indexOf(person);
    vm.people.splice(index, 1);
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9qcy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxDQUNKLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLENBQUMsQ0FFOUIsVUFBVSxDQUFDLE1BQU0sRUFBRSxZQUFZO0FBQzlCLE1BQUksRUFBRSxHQUFHLElBQUksQ0FBQzs7QUFFZCxJQUFFLENBQUMsTUFBTSxHQUFHLENBQ1YsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFDLEVBQzNELEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBQyxFQUMxRCxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFDLEVBQzFELEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLGdCQUFnQixFQUFDLEVBQ3JFLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUMsQ0FDaEUsQ0FBQzs7QUFFRixJQUFFLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQzs7QUFFbEIsSUFBRSxDQUFDLGFBQWEsR0FBRyxZQUFZO0FBQzdCLE1BQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM3QixNQUFFLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztHQUNuQixDQUFDOztBQUVGLElBQUUsQ0FBQyxhQUFhLEdBQUcsVUFBVSxNQUFNLEVBQUU7QUFDbkMsUUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDdEMsTUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0dBQzVCLENBQUM7Q0FFSCxDQUFDLENBQUMiLCJmaWxlIjoic3JjL2pzL21haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyXG4gIC5tb2R1bGUoJ2FuZ3VsYXJBZGRyZXNzZXMnLCBbXSlcblxuICAuY29udHJvbGxlcignTWFpbicsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuXG4gICAgdm0ucGVvcGxlID0gW1xuICAgICAge25hbWU6ICdCZW4nLCB0d2l0dGVyOiAnQGJlbjEyMycsIHBob25lOiAnKzEgNjE1IDIzNCA1Njc4J30sXG4gICAgICB7bmFtZTogJ0RhbicsIHR3aXR0ZXI6ICdAZGFuZGFuJywgcGhvbmU6ICcoNjE1KSAyMzQtNTY3OCd9LFxuICAgICAge25hbWU6ICdFbHNhJywgdHdpdHRlcjogJ0BsZXRpdGdvJywgcGhvbmU6ICc2MTUtMjM0LTU2NzgnfSxcbiAgICAgIHtuYW1lOiAnQW1hbmRhJywgdHdpdHRlcjogJ0BwcmluY2Vzc2FtYW5kYScsIHBob25lOiAnMSA2MTUgMjM0IDU2NzgnfSxcbiAgICAgIHtuYW1lOiAnQ2hhcml0eScsIHR3aXR0ZXI6ICdAbm9ucHJvZml0JywgcGhvbmU6ICc2MTUuMjM0LjU2NzgnfVxuICAgIF07XG5cbiAgICB2bS5uZXdQZXJzb24gPSB7fTtcblxuICAgIHZtLmFkZE5ld0FkZHJlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2bS5wZW9wbGUucHVzaCh2bS5uZXdQZXJzb24pO1xuICAgICAgdm0ubmV3UGVyc29uID0ge307XG4gICAgfTtcblxuICAgIHZtLnJlbW92ZUFkZHJlc3MgPSBmdW5jdGlvbiAocGVyc29uKSB7XG4gICAgICB2YXIgaW5kZXggPSB2bS5wZW9wbGUuaW5kZXhPZihwZXJzb24pO1xuICAgICAgdm0ucGVvcGxlLnNwbGljZShpbmRleCwgMSk7XG4gICAgfTtcblxuICB9KTtcbiJdfQ==