# Mock Interview Questions
## Mock 1
### JS Questions:
 1. difference between null and undefined, where to use each.
 2. Higher Order Functions

### Output Based Questions
```console.log('start')
setTimeout(() => {
  console.log('setTimeout')
})
Promise.resolve().then(() => {
  console.log('resolve')
})
console.log('end')
```
```var salary = "1000";

(function () {
  console.log("Original salary was " + salary);

  var salary = "5000";

  console.log("My New Salary " + salary);
})();
```
```var myData = {
	name: "Parul",
	printName: function(role){
		console.log(name, role)	
	}
}
myData.printName("PA");
```
```const arr = [
  { device: "mouse", count: 10 },
  { device: "keyboard" },
  { device: "printer", count: 20 },
  { device: "monitor" },
  { device: "headphone" }
];
your output should be:
[
    {
        "device": "mouse",
        "count": 11
    },
    {
        "device": "keyboard",
        "count": 1
    },
    {
        "device": "printer",
        "count": 21
    },
    {
        "device": "monitor",
        "count": 1
    },
    {
        "device": "headphone",
        "count": 1
    }
]
```
### React Questions
1. Batch Update
2. Return Keyword in UseEffect
3. react functional update




