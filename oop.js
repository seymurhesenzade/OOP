//! Burada bir Animal class-i yaradiriq ve buraya constructor adli deyisen elave edib,
//!buraya Animalin xususiyyetlerini elave edirik.Ve asagidsa Dog class-i yaradib Animal
//! classinin xususiyyetlerini buraya menimsedirik.

// class Animal {
//   constructor(name, birthDate, gender) {
//     this.name = name;
//     this.birthDate = birthDate;
//     this.gender = gender;
//     this.age = this.getAge();
//   }
//   getAge() {
//     return new Date().getFullYear() - this.birthDate;
//   }
// }

// class Dog extends Animal {
//   constructor(name, birthDate, gender, country, color) {
//     super(name, birthDate, gender);
//     this.country = country;
//     this.color = color;
//   }
// }

// const Dog1 = new Dog("Oscar", 2020, "male", "America", "gray");
// console.table(Dog1);

// ------------------------------------------------------------------------------------------

//! Asagida da bir Human class-i acdim ve buraya xususiyyetler verdim daha sonra asagida bir 
//! User adinda class daha acdim ve buraya oz xususiyyetlerimi qeyd etdim.Ve konsola yazdirdim.




// class Human {
//   constructor(name, surname, birthDate, gender, nationality) {
//     this.name = name;
//     this.surname = surname;
//     this.gender = gender;
//     this.nationality = nationality;
//     this.birthDate=birthDate;
//     this.age = this.getAge()
//   }
//   getFullName() {
//     `${this.name}  ${this.surname}`;
//   }
//   getAge(){
//     return new Date().getFullYear() - this.birthDate;
//   }
// }

// class User extends Human {
//   constructor(
//     name,
//     surname,
//     birthDate,
    
//     gender,
//     nationality,
//     userName,
//     email,
//     password,
//     bio
//   ) {
//     super(name, surname, birthDate, gender, nationality,);
//     this.userName = userName;
//     this.email = email;
//     this.password = password;
//     if (password.length < 5) {
//       window.alert("Simvol sayi azdir");
//     } else {
//       this.password = password;
//     }

//     this.bio = bio;
//     if (bio.length > 30) {
//       window.aler("30-dan artiq simvol daxil etmek olmaz!");
//     } else {
//       this.bio = bio;
//     }
//   }

//   getFullName() {
//     `${this.name}  ${this.surname}`;
//   }

//   changePassword(currPass, newPass) {
//     if ((this.password = currPass)) {
//       if (currPass === newPass) {
//         window.alert("Zehmet olmasa yeni sifre daxil edin. ");
//       } else {
//         this.password = newPass;
//       }
//     }
//   }
// }
// const User1 = new User ("Seymur","Hesenzade",2003,"male","Azerbaijan","seymur21",
// "hasanzadeseymur21@gmail.com","seymur123","Sizinle menem Seymur Hasanzada")
// console.table(User1)

//-------------------------------------------------------------------------------------------







