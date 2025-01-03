# Project Name  

Empowering Communities Against Injustice  

## Overview  

This project is designed to enable organizations and individuals to come together and combat social injustices. The platform allows users to create and participate in events, register for causes, and make donations, providing a collaborative environment for driving meaningful change.  

## Features  

- **User Authentication**: Secure login and registration for users, with roles such as Admin, Organizer, and User.  
- **Event Management**: Organizers can create and manage events, while users can register for events.  
- **Donations**: Users can donate to specific events with tracking of donation details.  
- **Role-Based Dashboards**: Different dashboards for users and organizers to streamline their activities.  
- **Responsive Design**: The platform is fully responsive and optimized for devices of all sizes.  

## Tech Stack  

- **Frontend**: Next.js, Tailwind CSS, TypeScript  
- **Backend**: Prisma, PostgreSQL, NextAuth.js  
- **Additional Tools**: Supabase (for real-time capabilities), Stripe (for payment processing)  

## Installation  

Follow these steps to set up the project locally:  

1. **Clone the repository**:  
   ```bash  
   git clone https://github.com/javeria2108/Solidarity-Forum.git  
   cd Solidarity-Forum  
   ```  

2. **Install dependencies**:  
   ```bash  
   npm install  
   ```  

3. **Set up the environment variables**:  
   Create a `.env` file in the root directory and add the required environment variables:  
   ```env  
   DATABASE_URL=your_database_url  
   NEXTAUTH_SECRET=your_nextauth_secret  
   NEXTAUTH_URL=your_nextauth_url  
   STRIPE_API_KEY=your_stripe_api_key  
   SUPABASE_URL=your_supabase_url  
   SUPABASE_KEY=your_supabase_key  
   ```  

4. **Run database migrations**:  
   ```bash  
   npx prisma migrate dev  
   ```  

5. **Start the development server**:  
   ```bash  
   npm run dev  
   ```  

6. Open the app in your browser:  
   ```
   http://localhost:3000  
   ```  

## Usage  

- **Admins**: Manage platform-wide configurations and oversee users and events.  
- **Organizers**: Create, edit, and manage events for the community.  
- **Users**: Register for events, make donations, and participate in causes.  

## Roadmap  

- Add a **Category** feature for events to improve discoverability.  
- Implement analytics dashboards for admins and organizers.  
- Integrate additional payment gateways.  
- Add localization and multi-language support.  

## Contributing  

We welcome contributions! Follow these steps to contribute:  

1. Fork the repository.  
2. Create a new branch:  
   ```bash  
   git checkout -b feature-name  
   ```  
3. Commit your changes:  
   ```bash  
   git commit -m "Add feature-name"  
   ```  
4. Push the branch to your fork:  
   ```bash  
   git push origin feature-name  
   ```  
5. Open a pull request.  

## License  

This project is licensed under the [MIT License](LICENSE).  

---  

For questions or suggestions, feel free to reach out or open an issue in the repository.
