from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Adi Portfolio API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/health")
def health_check():
    return {"status": "healthy", "message": "Portfolio API is running"}

@app.get("/api/info")
def get_info():
    return {
        "name": "Abdullah Adi Prabowo",
        "title": "Software Quality Assurance Engineer",
        "location": "Jakarta, Indonesia",
        "experience_years": 5
    }
