# 🎯 CTSE Microservices Application – Cloud-Native Architecture

EduRookie-an-educational-platform

EduRookie, an educational platform designed exclusively for web-based access, catering to learners, course instructors, and administrators. EduRookie will offer a comprehensive selection of courses across various disciplines, allowing users to browse, enroll, access course materials, and track progress seamlessly through a user-friendly web interface. This report outlines the architectural design, implementation details, and key functionalities of EduRookie's web-based educational platform.
EduRookie focuses on providing an intuitive and accessible web interface where learners can explore courses, enroll in multiple offerings simultaneously, and monitor their learning journey. Course instructors will have tools to manage course content, including lecture notes, videos, and quizzes, while administrators oversee course approval, payment integration, and financial transactions related to enrollments.

This project is a cloud-native microservices-based application deployed using **Google Cloud Run**. It includes multiple services that are containerized, CI/CD automated, and secured using DevSecOps best practices.

---

## 📦 Microservices Overview

| Service                | Description                             |
| ---------------------- | --------------------------------------- |
| `gateway`              | API Gateway – routes traffic to backend |
| `user-service`         | Manages user authentication & profiles  |
| `course-service`       | Handles course creation & management    |
| `learner-service`      | Tracks learner progress                 |
| `payment-service`      | Integrates with Stripe for payments     |
| `notification-service` | Sends email notifications               |
| `frontend`             | React-based web UI                      |

---

## 🚀 Live URLs

| Service                | Cloud Run URL                                                 |
| ---------------------- | ------------------------------------------------------------- |
| `gateway`              | https://gateway-965928461642.us-central1.run.app              |
| `user-service`         | https://user-service-965928461642.us-central1.run.app         |
| `course-service`       | https://course-service-965928461642.us-central1.run.app       |
| `learner-service`      | https://learner-service-965928461642.us-central1.run.app      |
| `payment-service`      | https://payment-service-965928461642.us-central1.run.app      |
| `notification-service` | https://notification-service-965928461642.us-central1.run.app |
| `frontend`             | https://frontend-965928461642.us-central1.run.app             |

---

## 🧠 Architecture

Each microservice is deployed as a separate **Cloud Run** service using Docker containers. The architecture ensures scalability, resilience, and modular development.

![Architecture Diagram](/Resources/Architecture_Diagram.jpg)

---

## 🛠️ Technologies Used

- **Frontend**: React + Tailwind CSS
- **Backend**: Node.js (Express)
- **Database**: MongoDB Atlas
- **Authentication**: JWT
- **Deployment**: Google Cloud Run
- **CI/CD**: GitHub Actions
- **Containerization**: Docker
- **Monitoring & Rollback**: Cloud Run Probes
- **Security**: IAM, Snyk
- **Code Quality**: SonarCloud

---

## 🔄 CI/CD Pipeline (GitHub Actions)

- ✅ `build-and-test`: Installs dependencies and prepares services
- ✅ `sonarcloud-analysis`: Runs static code quality checks
- ✅ `snyk-security-scan`: Detects known vulnerabilities
- ✅ `docker-build-and-push`: Pushes to Artifact Registry
- ✅ `deploy`: Deploys to Cloud Run with rollback & health checks

---

## 🛡️ DevSecOps and Security

- ✅ **IAM roles**: Least-privilege service account
- ✅ **Cloud Run permissions**: Per service
- ✅ **Secrets management**: GitHub Secrets & environment variables
- ✅ **Health checks**: Cloud Run startup probes
- ✅ **Rollback**: Automatic if health check fails
- ✅ **SAST**: SonarCloud + Snyk integration

---

## 📊 Reporting

- ✅ SonarCloud Reports: Code smells, bugs, maintainability
- ✅ Test coverage: Generated and uploaded via GitHub Actions

---

## 🧪 Run Locally

```bash
# Run user-service
cd user-service
npm install
npm run dev
```
