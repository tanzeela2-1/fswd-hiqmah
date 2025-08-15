
const students=[];
 
const addStudent = (name, marks)   =>{
     students.push({ name:name,
      marks:marks,
      isPassed: false})
};

const calculateAverage = (marks)  =>{ 
     let sum =0;
    for(let i =0; i < marks.length; i++){
       sum =  sum+marks[i];
     }
     return sum / marks.length;
};
const updatePassStatus =() =>{
    for(let i=0; i< students.length; i++){
        let avg=calculateAverage(students[i].marks)
       students[i].isPassed = (avg >=40) ? true : false;
     }

};
const getTopStudent= () =>{
     let topStudent= students[0];
     for (let i = 1; i < students.length; i++) {
     if (calculateAverage(students[i].marks) > calculateAverage(topStudent.marks)) {  
          topStudent =students[i] 
     }
    }
      return topStudent;
};
const listFailedStudents = () => {
    let failed = [];
    for (let i = 0; i < students.length; i++) {
        if (!students[i].isPassed) {
            failed.push(students[i]);
        }
    }
    return failed;
};
     






addStudent("tanzeela", [90,90,98]);
addStudent("falak", [30,25,35]);
addStudent("faisal", [90,85,88]);
 addStudent("mehak", [50,40,55]);
addStudent("amir", [20,30,25]);
updatePassStatus();
console.log("All student:" ,students);
console.log("top student:",getTopStudent());
console.log("failed students:",listFailedStudents());
