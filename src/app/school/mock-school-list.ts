import { School } from './models/school.model';

export const schools: School[] = [      

    {
        id: 1,  
        name: 'Greenwood High School',
        address: '123 Elm Street, Springfield',
        zipCode: '12345',
        city: 'Springfield',
        locationState: 'IL',
        country: 'USA',
        phone: '555-1234',
        email: 'test@gmail.com',
        website: 'www.greenwoodhigh.edu',
        principalId: 1,
        createdAt: new Date('2023-01-01'),
        updatedAt: new Date('2023-01-01'),
        isActive: true,
        description: 'A prestigious school known for its academic excellence.',
        logoUrl: 'https://example.com/logo.png',    
        schoolType: 'Public',
        numberOfStudents: 500,
        numberOfTeachers: 30,
        establishedYear: 1990,
        facilities: ['Library', 'Science Lab', 'Sports Ground'],
        
    },
    {
        id: 2,
        name: 'Riverdale Academy',
        address: '456 Oak Avenue, Riverdale',
        zipCode: '67890',
        city: 'Riverdale',
        locationState: 'CA',
        country: 'USA',
        phone: '555-5678',
        email: 'test@gmail.com',
        website: 'www.riverdaleacademy.edu',
        principalId: 2,
        createdAt: new Date('2023-01-01'),
        updatedAt: new Date('2023-01-01'),
        isActive: true,
        description: 'An elite academy focusing on holistic education.',
        logoUrl: 'https://example.com/riverdale-logo.png',
        schoolType: 'Private',
        numberOfStudents: 300,  
        numberOfTeachers: 20,
        establishedYear: 2000,
        facilities: ['Library', 'Art Studio', 'Sports Complex'],
    },
]
    



