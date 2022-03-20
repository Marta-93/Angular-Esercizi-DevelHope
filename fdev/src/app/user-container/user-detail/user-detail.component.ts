import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { Job } from 'src/app/models/User';
import { Gender } from 'src/app/models/User';

@Component({
  selector: 'fdev-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  users:User[]=
  [
    {
      id: 3487,
      name: 'Mario',
      surname: 'Rossi',
      age: 30,
      dateOfBirth: '1995-14-12',
      address: {
        city: 'Roma',
        street: 'Via roma 10',
        postalCode: '00100'
      },
      role: Job.staff,
      username: 'MarioRossi80',
      profilePhotoUrl: '../../../assets/gatto.jpg',
      gender: Gender.male,
      companies: [
        {
          id: 148979,
          name: 'Develhope',
          description: 'La migliore',
          location: {
            city: 'Palermo',
            street: 'Via Libertà 58',
            postalCode: '90139'
          }
        },
        {
          id: 123123,
          name: 'Apple',
          description: 'E insomma...',
          location: {
            city: 'Cupertino',
            street: 'One Apple Park Way',
            postalCode: '95014'
          }
        }
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}