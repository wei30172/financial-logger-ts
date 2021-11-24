import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';
import { ListTemplates } from './classes/ListTemplate.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement
// input
const type = document.querySelector('#type') as HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplates(ul)

form.addEventListener('submit', (e: Event) => {
  e.preventDefault()

  let values: [string, string, number] // tuples
  values = [tofrom.value, details.value, amount.valueAsNumber]

  let doc: HasFormatter
  if (type.value === 'invoice') {
    doc = new Invoice(...values)
    list.render(doc, type.value, 'star');
  } else {
    doc = new Payment(...values)
    list.render(doc, type.value, 'end');
  }
})


// GENERICS

// const addUID = (obj: object) => {
//   let uid = Math.floor(Math.random() * 100);
//   return {...obj, uid};
// }

// const addUID = <T extends object>(obj: T) => {
//   let uid = Math.floor(Math.random() * 100);
//   return {...obj, uid};
// }

// const addUID = <T extends {name: string}>(obj: T) => {
//   let uid = Math.floor(Math.random() * 100);
//   return {...obj, uid};
// }

// with interfaces
// interface Resource<T> {
//   uid: number;
//   resourceName: string;
//   data: T;
// }

// const docThree: Resource<object> = {
//   uid: 1, 
//   resourceName: 'person', 
//   data: { name: 'claire }
// };

// ENUMS
// enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR };

// interface Resource<T> {
//   uid: number;
//   resourceType: ResourceType;
//   data: T;
// }

// const docOne: Resource<object> = {
//   uid: 1,
//   resourceType: ResourceType.BOOK,
//   data: { title: 'name of the wind' }
// }

// const docTwo: Resource<object> = {
//   uid: 10,
//   resourceType: ResourceType.DIRECTOR,
//   data: { title: 'name of the wind' }
// }