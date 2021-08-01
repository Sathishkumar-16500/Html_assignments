const students = [
    { name: "Adhi", gender: "male" },
    { name: "Ahamed", gender: "male" },
    { name: "Rutika Kadam", gender: "female" },
    { name: "Priyadharsini", gender: "female" },
  ];
  
  
  
  //Task 2: Starting with 'A'
  ["Adhi", "Ahamed"];
  
  // Task 3: Count the no. of males
  // 2

  // Task 1: find all female name
  ["Rutika kadam", "Priyadharsini"];
  // console.log(result= students.filter((names)=>names.gender=="female"));
  const result= students
      .filter((names)=>names.gender=="female")
      .map((names)=>names.name)
  
  //Task 2: Starting with 'A'
  // ["Adhi", "Ahamed"];
  const result1= students
      .filter((names1)=>names1.name[0]=="A")
      .map((names1)=>names1.name)
      
// Task 3: Count the no. of males
  // 2
  const result2= students
      .filter((names2)=>names2.gender=="male")
      .map((names2)=>names2.name)

  console.log(result)
  console.log(result1)
  console.log(result2.length)
