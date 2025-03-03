# 𓋹 ZnaharApi

## 🖋 Features

## 🏗 Architecture
The application follows **Clean Architecture** principles, organized into distinct layers to separate concerns and improve scalability.
  
### Server-side
- **Languages: JavaScript**
- **Technologies:** Node.js, Express.js
- **Database:** MySql
- **Architecture Pattern:** Clean Architecture (Onion Architecture)

#### **Domain Layer**: Contains core entities and business rules specific to grain production and resource management.
#### **Application Layer**: Manages the business logic, using **CQRS** to separate reads and writes, and **MediatR** for a decoupled command and query flow. **FluentValidation** handles validation to ensure consistent data input.
#### **Infrastructure Layer**: Provides database access (SQL Server, SQLite for development) and integrates external services like **Microsoft Identity Server** for authentication.
#### **WebAPI Layer**: Exposes RESTful endpoints to connect the frontend and backend, with **Swagger** for easy API documentation.

## 🗺 Roadmap
- Developing the WebAPI and UI
- Developing unit and integration tests
- Expanding support to mobile devices

## 💼 Contributing

1. Fork the repository
2. Create a new branch for your feature/fix (git checkout -b my-new-feature)
3. Commit your changes (git commit -am 'Add some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create a new Pull Request
