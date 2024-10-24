function store(student1_marks,student2_marks,student3_marks)
{
  let marks_of_all = [...student1_marks,...student2_marks,...student3_marks]
  console.log(marks_of_all)
}
let student1_marks = ["student1",19,18,18,15,16];
let student2_marks = ["student2",14,15,16,12,18];
let student3_marks = ["student3",15,15,18,19,17];
store(student1_marks,student2_marks,student3_marks)