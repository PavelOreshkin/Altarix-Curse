interface IHuman {
  firstName: string,
  lastName: string
}

class Human implements IHuman {
  firstName: string;
  lastName: string;

  constructor(human:IHuman) {
    this.firstName = human.firstName;
    this.lastName = human.lastName;
  }

  public get getName(): string {
    return this.firstName;
  }
  public set setName(value: string) {
    this.firstName = value;
  }
  fullName = ():void => {
    console.log(this.firstName + ' ' + this.lastName)
  }
}

class Student extends Human implements IHuman {
  year: number;

  constructor(human: IHuman, year: number) {
    super(human)
    this.year = year;
  }

  get getYear(): number {
    return this.year;
  }
}

const people = { firstName: 'Finn', lastName: 'Human' }
const student = new Student(people, 45);

// student.fullName();
// console.log(student.getName);
// console.log(student.getYear);


const palindromeTest = (text: string) => {
  const regExp: RegExp = /[^A-Za-zА-Яа-яё0-9]/g;
  const textForTest: string = text.toLowerCase().replace(regExp, '');
  const length: number = textForTest.length;
  for (let i:number = 0; i < length / 2; i++) {
    if (textForTest[i] !== textForTest[length - 1 - i]) return false
  }
  return true;
}
// console.log(palindromeTest("A man, a plan, a canal. Panamas")); //false
// console.log(palindromeTest("A man, a plan, a canal. Panama")); //true
// console.log(palindromeTest("Апа")); //true
// console.log(palindromeTest("Апав")); //false