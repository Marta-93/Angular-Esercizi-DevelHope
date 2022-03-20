export enum Gender {male='male', female='female', other='other'};
export enum Job {staff='staff', student='student', manager='manager', admin= 'admin'};

export interface User {
  id: number,
  name: string,
  surname: string,
  age: number,
  dateOfBirth: string,
  address: {
    city: string,
    street: string,
    postalCode: string
  },
  role: Job,
  username: string,
  profilePhotoUrl: string,
  companies: [ {
    id: number,
    name: string,
    description: string,
      location: {
      city: string,
      street: string,
      postalCode: string
      }
    },
    {
      id: number,
      name: string,
      description: string,
      location: {
        city: string,
        street: string,
        postalCode: string
      }
    }
	],
  gender: Gender
}