import { School } from './models/school.model';

export const schools: School[] = [      

    {
        id: 1,  
        name: 'Greenwood High School',
        streetAndNumber: '123 Elm Street',
        zipCode: '12345',
        countryId: 1,
        contactPhone: '123-456-7890',
        contactEmail: 'test@gmail.com',
        website: 'www.greenwoodhigh.edu',
        logoUrl: 'https://example.com/logo.png',   
        schoolType: 'Public',
        description: 'A prestigious school known for its academic excellence.',
        numberOfStudents: 500,
        numberOfTeachers: 30,
        establishedYear: 1990,
        facilities: ['Library', 'Science Lab', 'Sports Ground'],
        socialMedia: ['X', 'Facebook', 'Instagram'],
    }
    
]    



