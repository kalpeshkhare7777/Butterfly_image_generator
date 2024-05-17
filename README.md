# Butterfly Image Generator

This is a simple web application for generating random butterfly images using Flask and FastAPI.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Python installed on your system to run this project.

### Installing and Running the Application

```bash
# Clone the repository to your local machine
git clone https://github.com/kalpeshkhare7777/Butterfly_image_generator.git

# Navigate to the project directory
cd my_project

# Install the required Python packages
pip install {"requirements"} 

# Run the Flask application
python app.py

# Run the FastAPI application
uvicorn main:app --reload
```

After running the application, open your web browser and go to hosting address to access the application.

## Important
- Internet should be connected
- Image takes 5 seconds to load after clicking the button. 
- Once image is loaded refresh has to be done manually (i tried but when done autorefresh image loading has some issue)
- if image is not loading ensure server address of main.py(FastAPI) and address of script matches


## Built With

- [Flask](https://flask.palletsprojects.com/) - Web framework for Python.
- [FastAPI](https://fastapi.tiangolo.com/) - Web framework for building APIs with Python.
- [Bootstrap](https://getbootstrap.com/) - Frontend framework for styling.

## Authors

- KALPESH KHARE 

## Reason for 2 separate backend servers

# Separation of Backend Servers

In this project, I have chosen to use two separate servers for the backend, Flask for main backend for the frontend and FastAPI for model deployment. Here's why:

- **Secrecy of Model**:
  - Keeping the model logic on a separate server ensures that its implementation details remain hidden from the client.
  - Prevents potential malicious actors from reverse-engineering or copying the model, protecting intellectual property.

- **Performance Optimization**:
  - Separating the frontend and model logic allows each server to focus on its specific tasks, leading to improved performance.
  - The frontend server can prioritize delivering a smooth user experience without being burdened by heavy computational tasks.

- **Scalability**:
  - By dedicating a server to handle the computational workload of the model, we can scale each component independently based on its specific requirements.
  - Ensures that the frontend remains responsive even under heavy traffic loads, contributing to overall system scalability.

- **Reduction in Latency**:
  - Offloading computational tasks to a dedicated server can reduce latency by ensuring quicker response times for user requests.
  - Improves user experience by minimizing waiting times and delays in processing requests.


